(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{290:function(t,n,r){"use strict";var i=r(142),e=r(12),u=r(16),a=r(15),o=r(143),s=r(144);i("match",1,(function(t,n,r){return[function(n){var r=a(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,r):new RegExp(n)[t](String(r))},function(t){var i=r(n,t,this);if(i.done)return i.value;var a=e(t),l=String(this);if(!a.global)return s(a,l);var c=a.unicode;a.lastIndex=0;for(var v,f=[],d=0;null!==(v=s(a,l));){var h=String(v[0]);f[d]=h,""===h&&(a.lastIndex=o(l,u(a.lastIndex),c)),d++}return 0===d?null:f}]}))},298:function(t,n,r){"use strict";var i=r(0),e=r(299);i({target:"String",proto:!0,forced:r(300)("link")},{link:function(t){return e(this,"a","href",t)}})},299:function(t,n,r){var i=r(15),e=/"/g;t.exports=function(t,n,r,u){var a=String(i(t)),o="<"+n;return""!==r&&(o+=" "+r+'="'+String(u).replace(e,"&quot;")+'"'),o+">"+a+"</"+n+">"}},300:function(t,n,r){var i=r(1);t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},316:function(t,n,r){},356:function(t,n,r){"use strict";var i=r(316);r.n(i).a},360:function(t,n,r){"use strict";r.r(n);r(22),r(290),r(298);var i=/^.*(?:(?:youtu.be\/)|(?:v\/)|(?:\/u\/\w\/)|(?:embed\/)|(?:watch\?))\??v?=?([^#\&\?]*).*/,e={name:"YouTube",props:{url:String},data:function(){return{valid:!1,link:"https://www.youtube.com/embed/"}},mounted:function(){var t=this.url.match(i);t&&(this.valid=!0,this.link+=t[1])}},u=(r(356),r(18)),a=Object(u.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return this.valid?n("div",{staticClass:"container"},[n("iframe",{staticClass:"video",attrs:{src:this.link,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})]):n("div",[n("h2",[this._v(this._s(this.url)+" is not a valid YouTube URL!")])])}),[],!1,null,"3190f24d",null);n.default=a.exports}}]);