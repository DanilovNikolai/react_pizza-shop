"use strict";(self.webpackChunkreact_project_3=self.webpackChunkreact_project_3||[]).push([[72],{4320:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(1413),o=n(1087),i=n(9434),s=n(1451),c=n(7891),a=n(9085),d=n(7634),l="https://js.stripe.com/v3",u=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,h="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",p=null,j=function(e){return null!==p||(p=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(h),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(l,'"]')),t=0;t<e.length;t++){var n=e[t];if(u.test(n.src))return n}return null}();r&&e?console.warn(h):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(l).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))),p},w=Promise.resolve().then((function(){return j(null)})),v=!1;w.catch((function(e){v||console.warn(e)}));var k=n(184),x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v=!0;var r=Date.now();return w.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"2.1.9",startTime:t})}(r,n),r}(e,t,r)}))}("pk_test_51O2zWiBhVdtjeDVTvHu127iOs4AxovXtzgFOTYFzzjN8kK2BIg0GtZ7EwIUhSGguXsfeOA4LtxrDgwHNDY5lTUxZ002qykvVpI"),f=function(){var e=(0,i.I0)(),t=(0,i.v9)(a.K),n=t.items,l=t.totalPrice,u=n.reduce((function(e,t){return t.count+e}),0);return 0===n.length?(0,k.jsx)(d.Z,{}):(0,k.jsx)("div",{className:"container containet--cart",children:(0,k.jsxs)("div",{className:"cart",children:[(0,k.jsxs)("div",{className:"cart__top",children:[(0,k.jsxs)("h2",{className:"content__title",children:[(0,k.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,k.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),(0,k.jsxs)("div",{onClick:function(){window.confirm("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&e((0,c.H5)())},className:"cart__clear",children:[(0,k.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,k.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,k.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,k.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),(0,k.jsx)("div",{className:"content__items",children:n&&n.map((function(e,t){return(0,k.jsx)(s.Z,(0,r.Z)({},e),e.id+t)}))}),(0,k.jsxs)("div",{className:"cart__bottom",children:[(0,k.jsxs)("div",{className:"cart__bottom-details",children:[(0,k.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e: ",(0,k.jsxs)("b",{children:[u," \u0448\u0442."]})," "]}),(0,k.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",(0,k.jsxs)("b",{children:[l," \u20bd"]})," "]})]}),(0,k.jsxs)("div",{className:"cart__bottom-buttons",children:[(0,k.jsxs)(o.rU,{to:"/react_project_3",className:"button button--outline button--add go-back-btn",children:[(0,k.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,k.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,k.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),(0,k.jsx)("button",{onClick:function(){x.then((function(e){var t=n.map((function(e){return{price:e.priceId,quantity:e.count}}));e.redirectToCheckout({lineItems:t,mode:"payment",successUrl:"https://danilovnikolai.github.io/react_project_3",cancelUrl:"https://danilovnikolai.github.io/react_project_3"}).then((function(e){console.log(e.error)})).catch((function(e){console.log(e)}))}))},className:"button pay-btn",children:(0,k.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]})})}}}]);
//# sourceMappingURL=Cart.d564139c.chunk.js.map