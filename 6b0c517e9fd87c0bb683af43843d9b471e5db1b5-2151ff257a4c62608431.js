(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5653],{42109:function(t,e,n){"use strict";n.d(e,{Z:function(){return X}});var r=n(67294),o=n(45697),i=n.n(o),a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),s=new Uint8Array(16);function l(){if(!a)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(s)}for(var u=[],c=0;c<256;++c)u[c]=(c+256).toString(16).substr(1);var p=function(t,e){var n=e||0,r=u;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")};var d=function(t,e,n){var r=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||l)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e)for(var i=0;i<16;++i)e[r+i]=o[i];return e||p(o)};function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function E(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}var T={HIDE:"__react_tooltip_hide_event",REBUILD:"__react_tooltip_rebuild_event",SHOW:"__react_tooltip_show_event"},x=function(t,e){var n;"function"==typeof window.CustomEvent?n=new window.CustomEvent(t,{detail:e}):(n=document.createEvent("Event")).initEvent(t,!1,!0,e),window.dispatchEvent(n)};var L=function(t,e){var n=this.state.show,r=this.props.id,o=this.isCapture(e.currentTarget),i=e.currentTarget.getAttribute("currentItem");o||e.stopPropagation(),n&&"true"===i?t||this.hideTooltip(e):(e.currentTarget.setAttribute("currentItem","true"),_(e.currentTarget,this.getTargetArray(r)),this.showTooltip(e))},_=function(t,e){for(var n=0;n<e.length;n++)t!==e[n]?e[n].setAttribute("currentItem","false"):e[n].setAttribute("currentItem","true")},C={id:"9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",set:function(t,e,n){this.id in t?t[this.id][e]=n:Object.defineProperty(t,this.id,{configurable:!0,value:b({},e,n)})},get:function(t,e){var n=t[this.id];if(void 0!==n)return n[e]}};var k=function(t,e,n){var r=e.respectEffect,o=void 0!==r&&r,i=e.customEvent,a=void 0!==i&&i,s=this.props.id,l=n.target.getAttribute("data-tip")||null,u=n.target.getAttribute("data-for")||null,c=n.target;if(!this.isCustomEvent(c)||a){var p=null==s&&null==u||u===s;if(null!=l&&(!o||"float"===this.getEffect(c))&&p){var d=function(t){var e={};for(var n in t)"function"==typeof t[n]?e[n]=t[n].bind(t):e[n]=t[n];return e}(n);d.currentTarget=c,t(d)}}},O=function(t,e){var n={};return t.forEach((function(t){var r=t.getAttribute(e);r&&r.split(" ").forEach((function(t){return n[t]=!0}))})),n},S=function(){return document.getElementsByTagName("body")[0]};function A(t,e,n,r,o,i,a){for(var s=R(n),l=s.width,u=s.height,c=R(e),p=c.width,d=c.height,f=P(t,e,i),h=f.mouseX,b=f.mouseY,m=j(i,p,d,l,u),v=H(a),g=v.extraOffsetX,y=v.extraOffsetY,w=window.innerWidth,E=window.innerHeight,T=I(n),x=T.parentTop,L=T.parentLeft,_=function(t){var e=m[t].l;return h+e+g},C=function(t){var e=m[t].t;return b+e+y},k=function(t){return function(t){var e=m[t].r;return h+e+g}(t)>w},O=function(t){return function(t){var e=m[t].b;return b+e+y}(t)>E},S=function(t){return function(t){return _(t)<0}(t)||k(t)||function(t){return C(t)<0}(t)||O(t)},A=function(t){return!S(t)},B=["top","bottom","left","right"],N=[],D=0;D<4;D++){var M=B[D];A(M)&&N.push(M)}var U,W=!1,z=o!==r;return A(o)&&z?(W=!0,U=o):N.length>0&&S(o)&&S(r)&&(W=!0,U=N[0]),W?{isNewState:!0,newState:{place:U}}:{isNewState:!1,position:{left:parseInt(_(r)-L,10),top:parseInt(C(r)-x,10)}}}var R=function(t){var e=t.getBoundingClientRect(),n=e.height,r=e.width;return{height:parseInt(n,10),width:parseInt(r,10)}},P=function(t,e,n){var r=e.getBoundingClientRect(),o=r.top,i=r.left,a=R(e),s=a.width,l=a.height;return"float"===n?{mouseX:t.clientX,mouseY:t.clientY}:{mouseX:i+s/2,mouseY:o+l/2}},j=function(t,e,n,r,o){var i,a,s,l;return"float"===t?(i={l:-r/2,r:r/2,t:-(o+3+2),b:-3},s={l:-r/2,r:r/2,t:15,b:o+3+2+12},l={l:-(r+3+2),r:-3,t:-o/2,b:o/2},a={l:3,r:r+3+2,t:-o/2,b:o/2}):"solid"===t&&(i={l:-r/2,r:r/2,t:-(n/2+o+2),b:-n/2},s={l:-r/2,r:r/2,t:n/2,b:n/2+o+2},l={l:-(r+e/2+2),r:-e/2,t:-o/2,b:o/2},a={l:e/2,r:r+e/2+2,t:-o/2,b:o/2}),{top:i,bottom:s,left:l,right:a}},H=function(t){var e=0,n=0;for(var r in"[object String]"===Object.prototype.toString.apply(t)&&(t=JSON.parse(t.toString().replace(/'/g,'"'))),t)"top"===r?n-=parseInt(t[r],10):"bottom"===r?n+=parseInt(t[r],10):"left"===r?e-=parseInt(t[r],10):"right"===r&&(e+=parseInt(t[r],10));return{extraOffsetX:e,extraOffsetY:n}},I=function(t){for(var e=t;e;){var n=window.getComputedStyle(e);if("none"!==n.getPropertyValue("transform")||"transform"===n.getPropertyValue("will-change"))break;e=e.parentElement}return{parentTop:e&&e.getBoundingClientRect().top||0,parentLeft:e&&e.getBoundingClientRect().left||0}};function B(t,e,n,o){if(e)return e;if(null!=n)return n;if(null===n)return null;var i=/<br\s*\/?>/;return o&&"false"!==o&&i.test(t)?t.split(i).map((function(t,e){return r.createElement("span",{key:e,className:"multi-line"},t)})):t}function N(t){var e={};return Object.keys(t).filter((function(t){return/(^aria-\w+$|^role$)/.test(t)})).forEach((function(n){e[n]=t[n]})),e}function D(t){var e=t.length;return t.hasOwnProperty?Array.prototype.slice.call(t):new Array(e).fill().map((function(e){return t[e]}))}var M,U,W,z={dark:{text:"#fff",background:"#222",border:"transparent",arrow:"#222"},success:{text:"#fff",background:"#8DC572",border:"transparent",arrow:"#8DC572"},warning:{text:"#fff",background:"#F0AD4E",border:"transparent",arrow:"#F0AD4E"},error:{text:"#fff",background:"#BE6464",border:"transparent",arrow:"#BE6464"},info:{text:"#fff",background:"#337AB7",border:"transparent",arrow:"#337AB7"},light:{text:"#222",background:"#fff",border:"transparent",arrow:"#fff"}};function F(t,e,n,r){return function(t,e){var n=e.text,r=e.background,o=e.border,i=e.arrow;return"\n  \t.".concat(t," {\n\t    color: ").concat(n,";\n\t    background: ").concat(r,";\n\t    border: 1px solid ").concat(o,";\n  \t}\n\n  \t.").concat(t,".place-top {\n        margin-top: -10px;\n    }\n    .").concat(t,".place-top::before {\n        border-top: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-top::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-top-color: ").concat(i,";\n        border-top-style: solid;\n        border-top-width: 6px;\n    }\n\n    .").concat(t,".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(t,".place-bottom::before {\n        border-bottom: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-bottom::after {\n        border-left: 8px solid transparent;\n        border-right: 8px solid transparent;\n        top: -6px;\n        left: 50%;\n        margin-left: -8px;\n        border-bottom-color: ").concat(i,";\n        border-bottom-style: solid;\n        border-bottom-width: 6px;\n    }\n\n    .").concat(t,".place-left {\n        margin-left: -10px;\n    }\n    .").concat(t,".place-left::before {\n        border-left: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-left::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        right: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-left-color: ").concat(i,";\n        border-left-style: solid;\n        border-left-width: 6px;\n    }\n\n    .").concat(t,".place-right {\n        margin-left: 10px;\n    }\n    .").concat(t,".place-right::before {\n        border-right: 8px solid ").concat(o,";\n    }\n    .").concat(t,".place-right::after {\n        border-top: 5px solid transparent;\n        border-bottom: 5px solid transparent;\n        left: -6px;\n        top: 50%;\n        margin-top: -4px;\n        border-right-color: ").concat(i,";\n        border-right-style: solid;\n        border-right-width: 6px;\n    }\n  ")}(t,function(t,e,n){var r=t.text,o=t.background,i=t.border,a=t.arrow?t.arrow:t.background,s=function(t){return z[t]?g({},z[t]):void 0}(e);r&&(s.text=r);o&&(s.background=o);n&&(s.border=i||("light"===e?"black":"white"));a&&(s.arrow=a);return s}(e,n,r))}var V,X=function(t){t.hide=function(t){x(T.HIDE,{target:t})},t.rebuild=function(){x(T.REBUILD)},t.show=function(t){x(T.SHOW,{target:t})},t.prototype.globalRebuild=function(){this.mount&&(this.unbindListener(),this.bindListener())},t.prototype.globalShow=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.showTooltip({currentTarget:e&&t.detail.target},!0)}},t.prototype.globalHide=function(t){if(this.mount){var e=!!(t&&t.detail&&t.detail.target);this.hideTooltip({currentTarget:e&&t.detail.target},e)}}}(M=function(t){t.prototype.bindWindowEvents=function(t){window.removeEventListener(T.HIDE,this.globalHide),window.addEventListener(T.HIDE,this.globalHide,!1),window.removeEventListener(T.REBUILD,this.globalRebuild),window.addEventListener(T.REBUILD,this.globalRebuild,!1),window.removeEventListener(T.SHOW,this.globalShow),window.addEventListener(T.SHOW,this.globalShow,!1),t&&(window.removeEventListener("resize",this.onWindowResize),window.addEventListener("resize",this.onWindowResize,!1))},t.prototype.unbindWindowEvents=function(){window.removeEventListener(T.HIDE,this.globalHide),window.removeEventListener(T.REBUILD,this.globalRebuild),window.removeEventListener(T.SHOW,this.globalShow),window.removeEventListener("resize",this.onWindowResize)},t.prototype.onWindowResize=function(){this.mount&&this.hideTooltip()}}(M=function(t){t.prototype.isCustomEvent=function(t){return this.state.event||!!t.getAttribute("data-event")},t.prototype.customBindListener=function(t){var e=this,n=this.state,r=n.event,o=n.eventOff,i=t.getAttribute("data-event")||r,a=t.getAttribute("data-event-off")||o;i.split(" ").forEach((function(n){t.removeEventListener(n,C.get(t,n));var r=L.bind(e,a);C.set(t,n,r),t.addEventListener(n,r,!1)})),a&&a.split(" ").forEach((function(n){t.removeEventListener(n,e.hideTooltip),t.addEventListener(n,e.hideTooltip,!1)}))},t.prototype.customUnbindListener=function(t){var e=this.state,n=e.event,r=e.eventOff,o=n||t.getAttribute("data-event"),i=r||t.getAttribute("data-event-off");t.removeEventListener(o,C.get(t,n)),i&&t.removeEventListener(i,this.hideTooltip)}}(M=function(t){t.prototype.isCapture=function(t){return t&&"true"===t.getAttribute("data-iscapture")||this.props.isCapture||!1}}(M=function(t){t.prototype.getEffect=function(t){return t.getAttribute("data-effect")||this.props.effect||"float"}}(M=function(t){t.prototype.isBodyMode=function(){return!!this.props.bodyMode},t.prototype.bindBodyListener=function(t){var e=this,n=this.state,r=n.event,o=n.eventOff,i=n.possibleCustomEvents,a=n.possibleCustomEventsOff,s=S(),l=O(t,"data-event"),u=O(t,"data-event-off");null!=r&&(l[r]=!0),null!=o&&(u[o]=!0),i.split(" ").forEach((function(t){return l[t]=!0})),a.split(" ").forEach((function(t){return u[t]=!0})),this.unbindBodyListener(s);var c=this.bodyModeListeners={};for(var p in null==r&&(c.mouseover=k.bind(this,this.showTooltip,{}),c.mousemove=k.bind(this,this.updateTooltip,{respectEffect:!0}),c.mouseout=k.bind(this,this.hideTooltip,{})),l)c[p]=k.bind(this,(function(t){var n=t.currentTarget.getAttribute("data-event-off")||o;L.call(e,n,t)}),{customEvent:!0});for(var d in u)c[d]=k.bind(this,this.hideTooltip,{customEvent:!0});for(var f in c)s.addEventListener(f,c[f])},t.prototype.unbindBodyListener=function(t){t=t||S();var e=this.bodyModeListeners;for(var n in e)t.removeEventListener(n,e[n])}}((W=U=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=E(this,y(e).call(this,t))).state={uuid:t.uuid||"t"+d(),place:t.place||"top",desiredPlace:t.place||"top",type:"dark",effect:"float",show:!1,border:!1,customColors:{},offset:{},extraClass:"",html:!1,delayHide:0,delayShow:0,event:t.event||null,eventOff:t.eventOff||null,currentEvent:null,currentTarget:null,ariaProps:N(t),isEmptyTip:!1,disable:!1,possibleCustomEvents:t.possibleCustomEvents||"",possibleCustomEventsOff:t.possibleCustomEventsOff||"",originTooltip:null,isMultiline:!1},n.bind(["showTooltip","updateTooltip","hideTooltip","hideTooltipOnScroll","getTooltipContent","globalRebuild","globalShow","globalHide","onWindowResize","mouseOnToolTip"]),n.mount=!0,n.delayShowLoop=null,n.delayHideLoop=null,n.delayReshow=null,n.intervalUpdateContent=null,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,t),h(e,null,[{key:"propTypes",get:function(){return{uuid:i().string,children:i().any,place:i().string,type:i().string,effect:i().string,offset:i().object,multiline:i().bool,border:i().bool,textColor:i().string,backgroundColor:i().string,borderColor:i().string,arrowColor:i().string,insecure:i().bool,class:i().string,className:i().string,id:i().string,html:i().bool,delayHide:i().number,delayUpdate:i().number,delayShow:i().number,event:i().string,eventOff:i().string,isCapture:i().bool,globalEventOff:i().string,getContent:i().any,afterShow:i().func,afterHide:i().func,overridePosition:i().func,disable:i().bool,scrollHide:i().bool,resizeHide:i().bool,wrapper:i().string,bodyMode:i().bool,possibleCustomEvents:i().string,possibleCustomEventsOff:i().string,clickable:i().bool}}}]),h(e,[{key:"bind",value:function(t){var e=this;t.forEach((function(t){e[t]=e[t].bind(e)}))}},{key:"componentDidMount",value:function(){var t=this.props,e=(t.insecure,t.resizeHide);this.bindListener(),this.bindWindowEvents(e),this.injectStyles()}},{key:"componentWillUnmount",value:function(){this.mount=!1,this.clearTimer(),this.unbindListener(),this.removeScrollListener(this.state.currentTarget),this.unbindWindowEvents()}},{key:"injectStyles",value:function(){var t=this.tooltipRef;if(t){for(var e,n=t.parentNode;n.parentNode;)n=n.parentNode;switch(n.constructor.name){case"Document":case"HTMLDocument":e=n.head;break;case"ShadowRoot":default:e=n}if(!e.querySelector("style[data-react-tooltip]")){var r=document.createElement("style");r.textContent='.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  padding: 8px 21px;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  bottom: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-bottom::before {\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  top: -8px;\n  left: 50%;\n  margin-left: -10px;\n}\n.__react_component_tooltip.place-left::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  right: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip.place-right::before {\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  left: -8px;\n  top: 50%;\n  margin-top: -5px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}',r.setAttribute("data-react-tooltip","true"),e.appendChild(r)}}}},{key:"mouseOnToolTip",value:function(){return!(!this.state.show||!this.tooltipRef)&&(this.tooltipRef.matches||(this.tooltipRef.msMatchesSelector?this.tooltipRef.matches=this.tooltipRef.msMatchesSelector:this.tooltipRef.matches=this.tooltipRef.mozMatchesSelector),this.tooltipRef.matches(":hover"))}},{key:"getTargetArray",value:function(t){var e,n=[];if(t){var r=t.replace(/\\/g,"\\\\").replace(/"/g,'\\"');e='[data-tip][data-for="'.concat(r,'"]')}else e="[data-tip]:not([data-for])";return D(document.getElementsByTagName("*")).filter((function(t){return t.shadowRoot})).forEach((function(t){n=n.concat(D(t.shadowRoot.querySelectorAll(e)))})),n.concat(D(document.querySelectorAll(e)))}},{key:"bindListener",value:function(){var t=this,e=this.props,n=e.id,r=e.globalEventOff,o=e.isCapture,i=this.getTargetArray(n);i.forEach((function(e){null===e.getAttribute("currentItem")&&e.setAttribute("currentItem","false"),t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),this.isBodyMode()?this.bindBodyListener(i):i.forEach((function(e){var n=t.isCapture(e),r=t.getEffect(e);t.isCustomEvent(e)?t.customBindListener(e):(e.addEventListener("mouseenter",t.showTooltip,n),"float"===r&&e.addEventListener("mousemove",t.updateTooltip,n),e.addEventListener("mouseleave",t.hideTooltip,n))})),r&&(window.removeEventListener(r,this.hideTooltip),window.addEventListener(r,this.hideTooltip,o)),this.bindRemovalTracker()}},{key:"unbindListener",value:function(){var t=this,e=this.props,n=e.id,r=e.globalEventOff;this.isBodyMode()?this.unbindBodyListener():this.getTargetArray(n).forEach((function(e){t.unbindBasicListener(e),t.isCustomEvent(e)&&t.customUnbindListener(e)})),r&&window.removeEventListener(r,this.hideTooltip),this.unbindRemovalTracker()}},{key:"unbindBasicListener",value:function(t){var e=this.isCapture(t);t.removeEventListener("mouseenter",this.showTooltip,e),t.removeEventListener("mousemove",this.updateTooltip,e),t.removeEventListener("mouseleave",this.hideTooltip,e)}},{key:"getTooltipContent",value:function(){var t,e=this.props,n=e.getContent,r=e.children;return n&&(t=Array.isArray(n)?n[0]&&n[0](this.state.originTooltip):n(this.state.originTooltip)),B(this.state.originTooltip,r,t,this.state.isMultiline)}},{key:"isEmptyTip",value:function(t){return"string"==typeof t&&""===t||null===t}},{key:"showTooltip",value:function(t,e){if(this.tooltipRef){if(e&&!this.getTargetArray(this.props.id).some((function(e){return e===t.currentTarget})))return;var n=this.props,r=n.multiline,o=n.getContent,i=t.currentTarget.getAttribute("data-tip"),a=t.currentTarget.getAttribute("data-multiline")||r||!1,s=t instanceof window.FocusEvent||e,l=!0;t.currentTarget.getAttribute("data-scroll-hide")?l="true"===t.currentTarget.getAttribute("data-scroll-hide"):null!=this.props.scrollHide&&(l=this.props.scrollHide);var u=t.currentTarget.getAttribute("data-place")||this.props.place||"top",c=s?"solid":this.getEffect(t.currentTarget),p=t.currentTarget.getAttribute("data-offset")||this.props.offset||{},d=A(t,t.currentTarget,this.tooltipRef,u,u,c,p);d.position&&this.props.overridePosition&&(d.position=this.props.overridePosition(d.position,t,t.currentTarget,this.tooltipRef,u,u,c,p));var f=d.isNewState?d.newState.place:u;this.clearTimer();var h=t.currentTarget,b=this.state.show?h.getAttribute("data-delay-update")||this.props.delayUpdate:0,m=this,v=function(){m.setState({originTooltip:i,isMultiline:a,desiredPlace:u,place:f,type:h.getAttribute("data-type")||m.props.type||"dark",customColors:{text:h.getAttribute("data-text-color")||m.props.textColor||null,background:h.getAttribute("data-background-color")||m.props.backgroundColor||null,border:h.getAttribute("data-border-color")||m.props.borderColor||null,arrow:h.getAttribute("data-arrow-color")||m.props.arrowColor||null},effect:c,offset:p,html:(h.getAttribute("data-html")?"true"===h.getAttribute("data-html"):m.props.html)||!1,delayShow:h.getAttribute("data-delay-show")||m.props.delayShow||0,delayHide:h.getAttribute("data-delay-hide")||m.props.delayHide||0,delayUpdate:h.getAttribute("data-delay-update")||m.props.delayUpdate||0,border:(h.getAttribute("data-border")?"true"===h.getAttribute("data-border"):m.props.border)||!1,extraClass:h.getAttribute("data-class")||m.props.class||m.props.className||"",disable:(h.getAttribute("data-tip-disable")?"true"===h.getAttribute("data-tip-disable"):m.props.disable)||!1,currentTarget:h},(function(){l&&m.addScrollListener(m.state.currentTarget),m.updateTooltip(t),o&&Array.isArray(o)&&(m.intervalUpdateContent=setInterval((function(){if(m.mount){var t=m.props.getContent,e=B(i,"",t[0](),a),n=m.isEmptyTip(e);m.setState({isEmptyTip:n}),m.updatePosition()}}),o[1]))}))};b?this.delayReshow=setTimeout(v,b):v()}}},{key:"updateTooltip",value:function(t){var e=this,n=this.state,r=n.delayShow,o=n.disable,i=this.props.afterShow,a=this.getTooltipContent(),s=t.currentTarget||t.target;if(!this.mouseOnToolTip()&&!this.isEmptyTip(a)&&!o){var l=this.state.show?0:parseInt(r,10),u=function(){if(Array.isArray(a)&&a.length>0||a){var n=!e.state.show;e.setState({currentEvent:t,currentTarget:s,show:!0},(function(){e.updatePosition(),n&&i&&i(t)}))}};clearTimeout(this.delayShowLoop),l?this.delayShowLoop=setTimeout(u,l):u()}}},{key:"listenForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.addEventListener("mouseleave",this.hideTooltip)}},{key:"removeListenerForTooltipExit",value:function(){this.state.show&&this.tooltipRef&&this.tooltipRef.removeEventListener("mouseleave",this.hideTooltip)}},{key:"hideTooltip",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isScroll:!1},o=this.state.disable,i=r.isScroll,a=i?0:this.state.delayHide,s=this.props.afterHide,l=this.getTooltipContent();if(this.mount&&!this.isEmptyTip(l)&&!o){if(e){var u=this.getTargetArray(this.props.id),c=u.some((function(e){return e===t.currentTarget}));if(!c||!this.state.show)return}var p=function(){var e=n.state.show;n.mouseOnToolTip()?n.listenForTooltipExit():(n.removeListenerForTooltipExit(),n.setState({show:!1},(function(){n.removeScrollListener(n.state.currentTarget),e&&s&&s(t)})))};this.clearTimer(),a?this.delayHideLoop=setTimeout(p,parseInt(a,10)):p()}}},{key:"hideTooltipOnScroll",value:function(t,e){this.hideTooltip(t,e,{isScroll:!0})}},{key:"addScrollListener",value:function(t){var e=this.isCapture(t);window.addEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"removeScrollListener",value:function(t){var e=this.isCapture(t);window.removeEventListener("scroll",this.hideTooltipOnScroll,e)}},{key:"updatePosition",value:function(){var t=this,e=this.state,n=e.currentEvent,r=e.currentTarget,o=e.place,i=e.desiredPlace,a=e.effect,s=e.offset,l=this.tooltipRef,u=A(n,r,l,o,i,a,s);if(u.position&&this.props.overridePosition&&(u.position=this.props.overridePosition(u.position,n,r,l,o,i,a,s)),u.isNewState)return this.setState(u.newState,(function(){t.updatePosition()}));l.style.left=u.position.left+"px",l.style.top=u.position.top+"px"}},{key:"clearTimer",value:function(){clearTimeout(this.delayShowLoop),clearTimeout(this.delayHideLoop),clearTimeout(this.delayReshow),clearInterval(this.intervalUpdateContent)}},{key:"hasCustomColors",value:function(){var t=this;return Boolean(Object.keys(this.state.customColors).find((function(e){return"border"!==e&&t.state.customColors[e]}))||this.state.border&&this.state.customColors.border)}},{key:"render",value:function(){var t=this,n=this.state,o=n.extraClass,i=n.html,a=n.ariaProps,s=n.disable,l=this.getTooltipContent(),u=this.isEmptyTip(l),c=F(this.state.uuid,this.state.customColors,this.state.type,this.state.border),p="__react_component_tooltip"+" ".concat(this.state.uuid)+(!this.state.show||s||u?"":" show")+(this.state.border?" border":"")+" place-".concat(this.state.place)+" type-".concat(this.hasCustomColors()?"custom":this.state.type)+(this.props.delayUpdate?" allow_hover":"")+(this.props.clickable?" allow_click":""),d=this.props.wrapper;e.supportedWrappers.indexOf(d)<0&&(d=e.defaultProps.wrapper);var f=[p,o].filter(Boolean).join(" ");if(i){var h="".concat(l,"\n<style>").concat(c,"</style>");return r.createElement(d,m({className:"".concat(f),id:this.props.id,ref:function(e){return t.tooltipRef=e}},a,{"data-id":"tooltip",dangerouslySetInnerHTML:{__html:h}}))}return r.createElement(d,m({className:"".concat(f),id:this.props.id},a,{ref:function(e){return t.tooltipRef=e},"data-id":"tooltip"}),r.createElement("style",{dangerouslySetInnerHTML:{__html:c}}),l)}}],[{key:"getDerivedStateFromProps",value:function(t,e){var n=e.ariaProps,r=N(t);return Object.keys(r).some((function(t){return r[t]!==n[t]}))?g({},e,{ariaProps:r}):null}}]),e}(r.Component),b(U,"defaultProps",{insecure:!0,resizeHide:!0,wrapper:"div",clickable:!1}),b(U,"supportedWrappers",["div","span"]),b(U,"displayName","ReactTooltip"),(V=M=W).prototype.bindRemovalTracker=function(){var t=this,e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(null!=e){var n=new e((function(e){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.removedNodes.length;o++)if(r.removedNodes[o]===t.state.currentTarget)return void t.hideTooltip()}));n.observe(window.document,{childList:!0,subtree:!0}),this.removalTracker=n}},M=void(V.prototype.unbindRemovalTracker=function(){this.removalTracker&&(this.removalTracker.disconnect(),this.removalTracker=null)})||M))||M)||M)||M)||M)||M)||M},96371:function(t,e,n){"use strict";var r=n(19756),o=n(67294),i=(n(25444),n(62347));e.Z=function(t){var e=t.childImageSharp,n=t.extension,a=t.publicURL,s=t.alt,l=(0,r.Z)(t,["childImageSharp","extension","publicURL","alt"]);return e||"svg"!==n?o.createElement(i.G,Object.assign({image:e.gatsbyImageData},l,{alt:s})):o.createElement("div",{className:"old-gatsby-image-wrapper"},o.createElement("img",{src:a,alt:s}))}},35318:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(67294),o=n(25444),i=n(88449),a=n.n(i),s=n(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),l=n(96371),u=function(t,e){return r.createElement(r.Fragment,null,e?r.createElement(o.Link,{to:"/community/members/"+a()(t.name)},r.createElement("span",null,t.name)):r.createElement("span",null,t.name))},c=function(t){var e=t.category,n=t.title,i=t.subtitle,c=t.author,p=t.thumbnail,d=!1;c&&(d=(0,o.useStaticQuery)("1485533831").allMdx.nodes.some((function(t){return t.frontmatter.name==c.name})));return r.createElement(s,null,r.createElement("div",{className:"page-header"},p&&r.createElement("div",{className:"feature-image"},r.createElement(l.Z,Object.assign({},p,{imgStyle:{objectFit:"contain"},alt:n}))),r.createElement("h1",{className:"page-title"},n),i&&r.createElement("h3",null,i),e&&r.createElement("div",{className:"breadcrumbs"},r.createElement("span",null,r.createElement("h5",null,"Category:"),r.createElement("p",{key:e},r.createElement(o.Link,{to:"/blog/category/"+a()(e)},r.createElement("span",null,e)))),c&&r.createElement(r.Fragment,null,r.createElement("span",null,r.createElement("h5",null,"By:"),r.createElement("p",null,u(c,d))))),!e&&c&&r.createElement("div",{className:"breadcrumbs post"},r.createElement("h5",null,"By:"),r.createElement("span",null,u(c,d)))))}},88449:function(t){t.exports=function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}}]);
//# sourceMappingURL=6b0c517e9fd87c0bb683af43843d9b471e5db1b5-2151ff257a4c62608431.js.map