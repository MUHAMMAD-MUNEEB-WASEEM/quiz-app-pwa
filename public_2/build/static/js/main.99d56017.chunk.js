(this["webpackJsonpquiz-app-pwa"]=this["webpackJsonpquiz-app-pwa"]||[]).push([[0],{34:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var r=t(6),a=t(3),c=t.n(a),o=t(25),i=t.n(o),s=(t(34),t(11)),u=t(8),p=t.n(u),l=t(15),f=t(10),d=t(12),b=t(13);function x(){var n=Object(d.a)(["\n  transition: all 0.3s ease;\n  :hover {\n    opacity: 0.8;\n  }\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"]);return x=function(){return n},n}function g(){var n=Object(d.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n  p {\n    font-size: 1rem;\n  }\n"]);return g=function(){return n},n}var j,h=b.b.div(g()),m=b.b.div(x(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56FFA4, #59BC86)":!e&&t?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),v=function(n){var e=n.question,t=n.answers,a=n.callback,c=n.userAnswer,o=n.questionNum,i=n.totalQuestions;return Object(r.jsxs)(h,{children:[Object(r.jsxs)("p",{children:["Question: ",o," / ",i]}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(r.jsx)("div",{children:t.map((function(n){return Object(r.jsx)(m,{correct:(null===c||void 0===c?void 0:c.correctAnswer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n,children:Object(r.jsx)("button",{disabled:c,value:n,onClick:a,children:Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},w=t(23),O=function(){var n=Object(l.a)(p.a.mark((function n(e,t){var r,a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function k(){var n=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  > p {\n    color: #fff;\n  }\n  .score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n  }\n  h1 {\n    font-family: Fascinate Inline;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    font-weight: 400;\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    text-align: center;\n    margin: 20px;\n  }\n  .start, .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #ffffff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n  .start {\n    max-width: 200px;\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(d.a)(["\n    html {\n        height: 100%;\n    }\n    body {\n        background-color: navy;\n        margin: 0;\n        padding: 0 20px;\n        display flex;\n        justify-content: center\n    }\n    * {\n        box-sizing: border-box;\n        font-family: 'Catamaran', sans-serif;\n    }\n"]);return y=function(){return n},n}!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(j||(j={}));var z=Object(b.a)(y()),S=b.b.div(k()),q=t(22);q.a.initializeApp({apiKey:"AIzaSyA2Q4algE13LR9_h-zWkoWxTSpnsk0kiBI",authDomain:"quiz-app-pwa-62e3a.firebaseapp.com",databaseURL:"https://quiz-app-pwa-62e3a.firebaseio.com",projectId:"quiz-app-pwa-62e3a",storageBucket:"quiz-app-pwa-62e3a.appspot.com",messagingSenderId:"364311646538",appId:"1:364311646538:web:a3ebb4bc822d74bc7ff1b3"});var A=q.a.messaging();var I=function(){Notification.requestPermission().then((function(n){A.getToken().then((function(n){alert(n),prompt("token",n),console.log(n),n||console.log("No registration token available. Request permission to generate one.")})).catch((function(n){console.log("An error occurred while retrieving token. ",n)}))}));var n=Object(a.useState)(!1),e=Object(f.a)(n,2),t=e[0],c=e[1],o=Object(a.useState)([]),i=Object(f.a)(o,2),u=i[0],d=i[1],b=Object(a.useState)(0),x=Object(f.a)(b,2),g=x[0],h=x[1],m=Object(a.useState)([]),w=Object(f.a)(m,2),k=w[0],y=w[1],q=Object(a.useState)(0),I=Object(f.a)(q,2),_=I[0],C=I[1],N=Object(a.useState)(!0),W=Object(f.a)(N,2),F=W[0],M=W[1];console.log(u);var Q=function(){var n=Object(l.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),M(!1),n.next=4,O(10,j.EASY);case 4:e=n.sent,d(e),C(0),y([]),h(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),B=function(){var n=Object(l.a)(p.a.mark((function n(){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:10===(e=g+1)?M(!0):h(e);case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),Object(r.jsxs)(S,{children:[Object(r.jsx)("h1",{children:"Quiz App"}),F||10===k.length?Object(r.jsx)("button",{className:"start",onClick:Q,children:"Begin Quiz"}):null,F?null:Object(r.jsxs)("p",{className:"score",children:["Score: ",_]}),t?Object(r.jsx)("p",{children:"Loading"}):null,t||F?null:Object(r.jsx)(v,{questionNum:g+1,totalQuestions:10,question:u[g].question,answers:u[g].answers,userAnswer:k?k[g]:void 0,callback:function(n){if(!F){var e=n.currentTarget.value,t=u[g].correct_answer===e;t&&C((function(n){return n+1}));var r={question:u[g].question,answer:e,correct:t,correctAnswer:u[g].correct_answer};y((function(n){return[].concat(Object(s.a)(n),[r])}))}}}),F||t||k.length!==g+1||9===g?null:Object(r.jsx)("button",{className:"next",onClick:B,children:"Next"})]})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js").then((function(n){console.log("ServiceWorker registration successful with scope: ",n.scope)}),(function(n){console.log("ServiceWorker registration failed: ",n)})):console.log("ServiceWorker not found")}},[[43,1,2]]]);
//# sourceMappingURL=main.99d56017.chunk.js.map