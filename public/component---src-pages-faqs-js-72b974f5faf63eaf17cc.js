"use strict";(self.webpackChunkblogsite=self.webpackChunkblogsite||[]).push([[295],{7686:function(e,t,n){var a=n(7294),r=n(5414),o="undefined"!=typeof window,i=function(e){var t=e.description,n=e.lang,i=e.title,l=(e.img,e.time,e.category),s=e.slug,c="https://heartfelt-profiterole-948609.netlify.app/".replace("https://","").replace(".com",""),p="https://heartfelt-profiterole-948609.netlify.app/"+s+"/";""==s&&(p="https://heartfelt-profiterole-948609.netlify.app/");var m="";o&&(c=window.location.hostname,p=window.location.href,m=window.location.href.replace(window.location.pathname,""));var d=t;return a.createElement(r.q,{htmlAttributes:{lang:n},link:[{rel:"canonical",href:p}],title:l,titleTemplate:c?"%s - "+c:null,meta:[{name:"description",content:l+" - "+d},{property:"robots",content:"follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"},{property:"og:locale",content:"en_US"},{property:"og:type",content:"website"},{property:"og:title",content:l+" - "+c},{property:"og:description",content:d},{property:"og:url",content:p},{name:"og:site_name",content:c},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:l+" - "+c},{name:"twitter:description",content:d},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:"admin"},{name:"twitter:label2",content:"Time to read"},{name:"twitter:data2",content:"4 minutes"}]},a.createElement("script",{type:"application/ld+json"},'{\n        "@context": "https://schema.org/",\n        "@graph": [\n            { "@type": ["Person", "Organization"], "@id": "'+m+'#person", "name": "Ayush" },\n            {\n              "@context": "https://schema.org/",\n              "@type": "WebSite",\n              "url": "'+m+'",\n              "potentialAction": {\n                "@type": "SearchAction",\n                "target": {\n                  "@type": "EntryPoint",\n                  "urlTemplate": "'+m+'search/?s={search_term_string}"\n                },\n                "query-input": "required name=search_term_string"\n              }\n            },\n            {\n                "@type": "ImageObject",\n                "@id": "'+m+'",\n                "url": "'+m+'",\n                "width": "200",\n                "height": "200",\n                "inLanguage": "en-US"\n            },\n            {\n                "@type": "Person",\n                "@id": "'+m+'author/",\n                "name": "admin",\n                "url": "'+m+'author/",\n                "image": {\n                    "@type": "ImageObject",\n                    "@id": "https://secure.gravatar.com/avatar/a037394d75a25a500259f54b94b393ce?s=96&amp;d=mm&amp;r=g",\n                    "url": "https://secure.gravatar.com/avatar/a037394d75a25a500259f54b94b393ce?s=96&amp;d=mm&amp;r=g",\n                    "caption": "admin",\n                    "inLanguage": "en-US"\n                },\n                "sameAs": ["'+m+'"]\n            },\n            {\n                "@type": "WebPage",\n                "@id": "'+m+'#webpage",\n                "url": "'+m+'",\n                "name": "'+i+" - "+c+'",\n                "datePublished": "2021-04-26T20:52:11+00:00",\n                "dateModified": "2021-07-19T04:51:27+00:00",\n                "author": { "@id": "'+m+'author" },\n                "isPartOf": { "@id": "'+m+'#website" },\n                "inLanguage": "en-US"\n            }\n        ]\n    }'))};i.defaultProps={lang:"en",meta:[],description:""},t.Z=i},2007:function(e,t,n){n.r(t);var a=n(7294),r=n(1597),o=n(4728),i=n(7686);t.default=function(){var e=(0,r.useStaticQuery)("8551368");if(!e.errors){var t=e.allCategoriesJson.nodes[0].category.toLowerCase();return a.createElement("div",null,a.createElement(o.Z,null,a.createElement(i.Z,{description:e.allCategoriesJson.nodes[0].description,slug:e.allDescriptionsJson.nodes[0].page_location,category:e.allDescriptionsJson.nodes[0].page_location}),a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"row justify-content-center sec-color"},a.createElement("h1",{className:"text-center py-5"},"FAQs Articles")),a.createElement("div",{className:"archive-table single-post py-5 m-auto"},e.allCategoriesJson.nodes[0].content.map((function(e,n){return 0!==e.posts.length?a.createElement(r.Link,{to:"/"+t+"/"+e.slug+"/",className:"table_row m-auto single-post",key:"content_item_"+n},a.createElement("div",{width:"100%"},e.name),a.createElement("div",{width:"100%"},e.posts.length)):null}))))))}console.log("Error retrieving data",e.errors)}}}]);
//# sourceMappingURL=component---src-pages-faqs-js-72b974f5faf63eaf17cc.js.map