(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(10),i=n.n(s),r=(n(70),n.p,n(71),n(35)),o=n(12),u=n(28),j=n.n(u),l=n(36),b=n(16),d=n(121),O=n(120),f=n(119),p=n(118),h=n(122),v=(n(73),n(5));var x=function(){var e=Object(o.f)(),t=Object(a.useState)(!1),n=Object(b.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)("success"),r=Object(b.a)(i,2),u=r[0],x=r[1],g=Object(a.useState)(!1),m=Object(b.a)(g,2),y=m[0],C=m[1],S=Object(a.useState)(""),w=Object(b.a)(S,2),N=w[0],k=w[1],T=Object(a.useState)(""),P=Object(b.a)(T,2),F=P[0],J=P[1],L=Object(a.useState)(""),B=Object(b.a)(L,2),D=B[0],I=B[1],U=Object(a.useState)(!1),Y=Object(b.a)(U,2),E=Y[0],M=Y[1],q=function(){var e=Object(l.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,fetch("/user/add-user",{method:"POST",body:JSON.stringify({username:N,password:F}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){1===e.index?x("success"):x("error")}));case 3:M(!1),s(!0),setTimeout((function(){s(!1)}),3e3);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"mainpage",children:[c&&Object(v.jsx)(d.a,{className:"valadition",variant:"filled",severity:u,children:"success"===u?"Signup success full":"You have to insert right valid"}),Object(v.jsxs)("div",{className:"signup",children:[Object(v.jsx)(O.a,{autoComplete:"off",value:N,onChange:function(e){k(e.target.value)},id:"outlined-basic",label:"User Name",variant:"outlined"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{autoComplete:"off",value:F,onChange:function(e){e.target.value!==D?C(!0):C(!1),J(e.target.value)},id:"outlined-basic",label:"Password",variant:"outlined",type:"password"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{autoComplete:"off",error:y,value:D,onChange:function(e){e.target.value!==F?C(!0):C(!1),I(e.target.value)},id:"outlined-basic",label:"Confirm password",variant:"outlined",type:"password"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),E?Object(v.jsx)(p.a,{}):Object(v.jsx)(f.a,{disabled:!N||!F||y,variant:"outlined",color:"primary",onClick:q,children:"SignUp"})]}),Object(v.jsxs)("h5",{children:["if you have been sign up"," ",Object(v.jsx)(h.a,{component:"button",variant:"body2",onClick:function(){e.push("/login")},children:"Login"})]})]})};n(83);function g(e,t){return new Promise((function(n,a){fetch("/user/check-user",{method:"POST",body:JSON.stringify({username:e,password:t}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){1===e.index?n("perfect"):a("not good")}))}))}var m=function(){var e=Object(o.f)(),t=Object(a.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(b.a)(i,2),u=r[0],h=r[1],x=Object(a.useState)(!1),m=Object(b.a)(x,2),y=m[0],C=m[1],S=Object(a.useState)(!1),w=Object(b.a)(S,2),N=w[0],k=w[1],T=function(){var t=Object(l.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),C(!0),t.next=4,g(c,u).then((function(t){C(!1),e.push("/meems"),console.log(t)})).catch((function(e){C(!1),k(!0),setTimeout((function(){k(!1)}),3e3),console.log(e)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"login",children:[N&&Object(v.jsx)(d.a,{className:"loginvalid",variant:"filled",severity:"error",children:"You have to insert right valid"}),Object(v.jsxs)("form",{className:"flex",children:[Object(v.jsx)(O.a,{value:c,onChange:function(e){s(e.target.value)},autoComplete:"off",id:"outlined-basic",label:"useName",variant:"outlined"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)(O.a,{value:u,onChange:function(e){h(e.target.value)},autoComplete:"off",id:"outlined-basic",label:"password",variant:"outlined",type:"password"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),y?Object(v.jsx)(p.a,{}):Object(v.jsx)(f.a,{disabled:!c||!u,onClick:T,type:"submit",variant:"outlined",color:"primary",children:"Login"})]})]})};var y=function(){return Object(v.jsx)("div",{children:Object(v.jsx)("h1",{children:"this page to genorate meems"})})};var C=function(){return Object(v.jsx)(r.a,{children:Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/meems",children:Object(v.jsx)(y,{})}),Object(v.jsx)(o.a,{path:"/login",children:Object(v.jsx)(m,{})}),Object(v.jsx)(o.a,{path:"/",children:Object(v.jsx)(x,{})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),S()}},[[84,1,2]]]);
//# sourceMappingURL=main.e88641d7.chunk.js.map