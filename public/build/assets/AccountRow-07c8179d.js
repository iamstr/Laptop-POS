import{j as e}from"./app-6c8ebba6.js";import{F as i}from"./FromDate-65b491ff.js";import n from"./AccountOptions-f5a0bbb0.js";import"./Dropdown-a0977f8d.js";import"./BetterLink-08694d4d.js";import"./transition-3139b165.js";import"./index.esm-65670c80.js";import"./iconBase-8323792c.js";import"./index.esm-b472569e.js";import"./index.esm-694e351a.js";function u({account:t,requestEdit:r,requestOpenDeleteModal:l}){return e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[e.jsx(s,{children:t.name}),e.jsx(s,{children:t.email}),e.jsx(s,{children:t.role}),e.jsx(s,{children:t.deleted_at?e.jsx("span",{title:"Deleted account cannot access the system",className:"rounded-full bg-danger-200 p-1 px-2 text-danger-800",children:"Deleted"}):t.email_verified_at?e.jsx("span",{title:"Verified account can access the system",className:"rounded-full bg-green-100 p-1 px-2 text-green-800",children:"Verified"}):e.jsx("span",{title:"Unverified account cannot access the system",className:"rounded-full bg-yellow-100 p-1 px-2 text-yellow-900",children:"Unverified"})}),e.jsx(s,{children:e.jsx(i,{date:t.created_at})}),e.jsx("td",{children:e.jsx(n,{requestOpenDeleteModal:()=>l(t),account:t,requestEdit:()=>r()})})]})}function s({children:t,className:r=""}){return e.jsx("td",{className:"p-3",children:e.jsx("p",{className:"text-sm font-normal text-blue-gray-800",children:t})})}export{u as default};
