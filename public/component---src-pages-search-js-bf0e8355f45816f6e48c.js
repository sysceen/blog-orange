/*! For license information please see component---src-pages-search-js-bf0e8355f45816f6e48c.js.LICENSE.txt */
"use strict";(self.webpackChunkblogsite=self.webpackChunkblogsite||[]).push([[996],{7686:function(e,t,n){var r=n(7294),a=n(5414),i="undefined"!=typeof window,o=function(e){var t=e.description,n=e.lang,o=e.title,c=(e.img,e.time,e.category),l=e.slug,u="https://heartfelt-profiterole-948609.netlify.app/".replace("https://","").replace(".com",""),s="https://heartfelt-profiterole-948609.netlify.app/"+l+"/";""==l&&(s="https://heartfelt-profiterole-948609.netlify.app/");var p="";i&&(u=window.location.hostname,s=window.location.href,p=window.location.href.replace(window.location.pathname,""));var h=t;u.replace(" ","");return r.createElement(a.q,{htmlAttributes:{lang:n},link:[{rel:"canonical",href:s}],title:c,titleTemplate:u?"%s - "+u:null,meta:[{name:"description",content:c+" - "+u+" - "+h},{property:"robots",content:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"},{property:"og:locale",content:"en_US"},{property:"og:type",content:"website"},{property:"og:title",content:c+" - "+u},{property:"og:description",content:h},{property:"og:url",content:s},{name:"og:site_name",content:u},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:c+" - "+u},{name:"twitter:description",content:h},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:"admin"},{name:"twitter:label2",content:"Time to read"},{name:"twitter:data2",content:"4 minutes"}]},r.createElement("script",{type:"application/ld+json"},'{\n        "@context": "https://schema.org/",\n        "@graph": [\n            { "@type": ["Person", "Organization"], "@id": "'+p+'#person", "name": "Ayush" },\n            {\n              "@context": "https://schema.org/",\n              "@type": "WebSite",\n              "url": "'+p+'",\n              "potentialAction": {\n                "@type": "SearchAction",\n                "target": {\n                  "@type": "EntryPoint",\n                  "urlTemplate": "'+p+'search/?s={search_term_string}"\n                },\n                "query-input": "required name=search_term_string"\n              }\n            },\n            {\n                "@type": "ImageObject",\n                "@id": "'+p+'",\n                "url": "'+p+'",\n                "width": "200",\n                "height": "200",\n                "inLanguage": "en-US"\n            },\n            {\n                "@type": "Person",\n                "@id": "'+p+'author/",\n                "name": "admin",\n                "url": "'+p+'author/",\n                "image": {\n                    "@type": "ImageObject",\n                    "@id": "https://secure.gravatar.com/avatar/a037394d75a25a500259f54b94b393ce?s=96&amp;d=mm&amp;r=g",\n                    "url": "https://secure.gravatar.com/avatar/a037394d75a25a500259f54b94b393ce?s=96&amp;d=mm&amp;r=g",\n                    "caption": "admin",\n                    "inLanguage": "en-US"\n                },\n                "sameAs": ["'+p+'"]\n            },\n            {\n                "@type": "WebPage",\n                "@id": "'+p+'#webpage",\n                "url": "'+p+'",\n                "name": "'+o+" - "+u+'",\n                "datePublished": "2021-04-26T20:52:11+00:00",\n                "dateModified": "2021-07-19T04:51:27+00:00",\n                "author": { "@id": "'+p+'author" },\n                "isPartOf": { "@id": "'+p+'#website" },\n                "inLanguage": "en-US"\n            }\n        ]\n    }'))};o.defaultProps={lang:"en",meta:[],description:""},t.Z=o},7626:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(7294),a=n(1597),i=n(4728),o=n(7686);var c,l=n(181);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return i}}(e,t)||(0,l.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(c||(c={}));var p=function(e){return e};var h="beforeunload",f="popstate";function m(e){e.preventDefault(),e.returnValue=""}function d(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function v(){return Math.random().toString(36).substr(2,8)}function g(e){var t=e.pathname,n=void 0===t?"/":t,r=e.search,a=void 0===r?"":r,i=e.hash,o=void 0===i?"":i;return a&&"?"!==a&&(n+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(n+="#"===o.charAt(0)?o:"#"+o),n}function y(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function b(e,t){if(!e)throw new Error(t)}var w=(0,r.createContext)(null);var E=(0,r.createContext)(null);var x=(0,r.createContext)({outlet:null,matches:[]});function S(e){return function(e){var t=(0,r.useContext)(x).outlet;if(t)return(0,r.createElement)(O.Provider,{value:e},t);return t}(e.context)}function P(e){b(!1)}function k(e){var t=e.basename,n=void 0===t?"/":t,a=e.children,i=void 0===a?null:a,o=e.location,l=e.navigationType,u=void 0===l?c.Pop:l,s=e.navigator,p=e.static,h=void 0!==p&&p;A()&&b(!1);var f=J(n),m=(0,r.useMemo)((function(){return{basename:f,navigator:s,static:h}}),[f,s,h]);"string"==typeof o&&(o=y(o));var d=o,v=d.pathname,g=void 0===v?"/":v,x=d.search,S=void 0===x?"":x,P=d.hash,k=void 0===P?"":P,C=d.state,j=void 0===C?null:C,N=d.key,O=void 0===N?"default":N,L=(0,r.useMemo)((function(){var e=U(g,f);return null==e?null:{pathname:e,search:S,hash:k,state:j,key:O}}),[f,g,S,k,j,O]);return null==L?null:(0,r.createElement)(w.Provider,{value:m},(0,r.createElement)(E.Provider,{children:i,value:{location:L,navigationType:u}}))}function C(e){var t=e.children,n=e.location;return function(e,t){A()||b(!1);var n=(0,r.useContext)(x).matches,a=n[n.length-1],i=a?a.params:{},o=(a&&a.pathname,a?a.pathnameBase:"/");a&&a.route;0;var c,l=j();if(t){var u,s="string"==typeof t?y(t):t;"/"===o||(null==(u=s.pathname)?void 0:u.startsWith(o))||b(!1),c=s}else c=l;var p=c.pathname||"/",h="/"===o?p:p.slice(o.length)||"/",f=function(e,t,n){void 0===n&&(n="/");var r=U(("string"==typeof t?y(t):t).pathname||"/",n);if(null==r)return null;var a=$(e);!function(e){e.sort((function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){var n=e.length===t.length&&e.slice(0,-1).every((function(e,n){return e===t[n]}));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((function(e){return e.childrenIndex})),t.routesMeta.map((function(e){return e.childrenIndex})))}))}(a);for(var i=null,o=0;null==i&&o<a.length;++o)i=_(a[o],r);return i}(e,{pathname:h});0;return B(f&&f.map((function(e){return Object.assign({},e,{params:Object.assign({},i,e.params),pathname:H([o,e.pathname]),pathnameBase:"/"===e.pathnameBase?o:H([o,e.pathnameBase])})})),n)}(L(t),n)}function A(){return null!=(0,r.useContext)(E)}function j(){return A()||b(!1),(0,r.useContext)(E).location}function N(){A()||b(!1);var e=(0,r.useContext)(w),t=e.basename,n=e.navigator,a=(0,r.useContext)(x).matches,i=j().pathname,o=JSON.stringify(a.map((function(e){return e.pathnameBase}))),c=(0,r.useRef)(!1);return(0,r.useEffect)((function(){c.current=!0})),(0,r.useCallback)((function(e,r){if(void 0===r&&(r={}),c.current)if("number"!=typeof e){var a=T(e,JSON.parse(o),i);"/"!==t&&(a.pathname=H([t,a.pathname])),(r.replace?n.replace:n.push)(a,r.state)}else n.go(e)}),[t,n,o,i])}var O=(0,r.createContext)(null);function L(e){var t=[];return r.Children.forEach(e,(function(e){if((0,r.isValidElement)(e))if(e.type!==r.Fragment){e.type!==P&&b(!1);var n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=L(e.props.children)),t.push(n)}else t.push.apply(t,L(e.props.children))})),t}function $(e,t,n,r){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r=""),e.forEach((function(e,a){var i={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(i.relativePath.startsWith(r)||b(!1),i.relativePath=i.relativePath.slice(r.length));var o=H([r,i.relativePath]),c=n.concat(i);e.children&&e.children.length>0&&(!0===e.index&&b(!1),$(e.children,t,c,o)),(null!=e.path||e.index)&&t.push({path:o,score:M(o,e.index),routesMeta:c})})),t}var W=/^:\w+$/,R=function(e){return"*"===e};function M(e,t){var n=e.split("/"),r=n.length;return n.some(R)&&(r+=-2),t&&(r+=2),n.filter((function(e){return!R(e)})).reduce((function(e,t){return e+(W.test(t)?3:""===t?1:10)}),r)}function _(e,t){for(var n=e.routesMeta,r={},a="/",i=[],o=0;o<n.length;++o){var c=n[o],l=o===n.length-1,u="/"===a?t:t.slice(a.length)||"/",s=I({path:c.relativePath,caseSensitive:c.caseSensitive,end:l},u);if(!s)return null;Object.assign(r,s.params);var p=c.route;i.push({params:r,pathname:H([a,s.pathname]),pathnameBase:H([a,s.pathnameBase]),route:p}),"/"!==s.pathnameBase&&(a=H([a,s.pathnameBase]))}return i}function B(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight((function(n,a,i){return(0,r.createElement)(x.Provider,{children:void 0!==a.route.element?a.route.element:(0,r.createElement)(S,null),value:{outlet:n,matches:t.concat(e.slice(0,i+1))}})}),null)}function I(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});var n=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);var r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(function(e,t){return r.push(t),"([^\\/]+)"}));e.endsWith("*")?(r.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):a+=n?"\\/*$":"(?:\\b|\\/|$)";return[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),r=u(n,2),a=r[0],i=r[1],o=t.match(a);if(!o)return null;var c=o[0],l=c.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:i.reduce((function(e,t,n){if("*"===t){var r=s[n]||"";l=c.slice(0,c.length-r.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(n){return e}}(s[n]||""),e}),{}),pathname:c,pathnameBase:l,pattern:e}}function T(e,t,n){var r,a="string"==typeof e?y(e):e,i=""===e||""===a.pathname?"/":a.pathname;if(null==i)r=n;else{var o=t.length-1;if(i.startsWith("..")){for(var c=i.split("/");".."===c[0];)c.shift(),o-=1;a.pathname=c.join("/")}r=o>=0?t[o]:"/"}var l=function(e,t){void 0===t&&(t="/");var n="string"==typeof e?y(e):e,r=n.pathname,a=n.search,i=void 0===a?"":a,o=n.hash,c=void 0===o?"":o,l=r?r.startsWith("/")?r:function(e,t){var n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((function(e){".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(r,t):t;return{pathname:l,search:Z(i),hash:q(c)}}(a,r);return i&&"/"!==i&&i.endsWith("/")&&!l.pathname.endsWith("/")&&(l.pathname+="/"),l}function U(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;var n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}var H=function(e){return e.join("/").replace(/\/\/+/g,"/")},J=function(e){return e.replace(/\/+$/,"").replace(/^\/*/,"/")},Z=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},q=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""};function V(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Q(e){var t=e.basename,n=e.children,a=e.window,i=(0,r.useRef)();null==i.current&&(i.current=function(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,r=n.history;function a(){var e=n.location,t=e.pathname,a=e.search,i=e.hash,o=r.state||{};return[o.idx,p({pathname:t,search:a,hash:i,state:o.usr||null,key:o.key||"default"})]}var i=null;n.addEventListener(f,(function(){if(i)E.call(i),i=null;else{var e=c.Pop,t=a(),n=t[0],r=t[1];if(E.length){if(null!=n){var o=u-n;o&&(i={action:e,location:r,retry:function(){A(-1*o)}},A(o))}}else C(e)}}));var o=c.Pop,l=a(),u=l[0],b=l[1],w=d(),E=d();function x(e){return"string"==typeof e?e:g(e)}function S(e,t){return void 0===t&&(t=null),p(s({pathname:b.pathname,hash:"",search:""},"string"==typeof e?y(e):e,{state:t,key:v()}))}function P(e,t){return[{usr:e.state,key:e.key,idx:t},x(e)]}function k(e,t,n){return!E.length||(E.call({action:e,location:t,retry:n}),!1)}function C(e){o=e;var t=a();u=t[0],b=t[1],w.call({action:o,location:b})}function A(e){r.go(e)}null==u&&(u=0,r.replaceState(s({},r.state,{idx:u}),""));var j={get action(){return o},get location(){return b},createHref:x,push:function e(t,a){var i=c.Push,o=S(t,a);if(k(i,o,(function(){e(t,a)}))){var l=P(o,u+1),s=l[0],p=l[1];try{r.pushState(s,"",p)}catch(h){n.location.assign(p)}C(i)}},replace:function e(t,n){var a=c.Replace,i=S(t,n);if(k(a,i,(function(){e(t,n)}))){var o=P(i,u),l=o[0],s=o[1];r.replaceState(l,"",s),C(a)}},go:A,back:function(){A(-1)},forward:function(){A(1)},listen:function(e){return w.push(e)},block:function(e){var t=E.push(e);return 1===E.length&&n.addEventListener(h,m),function(){t(),E.length||n.removeEventListener(h,m)}}};return j}({window:a}));var o=i.current,l=u((0,r.useState)({action:o.action,location:o.location}),2),b=l[0],w=l[1];return(0,r.useLayoutEffect)((function(){return o.listen(w)}),[o]),(0,r.createElement)(k,{basename:t,children:n,location:b.location,navigationType:b.action,navigator:o})}function z(e){return void 0===e&&(e=""),new URLSearchParams("string"==typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((function(t,n){var r=e[n];return t.concat(Array.isArray(r)?r.map((function(e){return[n,e]})):[[n,r]])}),[]))}var F=function(){var e=function(e){var t=(0,r.useRef)(z(e)),n=j(),a=(0,r.useMemo)((function(){var e,r=z(n.search),a=V(t.current.keys());try{var i=function(){var n=e.value;r.has(n)||t.current.getAll(n).forEach((function(e){r.append(n,e)}))};for(a.s();!(e=a.n()).done;)i()}catch(o){a.e(o)}finally{a.f()}return r}),[n.search]),i=N();return[a,(0,r.useCallback)((function(e,t){i("?"+z(e),t)}),[i])]}(),t=e[0],n=(e[1],t.get("s")),i=(0,a.useStaticQuery)("2829538666");if(null!==n){var o=0;return r.createElement("div",{className:"container-fluid p-0"},r.createElement("div",{className:"row justify-content-center sec-color"},r.createElement("h1",{className:"text-center py-5"},"Search results:")),r.createElement("div",{className:"row single-post m-auto justify-content-between mt-2 mt-lg-5"},i.allBlogDataJson.edges.map((function(e,t){if(e.node.H1.toLowerCase().includes(n.toLowerCase())){var i=e.node.excerpt.substring(0,100).split(" ");return o+=t,r.createElement("div",{className:"col-12 col-md-6 col-lg-4 p-0 card-holder",key:"content_item_"+o},r.createElement("div",{className:"card-body my-3 sec-color"},r.createElement(a.Link,{to:"/"+e.node.slug,className:"linkcard"},r.createElement("h2",{className:"card-title"},e.node.H1),r.createElement("p",{className:"card-text"},i.slice(0,i.length-1).join(" ")," ..."),r.createElement("div",{className:"card-link"},"Read More →"))))}})),i.allCategoriesJson.nodes.map((function(e,t){var i=e.content.map((function(e,t){var i=e.posts.map((function(e,t){if(e.H1.toLowerCase().includes(n.toLowerCase())){var i=e.excerpt.substring(0,100).split(" ");return o+=t,r.createElement("div",{className:"col-12 col-md-6 col-lg-4 p-0 card-holder",key:"content_item_"+o},r.createElement("div",{className:"card-body my-3 sec-color"},r.createElement(a.Link,{to:"/"+e.slug,className:"linkcard"},r.createElement("h2",{className:"card-title"},e.H1),r.createElement("p",{className:"card-text"},i.slice(0,i.length-1).join(" ")," ..."),r.createElement("div",{className:"card-link"},"Read More →"))))}}));return i}));return i})),r.createElement("div",{className:"col-12 col-md-6 col-lg-4 p-0 card-holder",key:"added"})))}return null},G=function(){var e=(0,a.useStaticQuery)("92773480");if(!e.errors){var t="undefined"!=typeof window;return r.createElement("div",null,r.createElement(i.Z,null,r.createElement(o.Z,{slug:"/search/",category:"Search"}),t?r.createElement(Q,null,r.createElement(C,null,r.createElement(P,{path:"/search/",element:r.createElement(F,null)}))):null))}console.log("Error retrieving data",e.errors)}}}]);
//# sourceMappingURL=component---src-pages-search-js-bf0e8355f45816f6e48c.js.map