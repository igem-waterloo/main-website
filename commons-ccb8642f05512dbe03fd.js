(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+c3X":function(e,t,r){e.exports=r.p+"static/bird-6c7b75634102d054e4481655493dbe1d.svg"},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz"),c=r("+c3X"),l=r.n(c);function s(){var e=Object(n.useState)(!1),t=e[0],r=e[1],o="inline-flex items-center font-bg-r text-lg text-blue px-4",c="absolute left-0 hidden w-full bg-white font-bg-r text-lg text-left text-blue p-4 space-y-3 group-hover:block",s="block whitespace-no-wrap hover:text-teal",u="inline-block mt-4 mx-4 lg:mt-0 font-bg-r text-lg text-blue hover:text-teal",f="inline-block px-4 py-3 lg:mt-0 bg-blue leading-none border rounded-lg border-transparent font-bg-r text-lg text-white hover:text-blue hover:bg-yellow",m=a.a.createElement("a",{className:f,href:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSdWXO7-EF_vgOPB-gZBkeDeDGDNaWKND7aGkSDqLzbmNmFY4w/viewform?usp=send_form",target:"_blank",rel:"noopener noreferrer"},"Join Us");return a.a.createElement("div",null,a.a.createElement("nav",{className:"flex flex-row items-center justify-between w-full py-6"},a.a.createElement(i.a,{className:"pointer-events-none md:pointer-events-auto",to:"/"},a.a.createElement("img",{className:"h-8 lg:h-10",src:l.a,alt:"Waterloo iGEM Logo"})),a.a.createElement("div",{className:"hidden text-base ml-auto lg:block"},a.a.createElement("div",{className:"group inline-block relative"},a.a.createElement("button",{className:o},a.a.createElement("span",{className:"mr-1"},"About"),a.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),a.a.createElement("ul",{className:c},a.a.createElement("li",{className:""},a.a.createElement(i.a,{className:s,to:"/team"},"Team")),a.a.createElement("li",{className:""},a.a.createElement(i.a,{className:s,to:"/advisors"},"Advisors")))),a.a.createElement(i.a,{className:u,to:"/projects"},"Projects"),a.a.createElement(i.a,{className:u,to:"/collaborations"},"Collaborations"),a.a.createElement(i.a,{className:u,to:"/contact"},"Contact"),a.a.createElement("div",{className:"group inline-block relative"},a.a.createElement("button",{className:o},a.a.createElement("span",{className:"mr-1"},"Recruitment"),a.a.createElement("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}))),a.a.createElement("ul",{className:c},a.a.createElement("li",{className:""},a.a.createElement(i.a,{className:s,to:"/timeline"},"Timeline")),a.a.createElement("li",{className:""},a.a.createElement(i.a,{className:s,to:"/faq"},"FAQ")))),m),a.a.createElement("div",{className:"block lg:hidden ml-auto sticky top-0"},a.a.createElement("button",{onClick:function(){return r(!t)},className:"focus:outline-none flex items-center px-3 py-2 font-bg-r text-teal text-lg border rounded outline-none border-teal"},a.a.createElement("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}))))),a.a.createElement("div",{className:(t?"block":"hidden")+" relative w-full items-end z-10"},a.a.createElement("div",{className:"absolute -top-6 right-0 flex flex-col items-end space-y-4 lg:hidden bg-gray font-bg-r text-lg text-right text-blue p-4"},a.a.createElement(i.a,{to:"/"},"Home"),a.a.createElement(i.a,{to:"/team"},"Team"),a.a.createElement(i.a,{to:"/advisors"},"Advisors"),a.a.createElement(i.a,{to:"/projects"},"Projects"),a.a.createElement(i.a,{to:"/collaborations"},"Collaborations"),a.a.createElement(i.a,{to:"/contact"},"Contact"),a.a.createElement(i.a,{to:"/timeline"},"Timeline"),a.a.createElement(i.a,{to:"/faq"},"FAQ"),m)))}s.defaultProps={siteTitle:""};var u=s,f=r("TYdL"),m=r.n(f);function p(){var e="text-white fill-current hover:text-teal h-10 md:h-18 lg:h-20";return a.a.createElement("footer",{className:" bg-blue"},a.a.createElement("div",{className:"mx-8 md:mx-16 lg:mx-32 xl:mx-64 2xl:mx-96"},a.a.createElement("div",{className:"flex flex-col md:flex-row md:items-start md:justify-between my-8"},a.a.createElement("img",{className:"mr-auto h-16 md:h-20 lg:h-36",src:m.a,alt:"Logo"}),a.a.createElement("div",{className:"flex flex-col items-start md:items-end"},a.a.createElement("p",{className:"text-white font-bg-r text-lg md:text-xl text-left md:text-right mt-8 md:mt-0"},"Follow our social media for updates!"),a.a.createElement("div",{className:"mt-2 lg:mt-4 flex flex-row gap-4"},a.a.createElement("a",{href:"https://www.facebook.com/WaterlooiGEM",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("svg",{className:e,viewBox:"0 0 250 250",alt:"Waterloo iGEM's Facebook"},a.a.createElement("path",{d:"M125.06 0c66.49-1.16 125.54 54.21 124.76 126.35-.76 71.19-60.34 124.92-127.22 123.65C56.6 248.7-1.15 193.66.19 122.33 1.48 54.05 58-1.09 125.06 0zm-20.68 126.51V207c11.28-.23 22.44.62 33.7-.57v-81.36h22.32c.84-9.35 1.66-18.55 2.51-27.92h-24.84c0-6.18-.11-12.2.05-18.22.08-3.36 1.49-4.72 4.85-4.81 5.85-.16 11.71-.1 17.57-.13h1.75V43.88h-13c-7.59 0-15.17-.12-22.63 1.61-6.57 1.51-12.4 4.2-16.66 9.62-4 5.12-5.47 11.12-5.64 17.44-.21 7.67-.16 15.35-.22 23v1.77H87.62v28.28z"}))),a.a.createElement("a",{href:"https://www.instagram.com/waterloo.igem/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("svg",{className:e,viewBox:"0 0 250 250",alt:"Waterloo iGEM's Instagram"},a.a.createElement("path",{d:"M124.88 250C55.81 249.91-.2 193.73 0 124.74A125 125 0 01125.12 0C194.19.09 250.2 56.27 250 125.26A125 125 0 01124.88 250zm.14-52.83c11.28-.42 22.53-.63 33.75-1.3 20.93-1.26 35.8-16.17 37.13-37.1a533.17 533.17 0 000-67.72c-1.32-20.77-16.17-36.15-37-36.8-22.55-.7-45.16-.71-67.71 0-21 .66-36.3 16-37 37-.71 22.55-.7 45.16 0 67.71.65 20.8 16 35.7 36.8 36.94 11.38.64 22.72.85 34.01 1.27z"}),a.a.createElement("path",{d:"M184.08 125c-.33 11-.39 21.94-1.07 32.88-.91 14.77-10.35 24.64-25.16 25q-32.86.88-65.76 0c-14.88-.4-24.62-10.15-25-25.06q-.88-32.85 0-65.76c.4-14.83 10.21-24.64 25.06-25q32.87-.88 65.76 0c14.84.4 24.2 10.22 25.12 25.07.66 10.94.72 21.92 1.05 32.87zM125 161.82A36.82 36.82 0 1088.18 125 36.84 36.84 0 00125 161.82zm46.83-75.15a8.41 8.41 0 00-8.69-8.53 8.57 8.57 0 00-8.47 8.55 8.74 8.74 0 008.49 8.6 8.57 8.57 0 008.7-8.62z"}),a.a.createElement("path",{d:"M125 101a24 24 0 11-24 24 24.05 24.05 0 0124-24z"}))),a.a.createElement("a",{href:"https://twitter.com/waterloo_igem",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("svg",{className:e,viewBox:"0 0 250 250",alt:"Waterloo iGEM's Twitter"},a.a.createElement("path",{d:"M125 250a125 125 0 11125-124.89A125 125 0 01125 250zm85.16-195.37a5.23 5.23 0 00-.9.25c-1.95 1-3.87 2.07-5.86 3A67.17 67.17 0 01187.83 63a2.34 2.34 0 01-1.82-.51 36.88 36.88 0 00-20.52-10.38 37 37 0 00-42 29.32 35.45 35.45 0 000 14.29c.18.9.14 1.48-1.1 1.36a127.68 127.68 0 01-17.81-2.72 104.64 104.64 0 01-23.7-8.76 105.1 105.1 0 01-32.49-25.9c-.32-.37-.71-.69-1.16-1.13a36.75 36.75 0 00-4 26.66c2.06 9.32 7.28 16.63 14.81 22.52a46.26 46.26 0 01-8.14-1.32c-2.62-.73-5.13-1.87-7.91-2.92a36.25 36.25 0 008 23.19A38.21 38.21 0 0070.65 140c-5.09 1.63-10.23 1.4-15.42.81a2.46 2.46 0 000 .64 37 37 0 0022.22 22.63 31.3 31.3 0 009.85 2.09 12.4 12.4 0 012 .43c-16.1 12.12-33.88 17-53.51 15.34 0 .3 0 .41.08.45.29.22.59.43.9.62a106.08 106.08 0 0026.49 11.5 99.69 99.69 0 0020.74 3.6 111.77 111.77 0 0033.55-2.71 104.29 104.29 0 0020.93-7.4 99.75 99.75 0 0037.65-32 109.29 109.29 0 0014.51-27.75 110.72 110.72 0 004.57-16.92 100 100 0 001.61-21.86 2.19 2.19 0 01.9-2.09A72.72 72.72 0 00210.78 75c1.44-1.74 2.73-3.59 4.09-5.4l-.22-.34a68.39 68.39 0 01-19.72 5.19c7.07-4.96 12.38-11.28 15.23-19.82z"}))))))))}p.defaultProps={siteTitle:""};var d=p,h=r("jFb6");function b(e){var t=e.children,r=e.title,n=a.a.createElement("a",{className:"w-full bg-teal font-nunito text-white text-sm lg:text-base text-center p-2 z-10",href:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSdWXO7-EF_vgOPB-gZBkeDeDGDNaWKND7aGkSDqLzbmNmFY4w/viewform?usp=send_form",target:"_blank",rel:"noopener noreferrer"},"Applications for our 2021 team are now open. Click here to apply.");return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{title:r+" | "+h.siteMetadata.title,htmlAttributes:{lang:"en"}}),a.a.createElement("body",{className:"bg-white flex flex-col min-h-screen"},n,a.a.createElement("div",{className:"mx-8 mb-32 flex-grow md:mx-16 lg:mt-2 lg:mx-32 xl:mx-64 2xl:mx-96"},a.a.createElement(u,null),a.a.createElement("div",{className:"my-8"},t)),a.a.createElement(d,null)))}},TYdL:function(e,t,r){e.exports=r.p+"static/logo-fd155bb69ed2643d4f855dea057ba251.svg"},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},jFb6:function(e,t){e.exports={siteMetadata:{title:"Waterloo iGEM",description:"Synthetic Biology Design Team"},pathPrefix:"/main-website",plugins:["gatsby-plugin-postcss","gatsby-plugin-react-helmet"]}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("bmMU"),m=r.n(f),p=r("q1tI"),d=r.n(p),h=r("YVoz"),b=r.n(h),g="bodyAttributes",y="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",x="href",A="http-equiv",C="innerHTML",O="itemprop",N="name",S="property",k="rel",j="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",I="defer",z="encodeSpecialCharacters",_="onChangeClientState",B="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},W=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,w.TITLE),r=Z(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,M);return t||n||void 0},V=function(e){return Z(e,_)||function(){}},X=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===k&&"canonical"===e[r].toLowerCase()||l===k&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==T&&c!==O||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=b()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(w.BODY,n),le(w.HTML,a),ce(f,m);var p={baseTag:se(w.BASE,r),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[d.a.createElement(w.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===C||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,n),bodyAttributes:me(g,r,n),htmlAttributes:me(y,a,n),link:me(w.LINK,o,n),meta:me(w.META,i,n),noscript:me(w.NOSCRIPT,c,n),script:me(w.SCRIPT,l,n),style:me(w.STYLE,s,n),title:me(w.TITLE,{title:f,titleAttributes:m},n)}},de=u()((function(e){return{baseTag:J([x,L],e),bodyAttributes:X(g,e),defer:Z(e,I),encode:Z(e,z),htmlAttributes:X(y,e),linkTags:Q(w.LINK,[k,x],e),metaTags:Q(w.META,[N,E,A,S,O],e),noscriptTags:Q(w.NOSCRIPT,[C],e),onChangeClientState:V(e),scriptTags:Q(w.SCRIPT,[j,C],e),styleTags:Q(w.STYLE,[T],e),title:K(e),titleAttributes:X(v,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return R(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case w.TITLE:return Y({},a,((t={})[n.type]=i,t.titleAttributes=Y({},o),t));case w.BODY:return Y({},a,{bodyAttributes:Y({},o)});case w.HTML:return Y({},a,{htmlAttributes:Y({},o)})}return Y({},a,((r={})[n.type]=Y({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(W(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=W(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=commons-ccb8642f05512dbe03fd.js.map