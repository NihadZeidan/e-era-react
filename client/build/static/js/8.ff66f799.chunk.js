(this["webpackJsonpe-era-react"]=this["webpackJsonpe-era-react"]||[]).push([[8],{114:function(e,a,r){"use strict";var s=r(15),t=r(68),n=(r(115),r(13)),c=["handleChange","label"];a.a=function(e){var a=e.handleChange,r=e.label,l=Object(t.a)(e,c);return Object(n.jsxs)("div",{className:"group",children:[Object(n.jsx)("input",Object(s.a)({className:"form-input",onChange:a},l)),r?Object(n.jsx)("label",{className:"".concat(l.value.length?"shrink form-input-label":"form-input-label"),children:r}):null]})}},115:function(e,a,r){},155:function(e,a,r){},161:function(e,a,r){"use strict";r.r(a);var s=r(3),t=r(4),n=r(15),c=r(21),l=r(0),i=r.n(l),o=r(6),u=r(114),d=r(69),b=r(29),p=r(32),j=(r(155),r(13));a.default=function(){var e=Object(o.useState)({email:"",password:"",confirmPassowrd:"",displayName:""}),a=Object(c.a)(e,2),r=a[0],l=a[1],m=Object(b.c)(),h=function(e){var a=e.target,s=a.name,c=a.value;l(Object(n.a)(Object(n.a)({},r),{},Object(t.a)({},s,c)))},f=function(){var e=Object(s.a)(i.a.mark((function e(a){var s,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),r.password===r.confirmPassowrd){e.next=4;break}return alert("Passwords are not the same !"),e.abrupt("return");case 4:s=r.email,t=r.password,n=r.displayName,m(Object(p.j)({email:s,password:t,displayName:n}));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"sign-up",children:[Object(j.jsx)("h2",{children:"Do Not Have An Account !"}),Object(j.jsx)("span",{children:"Register Now "}),Object(j.jsxs)("form",{onSubmit:f,children:[Object(j.jsx)(u.a,{type:"text",name:"displayName",handleChange:h,value:r.displayName,label:"User Name",required:!0}),Object(j.jsx)(u.a,{type:"email",name:"email",handleChange:h,value:r.email,label:"Email",required:!0}),Object(j.jsx)(u.a,{type:"password",name:"password",handleChange:h,value:r.password,label:"Password",required:!0}),Object(j.jsx)(u.a,{type:"password",name:"confirmPassowrd",handleChange:h,value:r.confirmPassowrd,label:"Confirm Password",required:!0}),Object(j.jsx)(d.a,{type:"submit",children:" Register "})]})]})}}}]);