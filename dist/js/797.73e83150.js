"use strict";(self["webpackChunkvuejs_essential"]=self["webpackChunkvuejs_essential"]||[]).push([[797],{3797:function(a,t,s){s.r(t),s.d(t,{default:function(){return o}});var e=function(){var a=this,t=a._self._c;return t("div",{staticClass:"blog-container"},[t("div",{staticClass:"blog-pages"},[t("router-view"),t("div",{staticClass:"col-md-3 main-col pull-left"},[t("div",{staticClass:"panel panel-default corner-radius"},[t("div",{staticClass:"panel-body text-center topic-author-box blog-info"},[t("div",{staticClass:"image blog-cover"},[t("router-link",{attrs:{to:`/my/${a.userId}`}},[t("img",{staticClass:"avatar-112 avatar img-thumbnail",attrs:{src:a.userAvatar}})])],1),t("div",{staticClass:"blog-name"},[t("h4",[t("router-link",{attrs:{to:`/my/${a.userId}`}},[a._v(a._s(a.userName)+" 的专栏")])],1)]),t("hr"),t("router-link",{attrs:{to:`/my/${a.userId}`}},[t("li",{staticClass:"list-group-item"},[t("i",{staticClass:"text-md fa fa-list-ul"}),a._v(" 专栏文章（"+a._s(a.articleNum)+"） ")])])],1)])])],1)])},r=[],i=s(629),u=s(399),l={name:"Column",data(){return{userName:"",userAvatar:"",articles:[],articleNum:"",userId:0}},created(){this.userId=this.$route.params.userId||0},computed:{...(0,i.rn)(["user"])},beforeRouteEnter(a,t,s){s((t=>{t.setDataByParams(a.params)}))},watch:{$route(a){this.setDataByParams(a.params)}},methods:{setDataByParams(a){const t=a.userId,s=a.articleId;if(s){let a={include:"user"};(0,u.BN)(s,a).then((a=>{this.userId=a.data.user.id,this.userName=a.data.user.name,this.userAvatar=a.data.user.avatar,this.articleNum=a.data.user.count_topic}))}else t&&(0,u.PR)(t).then((a=>{this.userId=a.data.id,this.userName=a.data.name,this.userAvatar=a.data.avatar,this.articleNum=a.data.count_topic}))}}},n=l,c=s(1001),d=(0,c.Z)(n,e,r,!1,null,"6a2359a9",null),o=d.exports}}]);
//# sourceMappingURL=797.73e83150.js.map