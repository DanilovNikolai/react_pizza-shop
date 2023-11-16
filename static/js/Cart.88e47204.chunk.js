"use strict";(self.webpackChunkreact_project_3=self.webpackChunkreact_project_3||[]).push([[72],{2986:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(2791),s=n(1413),i=n(1087),o="ItemCounter_itemCounter__9sXky",c="ItemCounter_counterButton__boc3i",a="ItemCounter_minus__SOYiC",l=n(9434),d=n(7891),u=n(9997),h=n(9085),p=n(184),x=function(e){var t=e.id,n=e.type,s=e.size,i=e.count,x=(0,l.I0)(),m=(0,l.v9)(h.K).items;return(0,r.useEffect)((function(){(0,u.O)(m)}),[m]),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("button",{disabled:1===i,onClick:function(){x((0,d.uz)({id:t,type:n,size:s}))},className:"".concat(c," ").concat(a),children:(0,p.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,p.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),(0,p.jsx)("b",{children:i}),(0,p.jsx)("button",{onClick:function(){x((0,d.jX)({id:t,type:n,size:s}))},className:c,children:(0,p.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),(0,p.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]})},m="ItemRemoveButton_root__wx7Zq",j=function(e){var t=e.id,n=e.type,r=e.size,s=(0,l.I0)();return(0,p.jsx)("button",{onClick:function(){window.confirm("Are you sure You want to remove this item?")&&s((0,d.cl)({id:t,type:n,size:r}))},className:m,children:(0,p.jsxs)("svg",{viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("rect",{fill:"none",height:"256",width:"256"}),(0,p.jsx)("line",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24",x1:"200",x2:"56",y1:"56",y2:"200"}),(0,p.jsx)("line",{fill:"none",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24",x1:"200",x2:"56",y1:"200",y2:"56"})]})})},_="CartItem_item__DzdXC",v="CartItem_img__NjFV-",f="CartItem_info__+nC8k",C="CartItem_block__f1sBS",w="CartItem_price__TaWtr",k=function(e){var t=e.id,n=e.title,r=e.price,s=e.size,i=e.type,o=e.imageUrl,c=e.count;return(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("div",{className:v,children:(0,p.jsx)("img",{src:o,alt:"Pizza"})}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("h3",{children:n}),(0,p.jsxs)("p",{children:[i," \u0442\u0435\u0441\u0442\u043e, ",s," \u0441\u043c."]})]}),(0,p.jsxs)("div",{className:C,children:[(0,p.jsx)(x,{id:t,type:i,size:s,count:c}),(0,p.jsx)("div",{className:w,children:(0,p.jsxs)("b",{children:[r*c," \u20bd"]})})]}),(0,p.jsx)(j,{id:t,type:i,size:s})]})},g=n(1356),L=n(1210),B=n(4165),y=n(5861),b=n(9439),N="PayButton_payButton__hcy8t",S="PayButton_processing__C7sTr",I="https://js.stripe.com/v3",V=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,E="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",Z=null,z=function(e){return null!==Z||(Z=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(E),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(I,'"]')),t=0;t<e.length;t++){var n=e[t];if(V.test(n.src))return n}return null}();r&&e?console.warn(E):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(I).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(s){return void n(s)}else t(null)}))),Z},M=Promise.resolve().then((function(){return z(null)})),W=!1;M.catch((function(e){W||console.warn(e)}));var A=function(e){var t=e.items,n=(0,r.useState)(!1),s=(0,b.Z)(n,2),i=s[0],o=s[1],c=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];W=!0;var r=Date.now();return M.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"2.1.9",startTime:t})}(r,n),r}(e,t,r)}))}("pk_test_51O2zWiBhVdtjeDVTvHu127iOs4AxovXtzgFOTYFzzjN8kK2BIg0GtZ7EwIUhSGguXsfeOA4LtxrDgwHNDY5lTUxZ002qykvVpI");function a(){return(a=(0,y.Z)((0,B.Z)().mark((function e(){var n,r,s;return(0,B.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,c;case 4:return n=e.sent,r=t.map((function(e){return{price:e.priceId,quantity:e.count}})),e.next=8,n.redirectToCheckout({lineItems:r,mode:"payment",successUrl:"https://danilovnikolai.github.io/react_project_3/success_payment",cancelUrl:"https://danilovnikolai.github.io/react_project_3"});case 8:s=e.sent,console.log(s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}return(0,p.jsx)("button",{onClick:function(){return a.apply(this,arguments)},className:"".concat(N," ").concat(i?S:""),children:(0,p.jsx)("span",{children:i?"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...":"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})},O="ClearCartButton_root__M37YD",H=function(e){return e.user},P=n(4371),U=function(){var e=(0,l.v9)(H).email,t=(0,P.a)().isAuth,n=(0,l.I0)();return(0,p.jsxs)("button",{onClick:function(){if(window.confirm("\u0412\u044b \u0442\u043e\u0447\u043d\u043e \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?"))if(n((0,d.H5)()),t){var r=JSON.parse(localStorage.getItem("currentUser"));r.cart=[],localStorage.setItem("currentUser",JSON.stringify(r));var s=JSON.parse(localStorage.getItem("users")).map((function(t){return(null===t||void 0===t?void 0:t.email)===e&&(t.cart=[]),t}));localStorage.setItem("users",JSON.stringify(s))}else localStorage.removeItem("cart")},className:O,children:[(0,p.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,p.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})},D="CartBlock_container__0Nm0s",F="CartBlock_cart__kKe1F",T="CartBlock_top__O45OA",X="CartBlock_title__AKMXM",q="CartBlock_body__P4s25",K="CartBlock_bottom__xIa2t",Y="CartBlock_details__e9ekx",J="CartBlock_buttons__me9DP",G=function(){var e=(0,l.v9)(h.K),t=e.items,n=e.totalPrice,r=t.reduce((function(e,t){return t.count+e}),0);return 0===t.length?(0,p.jsx)(g.Z,{}):(0,p.jsx)("div",{className:D,children:(0,p.jsxs)("div",{className:F,children:[(0,p.jsxs)("div",{className:T,children:[(0,p.jsxs)("h2",{className:X,children:[(0,p.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,p.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,p.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),(0,p.jsx)(U,{})]}),(0,p.jsx)("div",{className:q,children:t&&t.map((function(e,t){return(0,p.jsx)(k,(0,s.Z)({},e),e.id+t)}))}),(0,p.jsxs)("div",{className:K,children:[(0,p.jsxs)("div",{className:Y,children:[(0,p.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e: ",(0,p.jsxs)("b",{children:[r," \u0448\u0442."]})," "]}),(0,p.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",(0,p.jsxs)("b",{children:[n," \u20bd"]})," "]})]}),(0,p.jsxs)("div",{className:J,children:[(0,p.jsx)(i.rU,{to:"/react_project_3",children:(0,p.jsx)(L.Z,{})}),(0,p.jsx)(A,{items:t})]})]})]})})},R=function(){return(0,p.jsx)(G,{})}}}]);
//# sourceMappingURL=Cart.88e47204.chunk.js.map