(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+c3X":function(A,e,t){A.exports=t.p+"static/bird-6c7b75634102d054e4481655493dbe1d.svg"},"8+s/":function(A,e,t){"use strict";var n,r=t("q1tI"),a=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}var i=!("undefined"==typeof window||!window.document||!window.document.createElement);A.exports=function(A,e,t){if("function"!=typeof A)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==t&&"function"!=typeof t)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function s(){c=A(l.map((function(A){return A.props}))),u.canUseDOM?e(c):t&&(c=t(c))}var u=function(A){var e,t;function r(){return A.apply(this,arguments)||this}t=A,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var A=c;return c=void 0,l=[],A};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var A=l.indexOf(this);l.splice(A,1),s()},o.render=function(){return a.createElement(n,this.props)},r}(r.PureComponent);return o(u,"displayName","SideEffect("+function(A){return A.displayName||A.name||"Component"}(n)+")"),o(u,"canUseDOM",i),u}}},Bl7J:function(A,e,t){"use strict";t.d(e,"a",(function(){return b}));var n=t("q1tI"),r=t.n(n),a=t("qhky"),o=t("Wbzz"),i=t("+c3X"),c=t.n(i);function l(){var A,e=Object(n.useState)(!1),t=e[0],a=e[1],i="inline-flex items-center font-bg-r text-lg text-blue px-4",l="absolute left-0 hidden w-full bg-white font-bg-r text-lg text-left text-blue p-4 space-y-3 group-hover:block",s="block whitespace-no-wrap hover:text-teal",u="inline-block mt-4 mx-4 lg:mt-0 font-bg-r text-lg text-blue hover:text-teal",f="inline-block px-4 py-3 lg:mt-0 bg-blue leading-none border rounded-lg border-transparent font-bg-r text-lg text-white hover:text-blue hover:bg-yellow";return A=r.a.createElement(o.a,{className:f,to:"/joinus"},"Join Us"),r.a.createElement("div",null,r.a.createElement("nav",{className:"flex flex-row items-center justify-between w-full py-6"},r.a.createElement(o.a,{className:"pointer-events-none md:pointer-events-auto",to:"/"},r.a.createElement("img",{className:"h-8 lg:h-10",src:c.a,alt:"Waterloo iGEM Logo"})),r.a.createElement("div",{className:"hidden text-base ml-auto lg:block"},r.a.createElement("div",{className:"group inline-block relative"},r.a.createElement("button",{className:i},r.a.createElement("span",{className:"mr-1"},"About"),r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),r.a.createElement("ul",{className:l},r.a.createElement("li",{className:""},r.a.createElement(o.a,{className:s,to:"/team"},"Team")),r.a.createElement("li",{className:""},r.a.createElement(o.a,{className:s,to:"/advisors"},"Advisors")))),r.a.createElement(o.a,{className:u,to:"/projects"},"Projects"),r.a.createElement(o.a,{className:u,to:"/collaborations"},"Collaborations"),r.a.createElement(o.a,{className:u,to:"/contact"},"Contact"),r.a.createElement("div",{className:"group inline-block relative"},r.a.createElement("button",{className:i},r.a.createElement("span",{className:"mr-1"},"Recruitment"),r.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),r.a.createElement("ul",{className:l},r.a.createElement("li",{className:""},r.a.createElement(o.a,{className:s,to:"/timeline"},"Timeline")),r.a.createElement("li",{className:""},r.a.createElement(o.a,{className:s,to:"/faq"},"FAQ")))),A),r.a.createElement("div",{className:"block lg:hidden ml-auto sticky top-0"},r.a.createElement("button",{onClick:function(){return a(!t)},className:"focus:outline-none flex items-center px-3 py-2 font-bg-r text-teal text-lg border rounded outline-none border-teal"},r.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))))),r.a.createElement("div",{className:(t?"block":"hidden")+" relative w-full items-end z-10"},r.a.createElement("div",{className:"absolute -top-6 right-0 flex flex-col items-end space-y-4 lg:hidden bg-gray font-bg-r text-lg text-right text-blue p-4"},r.a.createElement(o.a,{to:"/"},"Home"),r.a.createElement(o.a,{to:"/team"},"Team"),r.a.createElement(o.a,{to:"/advisors"},"Advisors"),r.a.createElement(o.a,{to:"/projects"},"Projects"),r.a.createElement(o.a,{to:"/collaborations"},"Collaborations"),r.a.createElement(o.a,{to:"/contact"},"Contact"),r.a.createElement(o.a,{to:"/timeline"},"Timeline"),r.a.createElement(o.a,{to:"/faq"},"FAQ"),A)))}l.defaultProps={siteTitle:""};var s=l,u=t("TYdL"),f=t.n(u);function m(){var A="text-white fill-current hover:text-teal h-10 md:h-18 lg:h-20";return r.a.createElement("footer",{className:" bg-blue"},r.a.createElement("div",{className:"mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96"},r.a.createElement("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between my-8"},r.a.createElement("img",{className:"mr-auto h-16 md:h-20 lg:h-36",src:f.a,alt:"Logo"}),r.a.createElement("div",{className:"flex flex-col items-start md:items-end"},r.a.createElement("p",{className:"text-white font-bg-r text-lg md:text-xl text-left md:text-right mt-8 md:mt-0"},"Follow our social media for updates!"),r.a.createElement("div",{className:"mt-2 lg:mt-4 flex flex-row space-x-4"},r.a.createElement("a",{href:"https://www.facebook.com/WaterlooiGEM",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:A,viewBox:"0 0 250 250",alt:"Waterloo iGEM's Facebook"},r.a.createElement("path",{d:"M125.06 0c66.49-1.16 125.54 54.21 124.76 126.35-.76 71.19-60.34 124.92-127.22 123.65C56.6 248.7-1.15 193.66.19 122.33 1.48 54.05 58-1.09 125.06 0zm-20.68 126.51V207c11.28-.23 22.44.62 33.7-.57v-81.36h22.32c.84-9.35 1.66-18.55 2.51-27.92h-24.84c0-6.18-.11-12.2.05-18.22.08-3.36 1.49-4.72 4.85-4.81 5.85-.16 11.71-.1 17.57-.13h1.75V43.88h-13c-7.59 0-15.17-.12-22.63 1.61-6.57 1.51-12.4 4.2-16.66 9.62-4 5.12-5.47 11.12-5.64 17.44-.21 7.67-.16 15.35-.22 23v1.77H87.62v28.28z"}))),r.a.createElement("a",{href:"https://www.instagram.com/waterloo.igem/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:A,viewBox:"0 0 250 250",alt:"Waterloo iGEM's Instagram"},r.a.createElement("path",{d:"M124.88 250C55.81 249.91-.2 193.73 0 124.74A125 125 0 01125.12 0C194.19.09 250.2 56.27 250 125.26A125 125 0 01124.88 250zm.14-52.83c11.28-.42 22.53-.63 33.75-1.3 20.93-1.26 35.8-16.17 37.13-37.1a533.17 533.17 0 000-67.72c-1.32-20.77-16.17-36.15-37-36.8-22.55-.7-45.16-.71-67.71 0-21 .66-36.3 16-37 37-.71 22.55-.7 45.16 0 67.71.65 20.8 16 35.7 36.8 36.94 11.38.64 22.72.85 34.01 1.27z"}),r.a.createElement("path",{d:"M184.08 125c-.33 11-.39 21.94-1.07 32.88-.91 14.77-10.35 24.64-25.16 25q-32.86.88-65.76 0c-14.88-.4-24.62-10.15-25-25.06q-.88-32.85 0-65.76c.4-14.83 10.21-24.64 25.06-25q32.87-.88 65.76 0c14.84.4 24.2 10.22 25.12 25.07.66 10.94.72 21.92 1.05 32.87zM125 161.82A36.82 36.82 0 1088.18 125 36.84 36.84 0 00125 161.82zm46.83-75.15a8.41 8.41 0 00-8.69-8.53 8.57 8.57 0 00-8.47 8.55 8.74 8.74 0 008.49 8.6 8.57 8.57 0 008.7-8.62z"}),r.a.createElement("path",{d:"M125 101a24 24 0 11-24 24 24.05 24.05 0 0124-24z"}))),r.a.createElement("a",{href:"https://twitter.com/waterloo_igem",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("svg",{className:A,viewBox:"0 0 250 250",alt:"Waterloo iGEM's Twitter"},r.a.createElement("path",{d:"M125 250a125 125 0 11125-124.89A125 125 0 01125 250zm85.16-195.37a5.23 5.23 0 00-.9.25c-1.95 1-3.87 2.07-5.86 3A67.17 67.17 0 01187.83 63a2.34 2.34 0 01-1.82-.51 36.88 36.88 0 00-20.52-10.38 37 37 0 00-42 29.32 35.45 35.45 0 000 14.29c.18.9.14 1.48-1.1 1.36a127.68 127.68 0 01-17.81-2.72 104.64 104.64 0 01-23.7-8.76 105.1 105.1 0 01-32.49-25.9c-.32-.37-.71-.69-1.16-1.13a36.75 36.75 0 00-4 26.66c2.06 9.32 7.28 16.63 14.81 22.52a46.26 46.26 0 01-8.14-1.32c-2.62-.73-5.13-1.87-7.91-2.92a36.25 36.25 0 008 23.19A38.21 38.21 0 0070.65 140c-5.09 1.63-10.23 1.4-15.42.81a2.46 2.46 0 000 .64 37 37 0 0022.22 22.63 31.3 31.3 0 009.85 2.09 12.4 12.4 0 012 .43c-16.1 12.12-33.88 17-53.51 15.34 0 .3 0 .41.08.45.29.22.59.43.9.62a106.08 106.08 0 0026.49 11.5 99.69 99.69 0 0020.74 3.6 111.77 111.77 0 0033.55-2.71 104.29 104.29 0 0020.93-7.4 99.75 99.75 0 0037.65-32 109.29 109.29 0 0014.51-27.75 110.72 110.72 0 004.57-16.92 100 100 0 001.61-21.86 2.19 2.19 0 01.9-2.09A72.72 72.72 0 00210.78 75c1.44-1.74 2.73-3.59 4.09-5.4l-.22-.34a68.39 68.39 0 01-19.72 5.19c7.07-4.96 12.38-11.28 15.23-19.82z"}))))))))}m.defaultProps={siteTitle:""};var d=m,p=t("uykN"),g=t.n(p),h=t("jFb6");function b(A){var e=A.children,t=A.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.a,{title:t+" | "+h.siteMetadata.title,htmlAttributes:{lang:"en"}},r.a.createElement("link",{rel:"icon",href:g.a})),r.a.createElement("body",{className:"bg-white flex flex-col min-h-screen"},r.a.createElement("div",{className:"mx-6 mb-32 flex-grow md:mx-16 lg:mt-2 lg:mx-32 xl:mx-64 2xl:mx-96"},r.a.createElement(s,null),r.a.createElement("div",{className:"my-8"},e)),r.a.createElement(d,null)))}},TYdL:function(A,e,t){A.exports=t.p+"static/logo-fd155bb69ed2643d4f855dea057ba251.svg"},bmMU:function(A,e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;A.exports=function(A,e){try{return function A(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var i,c,l,s;if(Array.isArray(e)){if((i=e.length)!=o.length)return!1;for(c=i;0!=c--;)if(!A(e[c],o[c]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;for(s=e.entries();!(c=s.next()).done;)if(!A(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(c=s.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((i=e.length)!=o.length)return!1;for(c=i;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((i=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=i;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=i;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!A(e[l[c]],o[l[c]]))return!1;return!0}return e!=e&&o!=o}(A,e)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},jFb6:function(A,e){A.exports={siteMetadata:{title:"Waterloo iGEM",description:"Synthetic Biology Design Team"},plugins:["gatsby-plugin-postcss","gatsby-plugin-react-helmet"]}},qhky:function(A,e,t){"use strict";(function(A){t.d(e,"a",(function(){return pA}));t("E9XD");var n,r,a,o,i=t("17x9"),c=t.n(i),l=t("8+s/"),s=t.n(l),u=t("bmMU"),f=t.n(u),m=t("q1tI"),d=t.n(m),p=t("YVoz"),g=t.n(p),h="bodyAttributes",b="htmlAttributes",w="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(y).map((function(A){return y[A]})),"charset"),E="cssText",T="href",P="http-equiv",O="innerHTML",D="itemprop",x="name",N="property",C="rel",S="src",j="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",L="defer",B="encodeSpecialCharacters",M="onChangeClientState",I="titleTemplate",Q=Object.keys(k).reduce((function(A,e){return A[k[e]]=e,A}),{}),R=[y.NOSCRIPT,y.SCRIPT,y.STYLE],H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},q=function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")},U=function(){function A(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),e}}(),F=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(A[n]=t[n])}return A},Y=function(A,e){var t={};for(var n in A)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(A,n)&&(t[n]=A[n]);return t},_=function(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e},Z=function(A){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(A):String(A).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(A){var e=J(A,y.TITLE),t=J(A,I);if(t&&e)return t.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=J(A,z);return e||n||void 0},X=function(A){return J(A,M)||function(){}},V=function(A,e){return e.filter((function(e){return void 0!==e[A]})).map((function(e){return e[A]})).reduce((function(A,e){return F({},A,e)}),{})},G=function(A,e){return e.filter((function(A){return void 0!==A[y.BASE]})).map((function(A){return A[y.BASE]})).reverse().reduce((function(e,t){if(!e.length)for(var n=Object.keys(t),r=0;r<n.length;r++){var a=n[r].toLowerCase();if(-1!==A.indexOf(a)&&t[a])return e.concat(t)}return e}),[])},K=function(A,e,t){var n={};return t.filter((function(e){return!!Array.isArray(e[A])||(void 0!==e[A]&&nA("Helmet: "+A+' should be of type "Array". Instead found type "'+H(e[A])+'"'),!1)})).map((function(e){return e[A]})).reverse().reduce((function(A,t){var r={};t.filter((function(A){for(var t=void 0,a=Object.keys(A),o=0;o<a.length;o++){var i=a[o],c=i.toLowerCase();-1===e.indexOf(c)||t===C&&"canonical"===A[t].toLowerCase()||c===C&&"stylesheet"===A[c].toLowerCase()||(t=c),-1===e.indexOf(i)||i!==O&&i!==E&&i!==D||(t=i)}if(!t||!A[t])return!1;var l=A[t].toLowerCase();return n[t]||(n[t]={}),r[t]||(r[t]={}),!n[t][l]&&(r[t][l]=!0,!0)})).reverse().forEach((function(e){return A.push(e)}));for(var a=Object.keys(r),o=0;o<a.length;o++){var i=a[o],c=g()({},n[i],r[i]);n[i]=c}return A}),[]).reverse()},J=function(A,e){for(var t=A.length-1;t>=0;t--){var n=A[t];if(n.hasOwnProperty(e))return n[e]}return null},$=(n=Date.now(),function(A){var e=Date.now();e-n>16?(n=e,A(e)):setTimeout((function(){$(A)}),0)}),AA=function(A){return clearTimeout(A)},eA="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:A.requestAnimationFrame||$,tA="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||AA:A.cancelAnimationFrame||AA,nA=function(A){return console&&"function"==typeof console.warn&&console.warn(A)},rA=null,aA=function(A,e){var t=A.baseTag,n=A.bodyAttributes,r=A.htmlAttributes,a=A.linkTags,o=A.metaTags,i=A.noscriptTags,c=A.onChangeClientState,l=A.scriptTags,s=A.styleTags,u=A.title,f=A.titleAttributes;cA(y.BODY,n),cA(y.HTML,r),iA(u,f);var m={baseTag:lA(y.BASE,t),linkTags:lA(y.LINK,a),metaTags:lA(y.META,o),noscriptTags:lA(y.NOSCRIPT,i),scriptTags:lA(y.SCRIPT,l),styleTags:lA(y.STYLE,s)},d={},p={};Object.keys(m).forEach((function(A){var e=m[A],t=e.newTags,n=e.oldTags;t.length&&(d[A]=t),n.length&&(p[A]=m[A].oldTags)})),e&&e(),c(A,d,p)},oA=function(A){return Array.isArray(A)?A.join(""):A},iA=function(A,e){void 0!==A&&document.title!==A&&(document.title=oA(A)),cA(y.TITLE,e)},cA=function(A,e){var t=document.getElementsByTagName(A)[0];if(t){for(var n=t.getAttribute("data-react-helmet"),r=n?n.split(","):[],a=[].concat(r),o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=e[c]||"";t.getAttribute(c)!==l&&t.setAttribute(c,l),-1===r.indexOf(c)&&r.push(c);var s=a.indexOf(c);-1!==s&&a.splice(s,1)}for(var u=a.length-1;u>=0;u--)t.removeAttribute(a[u]);r.length===a.length?t.removeAttribute("data-react-helmet"):t.getAttribute("data-react-helmet")!==o.join(",")&&t.setAttribute("data-react-helmet",o.join(","))}},lA=function(A,e){var t=document.head||document.querySelector(y.HEAD),n=t.querySelectorAll(A+"[data-react-helmet]"),r=Array.prototype.slice.call(n),a=[],o=void 0;return e&&e.length&&e.forEach((function(e){var t=document.createElement(A);for(var n in e)if(e.hasOwnProperty(n))if(n===O)t.innerHTML=e.innerHTML;else if(n===E)t.styleSheet?t.styleSheet.cssText=e.cssText:t.appendChild(document.createTextNode(e.cssText));else{var i=void 0===e[n]?"":e[n];t.setAttribute(n,i)}t.setAttribute("data-react-helmet","true"),r.some((function(A,e){return o=e,t.isEqualNode(A)}))?r.splice(o,1):a.push(t)})),r.forEach((function(A){return A.parentNode.removeChild(A)})),a.forEach((function(A){return t.appendChild(A)})),{oldTags:r,newTags:a}},sA=function(A){return Object.keys(A).reduce((function(e,t){var n=void 0!==A[t]?t+'="'+A[t]+'"':""+t;return e?e+" "+n:n}),"")},uA=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[k[t]||t]=A[t],e}),e)},fA=function(A,e,t){switch(A){case y.TITLE:return{toComponent:function(){return A=e.title,t=e.titleAttributes,(n={key:A})["data-react-helmet"]=!0,r=uA(t,n),[d.a.createElement(y.TITLE,r,A)];var A,t,n,r},toString:function(){return function(A,e,t,n){var r=sA(t),a=oA(e);return r?"<"+A+' data-react-helmet="true" '+r+">"+Z(a,n)+"</"+A+">":"<"+A+' data-react-helmet="true">'+Z(a,n)+"</"+A+">"}(A,e.title,e.titleAttributes,t)}};case h:case b:return{toComponent:function(){return uA(e)},toString:function(){return sA(e)}};default:return{toComponent:function(){return function(A,e){return e.map((function(e,t){var n,r=((n={key:t})["data-react-helmet"]=!0,n);return Object.keys(e).forEach((function(A){var t=k[A]||A;if(t===O||t===E){var n=e.innerHTML||e.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[t]=e[A]})),d.a.createElement(A,r)}))}(A,e)},toString:function(){return function(A,e,t){return e.reduce((function(e,n){var r=Object.keys(n).filter((function(A){return!(A===O||A===E)})).reduce((function(A,e){var r=void 0===n[e]?e:e+'="'+Z(n[e],t)+'"';return A?A+" "+r:r}),""),a=n.innerHTML||n.cssText||"",o=-1===R.indexOf(A);return e+"<"+A+' data-react-helmet="true" '+r+(o?"/>":">"+a+"</"+A+">")}),"")}(A,e,t)}}}},mA=function(A){var e=A.baseTag,t=A.bodyAttributes,n=A.encode,r=A.htmlAttributes,a=A.linkTags,o=A.metaTags,i=A.noscriptTags,c=A.scriptTags,l=A.styleTags,s=A.title,u=void 0===s?"":s,f=A.titleAttributes;return{base:fA(y.BASE,e,n),bodyAttributes:fA(h,t,n),htmlAttributes:fA(b,r,n),link:fA(y.LINK,a,n),meta:fA(y.META,o,n),noscript:fA(y.NOSCRIPT,i,n),script:fA(y.SCRIPT,c,n),style:fA(y.STYLE,l,n),title:fA(y.TITLE,{title:u,titleAttributes:f},n)}},dA=s()((function(A){return{baseTag:G([T,j],A),bodyAttributes:V(h,A),defer:J(A,L),encode:J(A,B),htmlAttributes:V(b,A),linkTags:K(y.LINK,[C,T],A),metaTags:K(y.META,[x,v,P,N,D],A),noscriptTags:K(y.NOSCRIPT,[O],A),onChangeClientState:X(A),scriptTags:K(y.SCRIPT,[S,O],A),styleTags:K(y.STYLE,[E],A),title:W(A),titleAttributes:V(w,A)}}),(function(A){rA&&tA(rA),A.defer?rA=eA((function(){aA(A,(function(){rA=null}))})):(aA(A),rA=null)}),mA)((function(){return null})),pA=(r=dA,o=a=function(A){function e(){return q(this,e),_(this,A.apply(this,arguments))}return function(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),e.prototype.shouldComponentUpdate=function(A){return!f()(this.props,A)},e.prototype.mapNestedChildrenToProps=function(A,e){if(!e)return null;switch(A.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:e};case y.STYLE:return{cssText:e}}throw new Error("<"+A.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(A){var e,t=A.child,n=A.arrayTypeChildren,r=A.newChildProps,a=A.nestedChildren;return F({},n,((e={})[t.type]=[].concat(n[t.type]||[],[F({},r,this.mapNestedChildrenToProps(t,a))]),e))},e.prototype.mapObjectTypeChildren=function(A){var e,t,n=A.child,r=A.newProps,a=A.newChildProps,o=A.nestedChildren;switch(n.type){case y.TITLE:return F({},r,((e={})[n.type]=o,e.titleAttributes=F({},a),e));case y.BODY:return F({},r,{bodyAttributes:F({},a)});case y.HTML:return F({},r,{htmlAttributes:F({},a)})}return F({},r,((t={})[n.type]=F({},a),t))},e.prototype.mapArrayTypeChildrenToProps=function(A,e){var t=F({},e);return Object.keys(A).forEach((function(e){var n;t=F({},t,((n={})[e]=A[e],n))})),t},e.prototype.warnOnInvalidChildren=function(A,e){return!0},e.prototype.mapChildrenToProps=function(A,e){var t=this,n={};return d.a.Children.forEach(A,(function(A){if(A&&A.props){var r=A.props,a=r.children,o=function(A){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(A).reduce((function(e,t){return e[Q[t]||t]=A[t],e}),e)}(Y(r,["children"]));switch(t.warnOnInvalidChildren(A,a),A.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:n=t.flattenArrayTypeChildren({child:A,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:e=t.mapObjectTypeChildren({child:A,newProps:e,newChildProps:o,nestedChildren:a})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var A=this.props,e=A.children,t=Y(A,["children"]),n=F({},t);return e&&(n=this.mapChildrenToProps(e,n)),d.a.createElement(r,n)},U(e,null,[{key:"canUseDOM",set:function(A){r.canUseDOM=A}}]),e}(d.a.Component),a.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=r.peek,a.rewind=function(){var A=r.rewind();return A||(A=mA({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),A},o);pA.renderStatic=pA.rewind}).call(this,t("yLpj"))},uykN:function(A,e){A.exports="data:image/vnd.microsoft.icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAQEBA3Dg5wNw8PrjgPD944Dw/eOA8P3jgODp4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAwMQDgPD/84Dw//OA8P/0UdHf9FHR3/Nw8PrjgQEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA8P3jgPD/84Dw//OA8P/zgPD/85Dw/uNw8PrjkQEFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4EBAgOA8PvjcPD+44Dw/eNw8PrjcPD+44EBAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOBAQIDgNDWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///////////////////////////////////////hg///gAH//wAA//4AAH/+AAB//AAAP/gCQB/wBmAP8A5wD+AeeAfAPnwDwHw+AYD8PwEH/B/g//wP///8B////g////////////////////////////////////////////8="}}]);
//# sourceMappingURL=commons-d07e5e580e251384b158.js.map