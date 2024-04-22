import{_ as a}from"./openpgp_hi.15f91b1d.js";import{m as c}from"./vuex.cc7cb26e.js";import{n as r}from"./app.f8a6fa5e.js";import{I as d}from"./IFrame.3b0629c7.js";import"./@micro-zoe.c2e1472d.js";import"./jquery.7b5830c7.js";import"./@traptitech.4f5fb92a.js";import"./katex.8068bc0b.js";import"./localforage.dae0aa5a.js";import"./markdown-it.34483999.js";import"./entities.797c3e49.js";import"./uc.micro.3245408e.js";import"./mdurl.ddaf799d.js";import"./linkify-it.43898b73.js";import"./punycode.32c740ed.js";import"./highlight.js.24fdca15.js";import"./markdown-it-link-attributes.e1d5d151.js";import"./vue.da9c4dc7.js";import"./axios.6ec123f8.js";import"./le5le-store.bd86c9e9.js";import"./vue-router.2d566cd7.js";import"./vue-clipboard2.facc05aa.js";import"./clipboard.907979fd.js";import"./view-design-hi.afe77d1e.js";import"./default-passive-events.a3d698c9.js";import"./vuedraggable.aaa0fd6a.js";import"./sortablejs.4880fe6b.js";import"./vue-resize-observer.2ab4768b.js";import"./element-sea.74fd8f4e.js";import"./deepmerge.cecf392e.js";import"./resize-observer-polyfill.e0279f38.js";import"./throttle-debounce.7c3948b2.js";import"./babel-helper-vue-jsx-merge-props.5ed215c3.js";import"./normalize-wheel.2a034b9f.js";import"./async-validator.e0445182.js";import"./babel-runtime.4773988a.js";import"./core-js.314b4a1d.js";var h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"file-history"},[t("Table",{attrs:{width:e.windowWidth-40>480?480:e.windowWidth-40,"max-height":e.windowHeight-180,columns:e.columns,data:e.list,loading:e.loadIng>0,"no-data-text":e.$L(e.noText),"highlight-row":"",stripe:""}}),e.total>e.pageSize?t("Page",{attrs:{total:e.total,current:e.page,"page-size":e.pageSize,disabled:e.loadIng>0,simple:!0},on:{"on-change":e.setPage,"on-page-size-change":e.setPageSize}}):e._e()],1)},u=[];const f={name:"FileHistory",props:{value:{type:Boolean,default:!1},file:{type:Object,default:()=>({})}},data(){return{loadIng:0,columns:[{title:this.$L("\u65E5\u671F"),key:"created_at",width:168},{title:this.$L("\u521B\u5EFA\u4EBA"),width:120,render:(e,{row:s})=>e("UserAvatar",{props:{showName:!0,size:22,userid:s.userid}})},{title:this.$L("\u5927\u5C0F"),key:"size",width:90,render:(e,{row:s})=>e("AutoTip",$A.bytesToSize(s.size))},{title:this.$L("\u64CD\u4F5C"),align:"center",width:100,render:(e,{index:s,row:t,column:i})=>s===0&&this.page===1?e("div","-"):e("TableAction",{props:{column:i,menu:[{label:this.$L("\u67E5\u770B"),action:"preview"},{label:this.$L("\u8FD8\u539F"),action:"restore"}]},on:{action:n=>{this.onAction(n,t)}}})}],list:[],page:1,pageSize:10,total:0,noText:""}},mounted(){},watch:{value:{handler(e){e&&this.setPage(1)},immediate:!0}},computed:{fileId(){return this.file.id||0}},methods:{getLists(){this.fileId!==0&&(this.loadIng++,this.$store.dispatch("call",{url:"file/content/history",data:{id:this.fileId,page:Math.max(this.page,1),pagesize:Math.max($A.runNum(this.pageSize),10)}}).then(({data:e})=>{this.page=e.current_page,this.total=e.total,this.list=e.data,this.noText="\u6CA1\u6709\u76F8\u5173\u7684\u6570\u636E"}).catch(()=>{this.noText="\u6570\u636E\u52A0\u8F7D\u5931\u8D25"}).finally(e=>{this.loadIng--}))},setPage(e){this.page=e,this.getLists()},setPageSize(e){this.page=1,this.pageSize=e,this.getLists()},onAction(e,s){switch(e){case"restore":this.$emit("on-restore",s);break;case"preview":const t=$A.getFileName(this.file)+` [${s.created_at}]`,i=`/single/file/${this.fileId}?history_id=${s.id}&history_title=${t}`;this.$Electron?this.$store.dispatch("openChildWindow",{name:`file-${this.fileId}-${s.id}`,path:i,userAgent:"/hideenOfficeTitle/",force:!1,config:{title:t,titleFixed:!0,parent:null,width:Math.min(window.screen.availWidth,1440),height:Math.min(window.screen.availHeight,900)},webPreferences:{nodeIntegrationInSubFrames:this.file.type==="drawio"}}):this.$isEEUiApp?this.$store.dispatch("openAppChildPage",{pageType:"app",pageTitle:t,url:"web.js",params:{titleFixed:!0,allowAccess:!0,url:$A.rightDelete(window.location.href,window.location.hash)+`#${i}`}}):window.open($A.mainUrl(i.substring(1)));break}}}},o={};var p=r(f,h,u,!1,m,"1b488c19",null,null);function m(e){for(let s in o)this[s]=o[s]}var v=function(){return p.exports}(),_=function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.ready?t("div",{staticClass:"file-content"},[e.isPreview?t("IFrame",{staticClass:"preview-iframe",attrs:{src:e.previewUrl},on:{"on-load":e.onFrameLoad}}):e.contentDetail?[["word","excel","ppt"].includes(e.file.type)?t("EPopover",{attrs:{trigger:"click"},model:{value:e.historyShow,callback:function(i){e.historyShow=i},expression:"historyShow"}},[t("div",{staticClass:"file-content-history"},[t("FileHistory",{attrs:{value:e.historyShow,file:e.file},on:{"on-restore":e.onRestoreHistory}})],1),t("div",{ref:"officeHeader",staticClass:"office-header",attrs:{slot:"reference"},slot:"reference"})]):t("div",{staticClass:"edit-header"},[t("div",{staticClass:"header-title"},[e.equalContent?e._e():t("EPopover",{staticClass:"file-unsave-tip",model:{value:e.unsaveTip,callback:function(i){e.unsaveTip=i},expression:"unsaveTip"}},[t("div",{staticClass:"task-detail-delete-file-popover"},[t("p",[e._v(e._s(e.$L("\u672A\u4FDD\u5B58\u5F53\u524D\u4FEE\u6539\u5185\u5BB9\uFF1F")))]),t("div",{staticClass:"buttons"},[t("Button",{attrs:{size:"small",type:"text"},on:{click:e.unSaveGive}},[e._v(e._s(e.$L("\u653E\u5F03")))]),t("Button",{attrs:{size:"small",type:"primary"},on:{click:e.onSaveSave}},[e._v(e._s(e.$L("\u4FDD\u5B58")))])],1)]),t("span",{attrs:{slot:"reference"},slot:"reference"},[e._v("["+e._s(e.$L("\u672A\u4FDD\u5B58"))+"*]")])]),e._v(" "+e._s(e.fileName)+" ")],1),t("div",{staticClass:"header-user"},[t("ul",[e._l(e.editUser,function(i,n){return n<=10?t("li",{key:n},[t("UserAvatar",{attrs:{userid:i,size:28,"border-witdh":2}})],1):e._e()}),e.editUser.length>10?t("li",{staticClass:"more",attrs:{title:e.editUser.length}},[e._v(e._s(e.editUser.length>999?"...":e.editUser.length))]):e._e()],2)]),e.file.type=="document"&&e.contentDetail&&!e.windowPortrait?t("div",{staticClass:"header-hint"},[t("ButtonGroup",{attrs:{size:"small",shape:"circle"}},[t("Button",{attrs:{type:`${e.contentDetail.type=="md"?"primary":"default"}`},on:{click:function(i){return e.setTextType("md")}}},[e._v(e._s(e.$L("MD\u7F16\u8F91\u5668")))]),t("Button",{attrs:{type:`${e.contentDetail.type!="md"?"primary":"default"}`},on:{click:function(i){return e.setTextType("text")}}},[e._v(e._s(e.$L("\u6587\u672C\u7F16\u8F91\u5668")))])],1)],1):e._e(),e.file.type=="mind"?t("div",{staticClass:"header-hint"},[e._v(" "+e._s(e.$L("\u9009\u4E2D\u8282\u70B9\uFF0C\u6309enter\u952E\u6DFB\u52A0\u540C\u7EA7\u8282\u70B9\uFF0Ctab\u952E\u6DFB\u52A0\u5B50\u8282\u70B9"))+" ")]):e._e(),e.file.type=="mind"?t("Dropdown",{staticClass:"header-hint",attrs:{trigger:"click",transfer:""},on:{"on-click":e.exportMenu}},[t("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$L("\u5BFC\u51FA"))),t("Icon",{attrs:{type:"ios-arrow-down"}})],1),t("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[t("DropdownItem",{attrs:{name:"png"}},[e._v(e._s(e.$L("\u5BFC\u51FAPNG\u56FE\u7247")))]),t("DropdownItem",{attrs:{name:"pdf"}},[e._v(e._s(e.$L("\u5BFC\u51FAPDF\u6587\u4EF6")))])],1)],1):e._e(),e.file.only_view?e._e():[t("div",{staticClass:"header-icons"},[t("ETooltip",{attrs:{disabled:e.$isEEUiApp||e.windowTouch,content:e.$L("\u6587\u4EF6\u94FE\u63A5")}},[t("div",{staticClass:"header-icon",on:{click:function(i){return e.handleClick("link")}}},[t("i",{staticClass:"taskfont"},[e._v("\uE785")])])]),t("EPopover",{attrs:{trigger:"click"},model:{value:e.historyShow,callback:function(i){e.historyShow=i},expression:"historyShow"}},[t("div",{staticClass:"file-content-history"},[t("FileHistory",{attrs:{value:e.historyShow,file:e.file},on:{"on-restore":e.onRestoreHistory}})],1),t("ETooltip",{ref:"historyTip",attrs:{slot:"reference",disabled:e.$isEEUiApp||e.windowTouch||e.historyShow,content:e.$L("\u5386\u53F2\u7248\u672C")},slot:"reference"},[t("div",{staticClass:"header-icon"},[t("i",{staticClass:"taskfont"},[e._v("\uE71D")])])])],1)],1),e.windowPortrait&&e.file.type=="document"?[e.edit?e.edit&&e.equalContent?t("Button",{staticClass:"header-button",attrs:{size:"small"},on:{click:function(i){e.edit=!1}}},[e._v(e._s(e.$L("\u53D6\u6D88")))]):t("Button",{staticClass:"header-button",attrs:{disabled:e.equalContent,loading:e.loadSave>0,size:"small",type:"primary"},on:{click:function(i){return e.handleClick("save")}}},[e._v(e._s(e.$L("\u4FDD\u5B58")))]):t("Button",{staticClass:"header-button",attrs:{size:"small",type:"primary"},on:{click:function(i){e.edit=!0}}},[e._v(e._s(e.$L("\u7F16\u8F91")))])]:t("Button",{staticClass:"header-button",attrs:{disabled:e.equalContent,loading:e.loadSave>0,size:"small",type:"primary"},on:{click:function(i){return e.handleClick("save")}}},[e._v(e._s(e.$L("\u4FDD\u5B58")))])]],2),t("div",{staticClass:"content-body"},[e.historyShow?t("div",{staticClass:"content-mask"}):e._e(),e.file.type=="document"?[e.contentDetail.type=="md"?[e.edit?t("MDEditor",{attrs:{height:"100%",toolbars:e.toolbars},model:{value:e.contentDetail.content,callback:function(i){e.$set(e.contentDetail,"content",i)},expression:"contentDetail.content"}}):t("MDPreview",{attrs:{initialValue:e.contentDetail.content}})]:t("TEditor",{attrs:{readOnly:!e.edit,height:"100%"},on:{editorSave:function(i){return e.handleClick("saveBefore")}},model:{value:e.contentDetail.content,callback:function(i){e.$set(e.contentDetail,"content",i)},expression:"contentDetail.content"}})]:e.file.type=="drawio"?t("Drawio",{ref:"myFlow",attrs:{title:e.file.name},on:{saveData:function(i){return e.handleClick("saveBefore")}},model:{value:e.contentDetail,callback:function(i){e.contentDetail=i},expression:"contentDetail"}}):e.file.type=="mind"?t("Minder",{ref:"myMind",on:{saveData:function(i){return e.handleClick("saveBefore")}},model:{value:e.contentDetail,callback:function(i){e.contentDetail=i},expression:"contentDetail"}}):["code","txt"].includes(e.file.type)?t("AceEditor",{attrs:{ext:e.file.ext},on:{saveData:function(i){return e.handleClick("saveBefore")}},model:{value:e.contentDetail.content,callback:function(i){e.$set(e.contentDetail,"content",i)},expression:"contentDetail.content"}}):["word","excel","ppt"].includes(e.file.type)?t("OnlyOffice",{attrs:{documentKey:e.documentKey},on:{"on-document-ready":function(i){return e.handleClick("officeReady")}},model:{value:e.contentDetail,callback:function(i){e.contentDetail=i},expression:"contentDetail"}}):e._e()],2)]:e._e(),e.contentLoad?t("div",{staticClass:"content-load"},[t("Loading")],1):e._e(),t("Modal",{attrs:{title:e.$L("\u6587\u4EF6\u94FE\u63A5"),"mask-closable":!1},model:{value:e.linkShow,callback:function(i){e.linkShow=i},expression:"linkShow"}},[t("div",[t("div",{staticStyle:{margin:"-10px 0 8px"}},[e._v(e._s(e.$L("\u6587\u4EF6\u540D\u79F0"))+": "+e._s(e.linkData.name))]),t("Input",{ref:"linkInput",attrs:{type:"textarea",rows:3,readonly:""},on:{"on-focus":e.linkFocus},model:{value:e.linkData.url,callback:function(i){e.$set(e.linkData,"url",i)},expression:"linkData.url"}}),t("div",{staticClass:"form-tip",staticStyle:{"padding-top":"6px"}},[e._v(" "+e._s(e.$L("\u53EF\u901A\u8FC7\u6B64\u94FE\u63A5\u6D4F\u89C8\u6587\u4EF6\u3002"))+" "),t("Poptip",{attrs:{confirm:"",placement:"bottom","ok-text":e.$L("\u786E\u5B9A"),"cancel-text":e.$L("\u53D6\u6D88"),transfer:""},on:{"on-ok":function(i){return e.linkGet(!0)}}},[t("div",{attrs:{slot:"title"},slot:"title"},[t("p",[t("strong",[e._v(e._s(e.$L("\u6CE8\u610F\uFF1A\u5237\u65B0\u5C06\u5BFC\u81F4\u539F\u6765\u7684\u94FE\u63A5\u5931\u6548\uFF01")))])])]),t("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$L("\u5237\u65B0\u94FE\u63A5")))])])],1)],1),t("div",{staticClass:"adaption",attrs:{slot:"footer"},slot:"footer"},[t("Button",{attrs:{type:"default"},on:{click:function(i){e.linkShow=!1}}},[e._v(e._s(e.$L("\u53D6\u6D88")))]),t("Button",{attrs:{type:"primary",loading:e.linkLoad>0},on:{click:e.linkCopy}},[e._v(e._s(e.$L("\u590D\u5236")))])],1)])],2):e._e()},y=[];const k=()=>a(()=>import("./index.d312a146.js"),["js/build/index.d312a146.js","js/build/index.4d847d9e.css","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js","js/build/ImgUpload.d82fa303.js"]),w=()=>a(()=>import("./preview.ac00254d.js"),["js/build/preview.ac00254d.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),$=()=>a(()=>import("./TEditor.0841978b.js"),["js/build/TEditor.0841978b.js","js/build/tinymce.286c5863.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/ImgUpload.d82fa303.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),g=()=>a(()=>import("./AceEditor.9724e814.js"),["js/build/AceEditor.9724e814.js","js/build/vuex.cc7cb26e.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),D=()=>a(()=>import("./OnlyOffice.6bf143a3.js"),["js/build/OnlyOffice.6bf143a3.js","js/build/OnlyOffice.5570973b.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.3b0629c7.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),C=()=>a(()=>import("./Drawio.7ea92229.js"),["js/build/Drawio.7ea92229.js","js/build/Drawio.6a04e353.css","js/build/vuex.cc7cb26e.js","js/build/IFrame.3b0629c7.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),x=()=>a(()=>import("./Minder.fcfad20d.js"),["js/build/Minder.fcfad20d.js","js/build/Minder.1839e1ef.css","js/build/IFrame.3b0629c7.js","js/build/app.f8a6fa5e.js","js/build/app.e18e3ed3.css","js/build/@micro-zoe.c2e1472d.js","js/build/jquery.7b5830c7.js","js/build/@traptitech.4f5fb92a.js","js/build/katex.8068bc0b.js","js/build/localforage.dae0aa5a.js","js/build/markdown-it.34483999.js","js/build/entities.797c3e49.js","js/build/uc.micro.3245408e.js","js/build/mdurl.ddaf799d.js","js/build/linkify-it.43898b73.js","js/build/punycode.32c740ed.js","js/build/highlight.js.24fdca15.js","js/build/markdown-it-link-attributes.e1d5d151.js","js/build/vue.da9c4dc7.js","js/build/vuex.cc7cb26e.js","js/build/axios.6ec123f8.js","js/build/le5le-store.bd86c9e9.js","js/build/openpgp_hi.15f91b1d.js","js/build/vue-router.2d566cd7.js","js/build/vue-clipboard2.facc05aa.js","js/build/clipboard.907979fd.js","js/build/view-design-hi.afe77d1e.js","js/build/default-passive-events.a3d698c9.js","js/build/vuedraggable.aaa0fd6a.js","js/build/sortablejs.4880fe6b.js","js/build/vue-resize-observer.2ab4768b.js","js/build/element-sea.74fd8f4e.js","js/build/deepmerge.cecf392e.js","js/build/resize-observer-polyfill.e0279f38.js","js/build/throttle-debounce.7c3948b2.js","js/build/babel-helper-vue-jsx-merge-props.5ed215c3.js","js/build/normalize-wheel.2a034b9f.js","js/build/async-validator.e0445182.js","js/build/babel-runtime.4773988a.js","js/build/core-js.314b4a1d.js"]),b={name:"FileContent",components:{IFrame:d,FileHistory:v,AceEditor:g,TEditor:$,MDEditor:k,OnlyOffice:D,Drawio:C,Minder:x,MDPreview:w},props:{value:{type:Boolean,default:!1},file:{type:Object,default:()=>({})}},data(){return{ready:!1,loadSave:0,loadContent:0,unsaveTip:!1,fileExt:null,contentDetail:null,contentBak:{},editUser:[],loadPreview:!0,linkShow:!1,linkData:{},linkLoad:0,historyShow:!1,officeReady:!1,edit:!1}},mounted(){this.edit=!this.windowPortrait,document.addEventListener("keydown",this.keySave),window.addEventListener("message",this.handleOfficeMessage),this.$isSubElectron&&(window.__onBeforeUnload=()=>{if(!this.equalContent)return $A.modalConfirm({content:"\u4FEE\u6539\u7684\u5185\u5BB9\u5C1A\u672A\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u653E\u5F03\u4FEE\u6539\u5417\uFF1F",cancelText:"\u53D6\u6D88",okText:"\u653E\u5F03",onOk:()=>{this.$Electron.sendMessage("windowDestroy")}}),!0})},beforeDestroy(){document.removeEventListener("keydown",this.keySave),window.removeEventListener("message",this.handleOfficeMessage)},watch:{value:{handler(e){e?(this.ready=!0,this.editUser=[this.userId],this.getContent()):(this.linkShow=!1,this.historyShow=!1,this.officeReady=!1,this.fileExt=null)},immediate:!0},historyShow(e){!e&&this.$refs.historyTip&&this.$refs.historyTip.updatePopper()},wsMsg:{handler(e){const{type:s,action:t,data:i}=e;switch(s){case"path":i.path=="/single/file/"+this.fileId&&(this.editUser=i.userids);break;case"file":t=="content"&&this.value&&i.id==this.fileId&&$A.modalConfirm({title:"\u66F4\u65B0\u63D0\u793A",content:"\u56E2\u961F\u6210\u5458\uFF08"+e.nickname+"\uFF09\u66F4\u65B0\u4E86\u5185\u5BB9\uFF0C<br/>\u66F4\u65B0\u65F6\u95F4\uFF1A"+$A.formatDate("Y-m-d H:i:s",e.time)+"\u3002<br/><br/>\u70B9\u51FB\u3010\u786E\u5B9A\u3011\u52A0\u8F7D\u6700\u65B0\u5185\u5BB9\u3002",onOk:()=>{this.getContent()}});break}},deep:!0}},computed:{...c(["wsMsg"]),fileId(){return this.file.id||0},fileName(){return this.fileExt?$A.getFileName(Object.assign(this.file,{ext:this.fileExt})):$A.getFileName(this.file)},equalContent(){return this.contentBak==$A.jsonStringify(this.contentDetail)},contentLoad(){return this.loadContent>0||this.previewLoad},isPreview(){return this.contentDetail&&this.contentDetail.preview===!0},previewLoad(){return this.isPreview&&this.loadPreview===!0},previewUrl(){if(this.isPreview){const{name:e,key:s}=this.contentDetail;return $A.onlinePreviewUrl(e,s)}return""},toolbars(){return this.windowPortrait?{strong:!0,italic:!0,overline:!0,h1:!0,h2:!0,h3:!0,h4:!1,h5:!1,h6:!1,hr:!0,quote:!1,ul:!0,ol:!0,code:!0,link:!0,image:!1,uploadImage:!1,table:!0,checked:!1,notChecked:!1,split:!0,preview:!1,fullscreen:!1,theme:!1,exportmd:!1,importmd:!1,save:!1,clear:!1,scrolling:!1,html_to_markdown:!1,custom_image:!1,custom_uploadImage:!1,custom_uploadFile:!1,custom_fullscreen:!1}:{strong:!0,italic:!0,overline:!0,h1:!0,h2:!0,h3:!0,h4:!1,h5:!1,h6:!1,hr:!0,quote:!0,ul:!0,ol:!0,code:!0,link:!0,image:!1,uploadImage:!1,table:!0,checked:!0,notChecked:!0,split:!0,preview:!0,fullscreen:!1,theme:!1,exportmd:!1,importmd:!1,save:!1,clear:!1,scrolling:!0,html_to_markdown:!0,custom_image:!0,custom_uploadImage:!0,custom_uploadFile:!0,custom_fullscreen:!0}}},methods:{handleOfficeMessage({data:e,source:s}){if(e.source==="onlyoffice")switch(e.action){case"ready":s.postMessage("createMenu","*");break;case"link":this.handleClick("link");break;case"history":const t=this.$refs.officeHeader;t&&(t.style.top=`${e.rect.top}px`,t.style.left=`${e.rect.left}px`,t.style.width=`${e.rect.width}px`,t.style.height=`${e.rect.height}px`,t.click());break}},onFrameLoad(){this.loadPreview=!1},keySave(e){this.value&&e.keyCode===83&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.onSaveSave())},getContent(){if(this.fileId===0){this.contentDetail={},this.updateBak();return}if(["word","excel","ppt"].includes(this.file.type)){this.contentDetail=$A.cloneJSON(this.file),this.updateBak();return}this.loadSave++,setTimeout(e=>{this.loadContent++},600),this.$store.dispatch("call",{url:"file/content",data:{id:this.fileId}}).then(({data:e})=>{this.contentDetail=e.content,this.updateBak()}).catch(({msg:e})=>{$A.modalError(e)}).finally(e=>{this.loadSave--,this.loadContent--})},updateBak(){this.contentBak=$A.jsonStringify(this.contentDetail)},handleClick(e){switch(e){case"link":this.linkData={id:this.fileId,name:this.file.name},this.linkShow=!0,this.linkGet();break;case"saveBefore":!this.equalContent&&this.loadSave==0?this.handleClick("save"):$A.messageWarning("\u6CA1\u6709\u4EFB\u4F55\u4FEE\u6539\uFF01");break;case"save":if(this.file.only_view)return;this.updateBak(),this.loadSave++,this.$store.dispatch("call",{url:"file/content/save",method:"post",data:{id:this.fileId,content:this.contentBak}}).then(({data:s,msg:t})=>{$A.messageSuccess(t);const i={id:this.fileId,size:s.size};this.fileExt&&(i.ext=this.fileExt,this.fileExt=null),this.edit=!this.windowPortrait,this.$store.dispatch("saveFile",i)}).catch(({msg:s})=>{$A.modalError(s),this.getContent()}).finally(s=>{this.loadSave--});break;case"officeReady":this.officeReady=!0;break}},onRestoreHistory(e){this.historyShow=!1,$A.modalConfirm({content:`\u4F60\u786E\u5B9A\u6587\u4EF6\u8FD8\u539F\u81F3\u3010${e.created_at}\u3011\u5417\uFF1F`,cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A",loading:!0,onOk:()=>new Promise((s,t)=>{this.$store.dispatch("call",{url:"file/content/restore",data:{id:this.fileId,history_id:e.id}}).then(({msg:i})=>{s(i),this.contentDetail=null,this.getContent()}).catch(({msg:i})=>{t(i)})})})},linkGet(e){this.linkLoad++,this.$store.dispatch("call",{url:"file/link",data:{id:this.linkData.id,refresh:e===!0?"yes":"no"}}).then(({data:s})=>{this.linkData=Object.assign(s,{id:this.linkData.id,name:this.linkData.name}),this.linkCopy()}).catch(({msg:s})=>{this.linkShow=!1,$A.modalError(s)}).finally(s=>{this.linkLoad--})},linkCopy(){!this.linkData.url||(this.linkFocus(),this.copyText(this.linkData.url))},linkFocus(){this.$nextTick(e=>{this.$refs.linkInput.focus({cursor:"all"})})},exportMenu(e){switch(this.file.type){case"mind":this.$refs.myMind.exportHandle(e,this.file.name);break}},unSaveGive(){this.getContent(),this.unsaveTip=!1},onSaveSave(){this.handleClick("save"),this.unsaveTip=!1},setTextType(e){this.fileExt=e,this.$set(this.contentDetail,"type",e)},documentKey(){return new Promise((e,s)=>{this.$store.dispatch("call",{url:"file/content",data:{id:this.fileId,only_update_at:"yes"}}).then(({data:t})=>{e(`${t.id}-${$A.Time(t.update_at)}`)}).catch(t=>{s(t)})})}}},l={};var S=r(b,_,y,!1,L,null,null,null);function L(e){for(let s in l)this[s]=l[s]}var ue=function(){return S.exports}();export{ue as default};
