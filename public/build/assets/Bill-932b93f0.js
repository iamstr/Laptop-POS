import{q as j,r as d,j as e}from"./app-b733aa80.js";import y from"./BillOptions-762ed2b4.js";import{F as N}from"./FromDate-4e94fd30.js";import{N as s}from"./Num-631ee9e0.js";import{I as f}from"./ID-f9416e43.js";import{r as g}from"./index-6016834e.js";import{u as C}from"./useTranslation-c33630a8.js";import"./Dropdown-1840d60d.js";import"./BetterLink-91206f94.js";import"./transition-177ebb00.js";import"./index-f0312942.js";import"./iconBase-e5c9f32e.js";import"./index-84652058.js";import"./AlertModal-71b3ab3b.js";import"./TemplateModal-1a00ecdb.js";import"./SecondaryMaterialBtn-e8480018.js";import"./PrimaryMaterialBtn-2093adc3.js";import"./index-9ca673dc.js";import"./Constant-3623d3bd.js";import"./index-c9736f8d.js";function H({bill:t}){var u;const o=j().props.auth,p=o.business.taxPercent,x=o.user.id,i=d.useMemo(()=>t.bill_details.reduce((c,a)=>c+(a.product.price??0)*a.quantity,0),[t.bill_details]),m=i*(1+p),[l,h]=d.useState(!1),{t:n}=C();return e.jsxs("tr",{className:"even:bg-blue-gray-50/50",children:[e.jsx(r,{children:e.jsx(g.Tooltip,{content:n(l?"Copied":"Copy"),children:e.jsx("button",{className:"dev-style",onClick:()=>{navigator.clipboard.writeText(t.id).then(()=>h(!0))},children:e.jsx(f,{id:t.id})})})}),e.jsx(r,{children:t.createdBy_id===x?e.jsx("span",{className:"select-none text-gray-600",children:"You"}):((u=t.created_by)==null?void 0:u.name)??n("N/A")}),e.jsx(r,{children:e.jsx(N,{date:t.created_at})}),e.jsx(r,{children:e.jsx(s,{className:"text-secondary-700",showCurrency:!0,amount:i})}),e.jsx(r,{children:e.jsx(s,{className:"text-primary-700",showCurrency:!0,amount:m})}),e.jsx(r,{children:e.jsx(s,{className:t.cashReceived===null?"text-primary-700":"",showCurrency:!0,amount:t.cashReceived,noAmount:n("Digital Payment")})}),e.jsx(r,{children:e.jsx(s,{className:"text-indigo-700",showCurrency:!0,amount:t.cashReceived?t.cashReceived-m:null,noAmount:""})}),e.jsx(r,{children:e.jsx(s,{amount:t.bill_details.reduce((c,a)=>c+a.quantity,0)})}),e.jsx("td",{children:e.jsx(y,{bill:t,user:o.user})})]})}function r({children:t,className:o=""}){return e.jsx("td",{className:"p-3",children:e.jsx("p",{className:"text-sm font-normal text-blue-gray-800",children:t})})}export{H as default};
