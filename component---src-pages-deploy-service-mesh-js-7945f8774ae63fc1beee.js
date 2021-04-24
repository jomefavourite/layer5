(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8355],{96633:function(e,n,t){e.exports=t(42465)},23344:function(e,n,t){"use strict";var r=t(1599),o=t(27202),a=t(70116),i=t(78710),s=t(23656),c=t(42306),l=t(30778),u=t(51191);e.exports=function(e){return new Promise((function(n,t){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var m=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(f+":"+h)}var g=s(e.baseURL,e.url);if(m.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m.onreadystatechange=function(){if(m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in m?c(m.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m};o(n,t,a),m=null}},m.onabort=function(){m&&(t(u("Request aborted",e,"ECONNABORTED",m)),m=null)},m.onerror=function(){t(u("Network Error",e,null,m)),m=null},m.ontimeout=function(){var n="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(n=e.timeoutErrorMessage),t(u(n,e,"ECONNABORTED",m)),m=null},r.isStandardBrowserEnv()){var x=(e.withCredentials||l(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;x&&(p[e.xsrfHeaderName]=x)}if("setRequestHeader"in m&&r.forEach(p,(function(e,n){void 0===d&&"content-type"===n.toLowerCase()?delete p[n]:m.setRequestHeader(n,e)})),r.isUndefined(e.withCredentials)||(m.withCredentials=!!e.withCredentials),e.responseType)try{m.responseType=e.responseType}catch(v){if("json"!==e.responseType)throw v}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){m&&(m.abort(),t(e),m=null)})),d||(d=null),m.send(d)}))}},42465:function(e,n,t){"use strict";var r=t(1599),o=t(46013),a=t(82234),i=t(75469);function s(e){var n=new a(e),t=o(a.prototype.request,n);return r.extend(t,a.prototype,n),r.extend(t,n),t}var c=s(t(98943));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=t(26114),c.CancelToken=t(64396),c.isCancel=t(7458),c.all=function(e){return Promise.all(e)},c.spread=t(92744),c.isAxiosError=t(6683),e.exports=c,e.exports.default=c},26114:function(e){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},64396:function(e,n,t){"use strict";var r=t(26114);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var t=this;e((function(e){t.reason||(t.reason=new r(e),n(t.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(n){e=n})),cancel:e}},e.exports=o},7458:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},82234:function(e,n,t){"use strict";var r=t(1599),o=t(78710),a=t(35950),i=t(34126),s=t(75469);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=[i,void 0],t=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){n.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){n.push(e.fulfilled,e.rejected)}));n.length;)t=t.then(n.shift(),n.shift());return t},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(n,t){return this.request(s(t||{},{method:e,url:n,data:(t||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(n,t,r){return this.request(s(r||{},{method:e,url:n,data:t}))}})),e.exports=c},35950:function(e,n,t){"use strict";var r=t(1599);function o(){this.handlers=[]}o.prototype.use=function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(n){null!==n&&e(n)}))},e.exports=o},23656:function(e,n,t){"use strict";var r=t(789),o=t(7020);e.exports=function(e,n){return e&&!r(n)?o(e,n):n}},51191:function(e,n,t){"use strict";var r=t(87822);e.exports=function(e,n,t,o,a){var i=new Error(e);return r(i,n,t,o,a)}},34126:function(e,n,t){"use strict";var r=t(1599),o=t(17989),a=t(7458),i=t(98943);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(n){delete e.headers[n]})),(e.adapter||i.adapter)(e).then((function(n){return s(e),n.data=o(n.data,n.headers,e.transformResponse),n}),(function(n){return a(n)||(s(e),n&&n.response&&(n.response.data=o(n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)}))}},87822:function(e){"use strict";e.exports=function(e,n,t,r,o){return e.config=n,t&&(e.code=t),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},75469:function(e,n,t){"use strict";var r=t(1599);e.exports=function(e,n){n=n||{};var t={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,n){return r.isPlainObject(e)&&r.isPlainObject(n)?r.merge(e,n):r.isPlainObject(n)?r.merge({},n):r.isArray(n)?n.slice():n}function l(o){r.isUndefined(n[o])?r.isUndefined(e[o])||(t[o]=c(void 0,e[o])):t[o]=c(e[o],n[o])}r.forEach(o,(function(e){r.isUndefined(n[e])||(t[e]=c(void 0,n[e]))})),r.forEach(a,l),r.forEach(i,(function(o){r.isUndefined(n[o])?r.isUndefined(e[o])||(t[o]=c(void 0,e[o])):t[o]=c(void 0,n[o])})),r.forEach(s,(function(r){r in n?t[r]=c(e[r],n[r]):r in e&&(t[r]=c(void 0,e[r]))}));var u=o.concat(a).concat(i).concat(s),d=Object.keys(e).concat(Object.keys(n)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(d,l),t}},27202:function(e,n,t){"use strict";var r=t(51191);e.exports=function(e,n,t){var o=t.config.validateStatus;t.status&&o&&!o(t.status)?n(r("Request failed with status code "+t.status,t.config,null,t.request,t)):e(t)}},17989:function(e,n,t){"use strict";var r=t(1599);e.exports=function(e,n,t){return r.forEach(t,(function(t){e=t(e,n)})),e}},98943:function(e,n,t){"use strict";var r=t(1599),o=t(24188),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,n){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=n)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=t(23344)),s),transformRequest:[function(e,n){return o(n,"Accept"),o(n,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(n){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c},46013:function(e){"use strict";e.exports=function(e,n){return function(){for(var t=new Array(arguments.length),r=0;r<t.length;r++)t[r]=arguments[r];return e.apply(n,t)}}},78710:function(e,n,t){"use strict";var r=t(1599);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,n,t){if(!n)return e;var a;if(t)a=t(n);else if(r.isURLSearchParams(n))a=n.toString();else{var i=[];r.forEach(n,(function(e,n){null!=e&&(r.isArray(e)?n+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(n)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7020:function(e){"use strict";e.exports=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e}},70116:function(e,n,t){"use strict";var r=t(1599);e.exports=r.isStandardBrowserEnv()?{write:function(e,n,t,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(n)),r.isNumber(t)&&s.push("expires="+new Date(t).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},789:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6683:function(e){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},30778:function(e,n,t){"use strict";var r=t(1599);e.exports=r.isStandardBrowserEnv()?function(){var e,n=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");function o(e){var r=e;return n&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return e=o(window.location.href),function(n){var t=r.isString(n)?o(n):n;return t.protocol===e.protocol&&t.host===e.host}}():function(){return!0}},24188:function(e,n,t){"use strict";var r=t(1599);e.exports=function(e,n){r.forEach(e,(function(t,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(e[n]=t,delete e[r])}))}},42306:function(e,n,t){"use strict";var r=t(1599),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var n,t,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),n=r.trim(e.substr(0,a)).toLowerCase(),t=r.trim(e.substr(a+1)),n){if(i[n]&&o.indexOf(n)>=0)return;i[n]="set-cookie"===n?(i[n]?i[n]:[]).concat([t]):i[n]?i[n]+", "+t:t}})),i):i}},92744:function(e){"use strict";e.exports=function(e){return function(n){return e.apply(null,n)}}},1599:function(e,n,t){"use strict";var r=t(46013),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var n=Object.getPrototypeOf(e);return null===n||n===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function u(e,n){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var t=0,r=e.length;t<r;t++)n.call(null,e[t],t,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return s(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var n={};function t(t,r){c(n[r])&&c(t)?n[r]=e(n[r],t):c(t)?n[r]=e({},t):a(t)?n[r]=t.slice():n[r]=t}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],t);return n},extend:function(e,n,t){return u(n,(function(n,o){e[o]=t&&"function"==typeof n?r(n,t):n})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},44982:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(67294),o=t(70456),a=t(20092),i=t(36179),s=t(97264),c=t(68812),l=t(97956),u=t(38155),d=t(19756),p=t(96633),m=t.n(p),f=o.ZP.div.withConfig({displayName:"DeployServiceMeshstyle__DeployServiceMeshWrapper",componentId:"sc-1lytq5m-0"})(["   \n    html {\n        scroll-behavior: smooth;\n    }\n    h3.sub-heading {\n        margin-top: 2rem;\n        color: ",";\n    }\n    .hero{\n        background-color: #EBC017;\n        height: 35rem;\n        text-align: center;\n        padding: 200px 0px 10px 0px;\n        p{\n            padding-top: 20px; \n        }\n    }\n    .info{\n        padding: 70px 0px 70px 0px;\n        h3{\n            font-weight: 650;\n        }\n        h4{\n            font-weight: 600;\n            padding-bottom: 15px;\n        }\n        p{\n            color: #737373;\n            font-size: 1.2em;\n            padding-right: 20px\n        }\n        .button{\n            text-align: center;\n            padding-top:  20px;\n        }\n    }\n    \n    .arrow{\n        margin: auto;\n        width: auto;\n        padding: 20px;\n        min-height: 400px;\n        margin: 3rem 13%;\n        border-radius: 50px;\n        background-color: #000000;\n        h2{\n            padding-top: 40px;\n            color: white;\n            font-size: 2.5em;\n            font-weight: 700;\n            text-align: center;\n        }\n        .text{\n            color: white;\n            display: flex; \n            padding: 30px 40px 0px 40px;\n            .right{\n                margin-left: auto;\n            }\n            p{\n                padding: 0px 20px 0px 20px;\n                font-size: 1.2em;\n            }\n        }\n    }\n    .form{\n        \n        h3{\n            font-weight: 700;\n        }\n        .submit-btn{\n            text-align: center;\n            padding:  20px 0px 100px 0px;\n         }\n        .text{\n            color: black;\n            display: flex; \n            padding: 30px 60px 20px 150px;\n            p{\n                font-weight: 600;\n            }\n            .right{\n                padding-left: 10px;\n                margin-left: auto;\n            }\n        }\n        #slider{\n            display: flex;\n            padding: 40px\n            h4{\n                font-size: 16px;\n                font-weight: 700;\n                width: 150px;\n            }\n            h5 {\n                font-size: 16px;\n                font-weight: 700;\n                margin-left: 10px;\n                margin-top: 7px;\n            }\n        }\n    }\n    .slidecontainer {\n        width: 100%;\n        position: absolute;\n        margin: 0 auto;\n      }\n      \n      @media screen and (-webkit-min-device-pixel-ratio:0) {\n        input[type='range'] {\n            -webkit-appearance: none;\n            background-color: #D2CECC;\n            -webkit-appearance: none;\n            -moz-apperance: none;\n            border-radius: 6px;\n            height: 6px;  \n        }\n        .bubble {\n            background: red;\n            color: white;\n            padding: 4px 12px;\n            position: absolute;\n            border-radius: 4px;\n            left: 50%;\n            transform: translateX(-50%);\n            font-size: 5px;\n          }\n          .bubble::after {\n            content: \"\";\n            position: absolute;\n            width: 2px;\n            height: 2px;\n            background: red;\n            top: -1px;\n            left: 50%;\n          }\n      .slider {\n        -webkit-appearance: none;\n        width: 100%;\n        height: 10px;\n        border-radius: 5px;\n        background: #d3d3d3;\n        outline: none;\n        opacity: 0.7;\n        -webkit-transition: .2s;\n        transition: opacity .2s;\n        // overflow: hidden;\n        cursor: pointer;\n      }\n      \n      .slider:hover {\n        opacity: 1;\n      }\n      \n      .slider::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        appearance: none;\n        width: 26px;\n        height: 26px;\n        border-radius: 50%;\n        border:5px solid #00B39F;\n        // box-shadow: -100vw 0 0 100vw dodgerblue;\n        background: #FFFFFF;\n        cursor: pointer;\n      }\n      \n      .slider::-moz-range-thumb {\n        width: 25px;\n        height: 25px;\n        border-radius: 50%;\n        background: #4CAF50;\n        cursor: pointer;\n      }\n      .additional{\n          position: relative;\n          .blur{\n            filter: blur(4px);\n          }\n      }\n      .submit{\n          text-align: center;\n          padding: 150px 0px 200px 0px;\n          background-color: rgba(228, 231, 237, 0.8);\n          position:absolute;\n          left: 0;\n        right: 0;\n        margin: auto\n          border-radius: 25px;\n          z-index: 3000;\n        width: 100%;\n        height: 90%;\n        \n          h2{\n              font-weight: 700;\n              padding: 0px 0px 20px 0px;\n          }\n          .email{\n              width: 200px;\n              height: 48px;\n              padding: 15px;\n              margin: 5px;\n              border-radius: 5px;\n              font-size: 15px;\n          }\n          #arrow-btn{\n              width: 60px;\n          }\n      }\n    \n    .book_cover{\n        display: flex;\n        margin: auto;\n        background: #00B39F;\n        .book_col {\n            max-height: 40rem;\n        }\n        .text{\n            padding: 5rem 5rem 5rem 13rem;\n            @media screen and (max-width: 1200px) {\n                padding: 5rem 5rem 5rem 10rem;\n            }\n            @media screen and (max-width: 950px) {\n                padding: 5rem;\n            }\n            @media screen and (max-width: 750px) {\n                padding: 2rem;\n            }\n            .cover{\n                border: 2px solid white;\n                width: 240px;\n                padding: 10px;\n                text-align: center;\n            }\n            h1, p, .learn{\n                color: white;\n            }\n        }\n    }\n\n    .book_img {\n        text-align: center;\n        align-self: center;\n        .bookLink {\n            \n        }\n        img {\n            max-height: 38rem;\n            vertical-align: middle;\n            @media screen and (max-width: 576px) {\n                max-height: 28rem;\n                margin: 1rem auto;\n            }\n        }\n    }\n\n    .tooltip {\n        position: relative;\n        display: inline-block;\n      }\n      \n      .tooltip .tooltiptext {\n        visibility: hidden;\n        \n        background-color: black;\n        color: #fff;\n        text-align: center;\n        border-radius: 6px;\n        padding: 5px 0;\n        font-size: 1rem;\n        \n        /* Position the tooltip */\n        position: absolute;\n        z-index: 1;\n        bottom: 100%;\n        left: 50%;\n        padding: 1rem;\n        margin-left: -140px;\n        width: 12.5rem;\n        font-size: .9125rem;\n        line-height: 1.25rem;\n        text-align: center;\n        width: 300px;\n        color: ",";\n        background: ",";\n        z-index: 3000;\n        border-bottom-right-radius: 0.8rem;\n        border-bottom-left-radius: 0.8rem;\n        transition: all 0.5s ease;\n        p {\n            margin: 0;\n        }\n        &:hover {\n            cursor: default;\n            .tooltiptext {\n                transform: translateY(-0.5rem);\n            }\n        }\n      }\n      \n      .tooltip:hover .tooltiptext {\n        visibility: visible;\n      }\n      .progress {\n        background-color: #d8d8d8;\n        border-radius: 20px;\n        position: relative;\n        margin: 15px 0;\n        height: 30px;\n        width: 90%;\n        margin: 20px auto;\n    }\n    \n    .progress-done {\n        background: linear-gradient(to left, #00B39F, #00D3A9);\n        box-shadow: 0 3px 3px -5px #00B39F, 0 2px 5px #00B39F;\n        border-radius: 20px;\n        color: #fff;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 100%;\n        width: 0;\n        opacity: 0; \n        transition: 1s ease 0.3s;\n    }\n"],(function(e){return e.theme.white}),(function(e){return e.theme.white}),(function(e){return e.theme.tertiaryColor})),h=t(57067),g=t(22626),x=t(25444),v=t.p+"static/book-cover-4361f4cbe9b5267130b5f735fe684181.png",b=(0,r.memo)((function(e){e.classes;var n,t=e.label,o=e.onChange,a=e.value,i=(0,d.Z)(e,["classes","label","onChange","value"]),s=(0,r.useState)(0),c=s[0],l=s[1],u=(0,r.useState)(null),p=u[0],m=u[1];(0,r.useEffect)((function(){l(a)}),[a]);var f={backgroundImage:"-webkit-gradient(linear,left top,right top,color-stop("+c/100+", #0098A6),color-stop("+c/100+", #D2CECC))"},h={left:"calc("+c+"%)"};return(0,r.useEffect)((function(){"up"===p&&o(c)}),[p]),r.createElement("div",{className:"slidecontainer tooltip"},r.createElement("input",Object.assign({type:"range",value:c},i,{className:"slider",id:"myRange",style:f,onChange:function(e){l(e.target.value)},onMouseDown:function(){return m("down")},onMouseUp:function(){return m("up")}})),r.createElement("span",((n={className:"bubble",style:h}).className="tooltiptext",n),t))})),y=function(){var e=(0,r.useState)(50),n=e[0],t=e[1],o=(0,r.useState)(50),a=o[0],i=o[1],s=(0,r.useState)(50),c=s[0],l=s[1],u=(0,r.useState)(50),d=u[0],p=u[1],y=(0,r.useState)(50),E=y[0],w=y[1],k=(0,r.useState)(50),C=k[0],S=k[1],N=(0,r.useState)(50),A=N[0],O=N[1],R=(0,r.useState)(50),j=R[0],T=R[1],B=(0,r.useState)(50),L=B[0],D=B[1],F=(0,r.useState)(""),P=F[0],U=F[1],I=(0,r.useState)(!1),q=I[0],z=I[1],M=(0,r.useState)(!1),X=M[0],_=M[1],Z=(0,r.useState)(""),J=Z[0],V=Z[1],W=(0,r.useState)(""),H=W[0],K=W[1],$=(0,r.useState)(""),Q=$[0],Y=$[1];(0,r.useEffect)((function(){if(q){var e=parseInt(n)+parseInt(a)+parseInt(c)+parseInt(d)+parseInt(E)+parseInt(C)+parseInt(A)+parseInt(j);D(e/800*100)}else{var t=parseInt(n)+parseInt(a)+parseInt(c);D(t/300*100)}}),[q,n,a,c,d,E,C,A,j]);var G=function(){""===P||""===J||""===H||""===Q?alert("Kindly fill all the required details"):z(!0)},ee=(0,r.useMemo)((function(){return{min:0,max:100,value:n,step:2,label:"The higher volume of service requests that you have to internal and external services there are, the more insight and control you will need and the higher the return on investment your service mesh will deliver.",onChange:function(e){t(e)}}}),[n]),ne=(0,r.useMemo)((function(){return{min:0,max:100,value:a,step:2,label:"Edge focus—metrics and usage are for response time to clients and request failure rates.",onChange:function(e){i(e)}}}),[a]),te=(0,r.useMemo)((function(){return{min:0,max:100,value:c,step:2,label:"Strong separation of external and internal users. Focused on external API experience. APIs are used primarily for client-facing interaction.APIs are for clients only.",onChange:function(e){l(e)}}}),[c]),re=(0,r.useMemo)((function(){return{min:0,max:100,value:d,step:2,label:"The security characteristics are desirable qualities of any deployment. Apply defense-in-depth. Why not pull these into a single layer of control?",onChange:function(e){p(e)}}}),[d]),oe=(0,r.useMemo)((function(){return{min:0,max:100,value:E,step:2,label:"Deploy a service mesh early. Doing so lowers risk and affords you time to become confident with the operations of a service mesh.",onChange:function(e){w(e)}}}),[E]),ae=(0,r.useMemo)((function(){return{min:0,max:100,value:C,step:2,label:"Resilient infrastructure and highly available services are ideal in any environment. Let the service mesh do the heavy lifting for you.",onChange:function(e){S(e)}}}),[C]),ie=(0,r.useMemo)((function(){return{min:0,max:100,value:A,step:2,label:"a very small (<5 engineer) team",onChange:function(e){O(e)}}}),[A]),se=(0,r.useMemo)((function(){return{min:0,max:100,value:j,step:2,label:"Whether your environment is polyglot or not, service mesh instrumentation delivers uniformity, decouples Dev and Ops, and melts infrastructure concern off of application code.",onChange:function(e){T(e)}}}),[j]),ce=function(e){"Enter"===e.key&&G()},le=function(e){var n=e.done,t=r.useState({}),o=t[0],a=t[1];return setTimeout((function(){a({opacity:1,width:n+"%"})}),200),r.createElement("div",{className:"progress"},r.createElement("div",{className:"progress-done",style:o}))};return r.createElement(f,null,r.createElement("div",{className:"hero"},r.createElement("h1",null,'"When should I deploy a service mesh?"'),r.createElement("h3",{className:"sub-heading"},"the adopter's dilemma")),r.createElement("div",{className:"info"},r.createElement(h.W2,null,r.createElement(h.X2,null,r.createElement(h.JX,{sm:12,md:6,lg:4},r.createElement("h3",null,"Factors of your service mesh's functionality")),r.createElement(h.JX,{sm:12,md:6,lg:4},r.createElement("h4",null,"it depends..."),r.createElement("p",null,"At this point, you might be thinking, “I have a container orchestrator. Why do I need another infrastructure layer?” ")),r.createElement(h.JX,{sm:12,md:6,lg:4},r.createElement("h4",null,"Service-level needs"),r.createElement("p",null,"With microservices and containers mainstreaming, container orchestrators provide much of what the cluster (nodes and containers) need."))),r.createElement("div",{className:"button"},r.createElement(g.Z,{secondary:!0,url:"#form",title:"Take The Full Questionaire"})))),r.createElement("div",{className:"arrow"},r.createElement("h2",null,"How Strongly to Consider a Service Mesh"),r.createElement("div",{className:"text"},r.createElement("p",{className:"left"},"Lightly"),r.createElement("p",{className:"right"},"Strongly")),r.createElement(le,{done:L})),r.createElement("div",{className:"info"},r.createElement(h.W2,null,r.createElement(h.X2,null,r.createElement(h.JX,{sm:12,md:6,lg:4},r.createElement("h3",null,"Factors of your enviroment and workloads")),r.createElement(h.JX,{sm:12,md:6,lg:4},r.createElement("h4",null,"Service communication"),r.createElement("p",null,"The higher volume of service requests that you have to internal and external services there are, the more insight and control you will need and the higher the return on investment your service mesh will deliver.")),r.createElement(h.JX,{sm:12,md:6,lg:4},r.createElement("h4",null,"Observability"),r.createElement("p",null,"Edge focus—metrics and usage are for response time to clients and request failure rates."))),r.createElement("div",{className:"button"},r.createElement(g.Z,{secondary:!0,url:"#form",title:"Take The Full Questionaire"})))),r.createElement("div",{className:"form",id:"form"},r.createElement(h.W2,null,r.createElement("div",{className:"text"},r.createElement("p",{className:"left"},"Lightly"),r.createElement("p",{className:"right"},"Strongly")),r.createElement("div",null,r.createElement("div",{className:"range-slider"},r.createElement("div",{id:"slider"},r.createElement("h4",null,"Interservice Communication"),r.createElement(b,ee),r.createElement("h5",null,n)),r.createElement("div",{id:"slider"},r.createElement("h4",null,"Observability"),r.createElement(b,ne),r.createElement("h5",null,a)),r.createElement("div",{id:"slider"},r.createElement("h4",null,"Perspective from which you think of your APIs"),r.createElement(b,te),r.createElement("h5",null,c)))))),r.createElement(h.W2,null,r.createElement("div",{className:"form"},r.createElement("div",{className:"additional"},!q&&r.createElement("div",{className:"submit"},r.createElement("h2",null,"Complete the survey and receive ",r.createElement("br",null),"an in-depth analysis"),r.createElement("input",{type:"text",className:"email",onKeyDown:ce,onChange:function(e){V(e.target.value)},placeholder:"First Name"}),r.createElement("input",{type:"text",className:"email",onKeyDown:ce,onChange:function(e){K(e.target.value)},placeholder:"Second Name"}),r.createElement("br",null),r.createElement("input",{type:"text",className:"email",onKeyDown:ce,onChange:function(e){Y(e.target.value)},placeholder:"Organization or Company"}),r.createElement("input",{type:"email",className:"email",onKeyDown:ce,onChange:function(e){U(e.target.value)},placeholder:"Email Address"}),r.createElement("br",null),r.createElement(g.Z,{secondary:!0,id:"arrow-btn",type:"button",onClick:G,title:"Continue →"})),r.createElement("div",{className:q?"":"blur"},r.createElement("div",{className:"range-slider"},r.createElement("div",{id:"slider"},r.createElement("h4",null,"Security Model"),r.createElement(b,re),r.createElement("h5",null,d)),r.createElement("div",{id:"slider"},r.createElement("h4",null,"# of services"),r.createElement(b,oe),r.createElement("h5",null,E)),r.createElement("div",{id:"slider"},r.createElement("h4",null,"Service reliability"),r.createElement(b,ae),r.createElement("h5",null,C)),r.createElement("div",{id:"slider"},r.createElement("h4",null,"Size of your organization"),r.createElement(b,ie),r.createElement("h5",null,A)),r.createElement("div",{id:"slider"},r.createElement("h4",null,"Diversity of application stack"),r.createElement(b,se),r.createElement("h5",null,j))),r.createElement("div",{className:"submit-btn"},!X&&r.createElement(g.Z,{secondary:!0,type:"button",onClick:function(){_(!0),m().post("https://hook.integromat.com/ndmru0l21n51mcw4dsbhc48xg1mzh1v5",{parentVal1:n,parentVal2:a,parentVal3:c,parentVal4:d,parentVal5:E,parentVal6:C,parentVal7:A,parentVal8:j,email:P,first:J,second:H,org:Q})},title:"Submit →"}),X&&r.createElement("h3",null,"Your response has been recorded!")))))),r.createElement(h.X2,{className:"book_cover"},r.createElement(h.JX,{xs:12,sm:6,className:"book_col text"},r.createElement("p",{className:"cover"},"Services-first Network"),r.createElement("h1",null,"What is A ",r.createElement("br",null)," Service Mesh?"),r.createElement("p",null,"Service meshes provide intent-based networking for microservices describing desired behavior of the network in the face of constantly changing conditions and network topology."),r.createElement(g.Z,{primary:!0,className:"learn",type:"button",title:"Learn More",url:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition"})),r.createElement(h.JX,{xs:12,sm:6,className:"book_col book_img"},r.createElement(x.Link,{to:"/learn/service-mesh-books/the-enterprise-path-to-service-mesh-architectures-2nd-edition",className:"bookLink"},r.createElement("img",{src:v,alt:"Book Image"})))))},E=function(){return r.createElement(o.f6,{theme:u.Z},r.createElement(l.Z,null),r.createElement(i.Z,{title:"when should i deploy service mesh",description:"when should i deploy service mesh question form."}),r.createElement(a.Z,null,r.createElement(s.Z,null),r.createElement(y,null),r.createElement(c.Z,null)))}}}]);
//# sourceMappingURL=component---src-pages-deploy-service-mesh-js-7945f8774ae63fc1beee.js.map