(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(31),{data:function(){return{}},methods:{},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),l=n(15),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"w-full z-30 top-0 py-1 bg-blue-300",attrs:{id:"header"}},[n("div",{staticClass:"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3"},[n("label",{staticClass:"cursor-pointer md:hidden block",attrs:{for:"menu-toggle"}},[n("svg",{staticClass:"fill-current text-gray-900",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"}},[n("title",[t._v("menu")]),t._v(" "),n("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])]),t._v(" "),n("input",{staticClass:"hidden",attrs:{type:"checkbox",id:"menu-toggle"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"order-1 md:order-2"},[n("button",{staticClass:"flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ",on:{click:function(e){return t.$router.push("/")}}},[n("svg",{staticClass:"fill-current text-gray-800 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"}})]),t._v("\n                  PUG HOME\n              ")])]),t._v(" "),n("div",{staticClass:"order-2 md:order-3 flex items-center",attrs:{id:"nav-content"}},[n("button",{staticClass:"flex ",on:{click:function(e){return t.$router.push("/profile")}}},[n("svg",{staticClass:"fill-current hover:text-black",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("circle",{attrs:{fill:"none",cx:"12",cy:"7",r:"3"}}),t._v(" "),n("path",{attrs:{d:"M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"}})]),t._v(" Profile\n              ")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1",attrs:{id:"menu"}},[n("nav",[n("ul",{staticClass:"md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0"},[n("li",[n("a",{staticClass:"inline-block no-underline hover:text-black hover:underline py-2 px-4",attrs:{href:"https://github.com/papawin0702"}},[t._v("Github")])])])])])}],!1,null,null,null);e.default=component.exports},109:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(31),{props:{products:{default:null}},data:function(){return{}},methods:{calculate:function(){for(var t=0,e=0;e<this.products.length;e++)t+=this.products[e].price*this.products[e].count;return t},checkout:function(){alert("Success"),location.reload()}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),l=(n(203),n(15)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.products?n("div",[n("table",[t._m(0),t._v(" "),t._l(t.products,(function(e,r){return n("tr",{key:r},[n("td",[n("div",{staticClass:"flex"},[n("img",{staticClass:"w-14 h-14",attrs:{src:e.image,alt:""}}),t._v(" "),n("h2",[t._v(t._s(e.name))])])]),t._v(" "),n("td",[t._v(t._s(e.count))]),t._v(" "),n("td",[t._v("฿"+t._s(e.price))]),t._v(" "),n("td",[t._v("฿"+t._s(e.price*e.count))])])}))],2),t._v(" "),n("h2",{staticClass:"p-4 text-xl"},[t._v(" Total : "),n("span",{staticClass:"font-bold text-yellow-600"},[t._v("฿ "+t._s(t.calculate())+" ")])]),t._v(" "),n("center",[n("button",{staticClass:"bg-green-600 p-6 text-xl text-white",on:{click:function(e){return t.checkout()}}},[t._v("Pay")])])],1):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Product")]),t._v(" "),n("th",[t._v("Number")]),t._v(" "),n("th",[t._v("Price")]),t._v(" "),n("th",[t._v("Total")])])}],!1,null,null,null);e.default=component.exports},149:function(t,e,n){var content=n(202);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("bc0f4dfc",content,!0,{sourceMap:!1})},150:function(t,e,n){var content=n(204);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("0005c4b4",content,!0,{sourceMap:!1})},151:function(t,e,n){"use strict";n.r(e);n(201);var r=n(15),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),t._v(" "),n("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),t._v(" "),n("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},158:function(t,e,n){"use strict";var r=n(15),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t._v(" "),n("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:n(105).default})},159:function(t,e,n){n(160),t.exports=n(161)},201:function(t,e,n){"use strict";n(149)},202:function(t,e,n){var r=n(54)((function(i){return i[1]}));r.push([t.i,".NuxtLogo{\n  -webkit-animation:appear 1s;\n          animation:appear 1s;\n  margin:auto\n}\n@-webkit-keyframes appear{\n0%{\n    opacity:0\n}\n}\n@keyframes appear{\n0%{\n    opacity:0\n}\n}",""]),t.exports=r},203:function(t,e,n){"use strict";n(150)},204:function(t,e,n){var r=n(54)((function(i){return i[1]}));r.push([t.i,"table{\n  width:100%\n}\ntable,td,th{\n  border:1px solid #000;\n  border-collapse:collapse\n}\ntd,th{\n  padding:15px;\n  text-align:left\n}\n#t01 tr:nth-child(2n){\n  background-color:#eee\n}\n#t01 tr:nth-child(odd){\n  background-color:#fff\n}\n#t01 th{\n  background-color:#000;\n  color:#fff\n}",""]),t.exports=r}},[[159,5,1,6]]]);