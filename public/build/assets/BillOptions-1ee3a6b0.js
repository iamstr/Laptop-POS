import{j as e,r as l,y as c}from"./app-dd313135.js";import{D as a}from"./Dropdown-dafb2859.js";import{a as u}from"./index.esm-8defed37.js";import{F as d}from"./index.esm-92086401.js";import{A as p}from"./AlertModal-c39dbbe0.js";function x({id:t}){return e.jsxs("span",{className:"flex-nowrap whitespace-nowrap font-semibold italic tracking-wide",children:["#",(t==null?void 0:t.substring(16))??"NULL"]})}function m({bill:t,isOpen:n,requestClose:r}){const[o,s]=l.useState(!1);return e.jsx(p,{icon:"danger",title:"Are you sure?",paragraph:e.jsxs("span",{children:["You are about to delete the bill ",e.jsx(x,{id:t.id})]}),buttons:{danger:{text:"Delete",props:{onClick:()=>{s(!0),c.delete(route("bill.destroy",t.id),{preserveScroll:!0,preserveState:!0})},disabled:o}},secondary:{text:"Cancel"}},isOpen:n,requestClose:i=>r(i)})}function f({requestEdit:t,requestShow:n,bill:r}){const[o,s]=l.useState(!1);return e.jsxs("div",{className:"text-center  ",children:[e.jsxs(a,{children:[e.jsx(a.Trigger,{children:e.jsx("button",{type:"button",className:"rounded-[50%] p-2  align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",children:e.jsx(u,{className:"text-lg"})})}),e.jsx(a.Content,{children:e.jsx("button",{onClick:()=>s(!0),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(d,{className:"text-base"})," Delete"]})})})]}),e.jsx(m,{bill:r,isOpen:o,requestClose:()=>s(!1)})]})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));export{f as B,x as I,D as a};
