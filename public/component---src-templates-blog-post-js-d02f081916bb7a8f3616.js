(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});var n=a(0),r=a.n(n),i=a(155);t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var c="861893041"},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(144),u=a.n(o);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(27);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(146),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),g=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},148:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(54),u=a(1),l=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},153:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),c=(a(148),a(150),a(145)),o=function(e){var t=e.title;return i.a.createElement("header",null,i.a.createElement("h3",{className:"nav-brand"},i.a.createElement(c.Link,{to:"/"},t)),i.a.createElement("ul",null,i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.Link,{to:"/lien-he/"},"Liên hệ")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.Link,{to:"/gioi-thieu/"},"Giới thiệu")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.Link,{to:"/"},"Trang chủ"))))},u=(a(52),a(53),a(156),a(78),a(157),a(79),a(80),a(153),a(158)),l=a.n(u),s=function(e){var t=e.edges,a=[],n=[];return t.forEach(function(e){var t=e.node;a=Array.from(new Set(a.concat(t.frontmatter.tags))),n=Array.from(new Set(n.concat(t.frontmatter.categories)))}),i.a.createElement("aside",null,i.a.createElement("div",null,i.a.createElement("h3",null,"Chuyên mục"),n.map(function(e,t){return i.a.createElement("p",{key:t},i.a.createElement(c.Link,{to:"/category/"+l()(e).toLowerCase()+"/"},e))})),i.a.createElement("div",null,i.a.createElement("h3",null,"Thẻ"),a.map(function(e,t){return i.a.createElement("span",{key:t},i.a.createElement(c.Link,{to:"/tag/"+l()(e).toLowerCase()+"/"},e)," ")})))};t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"61684770",render:function(e){return i.a.createElement("div",{className:"app"},i.a.createElement(o,{title:e.site.siteMetadata.title}),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"content"},t),i.a.createElement("div",{className:"sidebar"},i.a.createElement(s,{edges:e.topics.edges}))))},data:n})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d02f081916bb7a8f3616.js.map