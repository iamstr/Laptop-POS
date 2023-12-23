import{j as e}from"./app-c75c3175.js";import{D as r}from"./Dropdown-d7367610.js";import{c as o}from"./index.esm-905fa34a.js";import"./BetterLink-1c40240c.js";import"./transition-d122e271.js";import"./iconBase-c97da7c1.js";function d({requestShowPauseSubAlert:i,state:n}){return e.jsxs(r,{children:[e.jsxs(r.Trigger,{className:`flex w-full items-center justify-center rounded-md
        border border-none border-transparent bg-gradient-to-r
        from-gray-600 to-gray-800
        py-2 text-center align-middle
        text-base font-semibold
        uppercase normal-case tracking-wider
        text-white shadow transition
        duration-200 ease-in-out
        hover:bg-primary-600 hover:shadow-lg  focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 `,children:[e.jsx("span",{className:"grow",children:"Current Plan"}),e.jsx("span",{className:"mr-3",children:e.jsx(o,{})})]}),e.jsxs(r.Content,{width:"w-full",children:[e.jsx("a",{href:route("subscription.updatePaymentMethod"),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:cursor-default disabled:opacity-50 disabled:hover:bg-white ",children:"Update Payment Method"}),n==="Recurring"&&e.jsx(r.Button,{onClick:()=>i(),children:"Pause Subscription"}),(n==="Grace Period"||n==="Paused")&&e.jsx(r.Link,{href:route("subscription.resume"),children:"Resume Subscription"})]})]})}export{d as default};
