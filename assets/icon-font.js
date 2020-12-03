import{ai as t,c as e,x as n,aj as r,ak as o,al as a,d as l,a7 as i,a1 as c,am as u}from"./index.js";function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var y=function(a,l){var i=l.attrs,c=l.slots,u=s({},a,i),y=u.class,d=u.component,b=u.viewBox,m=u.spin,v=u.rotate,g=u.tabindex,O=u.onClick,j=p(u,["class","component","viewBox","spin","rotate","tabindex","onClick"]),h=c.default&&c.default(),w=h&&h.length;t();var x=f({anticon:!0},y,y),S={"anticon-spin":""===m||!!m},P=v?{msTransform:"rotate(".concat(v,"deg)"),transform:"rotate(".concat(v,"deg)")}:void 0,k=s({},r,{viewBox:b,class:S,style:P});b||delete k.viewBox;var A=g;return void 0===A&&O&&(A=-1,j.tabindex=A),e("span",n(j,{role:"img",onClick:O,class:x}),[d?e(d,k,{default:function(){return[h]}}):w?(o(Boolean(b)||1===h.length&&h[0]&&"use"===h[0].type),e("svg",n(k,{viewBox:b}),[h])):null])};function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?Object(arguments[e]):{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){b(t,e,n[e])}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}y.inheritAttrs=!1,y.displayName="Icon";var v=new Set;function g(t){return"string"==typeof t&&t.length&&!v.has(t)}function O(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t[e];if(g(n)){var r=document.createElement("script");r.setAttribute("src",n),r.setAttribute("data-namespace",n),t.length>e+1&&(r.onload=function(){O(t,e+1)},r.onerror=function(){O(t,e+1)}),v.add(n),document.body.appendChild(r)}}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.scriptUrl,r=t.extraCommonProps,o=void 0===r?{}:r;"undefined"!=typeof document&&"undefined"!=typeof window&&"function"==typeof document.createElement&&(Array.isArray(n)?O(n.reverse()):O([n]));var a=function(t,n){var r=n.attrs,a=n.slots,l=d({},t,r),i=l.type,c=m(l,["type"]),u=a.default&&a.default(),s=null;i&&(s=e("use",{"xlink:href":"#".concat(i)},null)),u&&u.length&&(s=u);var f=d({},o,c);return e(y,f,{default:function(){return[s]}})};return a.inheritAttrs=!1,a.displayName="Iconfont",a}const h=Array.prototype.slice;function w(t,n=null,r=null){return(arguments.length>3||a(r))&&(r=h.call(arguments,2)),e(t,n,r)}let x=j({scriptUrl:""});var S=l({name:"icon-font",props:{type:{type:String,default:""},color:{type:String,default:"unset"},size:{type:[Number,String],default:14},scriptUrl:{type:String,default:""}},setup(t,{attrs:e}){t.scriptUrl&&(x=j({scriptUrl:t.scriptUrl}));const n=i((()=>{const{color:e,size:n}=t;return{color:e,fontSize:`${u(n)?parseFloat(n):n}px`}}));return()=>w(x,{type:t.type||"",...e,style:c(n)})}});export{S as I,w as j};