(this.webpackJsonplinkto=this.webpackJsonplinkto||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=(c(9),c(10),c(2)),o=c(0),j=[{roomtype:"Single",price:2700},{roomtype:"Double",price:1700}],l=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),r=Object(i.a)(s,2),l=r[0],p=r[1],d=Object(n.useState)(34),b=Object(i.a)(d,2),h=b[0],u=b[1],O=Object(n.useState)(0),x=Object(i.a)(O,2),m=x[0],f=x[1],v=Object(n.useState)(!0),g=Object(i.a)(v,2),y=g[0],N=g[1],k=Object(n.useState)(0),S=Object(i.a)(k,2),C=S[0],F=S[1];fetch("http://api.nbp.pl/api/exchangerates/rates/a/nok/").then((function(e){return e.json()})).then((function(e){return f(e.rates[0].mid)}));var w=c*l,T=w-h/100*w-1100-C,A=T*m;return Object(o.jsxs)("div",{className:"app-container",children:[Object(o.jsx)("div",{className:"app-container-upper",children:Object(o.jsxs)("div",{className:"app-container-upper-grid",children:[Object(o.jsxs)("h1",{children:["Salary  ",Object(o.jsx)("span",{children:"Calculator"})]}),Object(o.jsxs)("div",{className:"app-form",children:[Object(o.jsx)("input",{type:"number",placeholder:"156",onChange:function(e){a(e.target.value)}}),Object(o.jsx)("h3",{children:"Number of working hours"})]}),Object(o.jsxs)("div",{className:"app-form",children:[Object(o.jsx)("input",{type:"number",placeholder:"256",onChange:function(e){p(e.target.value)}}),Object(o.jsx)("h3",{children:"NOK per hour"})]}),Object(o.jsxs)("div",{className:"app-form",children:[Object(o.jsx)("input",{type:"number",placeholder:"34",onChange:function(e){u(e.target.value)}}),Object(o.jsx)("h3",{children:"Tax (34% by default)"})]}),Object(o.jsxs)("div",{className:"app-form-check",children:[Object(o.jsx)("div",{className:"-check",children:Object(o.jsx)("input",{type:"checkbox",onClick:function(){N(!y),!1===y&&F(0),!0===y&&F(2700)}})}),Object(o.jsx)("h3",{children:"Accomodation"})]}),Object(o.jsxs)("div",{className:"app-form-select",children:[Object(o.jsx)("select",{disabled:y,value:C,onChange:function(e){F(e.target.value),console.log(C)},children:j.map((function(e,t){return Object(o.jsx)("option",{value:e.price,children:e.roomtype},t)}))}),Object(o.jsx)("h3",{children:"Room type"})]}),Object(o.jsxs)("h2",{className:"red",children:[T.toFixed(0)," nok netto"]})]})}),Object(o.jsx)("div",{className:"app-container-lower",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{children:["exchange for ",m]}),Object(o.jsxs)("h2",{className:"blue",children:[A.toFixed(2)," pln netto"]})]})}),Object(o.jsx)("footer",{children:Object(o.jsx)("p",{children:"Food cost is automaticaly counted by multiplay 55 nok per day for average  20 working days"})})]})};var p=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l,{})})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),d()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.610e0c52.chunk.js.map