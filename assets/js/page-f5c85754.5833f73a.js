(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{522:function(t,e,r){"use strict";r.r(e);var o=r(18),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("RouterLink",{attrs:{to:"/"}},[t._v("beatwalls")]),t._v(" / "),r("RouterLink",{attrs:{to:"/reference/"}},[t._v("structure")]),t._v(" / "),r("RouterLink",{attrs:{to:"/reference/-define/"}},[t._v("Define")])],1),t._v(" "),r("h1",{attrs:{id:"define"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#define"}},[t._v("#")]),t._v(" Define")]),t._v(" "),r("p",[r("code",[t._v("class Define :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1),t._v(" "),r("p",[t._v("Define your own WallStructure from existing WallStructures.")]),t._v(" "),r("h3",{attrs:{id:"constructors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#constructors"}},[t._v("#")]),t._v(" Constructors")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/-init-.html"}},[t._v("<init>")])],1),t._v(" "),r("td",[t._v("Define your own WallStructure from existing WallStructures."),r("code",[t._v("Define()")])])])])]),t._v(" "),r("h3",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/is-top-level.html"}},[t._v("isTopLevel")])],1),t._v(" "),r("td",[t._v("dont touch"),r("code",[t._v("var isTopLevel: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/name.html"}},[t._v("name")])],1),t._v(" "),r("td",[t._v("the name the structure gets saved to"),r("code",[t._v("var name: String")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/structures.html"}},[t._v("structures")])],1),t._v(" "),r("td",[t._v("The name of Different Structures. Separated by comma (example: structures: Floor, Ceiling) You can also define Parameters of the first Structure These get loaded in Order, So if your reference defined Structures, those must be listed before that The Beat Value gets every time, so it should be 0 most of the time"),r("code",[t._v("var structures: List<")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(">")])],1)])])]),t._v(" "),r("h3",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/equals.html"}},[t._v("equals")])],1),t._v(" "),r("td",[r("code",[t._v("fun equals(other: Any?): Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/generate-walls.html"}},[t._v("generateWalls")])],1),t._v(" "),r("td",[t._v("generating the Walls"),r("code",[t._v("fun generateWalls(): MutableList<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/hash-code.html"}},[t._v("hashCode")])],1),t._v(" "),r("td",[r("code",[t._v("fun hashCode(): Int")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/name.html"}},[t._v("name")])],1),t._v(" "),r("td",[t._v("returns the name of the structure"),r("code",[t._v("fun name(): String")])])])])]),t._v(" "),r("h3",{attrs:{id:"extension-functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extension-functions"}},[t._v("#")]),t._v(" Extension Functions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/bend-walls.html"}},[t._v("bendWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".bendWalls(walls: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/color.html"}},[t._v("color")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".color(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/copy-walls.html"}},[t._v("copyWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".copyWalls(): ArrayList<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/deep-copy.html"}},[t._v("deepCopy")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".deepCopy():")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/generate-bend-and-repeat-walls.html"}},[t._v("generateBendAndRepeatWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".generateBendAndRepeatWalls(): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/mirror.html"}},[t._v("mirror")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".mirror(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.special-strucures/read-point.html"}},[t._v("readPoint")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".readPoint(name: String):")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-point/"}},[r("code",[t._v("Point")])]),r("code",[t._v("?")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/repeat.html"}},[t._v("repeat")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".repeat(walls: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/repeat-struct.html"}},[t._v("repeatStruct")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".repeatStruct(walls: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/repeat-walls.html"}},[t._v("repeatWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".repeatWalls(walls: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.helper-functions/reset.html"}},[t._v("reset")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".reset(): Unit")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/rotate.html"}},[t._v("rotate")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".rotate(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.special-strucures/run.html"}},[t._v("run")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-define/"}},[r("code",[t._v("Define")])]),r("code",[t._v(".run(): MutableList<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/speeder.html"}},[t._v("speeder")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".speeder(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)])])])])}),[],!1,null,null,null);e.default=s.exports}}]);