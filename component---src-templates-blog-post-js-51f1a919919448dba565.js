(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7evw":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"CommentCount",{enumerable:!0,get:function(){return o.CommentCount}}),Object.defineProperty(e,"CommentEmbed",{enumerable:!0,get:function(){return r.CommentEmbed}}),Object.defineProperty(e,"DiscussionEmbed",{enumerable:!0,get:function(){return i.DiscussionEmbed}}),e.default=void 0;var o=n("UZsz"),r=n("Bp/N"),i=n("HhXV"),u={CommentCount:o.CommentCount,CommentEmbed:r.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};e.default=u},"Bp/N":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentEmbed=void 0;var o=i(n("q1tI")),r=i(n("17x9"));function i(t){return t&&t.__esModule?t:{default:t}}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=p(t);if(e){var r=p(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(u,t);var e,n,r,i=f(u);function u(){return a(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"getSrc",value:function(){var t=Number(this.props.commentId).toString(36),e=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(t,"?p=").concat(e,"&m=").concat(n)}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&c(e.prototype,n),r&&c(e,r),u}(o.default.Component);e.CommentEmbed=d,d.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},d.propTypes={commentId:r.default.string.isRequired,showMedia:r.default.bool,showParentComment:r.default.bool,width:r.default.number,height:r.default.number}},HhXV:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DiscussionEmbed=void 0;var o=u(n("q1tI")),r=u(n("17x9")),i=n("ZMnY");function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=m(t);if(e){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(a,t);var e,n,r,u=p(a);function a(){return s(this,a),u.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;window&&window.DISQUS&&t.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",t.body))}},{key:"cleanInstance",value:function(){var t=window.document;(0,i.removeScript)("dsq-embed-scr",t.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=t.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)}},{key:"getDisqusConfig",value:function(t){return function(){var e=this;this.page.identifier=t.identifier,this.page.url=t.url,this.page.title=t.title,this.page.category_id=t.categoryID,this.page.remote_auth_s3=t.remoteAuthS3,this.page.api_key=t.apiKey,t.language&&(this.language=t.language),y.forEach((function(n){e.callbacks[n]=[t[n]]}))}}},{key:"render",value:function(){return o.default.createElement("div",c({},this.props,{id:"disqus_thread"}))}}])&&f(e.prototype,n),r&&f(e,r),a}(o.default.Component);e.DiscussionEmbed=h,h.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string,language:r.default.string,categoryID:r.default.string,remoteAuthS3:r.default.string,apiKey:r.default.string,preData:r.default.func,preInit:r.default.func,onInit:r.default.func,onReady:r.default.func,afterRender:r.default.func,preReset:r.default.func,onIdentify:r.default.func,beforeComment:r.default.func,onNewComment:r.default.func,onPaginate:r.default.func}).isRequired}},UZsz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CommentCount=void 0;var o=u(n("q1tI")),r=u(n("17x9")),i=n("ZMnY");function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=d(t);if(e){var r=d(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var m=(0,i.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(a,t);var e,n,r,u=l(a);function a(){return c(this,a),u.apply(this,arguments)}return e=a,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(t){return this.props!==t&&(0,i.shallowComparison)(this.props,t)}},{key:"componentDidUpdate",value:function(t){this.props.shortname!==t.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var t=window.document;t.getElementById("dsq-count-scr")?m():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",t.body)}},{key:"cleanInstance",value:function(){var t=window.document.body;(0,i.removeScript)("dsq-count-scr",t),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(e.prototype,n),r&&s(e,r),a}(o.default.Component);e.CommentCount=y,y.propTypes={shortname:r.default.string.isRequired,config:r.default.shape({identifier:r.default.string,url:r.default.string,title:r.default.string}).isRequired}},ZMnY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.insertScript=function(t,e,n){var o=window.document.createElement("script");return o.async=!0,o.src=t,o.id=e,n.appendChild(o),o},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var o;return function(){var r=this,i=arguments,u=function(){o=null,n||t.apply(r,i)},a=n&&!o;window.clearTimeout(o),o=setTimeout(u,e),a&&t.apply(r,i)}},e.isReactElement=a,e.shallowComparison=function t(e,n){var o,r=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,i=!0,a=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return i=t.done,t},e:function(t){a=!0,r=t},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw r}}}}(new Set(Object.keys(e),Object.keys(n)));try{for(r.s();!(o=r.n()).done;){var c=o.value;if("object"===i(e[c])){if(t(e[c],n[c]))return!0}else if(e[c]!==n[c]&&!a(e[c]))return!0}}catch(s){r.e(s)}finally{r.f()}return!1};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o};function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return r.default.isValidElement(t)}))}},cXBx:function(t,e,n){},yZlL:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _})),n.d(e,"pageQuery",(function(){return S}));var o=n("MUpH"),r=n("q1tI"),i=n.n(r),u=n("vOnD"),a=n("7evw"),c=n("Bl7J"),s=n("Kvkj"),f=n("BdOp");n("cXBx");function l(){var t=Object(o.a)(["\n    max-width: 40em;\n    margin-right: 2em;\n  "]);return l=function(){return t},t}function p(){var t=Object(o.a)(["\n    margin-left: 80px;\n    padding: 0;\n  "]);return p=function(){return t},t}var d=u.b.div.withConfig({displayName:"blog-post__ArticleContainer",componentId:"ipkici-0"})(["display:flex;flex-direction:row;padding:1em;",""],f.a.small(p())),m=u.b.div.withConfig({displayName:"blog-post__Article",componentId:"ipkici-1"})(["max-width:100%;flex-shrink:0;flex-grow:0;",""],f.a.small(l())),y=u.b.div.withConfig({displayName:"blog-post__ArticleHeader",componentId:"ipkici-2"})(["padding-bottom:1em;"]),h=u.b.div.withConfig({displayName:"blog-post__ArticleHeadings",componentId:"ipkici-3"})([""]),b=u.b.h1.withConfig({displayName:"blog-post__PostTitle",componentId:"ipkici-4"})(["font-size:2em;line-height:1.1em;margin-bottom:0.5em;"]),g=u.b.hr.withConfig({displayName:"blog-post__ArticleEndHorizontalRule",componentId:"ipkici-5"})(["margin-bottom:1em;"]),w=u.b.p.withConfig({displayName:"blog-post__PostDate",componentId:"ipkici-6"})(["font-size:0.9em;"]),v=u.b.div.withConfig({displayName:"blog-post__PostContent",componentId:"ipkici-7"})(["& blockquote{font-size:0.9rem;}& figure{}& figure img{display:block;margin:0 auto;}& figure figcaption{text-align:center;font-size:14px;}"]);function _(t){var e=t.data,n=t.location,o=e.markdownRemark,r={identifier:o.id,title:o.frontmatter.title};return i.a.createElement(c.a,{location:n,pageTitle:o.frontmatter.title},i.a.createElement(d,null,i.a.createElement(m,null,i.a.createElement(y,null,i.a.createElement(h,null,i.a.createElement(b,null,o.frontmatter.title),i.a.createElement(w,null,o.frontmatter.date))),i.a.createElement(v,{dangerouslySetInnerHTML:{__html:o.html}}),i.a.createElement(g,null),i.a.createElement(a.DiscussionEmbed,{shortname:"www-carl-mueller-com",config:r}),i.a.createElement(s.c,{authors:o.frontmatter.authors,path:o.fields.slug,title:o.frontmatter.title}),i.a.createElement(s.b,{text:o.frontmatter.coverDesc,img:o.frontmatter.featuredImage}))))}var S="1683369848"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-51f1a919919448dba565.js.map