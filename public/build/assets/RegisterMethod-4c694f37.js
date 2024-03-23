import{j as e,a as s,d as a}from"./app-b733aa80.js";import{P as o}from"./PrimaryLink-b83f0746.js";import{A as n}from"./AppName-0c121571.js";import{A as i}from"./A-26d2f0eb.js";import{G as l}from"./GuestFormLayout-834f7a57.js";import{p as c}from"./index-84652058.js";import{t as m}from"./index-9ca673dc.js";import"./BetterLink-91206f94.js";import"./useTranslation-c33630a8.js";import"./index-fb5b07f6.js";import"./index-07847f7f.js";import"./index-6016834e.js";import"./index-c9736f8d.js";import"./transition-177ebb00.js";import"./Footer-5a39f64f.js";import"./SupportEmailLink-57ea6a94.js";import"./FullLogo-727b2ada.js";import"./Logo-f1877355.js";import"./FormLayout-7e65b18c.js";import"./iconBase-e5c9f32e.js";function d({children:t}){return e.jsxs("div",{className:"inline-flex w-full  items-center justify-center",children:[e.jsx("hr",{className:"my-4 h-px w-64 rounded-full border-0 bg-gray-200 dark:bg-gray-700"}),e.jsx("span",{className:"absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-900 dark:bg-gray-900 dark:text-white",children:t})]})}function S(){const t=new URLSearchParams(window.location.search),r=t.get("plan")&&t.get("period")?{plan:t.get("plan"),period:t.get("period")}:{};return e.jsxs(l,{children:[e.jsx(s,{title:"Register Method"}),e.jsxs("div",{className:"p-4",children:[e.jsxs("h2",{className:"mb-1 text-2xl font-bold text-primary-900 dark:text-white",children:["Signing up for ",e.jsx(n,{className:"!font-extrabold"})," is fast and free."]}),e.jsxs("div",{className:"mt-10 grid space-y-4",children:[e.jsx("a",{href:route("register.OAuth",["google",r]),className:"group block h-12 items-center rounded-full border-2 !border-gray-300 bg-white px-6 py-2 text-center text-xs font-semibold normal-case tracking-wider text-white transition duration-200 ease-in-out hover:!border-primary-800  hover:bg-white focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-25 disabled:active:scale-100",children:e.jsxs("div",{className:"relative mt-0.5 flex items-center justify-center space-x-4",children:[e.jsx("img",{src:"/assets/google-icon.png",className:"absolute left-0 w-5",alt:"google logo"}),e.jsx("span",{className:"block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base",children:"Register with Google"})]})}),e.jsx("a",{href:route("register.OAuth",["github",r]),className:"group block h-12 items-center rounded-full border-2 !border-gray-300 bg-white px-6 py-2 text-center text-xs font-semibold normal-case tracking-wider text-white transition duration-200 ease-in-out hover:!border-primary-800  hover:bg-white focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 disabled:opacity-25 disabled:active:scale-100",children:e.jsxs("div",{className:"relative mt-0.5 flex items-center justify-center space-x-4",children:[e.jsx(c,{className:"absolute left-0 h-5 w-5 text-black transition duration-300 group-hover:text-primary-800 "}),e.jsx("span",{className:"block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base",children:"Register with Github"})]})}),e.jsx(d,{children:"or"}),e.jsx(o,{href:route("register",r),className:"group h-12 !rounded-full border-2 !border-gray-300 bg-white px-6 normal-case  hover:!border-primary-800 hover:bg-white",children:e.jsxs("div",{className:"relative mt-0.5 flex items-center justify-center space-x-4",children:[e.jsx(m,{className:"absolute left-0 h-5 w-5 text-gray-800 transition duration-300 group-hover:text-primary-800"}),e.jsx("span",{className:"block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-primary-800 dark:text-white sm:text-base",children:"Continue with email"})]})})]}),e.jsx("p",{className:"mt-6 text-center text-base",children:e.jsx(a,{href:route("login"),className:"text-gray-600 underline hover:text-gray-900 focus:outline-none ",children:"Already registered?"})}),e.jsxs("p",{className:"mt-4 text-center text-xs text-gray-600",children:["By creating an account, you agree to our"," ",e.jsx(i,{href:route("termsAndConditions"),children:"Terms & Conditions"})," and confirm you have read our"," ",e.jsx(i,{href:route("privacyPolicy"),children:"Privacy and Cookie Statement"}),"."]})]})]})}export{S as default};
