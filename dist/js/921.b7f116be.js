"use strict";(self["webpackChunkvuejs_essential"]=self["webpackChunkvuejs_essential"]||[]).push([[921],{1921:function(t,e,a){a.r(e),a.d(e,{default:function(){return f}});var s=function(){var t=this,e=t._self._c;return e("div",[e("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}}),e("div",{staticClass:"col-md-9 topics-index main-col"},[e("div",{staticClass:"panel panel-default"},[e("div",{staticClass:"panel-heading"},[e("ul",{staticClass:"list-inline topic-filter"},t._l(t.filters,(function(a){return e("li",[e("router-link",{directives:[{name:"title",rawName:"v-title",value:a.title,expression:"item.title"}],class:{active:t.filter===a.filter},attrs:{to:`/topics?categoryId=${t.currentCategoryId}&filter=${a.filter}`}},[t._v(t._s(a.name))])],1)})),0),e("div",{staticClass:"clearfix"})]),e("div",{staticClass:"panel-body remove-padding-horizontal"},[e("ul",{staticClass:"list-group row topic-list"},t._l(t.articles,(function(a){return e("li",{key:a.id,staticClass:"list-group-item"},[e("router-link",{staticClass:"reply_count_area hidden-xs pull-right",attrs:{to:`/articles/${a.id}/content`,tag:"div"}},[e("div",{staticClass:"count_set"},[e("span",{staticClass:"count_of_votes",attrs:{title:"投票数"}},[t._v(t._s(a.like_count?a.like_count:0))]),e("span",{staticClass:"count_seperator"},[t._v("/")]),e("span",{staticClass:"count_of_replies",attrs:{title:"回复数"}},[t._v(t._s(a.reply_count?a.reply_count:0))]),e("span",{staticClass:"count_seperator"},[t._v("|")]),e("abbr",{staticClass:"timeago"},[t._v(t._s(t._f("moment")(a.updated_at,"from")))])])]),e("router-link",{staticClass:"avatar pull-left",attrs:{to:`/my/${a.user_id}`,tag:"div"}},[e("img",{staticClass:"media-object img-thumbnail avatar avatar-middle",attrs:{src:a.user.avatar}})]),e("router-link",{staticClass:"infos",attrs:{to:`/articles/${a.id}/content`,tag:"div"}},[e("div",{staticClass:"media-heading"},[t._v(" "+t._s(a.title)+" ")])])],1)})),0)]),e("div",{staticClass:"panel-footer text-right remove-padding-horizontal pager-footer"},[e("Pagination",{attrs:{currentPage:t.currentPage,total:t.total,pageSize:t.pageSize,onPageChange:t.changePage}})],1)])]),e("TheSidebar")],1)},i=[],r=a(629),l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-3 side-bar"},[e("div",{staticClass:"panel panel-default corner-radius sidebar-resources"},[t._m(0),e("div",{staticClass:"panel-body"},[e("Slider",{attrs:{slides:t.slides},scopedSlots:t._u([{key:"default",fn:function({currentSlide:t}){return[e("a",{attrs:{href:t.link,target:"_blank"}},[e("img",{attrs:{alt:t.title,title:t.title,src:t.img}})])]}}])})],1)]),e("div",{staticClass:"panel panel-default corner-radius panel-active-users"},[t._m(1),e("div",{staticClass:"panel-body"},[e("div",{staticClass:"users-label"},t._l(t.activeUsers,(function(a,s){return e("router-link",{key:s,staticClass:"users-label-item",attrs:{to:`/my/${a.id}`}},[e("img",{staticClass:"avatar-small inline-block",attrs:{src:a.avatar}}),t._v(" "+t._s(a.name)+" ")])})),1)])]),e("div",{staticClass:"panel panel-default corner-radius panel-hot-topics"},[t._m(2),e("div",{staticClass:"panel-body"},[e("ul",{staticClass:"list"},t._l(t.hotArticles,(function(a,s){return e("li",[e("router-link",{attrs:{to:`/articles/${a.id}/content`}},[e("span",0===s?[t._v("🏆")]:[t._v(t._s(s+1)+".")]),t._v(" "+t._s(a.title)+" ")])],1)})),0)])]),e("div",{staticClass:"other"},[e("div",{staticClass:"panel panel-default corner-radius sidebar-resources"},[t._m(3),e("div",{staticClass:"panel-body"},[e("ul",{staticClass:"list list-group"},t._l(t.resources,(function(a,s){return e("li",{staticClass:"list-group-item"},[e("a",{attrs:{href:a.link,target:"_blank"}},[e("img",{staticClass:"media-object inline-block",attrs:{src:"https://cdn.learnku.com//uploads/communities/hIZjRRdF8oVYZy69XJnT.png!/both/44x44"}}),t._v(" "+t._s(a.title)+" ")])])})),0)])]),t._m(4)])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading text-center"},[e("h3",{staticClass:"panel-title"},[t._v("实战课程")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading text-center"},[e("h3",{staticClass:"panel-title"},[t._v("活跃用户")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading text-center"},[e("h3",{staticClass:"panel-title"},[t._v("七天内最热")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel-heading text-center"},[e("h3",{staticClass:"panel-title"},[t._v("推荐资源")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"panel panel-default corner-radius"},[e("div",{staticClass:"panel-body text-center"},[e("a",{staticStyle:{color:"#a5a5a5"},attrs:{href:"mailto:summer@yousails.com"}},[e("span",{staticStyle:{"margin-top":"7px",display:"inline-block"}},[e("i",{staticClass:"fa fa-heart",staticStyle:{color:"rgba(232, 146, 136, 0.89)"}}),t._v(" 建议反馈？请私信 jingkun ")])])])])}],c=a(399),o={name:"Sidebar",data(){return{slides:[{title:"《Laravel 入门教程 - 从零到部署上线》",img:"https://cdn.learnku.com/uploads/banners/YpxKKNlSPdmwotO3u8An.jpg",link:"https://learnku.com/laravel/t/3383/laravel-the-first-chinese-new-book-laravel-tutorial"},{title:"《Laravel 进阶课程 - 从零构建论坛系统》",img:"https://cdn.learnku.com/uploads/banners/iNanVVOXdnYQ6jRfMdWE.png",link:"https://learnku.com/laravel/t/6592"},{title:"《Laravel 教程实战高级 - 构架 API 服务器》",img:"https://cdn.learnku.com/uploads/banners/tEd4GxhMp6VMh9e0hrUH.jpg",link:"https://learnku.com/laravel/t/7657"}],activeUsers:[],hotArticles:[],resources:[{title:"Vue 官方教程",link:"https://learnku.com/vuejs/v2/guide/"},{title:"Vuex 官方教程",link:"https://vuex.vuejs.org/zh/"},{title:"Vue Router 官方教程",link:"https://router.vuejs.org/zh-cn/"},{title:"Vue Loader 官方教程",link:"https://vue-loader.vuejs.org/zh-cn/"},{title:"Vue 特有代码的风格指南",link:"https://learnku.com/vuejs/v2/style-guide/"}]}},created(){(0,c.k1)().then((t=>{this.activeUsers=t.data.data})),(0,c.wU)().then((t=>{console.log(t.data),this.hotArticles=t.data}))}},u=o,d=a(1001),h=(0,d.Z)(u,l,n,!1,null,"5fd63d84",null),p=h.exports,g={name:"Home",components:{TheSidebar:p},data(){return{msg:"",msgType:"",msgShow:!1,articles:[],filter:"default",filters:[{filter:"default",name:"活跃",title:"最后回复排序"},{filter:"recent",name:"最近",title:"发布时间排序"}],total:0,pageSize:20}},beforeRouteEnter(t,e,a){const s=e.name,i=t.params.logout;a((e=>{if(e.$store.state.auth)switch(s){case"Register":e.showMsg("注册成功");break;case"Login":e.showMsg("登录成功");break}else i&&e.showMsg("操作成功");e.setDataByFilter(t.query.filter)}))},created(){let t={page:this.currentPage,include:"user,category,likeUser"};this.currentCategoryId&&(t["filter[category_id]"]=this.currentCategoryId),(0,c.BB)(t).then((t=>{this.articles=t.data.data,this.total=t.data.meta.total}))},computed:{...(0,r.rn)(["auth","user"]),currentPage(){return parseInt(this.$route.query.page)||1},currentCategoryId(){return parseInt(this.$route.query.categoryId)||0}},watch:{auth(t){t||this.showMsg("操作成功")},$route(t){this.setDataByFilter(t.query.filter)},currentCategoryId(){this.setDataByFilter()}},methods:{showMsg(t,e="success"){this.msg=t,this.msgType=e,this.msgShow=!0},setDataByFilter(t="default"){let e={page:this.currentPage,include:"user,category,likeUser"};this.currentCategoryId&&(e["filter[category_id]"]=this.currentCategoryId),"default"!=t&&(e["filter[withOrder]"]=t),(0,c.BB)(e).then((t=>{this.articles=t.data.data,this.total=t.data.meta.total})),this.filter=t},changePage(t){this.$router.push({query:{...this.$route.query,page:t}})}}},v=g,m=(0,d.Z)(v,s,i,!1,null,"6e5399d4",null),f=m.exports}}]);
//# sourceMappingURL=921.b7f116be.js.map