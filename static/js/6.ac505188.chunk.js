(window["webpackJsonpvelan-tiles"]=window["webpackJsonpvelan-tiles"]||[]).push([[6],{135:function(e,a,t){"use strict";t.r(a);var i=t(45),c=t(0),s=t.n(c),l=t(93),r=t(94),m=t.n(r);a.default=function(){var e=Object(c.useState)(null),a=Object(i.a)(e,2),r=a[0],n=a[1];return Object(c.useEffect)((function(){m.a.get("".concat(l.a.endpoints.basePath).concat(l.a.endpoints.dashboard.list)).then((function(e){n(e.data)}))}),[]),s.a.createElement("div",null,s.a.createElement("div",{className:"page-header"},s.a.createElement("h3",{className:"page-title"},s.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-white mr-2"},s.a.createElement("i",{className:"mdi mdi-home"}))," ","Dashboard"," ")),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},s.a.createElement("div",{className:"card bg-gradient-danger card-img-holder text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("img",{src:t(97),className:"card-img-absolute",alt:"circle"}),s.a.createElement("h4",{className:"font-weight-normal mb-3"},"Daily Visits"," ",s.a.createElement("i",{className:"mdi mdi-chart-line mdi-24px float-right"})),s.a.createElement("h2",{className:"mb-5"},null===r||void 0===r?void 0:r.today_count)))),s.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},s.a.createElement("div",{className:"card bg-gradient-info card-img-holder text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("img",{src:t(97),className:"card-img-absolute",alt:"circle"}),s.a.createElement("h4",{className:"font-weight-normal mb-3"},"Weekly Visits"," ",s.a.createElement("i",{className:"mdi mdi-bookmark-outline mdi-24px float-right"})),s.a.createElement("h2",{className:"mb-5"},null===r||void 0===r?void 0:r.week_count)))),s.a.createElement("div",{className:"col-md-4 stretch-card grid-margin"},s.a.createElement("div",{className:"card bg-gradient-success card-img-holder text-white"},s.a.createElement("div",{className:"card-body"},s.a.createElement("img",{src:t(97),className:"card-img-absolute",alt:"circle"}),s.a.createElement("h4",{className:"font-weight-normal mb-3"},"Monthly Visit"," ",s.a.createElement("i",{className:"mdi mdi-diamond mdi-24px float-right"})),s.a.createElement("h2",{className:"mb-5"},null===r||void 0===r?void 0:r.month_count))))))}},93:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var i={endpoints:{basePath:"http://www.velanapp.in/velan/api.php?",login:"validateAdminLogin",users:{list:"getUsers",add:"addUser",edit:"editUser"},visits:{list:"getVisits"},dashboard:{list:"getDashboradData"}}}},97:function(e,a,t){e.exports=t.p+"static/media/circle.1541da91.svg"}}]);
//# sourceMappingURL=6.ac505188.chunk.js.map