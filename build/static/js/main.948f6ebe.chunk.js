(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(6),r=n.n(c),a=(n(11),n(3)),i=n.n(a),j=n(5),l=n(2),o=n(0),h=function(e){var t=e.robot,n=Object(s.useState)(!1),c=Object(l.a)(n,2),r=c[0],a=c[1],i="https://robohash.org/".concat(t.id);return Object(o.jsx)("div",{className:"card",onClick:function(){return a(!r)},children:r?Object(o.jsxs)("div",{className:"robot-detail",children:[Object(o.jsx)("h3",{children:"Robot Detail"}),Object(o.jsx)("div",{}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("span",{children:"Name"}),":",t.name]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("span",{children:"Username"}),": ",t.username]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("span",{children:"Email"}),": ",t.email]}),Object(o.jsx)("h4",{children:"Address"}),Object(o.jsxs)("h5",{style:{fontSize:"11px"},children:[" ",Object(o.jsx)("span",{style:{fontStyle:"italic"},children:" City: "})," ",t.address.city]}),Object(o.jsxs)("h5",{style:{fontSize:"11px"},children:[" ",Object(o.jsx)("span",{style:{fontStyle:"italic"},children:" Street: "}),t.address.street," "]}),Object(o.jsxs)("h5",{style:{fontSize:"11px"},children:[" ",Object(o.jsx)("span",{style:{fontStyle:"italic"},children:" Suite: "}),t.address.suite," "]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("span",{children:"Phone"}),": ",t.phone]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("span",{children:"Website"}),": ",t.website]}),Object(o.jsx)("h4",{children:"Company"}),Object(o.jsxs)("h5",{style:{fontSize:"11px"},children:[" ",Object(o.jsx)("span",{style:{fontStyle:"italic"},children:"Name: "})," ",t.company.name]}),Object(o.jsxs)("h5",{style:{fontSize:"11px"},children:[Object(o.jsx)("span",{style:{fontStyle:"italic"},children:"Catch Phrase: "}),t.company.catchPhrase," "]}),Object(o.jsxs)("h5",{style:{fontSize:"11px"},children:[" ",Object(o.jsx)("span",{style:{fontStyle:"italic"},children:"Bs: "}),t.company.bs," "]}),Object(o.jsxs)("span",{style:{textWeight:"bold",fontSize:"10px",color:"darkblue",textAlign:"center"},children:[Object(o.jsx)("br",{}),"Click to see Profile"]})]}):Object(o.jsxs)(o.Fragment,{children:[" ",Object(o.jsx)("img",{src:i,alt:"User"}),Object(o.jsx)("h3",{children:t.name}),Object(o.jsx)("h4",{children:t.email}),Object(o.jsx)("span",{style:{textWeight:"bold",fontSize:"10px",color:"darkblue"},children:"Click to see Details"})]})})},b=function(e){var t=e.robots;return Object(o.jsx)("div",{className:"content",children:t.map((function(e){return Object(o.jsx)(h,{robot:e},e.id)}))})},d=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)([]),a=Object(l.a)(r,2),h=a[0],d=a[1],x=Object(s.useState)(h),p=Object(l.a)(x,2),u=p[0],O=p[1];Object(s.useEffect)((function(){c(!0),function(){var e=Object(j.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,c(!1),d(t),O(t),console.table(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var f=function(){var e=Object(j.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(o.Fragment,{children:n?Object(o.jsx)("div",{className:"loader"}):Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("h1",{children:"My robot friends"}),Object(o.jsx)("input",{type:"text",onChange:function(e){return function(e){var t,n=e.target.value;t=h.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.name.toUpperCase().includes(n.toUpperCase())})),O(t)}(e)},placeholder:"Search by Name"}),Object(o.jsx)(b,{robots:u})]})})})};r.a.render(Object(o.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.948f6ebe.chunk.js.map