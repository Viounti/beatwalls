(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{345:function(t,s,e){t.exports=e.p+"assets/img/10.6948602f.png"},346:function(t,s,e){t.exports=e.p+"assets/img/20.b3d762d2.png"},347:function(t,s,e){t.exports=e.p+"assets/img/30.a5b71463.png"},361:function(t,s,e){"use strict";e.r(s);var a=e(33),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"curve-steadycurve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#curve-steadycurve"}},[t._v("#")]),t._v(" Curve/Steadycurve")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://youtu.be/eowLTGFseuk",target:"_blank",rel:"noopener noreferrer"}},[t._v("video"),a("OutboundLink")],1),t._v(" of all Wallstructures in this file")]),t._v(" "),a("p",[t._v("All curves are controlled using Points.\nThese are fairly intuitive when using, but might be difficult when first seeing.\nCheck out this "),a("a",{attrs:{href:"https://youtu.be/eowLTGFseuk",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("this link")]),a("OutboundLink")],1),t._v(" to play around.")]),t._v(" "),a("h2",{attrs:{id:"example-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[t._v("#")]),t._v(" Example 1")]),t._v(" "),a("p",[a("img",{attrs:{src:e(345),alt:"I should be a picture"}})]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Steadycurve stretches the points over 1 beat")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# most of the time it is easier to use then normal curve")]),t._v("\n10  Steadycurve\n    p1 = 8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("   \n    p2 = 8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n    p3 = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n    p4 = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),t._v("\n    fitY = 8             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# all fit to the startHeight 8.")]),t._v("\n    mirror = 2           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mirrors on the x axis")]),t._v("\n    amount = 8           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use 8 walls for this structure.")]),t._v("\n    scale = 2.0          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stretch the structure over 2 beats.")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example 2")]),t._v(" "),a("p",[a("img",{attrs:{src:e(346),alt:"I should be a picture"}})]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the normal curve can use z-values for finer control")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the default amount should be fine, it automatically gets it from the duration, ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# so we dont set it here")]),t._v("\n20 curve\n    p1 = 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    p2 = 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n    p3 = 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    p4 = 3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("       \n    mirror = 8         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mirors both on the x and y axis")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example 3")]),t._v(" "),a("p",[a("img",{attrs:{src:e(347),alt:"I should be a picture"}})]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This structure uses hyperwalls.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# those are the really fast walls. ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# They are created using negative duration")]),t._v("\n30 Steadycurve\n    p1 = 20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    p2 = 8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    p3 = 4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    p4 = 4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n    fitY = 0     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# every wallstructure is grounded")]),t._v("\n    width = 0        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes the width of every wall to 0")]),t._v("\n    scale = 8              "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stretch over 8 beats")]),t._v("\n    amount = 64            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# use 64 walls")]),t._v("\n    duration = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# make hyper walls")]),t._v("\n    mirror = 2             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mirror on the other side")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);