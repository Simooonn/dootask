import{_ as o}from"./openpgp_hi.15f91b1d.js";import{m as n}from"./vuex.cc7cb26e.js";import{I as a}from"./IFrame.3b0629c7.js";import{n as m}from"./app.f8a6fa5e.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.7b5830c7.js";import"./@traptitech.4f5fb92a.js";import"./katex.8068bc0b.js";import"./localforage.dae0aa5a.js";import"./markdown-it.34483999.js";import"./entities.797c3e49.js";import"./uc.micro.3245408e.js";import"./mdurl.ddaf799d.js";import"./linkify-it.43898b73.js";import"./punycode.32c740ed.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.da9c4dc7.js";import"./axios.6ec123f8.js";import"./le5le-store.bd86c9e9.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.facc05aa.js";import"./clipboard.907979fd.js";import"./view-design-hi.afe77d1e.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.aaa0fd6a.js";import"./sortablejs.4880fe6b.js";import"./vue-resize-observer.2ab4768b.js";import"./element-sea.74fd8f4e.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e0279f38.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e0445182.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"single-file-msg"},[e("PageTitle",{attrs:{title:t.title}}),t.loadIng>0?e("Loading"):t.isWait?t._e():[t.isType("md")?e("MDPreview",{attrs:{initialValue:t.msgDetail.content.content}}):t.isType("text")?e("TEditor",{attrs:{value:t.msgDetail.content.content,height:"100%",readOnly:""}}):t.isType("drawio")?e("Drawio",{attrs:{title:t.msgDetail.msg.name,readOnly:""},model:{value:t.msgDetail.content,callback:function(r){t.$set(t.msgDetail,"content",r)},expression:"msgDetail.content"}}):t.isType("mind")?e("Minder",{attrs:{value:t.msgDetail.content,readOnly:""}}):t.isType("code")?[t.isLongText(t.msgDetail.msg.name)?e("div",{staticClass:"view-code",domProps:{innerHTML:t._s(t.$A.formatTextMsg(t.msgDetail.content.content,t.userId))}}):e("AceEditor",{staticClass:"view-editor",attrs:{ext:t.msgDetail.msg.ext,readOnly:""},model:{value:t.msgDetail.content.content,callback:function(r){t.$set(t.msgDetail.content,"content",r)},expression:"msgDetail.content.content"}})]:t.isType("office")?e("OnlyOffice",{attrs:{code:t.officeCode,documentKey:t.documentKey,readOnly:""},model:{value:t.officeContent,callback:function(r){t.officeContent=r},expression:"officeContent"}}):t.isType("preview")?e("IFrame",{staticClass:"preview-iframe",attrs:{src:t.previewUrl}}):e("div",{staticClass:"no-support"},[t._v(t._s(t.$L("\u4E0D\u652F\u6301\u5355\u72EC\u67E5\u770B\u6B64\u6D88\u606F")))])]],2)},c=[];const d=()=>o(()=>import("./preview.ac00254d.js"),["js/build/preview.ac00254d.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),p=()=>o(()=>import("./TEditor.0841978b.js"),["js/build/TEditor.0841978b.js","js/build/tinymce.286c5863.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/ImgUpload.d82fa303.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),_=()=>o(()=>import("./AceEditor.9724e814.js"),["js/build/AceEditor.9724e814.js","js/build/vuex.cc7cb26e.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),u=()=>o(()=>import("./OnlyOffice.6bf143a3.js"),["js/build/OnlyOffice.6bf143a3.js","js/build/OnlyOffice.5570973b.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.3b0629c7.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),g=()=>o(()=>import("./Drawio.7ea92229.js"),["js/build/Drawio.7ea92229.js","js/build/Drawio.6a04e353.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.3b0629c7.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),f=()=>o(()=>import("./Minder.fcfad20d.js"),["js/build/Minder.fcfad20d.js","js/build/Minder.1839e1ef.css","js/build/IFrame.3b0629c7.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),v={components:{IFrame:a,AceEditor:_,TEditor:p,MDPreview:d,OnlyOffice:u,Drawio:g,Minder:f},data(){return{loadIng:0,isWait:!1,msgDetail:{}}},mounted(){},watch:{$route:{handler(){this.getInfo()},immediate:!0}},computed:{...n(["userId"]),msgId(){const{msgId:t}=this.$route.params;return parseInt(/^\d+$/.test(t)?t:0)},title(){const{msg:t}=this.msgDetail;return t&&t.name?t.name:"Loading..."},isType(){const{msgDetail:t}=this;return function(i){return t.type=="file"&&t.file_mode==i}},officeContent(){return{id:this.msgDetail.id||0,type:this.msgDetail.msg.ext,name:this.title}},officeCode(){return"msgFile_"+this.msgDetail.id},previewUrl(){const{name:t,key:i}=this.msgDetail.content;return $A.onlinePreviewUrl(t,i)}},methods:{getInfo(){this.msgId<=0||(setTimeout(t=>{this.loadIng++},600),this.isWait=!0,this.$store.dispatch("call",{url:"dialog/msg/detail",data:{msg_id:this.msgId}}).then(({data:t})=>{this.msgDetail=t}).catch(({msg:t})=>{$A.modalError({content:t,onOk:()=>{this.$Electron&&window.close()}})}).finally(t=>{this.loadIng--,this.isWait=!1}))},documentKey(){return new Promise((t,i)=>{this.$store.dispatch("call",{url:"dialog/msg/detail",data:{msg_id:this.msgId,only_update_at:"yes"}}).then(({data:e})=>{t(`${e.id}-${$A.Time(e.update_at)}`)}).catch(e=>{i(e)})})},isLongText(t){return/^LongText-/.test(t)}}},s={};var h=m(v,l,c,!1,D,null,null,null);function D(t){for(let i in s)this[i]=s[i]}var ot=function(){return h.exports}();export{ot as default};
