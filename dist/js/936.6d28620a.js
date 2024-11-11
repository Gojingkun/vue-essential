"use strict";(self["webpackChunkvuejs_essential"]=self["webpackChunkvuejs_essential"]||[]).push([[936],{8936:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4 col-md-offset-4 floating-box"},[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(s){t.msgShow=s}}}),s("div",{staticClass:"panel panel-default"},[t._m(0),s("div",{staticClass:"panel-body",attrs:{"data-validator-form":""}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("用户名")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"用户名"},expression:"{ title: '用户名' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"请填写用户名"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"control-label"},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}},{name:"validator",rawName:"v-validator.required",value:{title:"密码"},expression:"{ title: '密码' }",modifiers:{required:!0}}],staticClass:"form-control",attrs:{id:"password",type:"password",placeholder:"请填写密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}})]),s("br"),s("button",{staticClass:"btn btn-lg btn-success btn-block",attrs:{type:"submit"},on:{click:t.login}},[s("i",{staticClass:"fa fa-btn fa-sign-in"}),t._v(" 登录 ")])])])],1)])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"panel-heading"},[s("h3",{staticClass:"panel-title"},[t._v("请登录")])])}],r=e(9895),o=e(2900),n=e(1333),l={name:"Login",data(){return{username:"",password:"",msg:"",msgType:"",msgShow:!1}},methods:{login(t){setTimeout((()=>{const s="submit"===t.target.type?t.target:t.target.parentElement;s.canSubmit&&this.submit()}))},submit(){const t={username:this.username,password:this.password};(0,r.x)(t).then((t=>{this.$store.dispatch("login",t.data),(0,o.ts)({}).then((t=>{this.$store.dispatch("getUser",t.data),n.Z.push("/")}))})).catch((t=>{this.showMsg("用户名或密码不正确")}))},showMsg(t,s="warning"){this.msg=t,this.msgType=s,this.msgShow=!1,this.$nextTick((()=>{this.msgShow=!0}))}}},u=l,m=e(1001),d=(0,m.Z)(u,a,i,!1,null,"4db28050",null),c=d.exports},9895:function(t,s,e){e.d(s,{x:function(){return r},z:function(){return i}});var a=e(4471);const i=t=>(0,a.Z)({method:"POST",url:"/h5users",data:t}),r=t=>(0,a.Z)({method:"POST",url:"/web/authorizations",data:t})}}]);
//# sourceMappingURL=936.6d28620a.js.map