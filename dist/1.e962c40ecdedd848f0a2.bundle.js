(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(t,e,n){"use strict";function o(t,e,n,o,r,i,s,c){var a,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=a):r&&(a=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(u.functional){u._injectStyles=a;var d=u.render;u.render=function(t,e){return a.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:u}}n.d(e,"a",(function(){return o}))},19:function(t,e,n){"use strict";var o=n(18),r=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{attrs:{to:"/page1"}},[this._v("Go to FirstPage")]),this._v(" "),e("router-link",{attrs:{to:"/page2"}},[this._v("Go to SecondPage")]),this._v(" "),e("router-link",{attrs:{to:"/page3"}},[this._v("Go to ThirdPage")])],1)}),[],!1,null,null,null);e.a=r.exports},20:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},21:function(t,e,n){"use strict";var o=n(23),r=n.n(o);e.a=({name:t,query:e,render:o,module:i})=>{const s={name:t,functional:!0,query:e,render:(t,e)=>o(r()(t),{state:e.parent.$store.state,route:e.parent.$route,router:e.parent.$router,hub:e.props.hub||e.data.hub||e.parent.$hub,...e})};if(i&&i.hot){const e=n(24),o=n(1);if(e.install(o),!e.compatible)throw new Error("vue-hot-reload-api is not compatible with the version of Vue you are using.");i.hot.accept(),i.hot.data?e.rerender(t,s):e.createRecord(t,s)}return s}},22:function(t,e,n){"use strict";(function(t){var o=n(21);e.a=Object(o.a)({name:"counter",module:t,render:(t,{props:e,hub:n})=>{return t("div",[t("div",(e.count||0).toString()),t("button",{on:{click:t=>n.emit("up")}},"Up"),t("button",{on:{click:t=>n.emit("down")}},"Down")])}})}).call(this,n(20)(t))},23:function(t,e){const n=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,o=/^\.|#/;t.exports=t=>(e,r,i)=>{if(null==e)return t("div",r,i);if("string"!=typeof e)return t(e,r,i);(null==r||"object"!=typeof r||Array.isArray(r))&&(i=r,r={});const s=e.split(n);for(let t of s){const e=t.charAt(0),n=t.substring(1,t.length);"."===e?(r.class||(r.class={}),r.class[n]=!0):"#"!==e||r.hasOwnProperty("id")||(r.attrs||(r.attrs={}),r.attrs.id=n)}const c=o.test(s[1])?"div":s[1];return t(c,r,i)}},24:function(t,e){var n,o,r=Object.create(null);"undefined"!=typeof window&&(window.__VUE_HOT_MAP__=r);var i=!1,s="beforeCreate";function c(t,e){if(e.functional){var n=e.render;e.render=function(e,o){var i=r[t].instances;return o&&i.indexOf(o.parent)<0&&i.push(o.parent),n(e,o)}}else a(e,s,(function(){var e=r[t];e.Ctor||(e.Ctor=this.constructor),e.instances.push(this)})),a(e,"beforeDestroy",(function(){var e=r[t].instances;e.splice(e.indexOf(this),1)}))}function a(t,e,n){var o=t[e];t[e]=o?Array.isArray(o)?o.concat(n):[o,n]:[n]}function u(t){return function(e,n){try{t(e,n)}catch(t){console.error(t),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function d(t,e){for(var n in t)n in e||delete t[n];for(var o in e)t[o]=e[o]}e.install=function(t,r){i||(i=!0,n=t.__esModule?t.default:t,o=n.version.split(".").map(Number),r,n.config._lifecycleHooks.indexOf("init")>-1&&(s="init"),e.compatible=o[0]>=2,e.compatible||console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))},e.createRecord=function(t,e){if(!r[t]){var n=null;"function"==typeof e&&(e=(n=e).options),c(t,e),r[t]={Ctor:n,options:e,instances:[]}}},e.isRecorded=function(t){return void 0!==r[t]},e.rerender=u((function(t,e){var n=r[t];if(e){if("function"==typeof e&&(e=e.options),n.Ctor)n.Ctor.options.render=e.render,n.Ctor.options.staticRenderFns=e.staticRenderFns,n.instances.slice().forEach((function(t){t.$options.render=e.render,t.$options.staticRenderFns=e.staticRenderFns,t._staticTrees&&(t._staticTrees=[]),Array.isArray(n.Ctor.options.cached)&&(n.Ctor.options.cached=[]),Array.isArray(t.$options.cached)&&(t.$options.cached=[]);var o=function(t){if(!t._u)return;var e=t._u;return t._u=function(t){try{return e(t,!0)}catch(n){return e(t,null,!0)}},function(){t._u=e}}(t);t.$forceUpdate(),t.$nextTick(o)}));else if(n.options.render=e.render,n.options.staticRenderFns=e.staticRenderFns,n.options.functional){if(Object.keys(e).length>2)d(n.options,e);else{var o=n.options._injectStyles;if(o){var i=e.render;n.options.render=function(t,e){return o.call(e),i(t,e)}}}n.options._Ctor=null,Array.isArray(n.options.cached)&&(n.options.cached=[]),n.instances.slice().forEach((function(t){t.$forceUpdate()}))}}else n.instances.slice().forEach((function(t){t.$forceUpdate()}))})),e.reload=u((function(t,e){var n=r[t];if(e)if("function"==typeof e&&(e=e.options),c(t,e),n.Ctor){o[1]<2&&(n.Ctor.extendOptions=e);var i=n.Ctor.super.extend(e);i.options._Ctor=n.options._Ctor,n.Ctor.options=i.options,n.Ctor.cid=i.cid,n.Ctor.prototype=i.prototype,i.release&&i.release()}else d(n.options,e);n.instances.slice().forEach((function(t){t.$vnode&&t.$vnode.context?t.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")}))}))},25:function(t,e,n){"use strict";n.r(e),function(t){var o=n(21),r=n(19),i=n(22);e.default=Object(o.a)({name:"page3",module:t,render:(t,{props:e,hub:n,state:o})=>{const s=e.transient_count||0;return t("#app",[t("h1","Welcome"),t(r.a),t(i.a,{attrs:{count:s,hub:n.child({up:()=>n.emit("update",{transient_count:s+1}),down:()=>n.emit("update",{transient_count:s-1})})}}),t(i.a,{attrs:{count:o.default_store.count,hub:n.child({up:()=>n.emit("increment count",1),down:()=>n.emit("decrement count",1)})}}),t("div",[t("h2","Third Page!")])])}})}.call(this,n(20)(t))}}]);