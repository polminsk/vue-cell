(function(t){function n(n){for(var e,c,o=n[0],a=n[1],u=n[2],p=0,d=[];p<o.length;p++)c=o[p],i[c]&&d.push(i[c][0]),i[c]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(t[e]=a[e]);l&&l(n);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,n=0;n<s.length;n++){for(var r=s[n],e=!0,o=1;o<r.length;o++){var a=r[o];0!==i[a]&&(e=!1)}e&&(s.splice(n--,1),t=c(c.s=r[0]))}return t}var e={},i={app:0},s=[];function c(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=t,c.c=e,c.d=function(t,n,r){c.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,n){if(1&n&&(t=c(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)c.d(r,e,function(n){return t[n]}.bind(null,e));return r},c.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(n,"a",n),n},c.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=a;s.push([0,"chunk-vendors"]),r()})({0:function(t,n,r){t.exports=r("56d7")},"034f":function(t,n,r){"use strict";var e=r("27fb"),i=r.n(e);i.a},"27fb":function(t,n,r){},5113:function(t,n,r){},"56d7":function(t,n,r){"use strict";r.r(n);var e=r("2b0e"),i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("Calculator")],1)},s=[],c=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"calculator"},[r("div",{staticClass:"display"},[t._v(t._s(t.current||"0"))]),r("div",{staticClass:"btn",on:{click:t.clear}},[t._v("C")]),r("div",{staticClass:"btn",on:{click:t.sign}},[t._v("+/-")]),r("div",{staticClass:"btn",on:{click:t.percent}},[t._v("%")]),r("div",{staticClass:"btn operator",on:{click:t.divide}},[t._v("÷")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("7")}}},[t._v("7")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("8")}}},[t._v("8")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("9")}}},[t._v("9")]),r("div",{staticClass:"btn operator",on:{click:t.times}},[t._v("x")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("4")}}},[t._v("4")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("5")}}},[t._v("5")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("6")}}},[t._v("6")]),r("div",{staticClass:"btn operator",on:{click:t.minus}},[t._v("-")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("1")}}},[t._v("1")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("2")}}},[t._v("2")]),r("div",{staticClass:"btn",on:{click:function(n){return t.append("3")}}},[t._v("3")]),r("div",{staticClass:"btn operator",on:{click:t.add}},[t._v("+")]),r("div",{staticClass:"btn zero",on:{click:function(n){return t.append("0")}}},[t._v("0")]),r("div",{staticClass:"btn",on:{click:t.dot}},[t._v(".")]),r("div",{staticClass:"btn operator",on:{click:t.equal}},[t._v("=")])])},o=[],a={data(){return{previous:null,current:"",operator:null,operatorClicked:!1}},methods:{clear(){this.current=""},sign(){this.current="-"===this.current.charAt(0)?this.current.slice(1):`-${this.current}`},percent(){this.current=`${parseFloat(this.current)/100}`},append(t){this.operatorClicked&&(this.current="",this.operatorClicked=!1),this.current=`${this.current}${t}`},dot(){-1===this.current.indexOf(".")&&this.append(".")},setPrevious(){this.previous=this.current,this.operatorClicked=!0},divide(){this.operator=((t,n)=>n/t),this.setPrevious()},times(){this.operator=((t,n)=>t*n),this.setPrevious()},minus(){this.operator=((t,n)=>n-t),this.setPrevious()},add(){this.operator=((t,n)=>t+n),this.setPrevious()},equal(){this.current=`${this.operator(parseFloat(this.current),parseFloat(this.previous))}`,this.previous=null}}},u=a,l=(r("9a9b"),r("2877")),p=Object(l["a"])(u,c,o,!1,null,"16aa1ae9",null),d=p.exports,v={name:"app",components:{Calculator:d}},f=v,h=(r("034f"),Object(l["a"])(f,i,s,!1,null,null,null)),b=h.exports;e["a"].config.productionTip=!1,new e["a"]({render:t=>t(b)}).$mount("#app")},"9a9b":function(t,n,r){"use strict";var e=r("5113"),i=r.n(e);i.a}});
//# sourceMappingURL=app.3b72d410.js.map