(this["webpackJsonpe-era-react"]=this["webpackJsonpe-era-react"]||[]).push([[5],{111:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return l}));var r=n(48),c=n(117),o=n.n(c),i=function(t){return t.shop},a=Object(r.a)([i],(function(t){return t.collections})),u=Object(r.a)([a],(function(t){return t?Object.keys(t).map((function(e){return t[e]})):[]})),s=Object(r.a)([i],(function(t){return t.isFetching})),f=Object(r.a)([i],(function(t){return!!t.collections})),l=o()((function(t){return Object(r.a)([a],(function(e){return e?e[t]:null}))}))},116:function(t,e,n){"use strict";var r=n(15),c=n(68),o=n(70),i=n(13),a=["isLoading"];e.a=function(t){return function(e){var n=e.isLoading,u=Object(c.a)(e,a);return n?Object(i.jsx)(o.a,{}):Object(i.jsx)(t,Object(r.a)({},u))}}},117:function(t,e,n){(function(e){var n="__lodash_hash_undefined__",r="[object Function]",c="[object GeneratorFunction]",o=/^\[object .+?Constructor\]$/,i="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,u=i||a||Function("return this")();var s=Array.prototype,f=Function.prototype,l=Object.prototype,p=u["__core-js_shared__"],h=function(){var t=/[^.]+$/.exec(p&&p.keys&&p.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_=f.toString,d=l.hasOwnProperty,j=l.toString,b=RegExp("^"+_.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),v=s.splice,y=$(u,"Map"),O=$(Object,"create");function g(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function m(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function x(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function w(t,e){for(var n,r,c=t.length;c--;)if((n=t[c][0])===(r=e)||n!==n&&r!==r)return c;return-1}function N(t){if(!F(t)||(e=t,h&&h in e))return!1;var e,n=function(t){var e=F(t)?j.call(t):"";return e==r||e==c}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}(t)?b:o;return n.test(function(t){if(null!=t){try{return _.call(t)}catch(e){}try{return t+""}catch(e){}}return""}(t))}function k(t,e){var n=t.__data__;return function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?n["string"==typeof e?"string":"hash"]:n.map}function $(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return N(n)?n:void 0}function C(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,c=e?e.apply(this,r):r[0],o=n.cache;if(o.has(c))return o.get(c);var i=t.apply(this,r);return n.cache=o.set(c,i),i};return n.cache=new(C.Cache||x),n}function F(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}g.prototype.clear=function(){this.__data__=O?O(null):{}},g.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},g.prototype.get=function(t){var e=this.__data__;if(O){var r=e[t];return r===n?void 0:r}return d.call(e,t)?e[t]:void 0},g.prototype.has=function(t){var e=this.__data__;return O?void 0!==e[t]:d.call(e,t)},g.prototype.set=function(t,e){return this.__data__[t]=O&&void 0===e?n:e,this},m.prototype.clear=function(){this.__data__=[]},m.prototype.delete=function(t){var e=this.__data__,n=w(e,t);return!(n<0)&&(n==e.length-1?e.pop():v.call(e,n,1),!0)},m.prototype.get=function(t){var e=this.__data__,n=w(e,t);return n<0?void 0:e[n][1]},m.prototype.has=function(t){return w(this.__data__,t)>-1},m.prototype.set=function(t,e){var n=this.__data__,r=w(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},x.prototype.clear=function(){this.__data__={hash:new g,map:new(y||m),string:new g}},x.prototype.delete=function(t){return k(this,t).delete(t)},x.prototype.get=function(t){return k(this,t).get(t)},x.prototype.has=function(t){return k(this,t).has(t)},x.prototype.set=function(t,e){return k(this,t).set(t,e),this},C.Cache=x,t.exports=C}).call(this,n(53))},118:function(t,e,n){"use strict";n(119);var r=n(69),c=n(29),o=n(42),i=n(13);e.a=function(t){var e=t.item,n=Object(c.c)(),a=e.name,u=e.price,s=e.imageUrl;return Object(i.jsxs)("div",{className:"collection-item",children:[Object(i.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(s,")")}}),Object(i.jsxs)("div",{className:"collection-footer",children:[Object(i.jsx)("span",{className:"name",children:a}),Object(i.jsxs)("span",{className:"price",children:["$",u]})]}),Object(i.jsxs)(r.a,{id:"custom-button",onClick:function(){return n(Object(o.a)(e))},inverted:!0,children:["Add to cart"," "]})]})}},119:function(t,e,n){},158:function(t,e,n){},166:function(t,e,n){"use strict";n.r(e);var r=n(29),c=n(38),o=n(48),i=n(116),a=n(111),u=n(118),s=(n(158),n(13)),f=function(t){var e=t.match,n=Object(r.d)((function(t){return Object(a.a)(e.params.collection)(t)})),c=n.title,o=n.items;return Object(s.jsxs)("div",{className:"collection-page",children:[Object(s.jsxs)("h1",{className:"title",children:[" ",c.toUpperCase()]}),Object(s.jsx)("div",{className:"items",children:o.map((function(t){return Object(s.jsx)(u.a,{item:t},t.id)}))})]})},l=Object(o.b)({isLoading:function(t){return!Object(a.c)(t)}}),p=Object(c.c)(Object(r.b)(l),i.a)(f);e.default=p}}]);
//# sourceMappingURL=5.1594bc14.chunk.js.map