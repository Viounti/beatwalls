(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{274:function(e,t,o){"use strict";o(275);t.a={data:function(){return{yuu:{}}},mounted:function(){var e=this.$site.themeConfig.yuu,t=void 0===e?{}:e;this.yuu={themes:t.colorThemes||["blue","red","purple"],defaultColorTheme:t.defaultColorTheme||"default",defaultDarkTheme:t.defaultDarkTheme||!1,disableDarkTheme:t.disableDarkTheme||!1,disableThemeIgnore:t.disableThemeIgnore||!1,extraOptions:t.extraOptions||{}},this.yuu.hasThemes=Array.isArray(this.yuu.themes)&&this.yuu.themes.length>0}}},275:function(e,t,o){o(0)({target:"Array",stat:!0},{isArray:o(35)})},276:function(e,t,o){},277:function(e,t,o){},278:function(e,t,o){},279:function(e,t,o){},280:function(e,t,o){},281:function(e,t,o){},282:function(e,t,o){"use strict";o(18),o(136),o(275),o(53),o(137);var r=o(31);t.a={mounted:function(){"default"===this.yuu.defaultColorTheme||localStorage.getItem("color-theme")||localStorage.setItem("color-theme",this.yuu.defaultColorTheme),this.setPageTheme()},beforeUpdate:function(){this.setPageTheme()},methods:{setTheme:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this.yuu.themes||{};if(Array.isArray(o)&&o.length){var a=document.body.classList,n=o.map((function(e){return"yuu-theme-".concat(e)}));if(!e)return t&&localStorage.setItem("color-theme","default"),a.remove.apply(a,Object(r.a)(n));if(e&&!o.includes(e)){var s=localStorage.getItem("color-theme");return this.setTheme(o.includes(s)?s:null)}a.remove.apply(a,Object(r.a)(n.filter((function(t){return t!=="yuu-theme-".concat(e)})))),a.add("yuu-theme-".concat(e)),t&&localStorage.setItem("color-theme",e)}},setPageTheme:function(){var e=this.$page.frontmatter.forceTheme,t=localStorage.getItem("color-theme"),o="true"===localStorage.getItem("ignore-forced-themes"),r=!0!==this.yuu.disableThemeIgnore&&o?t:e||t;this.setTheme(r,!1)}}}},284:function(e,t,o){"use strict";t.a={data:function(){return{darkTheme:!1,ignoreForcedThemes:!1}},mounted:function(){!0!==this.yuu.disableDarkTheme&&(!0!==this.yuu.defaultDarkTheme||localStorage.getItem("dark-theme")||localStorage.setItem("dark-theme",!0),this.darkTheme="true"===localStorage.getItem("dark-theme"),this.toggleDarkTheme()),!0!==this.yuu.disableThemeIgnore&&(this.ignoreForcedThemes="true"===localStorage.getItem("ignore-forced-themes"))},methods:{toggleDarkTheme:function(){if(this.darkTheme)return document.body.classList.add("yuu-theme-dark"),localStorage.setItem("dark-theme",!0);document.body.classList.remove("yuu-theme-dark"),localStorage.setItem("dark-theme",!1)},toggleForcedThemes:function(){if(this.ignoreForcedThemes)return this.setTheme(localStorage.getItem("color-theme")),localStorage.setItem("ignore-forced-themes",!0);localStorage.removeItem("ignore-forced-themes")}}}},285:function(e,t,o){"use strict";var r=o(276);o.n(r).a},286:function(e,t,o){"use strict";var r=o(277);o.n(r).a},287:function(e,t,o){"use strict";var r=o(278);o.n(r).a},288:function(e,t,o){"use strict";var r=o(279);o.n(r).a},289:function(e,t,o){"use strict";var r=o(280);o.n(r).a},290:function(e,t,o){"use strict";var r=o(281);o.n(r).a},354:function(e,t,o){"use strict";o.r(t);var r=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],a={methods:{getMsg:function(){return r[Math.floor(Math.random()*r.length)]}}},n=o(33),s=Object(n.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"theme-container"},[t("div",{staticClass:"theme-default-content"},[t("h1",[this._v("404")]),this._v(" "),t("blockquote",[this._v(this._s(this.getMsg()))]),this._v(" "),t("RouterLink",{attrs:{to:"/"}},[this._v("\n      Take me home.\n    ")])],1)])}),[],!1,null,null,null).exports,u=o(274),i=o(282),h=o(284),c={components:{ParentLayout:s},mixins:[u.a,i.a,h.a]},l=(o(285),o(286),o(287),o(288),o(289),o(290),Object(n.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("ParentLayout")}),[],!1,null,null,null));t.default=l.exports}}]);