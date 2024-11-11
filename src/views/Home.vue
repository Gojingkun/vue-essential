<template>
    <div>
        <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
        <!-- 帖子列表 -->
        <div class="col-md-9 topics-index main-col">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <ul class="list-inline topic-filter">
                        <li v-for="item in filters">
                            <router-link v-title="item.title" :class="{ active: filter === item.filter }" :to="`/topics?categoryId=${currentCategoryId}&filter=${item.filter}`">{{ item.name }}</router-link>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>

                <div class="panel-body remove-padding-horizontal">
                    <ul class="list-group row topic-list">
                        <li v-for="article in articles" :key="article.id" class="list-group-item">
                            <router-link :to="`/articles/${article.id}/content`" tag="div" class="reply_count_area hidden-xs pull-right">
                                <div class="count_set">
                                    <span class="count_of_votes" title="投票数">{{ article.like_count ? article.like_count : 0 }}</span>
                                    <span class="count_seperator">/</span>
                                    <span class="count_of_replies" title="回复数">{{ article.reply_count ? article.reply_count : 0 }}</span>
                                    <span class="count_seperator">|</span>
                                    <abbr class="timeago">{{ article.updated_at | moment('from') }}</abbr>
                                </div>
                            </router-link>
                            <router-link :to="`/my/${article.user_id}`" tag="div" class="avatar pull-left">
                                <img :src="article.user.avatar" class="media-object img-thumbnail avatar avatar-middle">
                            </router-link>
                            <router-link :to="`/articles/${article.id}/content`" tag="div" class="infos">
                                <div class="media-heading">
                                    {{ article.title }}
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <!-- 分页组件 -->
                <div class="panel-footer text-right remove-padding-horizontal pager-footer">
                    <Pagination :currentPage="currentPage" :total="total" :pageSize="pageSize" :onPageChange="changePage" />
                </div>
            </div>
        </div>
        <!-- 侧栏 -->
        <TheSidebar/>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    // 引入 TheSidebar.vue 的默认值
    import TheSidebar from '@/components/layouts/TheSidebar'
    import { getTopics } from '@/api/topic.js'

    export default {
        name: 'Home',
        components: {
            // 局部注册 TheSidebar
            TheSidebar
        },
        data() {
            return {
                msg: '',
                msgType: '',
                msgShow: false,
                articles: [],
                filter: 'default',
                filters: [
                    { filter: 'default', name: '活跃', title: '最后回复排序'},
                    // { filter: 'excellent', name: '精华', title: '只看加精的话题'},
                    // { filter: 'vote', name: '投票', title: '点赞数排序'},
                    { filter: 'recent', name: '最近', title: '发布时间排序'},
                    // { filter: 'noreply', name: '零回复', title: '无人问津的话题'}
                ],
                total: 0, // 文章总数
                pageSize: 20, // 每页条数
            }
        },
        beforeRouteEnter(to, from, next) {
            const fromName = from.name
            const logout = to.params.logout
            next(vm => {
                if (vm.$store.state.auth) {
                    switch (fromName) {
                        case 'Register':
                            vm.showMsg('注册成功')
                            break
                        case 'Login':
                            vm.showMsg('登录成功')
                            break
                    }
                } else if (logout) {
                    vm.showMsg('操作成功')
                }

                vm.setDataByFilter(to.query.filter)
            })
        },
        created() {
            let params = {
                page: this.currentPage,
                include: 'user,category,likeUser'
            }
            // 获取当前分类
            if (this.currentCategoryId) {
                params['filter[category_id]'] = this.currentCategoryId
            }
            getTopics(params).then((res)=>{
                this.articles = res.data.data
                this.total = res.data.meta.total
            })
        },
        computed: {
            ...mapState([
                'auth',
                'user'
            ]),
            // 当前页，从查询参数 page 返回
            currentPage() {
                return parseInt(this.$route.query.page) || 1
            },
            // 当前分类
            currentCategoryId() {
                return parseInt(this.$route.query.categoryId) || 0
            }
        },
        watch: {
            auth(value) {
                if (!value) {
                    this.showMsg('操作成功')
                }
            },
            '$route'(to) {
                this.setDataByFilter(to.query.filter)
            },
            currentCategoryId() {
                this.setDataByFilter()
            },
        },
        methods: {
            showMsg(msg, type = 'success') {
                this.msg = msg
                this.msgType = type
                this.msgShow = true
            },
            setDataByFilter(filter = 'default') {
                let params = {
                    page: this.currentPage,
                    include: 'user,category,likeUser'
                }
                // 获取当前分类
                if (this.currentCategoryId) {
                    params['filter[category_id]'] = this.currentCategoryId
                }
                if (filter != 'default') {
                    params['filter[withOrder]'] = filter
                }
                getTopics(params).then((res)=>{
                    this.articles = res.data.data
                    this.total = res.data.meta.total
                })
                // 每页条数
                // const pageSize = this.pageSize
                // 当前页
                // const currentPage = this.currentPage
                // 过滤后的所有文章
                // const allArticles = this.$store.getters.getArticlesByFilter(filter)
                this.filter = filter
                // 文章总数
                // this.total = allArticles.length
                // 当前页的文章
                // this.articles = allArticles.slice(pageSize * (currentPage - 1), pageSize * currentPage)
            },
            // 回调，组件的当前页改变时调用
            changePage(page) {
                // 在查询参数中混入 page，并跳转到该地址
                // 混入部分等价于 Object.assign({}, this.$route.query, { page: page })
                this.$router.push({ query: { ...this.$route.query, page } })
            }
        }
    }
</script>

<style scoped>

</style>
