import{q as c,j as e}from"./app-838cb2bb.js";import{P as l}from"./PrimaryButton-a97409fe.js";import{u as m}from"./useBetterForm-d6b57cfa.js";import{t as d}from"./transition-59daec51.js";function N({mustVerifyEmail:u,status:x,className:r=""}){const t=c().props.business,{data:p,setData:h,patch:a,errors:j,processing:i,recentlySuccessful:n,isDirty:f}=m(t),o=s=>{s.preventDefault(),a(route("profile.update"))};return e.jsxs("section",{className:r,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Accounts"}),e.jsx("p",{className:"mt-1 text-normal text-gray-600",children:"Add, remove, or change an account's role in your business."})]}),e.jsxs("form",{onSubmit:o,className:"mt-6 space-y-6",children:[e.jsx("div",{children:e.jsxs("table",{children:[e.jsx("thead",{}),e.jsx("tbody",{children:t.users.map(s=>e.jsx("tr",{children:e.jsx("td",{children:s.name})},s.id))})]})}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(l,{type:"submit",disabled:i,children:"Save"}),e.jsx(d,{show:n,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})]})]})}export{N as default};
