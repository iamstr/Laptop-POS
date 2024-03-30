import{j as e}from"./app-1ab1ca84.js";import{D as r}from"./Dropdown-73119366.js";import{d as i}from"./index-e821efab.js";import{u as s}from"./useTranslation-2fada337.js";import"./BetterLink-6288ef0b.js";import"./transition-7855a772.js";import"./iconBase-33f8de09.js";function p({requestShowPauseSubAlert:o,state:t}){const{t:n}=s();return e.jsxs(r,{children:[e.jsxs(r.Trigger,{className:`flex w-full items-center justify-center rounded-md
        border border-none border-transparent bg-gradient-to-r
        from-gray-600 to-gray-800
        py-2 text-center align-middle
        text-base font-semibold
        uppercase normal-case tracking-wider
        text-white shadow transition
        duration-200 ease-in-out
        hover:bg-primary-600 hover:shadow-lg  focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 `,children:[e.jsx("span",{className:"grow",children:n("Current Plan")}),e.jsx("span",{className:"mr-3",children:e.jsx(i,{})})]}),e.jsxs(r.Content,{width:"w-full",children:[e.jsx("a",{target:"_blank",href:route("subscription.updatePaymentMethod"),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white ",children:n("Update Payment Method")}),t==="Recurring"&&e.jsx(r.Button,{onClick:()=>o(),children:n("Pause Subscription")}),(t==="Grace Period"||t==="Paused")&&e.jsx(r.Link,{href:route("subscription.resume"),children:n("Resume Subscription")})]})]})}export{p as default};
