(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},34:function(e,a,t){t(35),e.exports=t(71)},35:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},52:function(e,a,t){},53:function(e,a,t){},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(14),s=t(3),l=t(5),c=t(4),o=t(1),m=t.n(o);t(44);function u(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,r=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(n=(s=l.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return d(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return d(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var p=function(e){var a=e.isLogged,t=e.logout,i=u(Object(n.useState)(!1),2),l=i[0],c=i[1];return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("span",{className:"navbar-toggle"},r.a.createElement("input",{type:"checkbox",id:"checkbox4",className:"checkbox4 visuallyHidden",onClick:function(){c(!l)}}),r.a.createElement("label",{htmlFor:"checkbox4"},r.a.createElement("div",{className:"hamburger"},r.a.createElement("span",{className:"bar bar1"}),r.a.createElement("span",{className:"bar bar2"}),r.a.createElement("span",{className:"bar bar3"}),r.a.createElement("span",{className:"bar bar4"}),r.a.createElement("span",{className:"bar bar5"})))),r.a.createElement("h1",{className:"main-title"},r.a.createElement(s.b,{to:"/",className:"logo"},"Feel Better")),r.a.createElement("ul",{className:l?"main-nav active":"main-nav"},r.a.createElement("li",null,r.a.createElement(s.c,{exact:!0,to:"/",className:"nav-links",activeClassName:"nav-links--active"},"Accueil")),r.a.createElement("li",null,r.a.createElement(s.c,{exact:!0,to:"/profile",className:"nav-links",activeClassName:"nav-links--active"},"Profil")),a&&r.a.createElement("li",null,r.a.createElement(s.c,{exact:!0,to:"/mood",className:"nav-links"},"Mon humeur")),r.a.createElement("li",null,r.a.createElement(s.c,{exact:!0,to:"/calendar",className:"nav-links",activeClassName:"nav-links--active"},"Calendrier")),r.a.createElement("li",null,r.a.createElement(s.c,{exact:!0,to:"/suggestions",className:"nav-links",activeClassName:"nav-links--active"},"Activités")),a&&r.a.createElement("li",null,r.a.createElement(s.c,{exact:!0,to:"/",className:"nav-links",onClick:t},"Se déconnecter")))))};p.propTypes={isLogged:m.a.bool.isRequired,logout:m.a.func.isRequired};var g=p,f=function(e,a){return{type:"UPDATE_LOGIN_FIELD",identifier:e,newValue:a}},b=function(e,a){return{type:"CONNECT_USER",data:e,isLogged:a}},E=Object(l.b)((function(e){return{isLogged:e.auth.isLogged}}),(function(e){return{logout:function(){e({type:"LOG_OUT"})}}}))(g),v=(t(46),t.p+"images/3ac477f4411f5a12e376bbe3ce8294a3.png"),h=function(e){var a=e.isLogged;return r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"main-img"},r.a.createElement("img",{src:v,alt:"",className:"people"})),a&&r.a.createElement("div",{className:"main-quote"},r.a.createElement("span",null,"« Être heureuse, c’est cultiver notre part de lumière, et accueillir notre part d’ombre. »")),!a&&r.a.createElement("div",{className:"main-content-container"},r.a.createElement("p",{className:"main-description"},r.a.createElement("strong",null,"Feel Better")," est un générateur de bonnes idées qui vous proposera des activités à faire en fonction de votre humeur. ",r.a.createElement("br",null)," Inscrivez-vous et profitez !"),r.a.createElement("div",{className:"btn-group"},r.a.createElement(s.b,{to:"/register",type:"button",className:"btn register-btn"},"S'inscrire"),r.a.createElement(s.b,{to:"/login",type:"button",className:"btn"},"Se connecter"))))};h.propTypes={isLogged:m.a.oneOfType([m.a.bool,m.a.object]).isRequired};var N=h,y=Object(l.b)((function(e){return{isLogged:e.auth.isLogged,firstname:e.auth.data.firstname}}),(function(e){return{}}))(N),O=t(77),w=(t(47),function(e){var a=e.isLogged,t=e.firstname,n=e.lastname,i=e.email,s=e.city,l=e.birthday,o=e.updateField,m=e.handleSubmit;return!1===a?r.a.createElement(c.a,{to:"/login"}):r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"icone-container"},r.a.createElement("div",{className:"profile-icone"},r.a.createElement(O.a,{size:210,mood:"excited",color:"#dfe5f0"})),r.a.createElement("button",{type:"button",className:"profile-icone-btn"},"Changer ma photo de profil")),r.a.createElement("form",{className:"profile-form",onSubmit:function(e){e.preventDefault(),m()}},r.a.createElement("div",{className:"inputs-container"},r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{type:"text",name:"firstname",id:"firstname",className:"profile-input",placeholder:t,onChange:function(e){o(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"profile-label",htmlFor:"firstname"},"Mon prénom")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{type:"text",name:"lastname",id:"lastname",className:"profile-input",placeholder:n,onChange:function(e){o(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"profile-label",htmlFor:"lastname"},"Mon nom")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{type:"email",name:"email",id:"email",className:"profile-input",placeholder:i,onChange:function(e){o(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"profile-label",htmlFor:"email"},"Mon adresse email")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{type:"password",name:"password",id:"password",className:"profile-input",required:!0,onChange:function(e){o(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"profile-label",htmlFor:"password"},"Mon mot de passe")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{type:"text",name:"city",id:"city",className:"profile-input",placeholder:s,onChange:function(e){o(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"profile-label",htmlFor:"city"},"Ma ville")),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{type:"date",name:"birthday",id:"birthday",className:"profile-input",value:l,readOnly:!0}),r.a.createElement("label",{className:"profile-label",htmlFor:"birthday"},"Ma date de naissance"))),r.a.createElement("button",{type:"submit",className:"profile-submit-btn"},"Modifier mes informations")))});w.propTypes={isLogged:m.a.bool.isRequired,firstname:m.a.string.isRequired,lastname:m.a.string.isRequired,email:m.a.string.isRequired,city:m.a.string.isRequired,birthday:m.a.string.isRequired,updateField:m.a.func.isRequired,handleSubmit:m.a.func.isRequired};var T=w,R=Object(l.b)((function(e){return{isLogged:e.auth.isLogged,firstname:e.auth.data.firstname,lastname:e.auth.data.lastname,email:e.auth.data.email,city:e.auth.data.city,birthday:e.auth.data.birthday}}),(function(e){return{updateField:function(a,t){e(function(e,a){return{type:"UPDATE_PROFILE_FIELD",identifier:e,newValue:a}}(a,t))},handleSubmit:function(){e({type:"SUBMIT_PROFILE"})}}}))(T),L=(t(22),function(e){var a=e.name,t=e.picture,n=e.category,i=e.estimation,s="";return 0===i?s="Gratuit":1===i?s="Peu coûteux":2===i&&(s="Coûteux"),r.a.createElement("div",{className:"suggestion-container"},r.a.createElement("div",{className:"picture-activity"},r.a.createElement("img",{src:"/images/activities/".concat(t),alt:"",className:"picture"})),r.a.createElement("div",{className:"suggestion"},r.a.createElement("h3",null,a),r.a.createElement("p",null,s),r.a.createElement("div",{className:""},"Categorie :",n.map((function(e){return r.a.createElement("li",{key:e},e)})))))});L.propTypes={name:m.a.string.isRequired,picture:m.a.string.isRequired,category:m.a.array.isRequired,estimation:m.a.number.isRequired};var S=L,M=Object(l.b)((function(e){return{}}),(function(e){return{}}))(S);function q(){return(q=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var j=function(e){var a=e.isLogged,t=e.setMood,n=e.ideas;return!1===a?r.a.createElement(c.a,{to:"/login"}):t?r.a.createElement("div",{className:"suggestions-container"},r.a.createElement("h2",{className:"title"},"Nous vous proposons les cinq activitées suivantes : "),r.a.createElement("div",{className:"suggestions-activities"},n.map((function(e){return r.a.createElement(M,q({key:e.name},e))})))):r.a.createElement("div",null,"Vous n'avez pas répondu au formulaire !")};j.propTypes={isLogged:m.a.bool.isRequired,setMood:m.a.bool.isRequired,ideas:m.a.array.isRequired};var k=j,C=Object(l.b)((function(e){return{isLogged:e.auth.isLogged,setMood:e.mood.setMood,ideas:e.mood.ideas}}),(function(e){return{}}))(k),x=t.p+"images/47631018265f84516cb3b3b854ca8ac7.png",_=t.p+"images/695be51d53663dc33b7304d857ab0f94.png",D=t.p+"images/309c56906b35b9d16a8520b71847b21b.png",F=t.p+"images/cf244d90bbef662408e91a7f50896e48.png",I=t.p+"images/178fedd48fe3b0e6fc0fbd70fb25476c.png",P=t.p+"images/49c0d981ffe625e18a8d9baeb5f92c3d.png",A=t.p+"images/1992d92f5305f60362a61ee22ec2a454.png",U=t.p+"images/bed181a726d413bdbea23ae86355cb33.png",G=t.p+"images/8228fa35ad9f7202210f4c2007f1ca3e.png",B=[{name:"glad",picture:x,tooltip:"Content"},{name:"joyful",picture:_,tooltip:"Heureux"},{name:"confident",picture:I,tooltip:"Confiant"},{name:"relaxed",picture:t.p+"images/4de8a1660943b44090c705d6a3817ce6.png",tooltip:"Détendu"},{name:"angry",picture:F,tooltip:"En colère"},{name:"agressive",picture:D,tooltip:"Agressif"},{name:"in-love",picture:P,tooltip:"Amoureux"},{name:"lack-of-self-confidence",picture:A,tooltip:"Timide"},{name:"lonely",picture:U,tooltip:"Seul"},{name:"pessimistic",picture:G,tooltip:"Pessimiste"},{name:"sad",picture:t.p+"images/0867f5fb14d937918f76b39043d34292.png",tooltip:"Triste"},{name:"stressed",picture:t.p+"images/3a896604125097e19d88fd8fe86ff940.png",tooltip:"Stressé"},{name:"worried",picture:t.p+"images/07e2b3fffd921bdbb30d988412729440.png",tooltip:"Angoissé"},{name:"indecisive",picture:t.p+"images/5999b6a56feb0b7b7188a35f98fb356b.png",tooltip:"Indécis"}],V=(t(48),function(e){var a=e.handleMoodSubmit,t=e.updateMood,n=e.updateEstimation;return e.setMood?r.a.createElement(c.a,{to:"/suggestions"}):r.a.createElement("div",{className:"mood"},r.a.createElement("form",{className:"mood-form",onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement("div",{className:"mood-wrapper"},r.a.createElement("div",null,r.a.createElement("h2",{className:"mood-title"},"Comment te sens-tu aujourd'hui ?"),r.a.createElement("div",{className:"mood-icons"},B.map((function(e){return r.a.createElement("div",{className:"mood-img",key:e.name},r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"mood",className:"mood-img-input",value:e.name,onChange:function(e){t(e.currentTarget.value)}}),r.a.createElement("span",{className:"mood-tooltip","aria-label":e.tooltip}),r.a.createElement("img",{src:e.picture,alt:""})))})))),r.a.createElement("div",null,r.a.createElement("h2",{className:"mood-title"},"Cible le budget que tu veux investir dans ton activité"),r.a.createElement("div",{className:"stars"},r.a.createElement("input",{className:"star star-3",id:"star-3",type:"radio",name:"star",value:"2",onChange:function(e){n(e.currentTarget.value)}}),r.a.createElement("label",{className:"star star-3",htmlFor:"star-3"},"Élevé"),r.a.createElement("input",{className:"star star-2",id:"star-2",type:"radio",name:"star",value:"1",onChange:function(e){n(e.currentTarget.value)}}),r.a.createElement("label",{className:"star star-2",htmlFor:"star-2"},"Faible"),r.a.createElement("input",{className:"star star-1",id:"star-1",type:"radio",name:"star",value:"0",onChange:function(e){n(e.currentTarget.value)}}),r.a.createElement("label",{className:"star star-1",htmlFor:"star-1"},"Aucun")))),r.a.createElement("button",{className:"submit-button",type:"submit"},"Envoyer")))});V.propTypes={handleMoodSubmit:m.a.func.isRequired,updateMood:m.a.func.isRequired,updateEstimation:m.a.func.isRequired,setMood:m.a.bool.isRequired};var z=V,H=Object(l.b)((function(e){return{setMood:e.mood.setMood}}),(function(e){return{handleMoodSubmit:function(){e({type:"HANDLE_MOOD_SUBMIT"})},updateMood:function(a){e(function(e){return{type:"UPDATE_MOOD",mood:e}}(a))},updateEstimation:function(a){e(function(e){return{type:"UPDATE_ESTIMATION",estimation:e}}(a))}}}))(z),J=(t(49),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("nav",{className:"footer-nav"},r.a.createElement("li",{className:"footer-li"},r.a.createElement(s.b,{className:"footer-link",to:"/legal-notices"},"Mentions légales")),r.a.createElement("li",{className:"footer-li"},r.a.createElement(s.b,{className:"footer-link",to:"/team"},"L'équipe")),r.a.createElement("li",{className:"footer-li"},"Feel Better © 2020")))}),K=t(74),Q=t(75),W=t(76),$=t.p+"images/c1365b6d4e16f44f3b7bdf2704d8cbda.jpg",X=(t(23),function(e){var a=e.name,t=e.teamRole;return r.a.createElement("div",{className:"team-profile"},r.a.createElement("div",{className:"picture"},r.a.createElement("img",{className:"profile-img",src:$,alt:""})),r.a.createElement("div",{className:"team-content"},r.a.createElement("h3",{className:"name"},a),r.a.createElement("h4",{className:"title"},t)),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{href:"","aria-hidden":"true"},r.a.createElement(K.a,null))),r.a.createElement("li",null,r.a.createElement("a",{href:"","aria-hidden":"true"},r.a.createElement(Q.a,null))),r.a.createElement("li",null,r.a.createElement("a",{href:"","aria-hidden":"true"},r.a.createElement(W.a,null)))))});X.propTypes={name:m.a.string.isRequired,teamRole:m.a.string.isRequired};var Y=X,Z=function(){return r.a.createElement("div",{className:"team"},r.a.createElement("div",{className:"team-container"},r.a.createElement(Y,{name:"Massimo Rosas",teamRole:"Lead Dev Front"}),r.a.createElement(Y,{name:"Chloé Cuny",teamRole:"Product Owner"}),r.a.createElement(Y,{name:"Emilie Maniglier",teamRole:"Git Master"}),r.a.createElement(Y,{name:"Quentin Barraud",teamRole:"Scrum Master"}),r.a.createElement(Y,{name:"Arnaud Gadroy",teamRole:"Lead Dev Back"})))},ee=(t(50),function(){return r.a.createElement("div",{className:"error-container"},r.a.createElement("div",{className:"error-404"},r.a.createElement("span",null,"4"),r.a.createElement("span",null,r.a.createElement("span",{className:"screen-reader-text"},"0")),r.a.createElement("span",null,"4")),r.a.createElement("span",{className:"error-text"},"Page non trouvée"),r.a.createElement(s.b,{to:"/",className:"link-back"},"Retour à la page d'accueil"))}),ae=(t(51),function(e){var a=e.email,t=e.password,n=e.updateField,i=e.submitLogin;return!0===e.isLogged?r.a.createElement(c.a,{to:"/"}):r.a.createElement("main",{className:"login"},r.a.createElement("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),i()}},r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"login-input",value:a,name:"email",id:"email",type:"text",required:!0,onChange:function(e){n(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"login-label",htmlFor:"email"},"Adresse email")),r.a.createElement("div",{className:"input-container"},r.a.createElement("input",{className:"login-input",value:t,name:"password",id:"password",type:"password",required:!0,onChange:function(e){n(e.currentTarget.name,e.currentTarget.value)}}),r.a.createElement("label",{className:"login-label",htmlFor:"password"},"Mot de passe")),r.a.createElement("button",{className:"login-button",type:"submit"},"Valider")),r.a.createElement(s.b,{to:"/register",className:"login-redirect"},"Pas encore inscrit ? C'est par ici !"))});ae.propTypes={email:m.a.string.isRequired,password:m.a.string.isRequired,updateField:m.a.func.isRequired,submitLogin:m.a.func.isRequired,isLogged:m.a.bool.isRequired};var te=ae,ne=Object(l.b)((function(e){return{email:e.auth.email,password:e.auth.password,isLogged:e.auth.isLogged}}),(function(e){return{updateField:function(a,t){e(f(a,t))},submitLogin:function(){e({type:"LOG_IN"})}}}))(te),re=(t(52),function(e){var a=e.firstname,t=e.lastname,n=e.email,i=e.password,s=e.confirm_password,l=e.city,o=e.birthday,m=e.updateField,u=e.submitRegister;return!0===e.isLogged?r.a.createElement(c.a,{to:"/"}):r.a.createElement("main",{className:"register"},r.a.createElement("form",{className:"register-form",onSubmit:function(e){e.preventDefault(),u()}},r.a.createElement("div",{className:"register-container"},r.a.createElement("label",{className:"register-label",htmlFor:"firstname"},"Prénom"),r.a.createElement("input",{className:"register-input",name:"firstname",id:"firstname",type:"text",value:a,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container"},r.a.createElement("label",{className:"register-label",htmlFor:"lastname"},"Nom"),r.a.createElement("input",{className:"register-input",name:"lastname",id:"lastname",type:"text",value:t,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container register-container-email"},r.a.createElement("label",{className:"register-label",htmlFor:"email"},"Email"),r.a.createElement("input",{className:"register-input",name:"email",id:"email",type:"text",value:n,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container"},r.a.createElement("label",{className:"register-label",htmlFor:"password"},"Mot de passe"),r.a.createElement("input",{className:"register-input",name:"password",id:"password",type:"password",required:!0,value:i,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container"},r.a.createElement("label",{className:"register-label",htmlFor:"confirm_password"},"Confirmez le mot de passe"),r.a.createElement("input",{className:"register-input",name:"confirm_password",id:"confirm_password",required:!0,type:"password",value:s,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container"},r.a.createElement("label",{className:"register-label",htmlFor:"city"},"Ville"),r.a.createElement("input",{className:"register-input",name:"city",id:"city",type:"text",value:l,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container"},r.a.createElement("label",{className:"register-label",htmlFor:"birthday"},"Date de naissance"),r.a.createElement("input",{className:"register-input",name:"birthday",id:"birthday",type:"date",min:"1900-01-01",max:"3000-01-01",value:o,onChange:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("div",{className:"register-container register-container-cgu"},r.a.createElement("label",{className:"register-label",htmlFor:"cgu"},"Accepter les CGU"),r.a.createElement("input",{className:"register-input",name:"cgu",id:"cgu",type:"checkbox",required:!0,onClick:function(e){m(e.currentTarget.name,e.currentTarget.value)}})),r.a.createElement("button",{className:"register-button",type:"submit"},"Valider")))});re.propTypes={firstname:m.a.string.isRequired,lastname:m.a.string.isRequired,email:m.a.string.isRequired,password:m.a.string.isRequired,confirm_password:m.a.string.isRequired,city:m.a.string.isRequired,birthday:m.a.string.isRequired,isLogged:m.a.bool.isRequired,updateField:m.a.func.isRequired,submitRegister:m.a.func.isRequired};var ie=re,se=Object(l.b)((function(e){return{email:e.auth.email,password:e.auth.password,firstname:e.auth.firstname,lastname:e.auth.lastname,confirm_password:e.auth.confirm_password,city:e.auth.city,birthday:e.auth.birthday,isLogged:e.auth.isLogged}}),(function(e){return{updateField:function(a,t){e(f(a,t))},submitRegister:function(){e({type:"REGISTER"})}}}))(ie),le=(t(53),function(e){var a=e.checkLogged;return Object(n.useEffect)((function(){a()}),[]),r.a.createElement("div",{className:"app"},r.a.createElement(E,null),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(c.b,{exact:!0,path:"/profile"},r.a.createElement(R,null)),r.a.createElement(c.b,{exact:!0,path:"/mood"},r.a.createElement(H,null)),r.a.createElement(c.b,{exact:!0,path:"/team"},r.a.createElement(Z,null)),r.a.createElement(c.b,{exact:!0,path:"/login"},r.a.createElement(ne,null)),r.a.createElement(c.b,{exact:!0,path:"/register"},r.a.createElement(se,null)),r.a.createElement(c.b,{exact:!0,path:"/suggestions"},r.a.createElement(C,null)),r.a.createElement(c.b,null,r.a.createElement(ee,null))),r.a.createElement(J,null))});le.propTypes={checkLogged:m.a.func.isRequired};var ce=le,oe=Object(l.b)((function(e){return{isLogged:e.auth.isLogged,timestamp:e.mood.timestamp,setMood:e.mood.setMood}}),(function(e){return{checkLogged:function(){e({type:"CHECK_LOGGED"})}}}))(ce),me=t(11),ue=t(33);function de(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function pe(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?de(Object(t),!0).forEach((function(a){ge(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):de(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function ge(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var fe={firstname:"",lastname:"",email:"",password:"",confirm_password:"",city:"",birthday:"",avatar:"",data:{},isLogged:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"UPDATE_LOGIN_FIELD":case"UPDATE_PROFILE_FIELD":return pe(pe({},e),{},ge({},a.identifier,a.newValue));case"SUBMIT_LOGIN":return pe(pe({},e),{},{firstname:"",lastname:"",email:"",password:"",confirm_password:"",city:"",birthday:"",avatar:""});case"CONNECT_USER":return pe(pe({},e),{},{data:a.data,isLogged:a.isLogged});case"LOG_OUT":return localStorage.removeItem("userToken"),pe(pe({},e),{},{isLogged:!1});default:return e}};function Ee(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function ve(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Ee(Object(t),!0).forEach((function(a){he(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ee(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function he(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var Ne={mood:"",estimation:0,setMood:!1,timestamp:0,ideas:[]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"HANDLE_MOOD_SUBMIT":return ve({},e);case"UPDATE_MOOD":return ve(ve({},e),{},{mood:a.mood});case"UPDATE_ESTIMATION":return ve(ve({},e),{},{estimation:a.estimation});case"SAVE_MOOD":return ve(ve({},e),{},{setMood:a.setMood,timestamp:a.timestamp});case"LOAD_SUGGESTIONS":return ve(ve({},e),{},{ideas:a.ideas});default:return e}},Oe=Object(me.combineReducers)({auth:be,mood:ye}),we=t(12),Te=t.n(we),Re=function(e){return function(a){return function(t){var n="http://18.232.116.23/api/v1";switch(t.type){case"LOG_IN":var r=e.getState().auth,i=r.email,s=r.password;Te.a.post("".concat(n,"/login"),{email:i,password:s}).then((function(a){console.log("response for login: ",a),e.dispatch(b(a.data.user,a.data.logged)),localStorage.setItem("userToken",a.data.user.token)})).catch((function(e){console.warn(e)})),a(t);break;case"REGISTER":var l=e.getState().auth,c=l.firstname,o=l.lastname,m=l.email,u=l.password,d=l.confirm_password,p=l.city,g=l.birthday;Te.a.post("".concat(n,"/register"),{firstname:c,lastname:o,email:m,password:u,confirm_password:d,city:p,birthday:g}).then((function(a){console.log("response for register: ",a),e.dispatch(b(a.data.user,a.data.registered))})).catch((function(e){console.warn(e)})),a(t);break;case"CHECK_LOGGED":var f=localStorage.getItem("userToken");Te.a.post("".concat(n,"/islogged"),{token:f}).then((function(a){console.log("response for check logged: ",a),e.dispatch(b(a.data.user,a.data.logged))})).catch((function(e){console.warn(e)})),a(t);break;case"SUBMIT_PROFILE":var E=e.getState().auth,v=E.firstname,h=E.lastname,N=E.email,y=E.password,O=E.city,w=localStorage.getItem("userToken"),T={headers:{Authorization:"Bearer ".concat(w)}};Te.a.post("".concat(n,"/edituser"),{firstname:v,lastname:h,email:N,password:y,city:O,token:w},T).then((function(a){console.log("response for profile: ",a),e.dispatch(b(a.data.user,a.data.updated))})).catch((function(e){console.warn(e)})),a(t);break;default:a(t)}}}},Le=function(e){return function(a){return function(t){var n="http://18.232.116.23/api/v1";switch(t.type){case"HANDLE_MOOD_SUBMIT":var r=e.getState().mood,i=r.mood,s=r.estimation,l=localStorage.getItem("userToken"),c={headers:{Authorization:"Bearer ".concat(l)}};Te.a.post("".concat(n,"/setmood"),{mood:i,estimation:s,token:l},c).then((function(a){var t,n;console.log("response for mood: ",a),e.dispatch((t=a.data.setMood,n=a.data.timestamp,{type:"SAVE_MOOD",setMood:t,timestamp:n}))})).then((function(){Te.a.post("".concat(n,"/suggestion"),{token:l},c).then((function(a){console.log("response for suggestions: ",a),e.dispatch({type:"LOAD_SUGGESTIONS",ideas:a.data.ideas})}))})).catch((function(e){console.warn(e)})),a(t);break;default:a(t)}}}},Se=Object(ue.composeWithDevTools)(Object(me.applyMiddleware)(Re,Le)),Me=Object(me.createStore)(Oe,Se),qe=r.a.createElement(s.a,null,r.a.createElement(l.a,{store:Me},r.a.createElement(oe,null))),je=document.getElementById("root");Object(i.render)(qe,je)}},[[34,1,2]]]);