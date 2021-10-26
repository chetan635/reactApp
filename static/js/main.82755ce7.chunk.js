(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),l=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ",e.mode," mode"]})]})]})]})})}function d(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],a=c[1],r=function(e){var t=e.split(" ");console.log(t);var c=0;return t.forEach((function(e){""!==e&&c++})),c.toString()};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{className:"mb-4",children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"rgb(54 69 112)",color:"light"===e.mode?"black":"white"},value:s,onChange:function(e){console.log("Hello Chetan the function is running fine"),a(e.target.value)},id:"myBox",rows:"10"})}),Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"btn btn-primary mx-2 my-2 col-md-3",onClick:function(){a(s.toUpperCase()),s.length>0?e.showAlert("The Text is converted to uppercase","success"):e.showAlert("Enter text first","danger")},children:"Convert to Uppar Case"}),Object(o.jsx)("div",{className:"btn btn-danger mx-2 my-2 col-md-3",onClick:function(){a(s.toLowerCase()),s.length>0?e.showAlert("The Text is converted to Lowercase","success"):e.showAlert("Enter text first","danger")},children:"Convert to Lower Case"}),Object(o.jsx)("div",{className:"btn btn-warning mx-2 my-2 col-md-3",onClick:function(){a(s.split(" ").join("")),s.length>0?e.showAlert("Spaces are Removed","success"):e.showAlert("Enter text first","danger")},children:"To remove White spaces"}),Object(o.jsx)("div",{className:"btn btn-success mx-2 my-2 col-md-3",onClick:function(){var t=s.split(" "),c="";t.forEach((function(e){""===e||(c=c+e[0].toUpperCase()+e.substring(1)+" ")})),a(c),s.length>0?e.showAlert("First letter of every word is caplitized","success"):e.showAlert("Enter text first","danger")},children:"To caplitizer"}),Object(o.jsx)("div",{className:"btn btn-secondary mx-2 my-2 col-md-3",onClick:function(){a(""),s.length>0?e.showAlert("First letter of every word is caplitized","success"):e.showAlert("Enter text first","danger")},children:"Clear Text"}),Object(o.jsx)("div",{className:"btn btn-info mx-2 my-2 col-md-3",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),document.getSelection().removeAllRanges(),s.length>0?e.showAlert("Text is copied","success"):e.showAlert("Enter text first","danger")},children:"Copy Text"}),Object(o.jsx)("div",{className:"btn btn-danger mx-2 my-2 col-md-3",onClick:function(){var t=s.split(/[ ]+/);a(t.join(" ")),s.length>0?e.showAlert("Extra Sapce is Removed","success"):e.showAlert("Enter text first","danger")},children:"Remove Extra spaces"})]})]}),Object(o.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:"Your Text Summary"}),Object(o.jsxs)("p",{children:[r(s)," words And ",s.length," characters"]}),Object(o.jsxs)("p",{children:[.008*r(s)," Minutes Read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:s.length>0?s:"Nothing TO preview"})]})]})}function h(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsxs)("strong",{children:[" ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," "]})," : ",e.alert.msg]})})}i.defaultProps={title:"Set title here",aboutText:"AboutText HEre"},d.defaultProps={heading:"HEading Here"};var b=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),r=Object(l.a)(a,2),b=r[0],m=r[1],u=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",aboutText:"About Us",mode:c,toggleMode:function(){"light"===c?(s("dark"),document.body.style.backgroundColor="#20011D",u("Dark mode Enabled","success")):(s("light"),document.body.style.backgroundColor="white",u("Light mode Enabled","success"))}}),Object(o.jsx)(h,{alert:b}),Object(o.jsx)(d,{showAlert:u,heading:"TextUtils- Word Counter , Charactor counter , ExtraSpace Remover",mode:c})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,14)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.82755ce7.chunk.js.map