import{_ as o}from"./openpgp_hi.15f91b1d.js";import{I as n}from"./IFrame.4dd6cb62.js";import{n as a}from"./app.3bbb2636.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.f56491ce.js";import"./@traptitech.b72bbaf2.js";import"./katex.3c1bf5d3.js";import"./localforage.2ff6ad43.js";import"./markdown-it.6d8b0284.js";import"./entities.797c3e49.js";import"./uc.micro.3245408e.js";import"./mdurl.ddaf799d.js";import"./linkify-it.43898b73.js";import"./punycode.e2700674.js";import"./highlight.js.b91af88c.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.b71582de.js";import"./vuex.cc7cb26e.js";import"./axios.6ec123f8.js";import"./le5le-store.bd86c9e9.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.5bf49d78.js";import"./clipboard.152d4248.js";import"./view-design-hi.da5871a0.js";import"./vuedraggable.6a7e382b.js";import"./sortablejs.36894852.js";import"./vue-resize-observer.e5bfd86a.js";import"./element-sea.e8c47496.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.c9b3d7aa.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.7d64741a.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"file-preview"},[t.isPreview?e("IFrame",{staticClass:"preview-iframe",attrs:{src:t.previewUrl},on:{"on-load":t.onFrameLoad}}):t.contentDetail?[e("div",{directives:[{name:"show",rawName:"v-show",value:t.headerShow&&!["word","excel","ppt"].includes(t.file.type),expression:"headerShow && !['word', 'excel', 'ppt'].includes(file.type)"}],staticClass:"edit-header"},[e("div",{staticClass:"header-title"},[e("div",{staticClass:"title-name"},[t._v(t._s(t.$A.getFileName(t.file)))]),e("Tag",{attrs:{color:"default"}},[t._v(t._s(t.$L("\u53EA\u8BFB")))]),e("div",{staticClass:"refresh"},[t.contentLoad?e("Loading"):e("Icon",{attrs:{type:"ios-refresh"},on:{click:t.getContent}})],1)],1)]),e("div",{staticClass:"content-body"},[t.file.type=="document"?[t.contentDetail.type=="md"?e("MDPreview",{attrs:{initialValue:t.contentDetail.content}}):e("TEditor",{attrs:{value:t.contentDetail.content,height:"100%",readOnly:""}})]:t.file.type=="drawio"?e("Drawio",{ref:"myFlow",attrs:{value:t.contentDetail,title:t.file.name,readOnly:""}}):t.file.type=="mind"?e("Minder",{ref:"myMind",attrs:{value:t.contentDetail,readOnly:""}}):["code","txt"].includes(t.file.type)?e("AceEditor",{attrs:{value:t.contentDetail.content,ext:t.file.ext,readOnly:""}}):["word","excel","ppt"].includes(t.file.type)?e("OnlyOffice",{attrs:{value:t.contentDetail,code:t.code,historyId:t.historyId,documentKey:t.documentKey,readOnly:""}}):t._e()],2)]:t._e(),t.contentLoad?e("div",{staticClass:"content-load"},[e("Loading")],1):t._e()],2)},s=[];const d=()=>o(()=>import("./preview.e6116229.js"),["js/build/preview.e6116229.js","js/build/app.3bbb2636.js","js/build/app.3b8f362b.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.f56491ce.js","js/build/@traptitech.b72bbaf2.js","js/build/katex.3c1bf5d3.js","js/build/localforage.2ff6ad43.js","js/build/markdown-it.6d8b0284.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.e2700674.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.b71582de.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.5bf49d78.js","js/build/clipboard.152d4248.js","js/build/view-design-hi.da5871a0.js","js/build/vuedraggable.6a7e382b.js","js/build/sortablejs.36894852.js","js/build/vue-resize-observer.e5bfd86a.js","js/build/element-sea.e8c47496.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.c9b3d7aa.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.7d64741a.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),c=()=>o(()=>import("./TEditor.841f8192.js"),["js/build/TEditor.841f8192.js","js/build/tinymce.cd1f2de5.js","js/build/@traptitech.b72bbaf2.js","js/build/katex.3c1bf5d3.js","js/build/ImgUpload.aee710a4.js","js/build/app.3bbb2636.js","js/build/app.3b8f362b.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.f56491ce.js","js/build/localforage.2ff6ad43.js","js/build/markdown-it.6d8b0284.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.e2700674.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.b71582de.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.5bf49d78.js","js/build/clipboard.152d4248.js","js/build/view-design-hi.da5871a0.js","js/build/vuedraggable.6a7e382b.js","js/build/sortablejs.36894852.js","js/build/vue-resize-observer.e5bfd86a.js","js/build/element-sea.e8c47496.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.c9b3d7aa.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.7d64741a.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),p=()=>o(()=>import("./AceEditor.41aa3e53.js"),["js/build/AceEditor.41aa3e53.js","js/build/vuex.cc7cb26e.js","js/build/app.3bbb2636.js","js/build/app.3b8f362b.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.f56491ce.js","js/build/@traptitech.b72bbaf2.js","js/build/katex.3c1bf5d3.js","js/build/localforage.2ff6ad43.js","js/build/markdown-it.6d8b0284.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.e2700674.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.b71582de.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.5bf49d78.js","js/build/clipboard.152d4248.js","js/build/view-design-hi.da5871a0.js","js/build/vuedraggable.6a7e382b.js","js/build/sortablejs.36894852.js","js/build/vue-resize-observer.e5bfd86a.js","js/build/element-sea.e8c47496.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.c9b3d7aa.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.7d64741a.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),m=()=>o(()=>import("./OnlyOffice.076ed0b3.js"),["js/build/OnlyOffice.076ed0b3.js","js/build/OnlyOffice.08442fe6.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.4dd6cb62.js","js/build/app.3bbb2636.js","js/build/app.3b8f362b.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.f56491ce.js","js/build/@traptitech.b72bbaf2.js","js/build/katex.3c1bf5d3.js","js/build/localforage.2ff6ad43.js","js/build/markdown-it.6d8b0284.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.e2700674.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.b71582de.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.5bf49d78.js","js/build/clipboard.152d4248.js","js/build/view-design-hi.da5871a0.js","js/build/vuedraggable.6a7e382b.js","js/build/sortablejs.36894852.js","js/build/vue-resize-observer.e5bfd86a.js","js/build/element-sea.e8c47496.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.c9b3d7aa.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.7d64741a.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),u=()=>o(()=>import("./Drawio.b8190e41.js"),["js/build/Drawio.b8190e41.js","js/build/Drawio.fc5c6326.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.4dd6cb62.js","js/build/app.3bbb2636.js","js/build/app.3b8f362b.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.f56491ce.js","js/build/@traptitech.b72bbaf2.js","js/build/katex.3c1bf5d3.js","js/build/localforage.2ff6ad43.js","js/build/markdown-it.6d8b0284.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.e2700674.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.b71582de.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.5bf49d78.js","js/build/clipboard.152d4248.js","js/build/view-design-hi.da5871a0.js","js/build/vuedraggable.6a7e382b.js","js/build/sortablejs.36894852.js","js/build/vue-resize-observer.e5bfd86a.js","js/build/element-sea.e8c47496.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.c9b3d7aa.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.7d64741a.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),_=()=>o(()=>import("./Minder.0d73e522.js"),["js/build/Minder.0d73e522.js","js/build/Minder.3ba64342.css","js/build/IFrame.4dd6cb62.js","js/build/app.3bbb2636.js","js/build/app.3b8f362b.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.f56491ce.js","js/build/@traptitech.b72bbaf2.js","js/build/katex.3c1bf5d3.js","js/build/localforage.2ff6ad43.js","js/build/markdown-it.6d8b0284.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.e2700674.js","js/build/highlight.js.b91af88c.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.b71582de.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.5bf49d78.js","js/build/clipboard.152d4248.js","js/build/view-design-hi.da5871a0.js","js/build/vuedraggable.6a7e382b.js","js/build/sortablejs.36894852.js","js/build/vue-resize-observer.e5bfd86a.js","js/build/element-sea.e8c47496.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.c9b3d7aa.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.7d64741a.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),h={name:"FilePreview",components:{IFrame:n,AceEditor:p,TEditor:c,MDPreview:d,OnlyOffice:m,Drawio:u,Minder:_},props:{code:{type:String,default:""},historyId:{type:Number,default:0},file:{type:Object,default:()=>({})},headerShow:{type:Boolean,default:!0}},data(){return{loadContent:0,contentDetail:null,loadPreview:!0}},watch:{"file.id":{handler(t){t&&(this.contentDetail=null,this.getContent())},immediate:!0,deep:!0}},computed:{contentLoad(){return this.loadContent>0||this.previewLoad},isPreview(){return this.contentDetail&&this.contentDetail.preview===!0},previewLoad(){return this.isPreview&&this.loadPreview===!0},previewUrl(){if(this.isPreview){const{name:t,key:i}=this.contentDetail;return $A.apiUrl(`../online/preview/${t}?key=${i}&version=${window.systemInfo.version}`)}return""}},methods:{onFrameLoad(){this.loadPreview=!1},getContent(){if(["word","excel","ppt"].includes(this.file.type)){this.contentDetail=$A.cloneJSON(this.file);return}setTimeout(t=>{this.loadContent++},600),this.$store.dispatch("call",{url:"file/content",data:{id:this.code||this.file.id,history_id:this.historyId}}).then(({data:t})=>{this.contentDetail=t.content}).catch(({msg:t})=>{$A.modalError(t)}).finally(t=>{this.loadContent--})},documentKey(){return new Promise((t,i)=>{this.$store.dispatch("call",{url:"file/content",data:{id:this.code||this.file.id,only_update_at:"yes"}}).then(({data:e})=>{t(`${e.id}-${$A.Time(e.update_at)}`)}).catch(e=>{i(e)})})},exportMenu(t){switch(this.file.type){case"mind":this.$refs.myMind.exportHandle(t,this.file.name);break}}}},r={};var v=a(h,l,s,!1,f,null,null,null);function f(t){for(let i in r)this[i]=r[i]}var tt=function(){return v.exports}();export{tt as default};
