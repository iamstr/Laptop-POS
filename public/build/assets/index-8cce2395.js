import{j as e,d as l,r as m}from"./app-838cb2bb.js";import{D as i}from"./Dropdown-3724d36d.js";function x({children:s}){return e.jsx("div",{className:"bg-dots-darker relative dark:bg-dots-lighter min-h-screen bg-gray-100 bg-center dark:bg-gray-900",children:s})}function u({className:s}){return e.jsx("img",{className:s,src:"/assets/logo/laptop-pos-logo.svg",alt:"Application Logo"})}function h({active:s=!1,className:n="",children:t,...r}){return e.jsx(l,{...r,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(s?"border-primary-600 text-gray-900 focus:border-primary-800 ":"border-transparent text-gray-500 hover:border-primary-100 hover:text-gray-700 focus:border-primary-500 focus:text-gray-700 ")+n,children:t})}function a({active:s=!1,className:n="",children:t,...r}){return e.jsx(l,{...r,className:`flex w-full items-start border-l-4 py-2 pl-3 pr-4 ${s?"border-primary-600 bg-primary-50 text-primary-800 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-600":"border-transparent text-gray-600 hover:border-primary-200 hover:bg-primary-50 hover:text-primary-600 focus:border-primary-700 focus:bg-primary-100 focus:text-primary-900"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${n}`,children:t})}function p({user:s}){const[n,t]=m.useState(!1);return e.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-12 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(l,{href:"/",children:e.jsx(u,{className:"h-9"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:o.map(r=>e.jsx(h,{href:route(r.link),active:route().current(r.link),children:r.name},r.link))})]}),e.jsx("div",{className:"hidden sm:ml-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ml-3",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("div",{className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[s.name,e.jsx("svg",{className:"-mr-0.5 ml-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(i.Link,{href:route("business.edit"),children:"Business"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>t(r=>!r),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(n?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"space-y-1 pb-3 pt-2",children:o.map(r=>e.jsx(a,{href:route(r.link),active:route().current(r.link),children:r.name},r.link))}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:s.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(a,{href:route("profile.edit"),children:"Profile"}),e.jsx(a,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]})}function f({header:s}){var n,t,r,d;return e.jsx("header",{className:"my-0 bg-white shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:s||e.jsx("h2",{className:"py-5 text-xl font-semibold leading-tight text-gray-800",children:((n=o.find(c=>c.link===route().current()))==null?void 0:n.name)??((t=route().current())==null?void 0:t.toString()[0].toUpperCase())+(((d=(r=route().current())==null?void 0:r.substring(1).toLowerCase().split("."))==null?void 0:d[0])??"")})})})}const o=[{name:"Checkout",link:"bill.create"},{name:"Inventory",link:"product.index"},{name:"Bills",link:"bill.index"},{name:"Dashboard",link:"dashboard"}];function b({user:s,header:n,children:t}){return e.jsx(x,{children:e.jsxs("div",{className:"min-h-screen",children:[e.jsx(p,{user:s}),e.jsx(f,{header:n}),e.jsx("main",{children:t})]})})}export{b as A,u as L,o as R,x as a};
