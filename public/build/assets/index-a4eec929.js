import{j as e,d as f,r as l}from"./app-5f6ab28f.js";import{R as m,a as h}from"./index-15008652.js";import{F as j}from"./Footer-9a8e444d.js";import{f as u}from"./index.esm-505ae342.js";import{t as p}from"./transition-79d00444.js";import{D as d}from"./Dropdown-bd65e7f0.js";import{F as g}from"./FullLogo-e08b4e0f.js";function x({href:r,className:s="",children:n,disabled:i,...c}){return e.jsx("a",{...c,href:r,className:`inline-block items-center rounded-md border
        border-transparent bg-primary-700 px-4
        py-2 text-center  text-xs font-semibold
        uppercase tracking-widest
        text-white transition duration-200
        ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2  focus:ring-primary-500
        focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500
        focus-visible:ring-offset-2 active:scale-95
        disabled:opacity-25 disabled:active:scale-100 ${i?"cursor-not-allowed opacity-25":"cursor-pointer"} ${s} `,children:n})}function a({href:r,className:s="",children:n,...i}){return e.jsx(f,{href:r,...i,className:"flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-primary-900 "+s,children:n})}function v({auth:r}){const[s,n]=l.useState(!1),i=l.useRef(null),c=l.useRef(null);return l.useEffect(()=>{const t=({target:o})=>{!c.current||!i.current||!s||c.current.contains(o)||i.current.contains(o)||n(!1)};return document.addEventListener("click",t),()=>document.removeEventListener("click",t)}),l.useEffect(()=>{const t=({keyCode:o})=>{!s||o!==27||n(!1)};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)}),e.jsxs("div",{className:"flex md:hidden",children:[e.jsxs("button",{ref:i,className:`hamburger ${s&&"active"}`,"aria-controls":"mobile-nav","aria-expanded":s,onClick:()=>n(!s),children:[e.jsx("span",{className:"sr-only",children:"Menu"}),e.jsxs("svg",{className:"h-6 w-6 fill-current text-gray-900",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{y:"4",width:"24",height:"2"}),e.jsx("rect",{y:"11",width:"24",height:"2"}),e.jsx("rect",{y:"18",width:"24",height:"2"})]})]}),e.jsx("div",{ref:c,children:e.jsx(p,{show:s,as:"nav",id:"mobile-nav",className:"absolute left-0 top-full z-20 h-screen w-full overflow-auto bg-gray-50 pb-16 backdrop-blur-sm",enter:"transition ease-out duration-200 transform",enterFrom:"opacity-0 -translate-y-2",enterTo:"opacity-100 translate-y-0",leave:"transition ease-out duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("ul",{className:"px-5 py-2",children:r!=null&&r.user?e.jsxs(e.Fragment,{children:[m.map((t,o)=>e.jsx("li",{children:e.jsx(a,{href:route(t.link),className:"justify-center",onClick:()=>n(!1),children:t.name})},o)),e.jsx("hr",{}),e.jsx("li",{children:e.jsx(a,{href:route("profile.edit"),className:"justify-center",onClick:()=>n(!1),children:"Profile"})}),e.jsx("li",{children:e.jsx(a,{href:route("logout"),className:"justify-center",onClick:()=>n(!1),children:e.jsx("span",{className:"font-bold",children:"Log Out"})})})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(a,{href:route("login"),className:"justify-center",onClick:()=>n(!1),children:"Login"})}),e.jsx("li",{children:e.jsxs(x,{href:route("register"),className:"flex justify-center normal-case",onClick:()=>n(!1),children:[e.jsx("span",{children:"Register "}),e.jsx(u,{})]})})]})})})})]})}function y({auth:r}){return e.jsx("nav",{className:"hidden md:flex md:grow",children:e.jsx("ul",{className:"flex grow flex-wrap items-center justify-end",children:r!=null&&r.user?e.jsxs(e.Fragment,{children:[m.map((s,n)=>e.jsx("li",{children:e.jsx(a,{href:route(s.link),children:s.name})},n)),e.jsx("li",{children:e.jsx("div",{className:"hidden sm:flex sm:items-center",children:e.jsx("div",{className:"relative ml-3",children:e.jsxs(d,{children:[e.jsx(d.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900",children:[r.user.name,e.jsx("svg",{className:"-mr-0.5 ml-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(d.Content,{children:[e.jsx(d.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(d.Link,{href:route("logout"),method:"post",as:"button",className:"font-bold",children:"Log Out"})]})]})})})})]}):e.jsxs(e.Fragment,{children:[e.jsx("li",{children:e.jsx(a,{href:route("login"),children:"Login"})}),e.jsx("li",{children:e.jsxs(x,{className:"ml-5 flex normal-case",href:route("register"),children:[e.jsx("span",{children:"Register "}),e.jsx(u,{})]})})]})})})}function w({auth:r}){const[s,n]=l.useState(!0),i=()=>{window.scrollY>10?n(!1):n(!0)};return l.useEffect(()=>(i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[s]),e.jsxs(e.Fragment,{children:[e.jsx("header",{className:`fixed z-30 w-full backdrop-blur-sm transition duration-300 ease-in-out md:bg-opacity-80 ${s?"":"bg-gray-50 shadow-lg"}`,children:e.jsx("div",{className:"mx-auto max-w-6xl px-5 sm:px-6",children:e.jsxs("div",{className:"flex h-16 items-center justify-between md:h-20",children:[e.jsx(g,{}),e.jsx(y,{auth:r}),e.jsx(v,{auth:r})]})})}),e.jsx("div",{className:"pb-16 md:pb-20"})]})}function C({children:r,auth:s}){return e.jsx(h,{children:e.jsxs("div",{className:"selection:bg-red-500 selection:text-white",children:[e.jsx(w,{auth:s}),e.jsx("main",{children:r}),e.jsx(j,{})]})})}export{C as G};
