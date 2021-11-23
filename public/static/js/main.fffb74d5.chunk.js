(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{124:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(14),c=n.n(r),o=n(15),s=n(40),i=n(84),l=n(9),u="[ui] Open modal",d="[ui] Close modal",j="[event] Set active event",b="[event] Add new event",m="[event] Clear active event",O="[event] Event updated",f="[event] Event deleted",v="[event] Event loaded",p="[auth] Finish checking login state",h="[auth] Login",x="[auth] Logout",g={checking:!0},y=n(19),w=n(26),k=n.n(w),N={events:[],activeEvent:null},E={modalOpen:!1},S=Object(s.b)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(y.a)(e.events),[t.payload])});case m:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case O:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case f:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case v:return Object(l.a)(Object(l.a)({},e),{},{events:Object(y.a)(t.payload)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case p:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case x:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,D=Object(s.d)(S,C(Object(s.a)(i.a))),T=n(48),I=n(16),P=n(21),A=n.n(P),_=n(33),M=n(27),R=n.n(M),L="https://backend-calendar-app-rm.herokuapp.com/api",F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(L,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},G=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(L,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:k()(e.end).toDate(),start:k()(e.start).toDate()})}))},H=function(e){return{type:b,payload:e}},J=function(){return{type:m}},B=function(e){return{type:O,payload:e}},U=function(){return{type:f}},X=function(e){return{type:v,payload:e}},q=function(){return{type:p}},z=function(e){return{type:h,payload:e}},K=function(){return{type:x}},Q=n(12),W=n(196),Y=n(194),Z=n(7),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(Q.a)(t,2),r=n[0],c=n[1],o=function(){c(e)},s=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(Z.a)({},t.name,t.value)))};return[r,s,o]},ee=(n(124),n(3)),te=Object(Y.a)(W.a)({"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"white"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"red"},"&:hover fieldset":{borderColor:"yellow"},"&.Mui-focused fieldset":{borderColor:"white"}}}),ne=function(){var e=Object(o.b)(),t=$({lEmail:"roberto@gmail.com",lPassword:"123456"}),n=Object(Q.a)(t,2),a=n[0],r=n[1],c=$({rName:"Fernando",rEmail:"fernando@gmail.com",rPassword1:"123456",rPassword2:"123456"}),s=Object(Q.a)(c,2),i=s[0],l=s[1],u=a.lEmail,d=a.lPassword,j=i.rName,b=i.rEmail,m=i.rPassword1,O=i.rPassword2;return Object(ee.jsx)("div",{className:"container login-container",children:Object(ee.jsxs)("div",{className:"row",children:[Object(ee.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(ee.jsx)("h3",{children:"Ingreso"}),Object(ee.jsxs)("form",{on:!0,onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=d,function(){var e=Object(_.a)(A.a.mark((function e(t){var r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:c.uid,name:c.name}))):R.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)(W.a,{id:"standard-basic",label:"Correo",variant:"standard",type:"email",name:"lEmail",value:u,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)(W.a,{id:"standard-basic",label:"Contrase\xf1a",variant:"standard",type:"password",name:"lPassword",value:d,onChange:r})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(ee.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(ee.jsx)("h3",{children:"Registro"}),Object(ee.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),m!==O)return R.a.fire("Error","Las contrase\xf1as deben de ser iguales","error");var n,a,r;e((n=j,a=b,r=m,function(){var e=Object(_.a)(A.a.mark((function e(t){var c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("auth/register",{name:n,email:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:o.uid,name:o.name})),R.a.fire("Registro exitoso","Se ha logrado registrar correctamente.","success")):R.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)(te,{id:"standard-basic",label:"Nombre",variant:"standard",name:"rName",value:j,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)(te,{id:"standard-basic",type:"email",label:"Correo",variant:"standard",name:"rEmail",value:b,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)(te,{id:"standard-basic",label:"Contrase\xf1a",variant:"standard",type:"password",name:"rPassword1",value:m,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)(te,{id:"standard-basic",label:"Repita la contrase\xf1a",variant:"standard",type:"password",name:"rPassword2",value:O,onChange:l})}),Object(ee.jsx)("div",{className:"form-group",children:Object(ee.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},ae=n(70),re=(n(127),function(){var e=Object(o.c)((function(e){return e.auth})).name,t=Object(o.b)();return Object(ee.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(ee.jsx)("span",{className:"navbar-brand",children:e}),Object(ee.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){t((function(e){localStorage.clear(),e(K()),e(J())}))},children:[Object(ee.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(ee.jsx)("span",{children:" Salir"})]})]})}),ce={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},oe=function(e){var t=e.event,n=t.title,a=t.user;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("strong",{children:[" ",n," "]}),Object(ee.jsxs)("span",{children:["- ",a.name," "]})]})},se=(n(128),n(66)),ie=n.n(se),le=n(67),ue=n.n(le),de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},je=function(){return{type:u}};ie.a.setAppElement("#root");var be=k()().minutes(0).seconds(0).add(1,"hours"),me=be.clone().add(1,"hours"),Oe={title:"",notes:"",start:be.toDate(),end:me.toDate()},fe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).modalOpen,n=Object(o.c)((function(e){return e.calendar})).activeEvent,r=Object(a.useState)(be.toDate()),c=Object(Q.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)(me.toDate()),j=Object(Q.a)(u,2),b=j[0],m=j[1],O=Object(a.useState)(!0),f=Object(Q.a)(O,2),v=f[0],p=f[1],h=Object(a.useState)(Oe),x=Object(Q.a)(h,2),g=x[0],y=x[1],w=g.notes,N=g.title,E=g.start,S=g.end;Object(a.useEffect)((function(){y(n||Oe)}),[n,y]);var C=function(e){var t=e.target;y(Object(l.a)(Object(l.a)({},g),{},Object(Z.a)({},t.name,t.value)))},D=function(){e({type:d}),e(J()),y(Oe)};return Object(ee.jsxs)(ie.a,{isOpen:t,onRequestClose:D,style:de,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(ee.jsxs)("h1",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r=k()(E),c=k()(S);return r.isSameOrAfter(c)?R.a.fire("Error","La fecha fin debe ser mayor a la fecha de inicio","error"):N.trim().length<2?p(!1):(e(n?(a=g,function(){var e=Object(_.a)(A.a.mark((function e(t){var n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(B(a)):R.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(_.a)(A.a.mark((function t(n,a){var r,c,o,s,i;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,G("events",e,"POST");case 4:return s=t.sent,t.next=7,s.json();case 7:(i=t.sent).ok&&(e.id=i.eventSaved.id,e.user={_id:c,name:o},console.log(e),n(H(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(g)),p(!0),void D())},children:[Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora inicio"}),Object(ee.jsx)(ue.a,{className:"form-control",onChange:function(e){i(e),y(Object(l.a)(Object(l.a)({},g),{},{start:e}))},value:s})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Fecha y hora fin"}),Object(ee.jsx)(ue.a,{className:"form-control",onChange:function(e){m(e),y(Object(l.a)(Object(l.a)({},g),{},{end:e}))},value:b,minDate:s})]}),Object(ee.jsx)("hr",{}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("label",{children:"Titulo y notas"}),Object(ee.jsx)("input",{type:"text",className:"form-control ".concat(!v&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:N,onChange:C}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(ee.jsxs)("div",{className:"form-group",children:[Object(ee.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:w,onChange:C}),Object(ee.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(ee.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(ee.jsx)("i",{className:"far fa-save"}),Object(ee.jsx)("span",{children:" Guardar"})]})]})]})},ve=function(){var e=Object(o.b)();return Object(ee.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(je()),e(J())},children:Object(ee.jsx)("i",{className:"fas fa-plus"})})},pe=function(){var e=Object(o.b)();return Object(ee.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t,n){var a,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,e.prev=1,e.next=4,G("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?t(U()):R.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(ee.jsx)("i",{className:"fas fa-trash"}),Object(ee.jsx)("span",{children:" Borrar evento "})]})};k.a.locale("es");var he=Object(ae.b)(k.a),xe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.calendar})),n=t.events,r=t.activeEvent,c=Object(o.c)((function(e){return e.auth})).uid,s=Object(a.useState)(localStorage.getItem("lastView")||"month"),i=Object(Q.a)(s,2),l=i[0],u=i[1];Object(a.useEffect)((function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t){var n,a,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=V(a.events),t(X(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(ee.jsxs)("div",{className:"calendar-screen",children:[Object(ee.jsx)(re,{}),Object(ee.jsx)(ae.a,{localizer:he,events:n,startAccessor:"start",endAccessor:"end",messages:ce,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:c===e.user._id?"#367CF7":"#465660",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(je())},onSelectEvent:function(t){e({type:j,payload:t})},onView:function(e){u(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(J())},selectable:!0,view:l,components:{event:oe}}),Object(ee.jsx)(ve,{}),r&&Object(ee.jsx)(pe,{}),Object(ee.jsx)(fe,{})]})},ge=n(52),ye=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ge.a)(e,["isAuthenticated","component"]);return localStorage.setItem("lastPath",a.location.pathname),Object(ee.jsx)(I.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(n,Object(l.a)({},e)):Object(ee.jsx)(I.a,{to:"/login"})}}))},we=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ge.a)(e,["isAuthenticated","component"]);return Object(ee.jsx)(I.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(ee.jsx)(I.a,{to:"/"}):Object(ee.jsx)(n,Object(l.a)({},e))}}))},ke=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(_.a)(A.a.mark((function e(t){var n,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:a.uid,name:a.name}))):t(q());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(ee.jsx)("h3",{children:"Espere.."}):Object(ee.jsx)(T.a,{children:Object(ee.jsx)("div",{children:Object(ee.jsxs)(I.d,{children:[Object(ee.jsx)(we,{isAuthenticated:!!r,exact:!0,path:"/login",component:ne}),Object(ee.jsx)(ye,{isAuthenticated:!!r,exact:!0,path:"/",component:xe}),Object(ee.jsx)(I.a,{to:"/"})]})})})},Ne=function(){return Object(ee.jsx)(o.a,{store:D,children:Object(ee.jsx)(ke,{})})};n(160);c.a.render(Object(ee.jsx)(Ne,{}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.fffb74d5.chunk.js.map