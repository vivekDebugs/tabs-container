(this["webpackJsonpdemo-container"]=this["webpackJsonpdemo-container"]||[]).push([[0],{16:function(t,n,e){},17:function(t,n,e){},18:function(t,n,e){},20:function(t,n,e){"use strict";e.r(n);var c=e(1),a=e.n(c),i=e(9),o=e.n(i),s=(e(16),e(8)),r=e(4),b=(e(17),e(18),e(10)),u=e(2),l=function(t){var n=t.tab,e=t.closeTab,c=t.handleActive,a=t.isActive;return Object(u.jsxs)("div",{className:"tab ".concat(a&&"active"),onClick:function(){return c(n.id)},children:[Object(u.jsx)("span",{children:n.name}),Object(u.jsx)(b.a,{className:"tab__close",onClick:function(t){return e(n,t)}})]})},j=e(6),f=e(11);var d=function(){var t=function(){return Math.floor(1e5*Math.random())},n=[{id:t(),name:"Tab 1",content:"Tab 1 Content"}],e=Object(c.useState)(4),a=Object(r.a)(e,2),i=a[0],o=a[1],b=Object(c.useState)(n),d=Object(r.a)(b,2),O=d[0],p=d[1],h=Object(c.useState)(O[0]),v=Object(r.a)(h,2),m=v[0],x=v[1],_=Object(c.useState)(!1),C=Object(r.a)(_,2),N=C[0],T=C[1],g=Object(c.useRef)(null);Object(c.useEffect)((function(){!function(){for(var n,e=[],c=1;c<4;c++){var a={id:t(),name:"Tab ".concat(c),content:"Tab ".concat(c," content")};e.push(a)}p(e),n=e[0],x(n)}()}),[]);var k=function(t,n){if((n.stopPropagation(),O.length>1)&&window.confirm("This action will close the tab.")){var e=Object(s.a)(O),c=e.indexOf(t);if(m===t)x(O[0===c?1:c-1]);e.splice(c,1),p(e)}},w=function(t){g.current.scrollLeft+=t},S=function(t){T(t)},A=function(t){var n=O.find((function(n){return n.id===t}));x(n)};return Object(c.useEffect)((function(){var t,n=document.getElementById("tabsContainer");(t=n).scrollWidth>t.offsetWidth?S(!0):S(!1)})),Object(u.jsx)("div",{className:"app",children:Object(u.jsxs)("div",{className:"app__container",children:[Object(u.jsxs)("div",{className:"app__tabsContainer",ref:g,id:"tabsContainer",children:[O.map((function(t,n){return Object(u.jsx)(l,{tab:t,closeTab:k,handleActive:A,isActive:m===t},t.id)})),N&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(j.a,{className:"app__chevronLeft icon",onClick:function(){return w(-20)}}),Object(u.jsx)(j.b,{className:"app__chevronRight icon",onClick:function(){return w(20)}})]}),Object(u.jsx)(f.a,{className:"app__plusIcon icon",onClick:function(){if(O.length<10){var n=Object(s.a)(O);o(i+1);var e={id:t(),name:"Tab ".concat(i),content:"Tab ".concat(i," content")};n.push(e),p(n),x(e)}}})]}),Object(u.jsx)("div",{className:"app__contentContainer",children:Object(u.jsx)("p",{children:m.content})})]})})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(d,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3200917a.chunk.js.map