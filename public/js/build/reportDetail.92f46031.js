import{R as o}from"./ReportDetail.e430db44.js";import{n as p}from"./app.f8a6fa5e.js";import"./vuex.cc7cb26e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.7b5830c7.js";import"./@traptitech.4f5fb92a.js";import"./katex.8068bc0b.js";import"./localforage.dae0aa5a.js";import"./markdown-it.34483999.js";import"./entities.797c3e49.js";import"./uc.micro.3245408e.js";import"./mdurl.ddaf799d.js";import"./linkify-it.43898b73.js";import"./punycode.32c740ed.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.da9c4dc7.js";import"./axios.6ec123f8.js";import"./le5le-store.bd86c9e9.js";import"./openpgp_hi.15f91b1d.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.facc05aa.js";import"./clipboard.907979fd.js";import"./view-design-hi.afe77d1e.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.aaa0fd6a.js";import"./sortablejs.4880fe6b.js";import"./vue-resize-observer.2ab4768b.js";import"./element-sea.74fd8f4e.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e0279f38.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e0445182.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var a=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"electron-report"},[e("PageTitle",{attrs:{title:t.$L("\u62A5\u544A\u8BE6\u60C5")}}),e("ReportDetail",{attrs:{data:t.detailData}})],1)},m=[];const s={components:{ReportDetail:o},data(){return{detailData:{}}},computed:{reportDetailId(){const{reportDetailId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)}},watch:{reportDetailId:{handler(){this.getDetail()},immediate:!0}},methods:{getDetail(){this.reportDetailId<=0||this.$store.dispatch("call",{url:"report/detail",data:{id:this.reportDetailId}}).then(({data:t})=>{this.detailData=t}).catch(({msg:t})=>{$A.messageError(t)})}}},i={};var l=p(s,a,m,!1,n,"76126c11",null,null);function n(t){for(let r in i)this[r]=i[r]}var U=function(){return l.exports}();export{U as default};
