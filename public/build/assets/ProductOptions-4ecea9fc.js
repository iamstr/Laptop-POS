import{r as l,j as e}from"./app-22ddf477.js";import{D as n}from"./Dropdown-e634a86c.js";import{a as c}from"./index.esm-5ca9f56e.js";import{e as d,f as u,F as x}from"./index.esm-c8f02c89.js";import{A as g,d as p}from"./index-de7c84d7.js";function f({product:t,isOpen:a,requestClose:r}){const[o,s]=l.useState(!1);return e.jsx(g,{icon:"danger",title:"Are you sure?",paragraph:e.jsxs("span",{children:["You are about to delete the product ",e.jsx("strong",{children:t.name})]}),buttons:{danger:{text:"Delete",props:{onClick:()=>{s(!0),p.Inertia.delete(route("product.destroy",t.id))},disabled:o}},secondary:{text:"Cancel"}},isOpen:a,requestClose:i=>r(i)})}function m({requestEdit:t,requestShow:a,product:r}){const[o,s]=l.useState(!1);return e.jsxs("div",{className:"absolute right-2 top-2 hidden group-hover:block",children:[e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("span",{className:"inline-flex",children:e.jsx("button",{type:"button",className:"inline-flex items-center rounded-full border border-transparent bg-white bg-opacity-50 p-2 leading-4  text-gray-700 shadow transition duration-200 ease-in-out hover:text-gray-900 focus:outline-none",children:e.jsx(c,{className:"text-lg"})})})}),e.jsxs(n.Content,{children:[e.jsx("button",{onClick:()=>a(),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(d,{className:"text-base"})," View"]})}),e.jsx("button",{onClick:()=>t(),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(u,{className:"text-base"})," Edit"]})}),e.jsx("button",{onClick:()=>s(!0),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(x,{className:"text-base"})," Delete"]})})]})]}),e.jsx(f,{product:r,isOpen:o,requestClose:()=>s(!1)})]})}const C=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"}));export{f as D,m as P,C as a};
