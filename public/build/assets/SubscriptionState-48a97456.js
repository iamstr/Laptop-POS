import{j as e}from"./app-02238819.js";import{r as t}from"./index-8301804e.js";import"./index-9b1e206d.js";function c({state:n,onTrial:s}){return e.jsxs("p",{className:"text-normal text-gray-600",children:["State: ",n==="Canceled"?e.jsx("span",{className:"text-danger-500",children:e.jsx(t.Tooltip,{content:"Unsubscribed",children:"Canceled"})}):n==="Grace Period"?e.jsx("span",{className:"text-orange-700",children:e.jsx(t.Tooltip,{content:"Subscription is canceled, but still active until the subscription fully expires",children:"Grace Period"})}):n==="Past Due"?e.jsx("span",{className:"text-orange-700",children:e.jsx(t.Tooltip,{content:"Payment failed, you should update your payment method",children:"Past Due"})}):n==="Recurring"?e.jsx("span",{className:"text-green-700",children:e.jsx(t.Tooltip,{content:"Subscribed",children:"Active"})}):s?e.jsx("span",{className:"text-orange-700",children:e.jsx(t.Tooltip,{content:"Unsubscribed",children:"On trial"})}):e.jsx("span",{className:"text-danger-500",children:e.jsx(t.Tooltip,{content:"Trial ended, you have to subscribe",children:"Inactive"})})]})}export{c as default};
