(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{346:function(t,e,o){var content=o(349);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(53).default)("11ee4dc0",content,!0,{sourceMap:!1})},347:function(t){t.exports=JSON.parse('[{"name":"Cubhouse Website","stack":["Nuxt","Boostrap","Fullpage"],"images":["cubhouse/1.png","cubhouse/2.png","cubhouse/3.png","cubhouse/4.png","cubhouse/5.png","cubhouse/6.png"],"des":"Website"},{"name":"KTB Event","stack":["Nuxt","Boostrap"],"images":["ktb/1.png","ktb/2.png","ktb/3.png","ktb/4.png"],"des":"Website"},{"name":"SDGS Microsite","stack":["Nuxt","Boostrap","API","Node","SQL"],"images":["sdgs/1.png","sdgs/2.png","sdgs/3.png","sdgs/4.png","sdgs/6.png"],"des":"Website"},{"name":"APT Dashboard","stack":["Vue","Boostrap","Apexchart","Google API"],"images":["apt/1.png","apt/2.png","apt/3.png","apt/4.png","apt/5.png","apt/6.png"],"des":"Website"},{"name":"IBank Appointment Module","stack":["Vue","Boostrap"],"images":["ibank/1.png","ibank/2.png","ibank/3.png"],"des":"Website"},{"name":"M Supplier Portal","stack":["Nuxt","Boostrap"],"images":["mportal/1.png","mportal/2.png","mportal/3.png"],"des":"Website"}]')},348:function(t,e,o){"use strict";o(346)},349:function(t,e,o){var n=o(52)(!1);n.push([t.i,".web-bg{background:#07090d;position:absolute}.web-bg-pic{width:100vw;height:100vh;position:fixed}.circle-1{width:50vh;height:50vh;background:#0097bb;left:300px}.circle-1,.circle-2{border-radius:1000px;position:absolute;filter:blur(240px);-webkit-filter:blur(240px);-moz-filter:blur(240px);-o-filter:blur(240px);-ms-filter:blur(240px);-webkit-perspective:1000;-webkit-font-smoothing:subpixel-antialiased;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateZ(0)}.circle-2{width:40vh;height:40vh;background:#0eda93;bottom:50px;right:200px}.modal-container{position:fixed;width:100vw;height:100vh;z-index:20;overflow-y:auto}.close-modal{position:absolute;text-align:right;top:15px;right:15px;cursor:pointer;z-index:22;color:#12d487}.bg-modal{position:absolute;width:100%;min-height:100%;height:auto;background:#000;opacity:.9}.modal-img-container{position:relative;z-index:21;height:100%;padding:50px 0}.modal-img{height:100%;width:50%;-o-object-fit:scale-down;object-fit:scale-down}@media only screen and (max-width:600px){.modal-img{width:100%;height:80%;padding:0 10px}.circle-1{left:-100px}.circle-1,.circle-2{filter:blur(150px);-webkit-filter:blur(150px);-moz-filter:blur(150px);-o-filter:blur(150px);-ms-filter:blur(150px)}.circle-2{right:-100px}}",""]),t.exports=n},350:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(1),o(6),o(3),o(7);var n=o(0),c=(o(38),o(161)),r=o(160),l=o(69);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var d={components:{HomeBanner:c.a,FolioSection:r.a},data:function(){return{inMove:!1,activeSection:0,offsets:[],touchStartY:0,screenWidth:window.innerWidth,folioData:[]}},created:function(){this.folioData=o(347)},watch:{ModalActived:function(){this.ModalActived.scroll?this.scrollEventActive():this.scrollEventUnActive()}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)})),this.calculateSectionOffsets(),this.imgModal=this.ModalActived.modal,this.scrollEventActive()},destroyed:function(){this.scrollEventUnActive()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({ModalActived:"modal/isModalActived",imageModal:"modal/getImageModal"})),methods:{scrollEventActive:function(){window.addEventListener("DOMMouseScroll",this.handleMouseWheelDOM),window.addEventListener("mousewheel",this.handleMouseWheel,{passive:!1}),window.addEventListener("touchstart",this.touchStart,{passive:!1}),window.addEventListener("touchmove",this.touchMove,{passive:!1})},scrollEventUnActive:function(){window.removeEventListener("resize",this.onResize),window.removeEventListener("mousewheel",this.handleMouseWheel,{passive:!1}),window.removeEventListener("DOMMouseScroll",this.handleMouseWheelDOM),window.removeEventListener("touchstart",this.touchStart),window.removeEventListener("touchmove",this.touchMove)},calculateSectionOffsets:function(){for(var t=document.getElementsByTagName("section"),e=t.length,i=0;i<e;i++){var o=t[i].offsetTop;this.offsets.push(o)}},handleMouseWheel:function(t){return t.wheelDelta<30&&!this.inMove?this.moveUp():t.wheelDelta>30&&!this.inMove&&this.moveDown(),t.preventDefault(),!1},handleMouseWheelDOM:function(t){return t.detail>0&&!this.inMove?this.moveUp():t.detail<0&&!this.inMove&&this.moveDown(),!1},moveDown:function(){this.inMove=!0,this.activeSection--,this.activeSection<0&&(this.activeSection=0),this.scrollToSection(this.activeSection,!0)},moveUp:function(){this.inMove=!0,this.activeSection++,this.activeSection>this.offsets.length-1&&(this.activeSection=this.offsets.length-1),this.scrollToSection(this.activeSection,!0)},scrollToSection:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.inMove&&!o)return!1;this.activeSection=t,this.inMove=!0,document.getElementsByTagName("section")[t].scrollIntoView({behavior:"smooth"}),setTimeout((function(){e.inMove=!1}),400)},touchStart:function(t){t.preventDefault(),this.touchStartY=t.touches[0].clientY},touchMove:function(t){if(this.inMove)return!1;t.preventDefault();var e=t.touches[0].clientY;return this.touchStartY<e?this.moveDown():this.touchStartY>e&&this.moveUp(),this.touchStartY=0,!1},onResize:function(){this.screenWidth=window.innerWidth},closeModal:function(){this.scrollEventActive(),this.$store.commit("modal/setImageModal",{img:""}),this.$store.commit("modal/setModalShow",{value:!1}),this.$store.commit("modal/setPageScroll",{value:!0})}}},v=d,m=(o(348),o(51)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"web-bg"},[o("section",[o("HomeBanner")],1),t._v(" "),t._l(t.folioData,(function(t,e){return o("section",{key:e},[o("FolioSection",{attrs:{folioData:t,folioNumber:e}})],1)}))],2),t._v(" "),t._m(0),t._v(" "),t.ModalActived.modal?o("div",{staticClass:"modal-container"},[o("div",{staticClass:"bg-modal"}),t._v(" "),o("div",{staticClass:"close-modal",on:{click:t.closeModal}},[o("h3",[o("font-awesome-icon",{attrs:{icon:"fa-solid fa-circle-xmark"}})],1)]),t._v(" "),o("div",{staticClass:"modal-img-container d-flex justify-content-center"},[o("img",{staticClass:"modal-img",attrs:{src:t.imageModal}})])]):t._e()])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"web-bg-pic"},[o("div",{staticClass:"circle-1"}),t._v(" "),o("div",{staticClass:"circle-2"})])}],!1,null,null,null);e.default=component.exports}}]);