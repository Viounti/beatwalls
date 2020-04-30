(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{369:function(t,e,a){"use strict";a.r(e);var s=a(33),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nested-wallstructures-and-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-wallstructures-and-interfaces"}},[t._v("#")]),t._v(" Nested Wallstructures and Interfaces")]),t._v(" "),a("p",[t._v("It is best to avoid duplicates, when you can.\nThis leads to Code, that you can easily change and adjust to maps.\nTo help you with this Beatwalls has some features you might recognized when you worked with object-oriented programming before.")]),t._v(" "),a("h2",{attrs:{id:"custom-wallstructures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-wallstructures"}},[t._v("#")]),t._v(" Custom Wallstructures")]),t._v(" "),a("p",[t._v("You can combine and build on top of existing Wallstructures\nThis is a good way to reduce duplicated Code.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You always need one at least one Wallstructure you are basing on")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# Bottom and top Wall of the tunel\n# _tunnel1 is the name of our Wallstructure\n# Wall is the base Wallstructure\n_tunnel1: Wall\n    x = -2\n    width = 4\n    mirror = 6\n\n# left and right Wall\n _tunnel2: Wall\n    x = 4\n    height: 4\n    mirror: 2\n    \n# you can add multiple Wallstructures\ntunnel: _tunnel1,_tunnel2,\n\n# creating a tunel\n10 tunnel\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("naming convention")]),t._v(" "),a("p",[t._v("Starting Names with underscores is a simple way of telling what Wallstructures are used only in other Structures.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Overriding Assertions")]),t._v(" "),a("p",[t._v("You can still override Assertions.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("myline: Line\n    p1 = 10,0,0\n10 myLine\n    p1 = 10,5,0\n")])])])]),t._v(" "),a("h2",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("p",[t._v("Interfaces hold assertions for Wallstructures.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# create\ninterface fast\n    duration = -2\ninterface point\n    width = 0\n    height = 0\n\n# has duration set to -2\n# has width and height 0\n10 tunnel: fast, point\n")])])]),a("p",[t._v("You can also create nested Interfaces")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("interface fastpoints: fast, point\n10 tunnel: fast, point\n")])])]),a("p",[t._v("You can use Interfaces on custom Wallstructures")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("struct pointLine: Line, fastpoints\n    p1: -10,0,0\n    p2: 2,10,4\n10 pointLine\n")])])]),a("h2",{attrs:{id:"default-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-interface"}},[t._v("#")]),t._v(" Default Interface")]),t._v(" "),a("p",[t._v("The default Interface is one "),a("strong",[t._v("all")]),t._v(" Wallstructures have.\nYou can overwrite it to set certain Values for all Walls.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# override the default Interface\ninterface default\n    duration = -3\n# will have its duration set to -3\n10 wall\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);