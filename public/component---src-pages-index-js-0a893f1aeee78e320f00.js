(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return o});a(52);var n=a(0),r=a.n(n),i=a(155),c=a(145);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Bài viết mới nhất"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,r.a.createElement(c.Link,{to:a.fields.slug},a.frontmatter.title),r.a.createElement("span",{style:{color:"#BBB"}},"— ",a.frontmatter.date)),r.a.createElement("p",null,a.excerpt))}))};var o="1136479962"},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(144),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(146),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var d=a(38);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),g=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},146:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},148:function(e,t,a){},150:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(54),l=a(1),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},153:function(e,t,a){},155:function(e,t,a){"use strict";var n=a(147),r=a(0),i=a.n(r),c=(a(148),a(150),a(145)),o=function(e){var t=e.title;return i.a.createElement("header",null,i.a.createElement("h3",{className:"nav-brand"},i.a.createElement(c.Link,{to:"/"},t)),i.a.createElement("ul",null,i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.Link,{to:"/lien-he/"},"Liên hệ")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.Link,{to:"/gioi-thieu/"},"Giới thiệu")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(c.Link,{to:"/"},"Trang chủ"))))},l=(a(52),a(53),a(156),a(78),a(157),a(79),a(80),a(153),a(158)),u=a.n(l),s=function(e){var t=e.edges,a=[],n=[];return t.forEach(function(e){var t=e.node;a=Array.from(new Set(a.concat(t.frontmatter.tags))),n=Array.from(new Set(n.concat(t.frontmatter.categories)))}),i.a.createElement("aside",null,i.a.createElement("div",null,i.a.createElement("h3",null,"Chuyên mục"),n.map(function(e,t){return i.a.createElement("p",{key:t},i.a.createElement(c.Link,{to:"/category/"+u()(e).toLowerCase()+"/"},e))})),i.a.createElement("div",null,i.a.createElement("h3",null,"Thẻ"),a.map(function(e,t){return i.a.createElement("span",{key:t},i.a.createElement(c.Link,{to:"/tag/"+u()(e).toLowerCase()+"/"},e)," ")})))};t.a=function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"61684770",render:function(e){return i.a.createElement("div",{className:"app"},i.a.createElement(o,{title:e.site.siteMetadata.title}),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"content"},t),i.a.createElement("div",{className:"sidebar"},i.a.createElement(s,{edges:e.topics.edges}))))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-index-js-0a893f1aeee78e320f00.js.map