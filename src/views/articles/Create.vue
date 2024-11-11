<template>
    <div class="blog-container">
        <div class="blog-pages">
            <div class="col-md-12 panel">
                <div class="panel-body">
                    <h2 class="text-center">{{ articleId ? '编辑文章' : '创作文章' }}</h2>
                    <hr>
                    <div data-validator-form>
                        <div class="form-group">
                            <input v-model.trim="title" v-validator:blur.required="{ title: '标题' }" type="text"
                                   class="form-control" placeholder="请填写标题" @input="saveTitle">
                        </div>
                        <div class="form-group">
<!--                            <label class="col-sm-2 control-label">分类</label>-->
<!--                            <div class="col-sm-6">-->
                                <select v-model="category_id" class="form-control">
                                    <option v-show="item.id" :value="item.id" v-for="(item, index) in navList" :key="item.id">{{item.name}}</option>
                                </select>
<!--                            </div>-->
                        </div>
                        <div class="form-group">
                            <textarea id="editor"></textarea>
                        </div>
                        <br>
                        <div class="form-group">
                            <button class="btn btn-primary" type="submit" @click="post">发 布</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SimpleMDE from 'simplemde'
    import hljs from 'highlight.js'
    import ls from '@/utils/localStorage'
    import {createTopic, editTopic} from "@/api/user";
    import {getTopic} from "@/api/topic";

    import router from "../../router";
    import {mapState} from "vuex";

    window.hljs = hljs

    export default {
        name: 'Create',
        data() {
            return {
                title: '', // 文章标题
                content: '', // 文章内容
                articleId: undefined, // 文章 ID
                category_id: 1, // 分类 ID,
            }
        },
        // 添加计算属性
        computed: {
            // 将仓库的以下状态混入到计算属性之中
            ...mapState([
                'user',
                'navList'
            ])
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.setArticleId(vm.$route.params.articleId)
            })
        },
        beforeRouteLeave(to, from, next) {
            this.clearData()
            next()
        },
        watch: {
            '$route'(to) {
                this.clearData()
                this.setArticleId(to.params.articleId)
            }
        },
        mounted() {
            const simplemde = new SimpleMDE({
                element: document.querySelector('#editor'),
                placeholder: '请使用 Markdown 格式书写 ;-)，代码片段黏贴时请注意使用高亮语法。',
                spellChecker: false,
                autoDownloadFontAwesome: false,
                autosave: {
                    enabled: true,
                    uniqueId: 'vuejs-essential'
                },
                renderingConfig: {
                    codeSyntaxHighlighting: true
                }
            })

            simplemde.codemirror.on('change', () => {
                this.content = simplemde.value()
            })

            this.simplemde = simplemde
        },
        methods: {
            saveTitle() {
                ls.setItem('smde_title', this.title)
            },
            fillContent(articleId) {
                const simplemde = this.simplemde
                const smde_title = ls.getItem('smde_title')

                if (articleId !== undefined) {
                    // 说明有则是编辑
                    // const article = this.$store.getters.getArticleById(articleId)
                    getTopic(articleId).then((res) => {
                        const article = res.data
                        if (article) {
                            // const {title, content} = article
                            if (article.user_id != this.user.id) {
                                // 不是本人 跳转到首页
                                router.push('/')
                            }
                            this.title = article.title
                            this.content = simplemde.value() || article.body
                            simplemde.value(this.content)
                        }
                    })
                } else {
                    this.title = smde_title
                    this.content = simplemde.value()
                }
            },
            post() {
                const title = this.title
                const content = this.content
                const category_id = this.category_id

                if (title !== '' && content.trim() !== '' && category_id !== '') {
                    const article = {
                        title,
                        body: content,
                        category_id: category_id
                    }
                    const articleId = this.articleId
                    if (articleId) {
                        // 有则是修改
                        editTopic(articleId, article).then((res) => {
                            router.push({ name: 'Content', params: { articleId, showMsg: true } })
                        })
                    } else {
                        // 没有则是新增
                        createTopic(article).then((res) => {
                            let articleId = res.data.id
                            this.clearData()
                            // 创建成功 跳转到详情页
                            router.push({ name: 'Content', params: { articleId, showMsg: true } })
                        })
                    }
                    // this.$store.dispatch('post', {article, articleId: this.articleId})
                }
            },
            clearData() {
                this.title = ''
                ls.removeItem('smde_title')
                this.simplemde.value('')
                this.simplemde.clearAutosavedValue()
            },
            setArticleId(articleId) {
                const localArticleId = ls.getItem('articleId')

                if (articleId !== undefined && !(articleId === localArticleId)) {
                    this.clearData()
                }

                this.articleId = articleId
                this.fillContent(articleId)
                ls.setItem('articleId', articleId)
            }
        }
    }
</script>

<style scoped>
    .blog-container {
        max-width: 980px;
        margin: 0 auto;
        margin-top: 20px;
    }

    textarea {
        height: 200px;
    }
</style>
