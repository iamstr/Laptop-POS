import{j as e,r as o,y as c,d}from"./app-597d038e.js";import{D as a}from"./Dropdown-7d7d7dcf.js";import{a as u}from"./index.esm-c698fa55.js";import{F as x,a as p}from"./index.esm-0757006a.js";import{A as m}from"./AlertModal-8e80492c.js";import"./transition-3e3ca368.js";import"./iconBase-a121196f.js";import"./TemplateModal-aa8f79b5.js";import"./DangerButton-a14afe1f.js";import"./PrimaryButton-b02ed71d.js";import"./SecondaryButton-0005ea90.js";function g({id:t}){return e.jsxs("span",{className:"flex-nowrap whitespace-nowrap font-semibold italic tracking-wide",children:["#",(t==null?void 0:t.substring(16))??"NULL"]})}function f({bill:t,isOpen:r,requestClose:s}){const[n,l]=o.useState(!1);return e.jsx(m,{icon:"danger",title:"Are you sure?",paragraph:e.jsxs("span",{children:["You are about to delete the bill ",e.jsx(g,{id:t.id})]}),buttons:{danger:{text:"Delete",props:{onClick:()=>{l(!0),c.delete(route("bill.destroy",t.id),{preserveScroll:!0,preserveState:!0})},disabled:n}},secondary:{text:"Cancel"}},isOpen:r,requestClose:i=>s(i)})}function M({bill:t}){const[r,s]=o.useState(!1);return e.jsxs("div",{className:"text-center  ",children:[e.jsxs(a,{children:[e.jsx(a.Trigger,{children:e.jsx("div",{className:"rounded-[50%] p-2 inline-block align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",children:e.jsx(u,{className:"text-lg"})})}),e.jsxs(a.Content,{children:[e.jsx(d,{className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",href:"/checkout/"+t.id,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(x,{className:"text-base"})," Details"]})}),e.jsx("button",{onClick:()=>s(!0),className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",children:e.jsxs("div",{className:"flex items-center gap-3 text-danger-600",children:[e.jsx(p,{className:"text-base"})," Delete"]})})]})]}),e.jsx(f,{bill:t,isOpen:r,requestClose:()=>s(!1)})]})}export{M as default};
