(window["webpackJsonpvelan-tiles"]=window["webpackJsonpvelan-tiles"]||[]).push([[8],{239:function(e,a,t){"use strict";t.r(a);var l=t(116),n=t(0),s=t.n(n),r=t(241),c=t(52),i=t(94),o=t(95),d=t(132),u=t(4),m=t(18);a.default=function(){var e=Object(n.useState)(!1),a=Object(l.a)(e,2),t=a[0],p=a[1],f=(new o.a,Object(u.h)().search),h=new URLSearchParams(f).get("id"),v=h?"Edit":"Add",b=[{user_id:"1",first_name:"Kannan",last_name:"K",mobile_number:"9600885976",password:"admin",status:"1",created_on:"2022-03-03 09:39:01",updated_on:"2022-03-03 09:39:01"}].filter((function(e){return e.user_id==h}))[0];return console.debug(b),s.a.createElement("div",null,s.a.createElement("div",{className:"d-flex  auth px-0"},s.a.createElement("div",{className:"row w-100 mx-0"},s.a.createElement("div",{className:"col-lg-12 mx-auto"},s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"}," User"),s.a.createElement(m.b,{className:"btn btn-primary",to:{pathname:"/pages/users"}},"Back")),s.a.createElement("div",{className:"col-lg-4 mx-auto"},s.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},s.a.createElement("h6",{className:"text-center font-weight-bold"},v," User"),s.a.createElement(r.a,{className:"pt-3",noValidate:!0,validated:t,onSubmit:function(e){var a=e.currentTarget,t=new FormData(a);!1===a.checkValidity()?(e.preventDefault(),e.stopPropagation()):console.log("You clicked submit.",a.checkValidity(),"".concat(i.a.endpoints.basePath).concat(i.a.endpoints.login),d.serialize,a,t),p(!0),e.preventDefault()}},s.a.createElement(r.a.Group,{className:"d-flex search-field"},s.a.createElement(r.a.Control,{type:"text",defaultValue:null===b||void 0===b?void 0:b.first_name,required:!0,placeholder:"First Name",size:"lg",className:"h-auto"})),s.a.createElement(r.a.Group,{className:"d-flex search-field"},s.a.createElement(r.a.Control,{type:"text",defaultValue:null===b||void 0===b?void 0:b.last_name,required:!0,placeholder:"Last Name",size:"lg",className:"h-auto"})),s.a.createElement(r.a.Group,{className:"d-flex search-field"},s.a.createElement(r.a.Control,{type:"number",defaultValue:null===b||void 0===b?void 0:b.mobile_number,required:!0,placeholder:"Mobile",size:"lg",className:"h-auto"})),s.a.createElement(r.a.Group,{className:"d-flex search-field"},s.a.createElement(r.a.Control,{type:"password",defaultValue:null===b||void 0===b?void 0:b.password,required:!0,placeholder:"Password",size:"lg",className:"h-auto"})),s.a.createElement(r.a.Group,{className:"d-flex search-field"},s.a.createElement(r.a.Check,{type:"checkbox",label:"Status",defaultChecked:(null===b||void 0===b?void 0:b.status)?"true":""})),s.a.createElement("div",{className:"mt-3"},s.a.createElement(c.a,{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"Save")))))))))}},94:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var l={endpoints:{basePath:"http://stronglasstough.com/velan/api.php?",login:"validateAdminLogin",users:{list:"getUsers",add:"addUser",edit:"editUser"},visits:{list:"getVisits"}}}},95:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t(12),n=t(13),s=t(111),r=t.n(s),c=(t(112),function(){function e(){Object(l.a)(this,e)}return Object(n.a)(e,[{key:"set",value:function(e,a){r.a.set(e,a)}},{key:"get",value:function(e){return r.a.get(e)}},{key:"remove",value:function(e){r.a.erase(e)}}]),e}())}}]);
//# sourceMappingURL=8.d3625b9d.chunk.js.map