!function r(i,s,u){function d(e,t){if(!s[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(c)return c(e,!0);var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}var o=s[e]={exports:{}};i[e][0].call(o.exports,function(t){return d(i[e][1][t]||t)},o,o.exports,r,i,s,u)}return s[e].exports}for(var c="function"==typeof require&&require,t=0;t<u.length;t++)d(u[t]);return d}({1:[function(t,e,n){"use strict";var a=function(){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}();(new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=window.require("system-core:context/context.js").instanceForSystem,this.context.log.send=function(){},this.dialog=window.require("disk-system:widget/plugin/uploader/dialog/dialog.js").get()}return a(t,[{key:"showToast",value:function(t){var e=t.message,n=t.type,a=t.autoClose,o=void 0===a||a;this.context.ui.tip({mode:n,msg:e,autoClose:o})}},{key:"getLogID",value:function(){var t,e,n=this.context.tools.baseService,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/~！@#￥%……&",o=String.fromCharCode,r=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?o(192|e>>>6)+o(128|63&e):o(224|e>>>12&15)+o(128|e>>>6&63)+o(128|63&e)}var n=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return o(240|n>>>18&7)+o(128|n>>>12&63)+o(128|n>>>6&63)+o(128|63&n)},i=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,s=function(t){var e=[0,2,1][t.length%3],n=t.charCodeAt(0)<<16|(1<t.length?t.charCodeAt(1):0)<<8|(2<t.length?t.charCodeAt(2):0);return[a.charAt(n>>>18),a.charAt(n>>>12&63),2<=e?"=":a.charAt(n>>>6&63),1<=e?"=":a.charAt(63&n)].join("")},u=function(){return t=(new Date).getTime(),(t+""+Math.random()).replace(i,r).replace(/[\s\S]{1,3}/g,s);var t};return t=n.getCookie("BAIDUID"),e?u(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):u(String(t))}},{key:"startListen",value:function(){var e=this;if(window.addEventListener("message",function(t){t.data.type&&"getSelected"===t.data.type&&window.postMessage({type:"selected",data:e.context.list.getSelected()},location.origin),t.data.type&&"importFiles"===t.data.type&&window.postMessage({type:"import",data:t.data.data,logid:window.logID,bdstoken:window.yunData.MYBDSTOKEN},location.origin),t.data.type&&"showToast"===t.data.type&&e.showToast(t.data.data),t.data.type&&"refreshList"===t.data.type&&e.dialog.systemRefresh()}),window.yunData)if(window.yunData.sign2){var t=window.require("disk-system:widget/data/yunData.js").get();window.postMessage({type:"yunData",data:t},location.origin)}else window.postMessage({type:"yunData",data:JSON.parse(JSON.stringify(window.yunData))},location.origin);window.logID||(window.logID=this.getLogID())}}]),t}())).startListen()},{}]},{},[1]);