import{q as h,r as i,y as d,j as e}from"./app-838cb2bb.js";import{S as x}from"./SecondaryButton-8c0ceade.js";import{I as f}from"./Input-9f56e393.js";import{b as p,g as j}from"./index.esm-d6b3890a.js";import{u as y}from"./usePrevious-40a04870.js";import"./index-82366f85.js";import"./index-1dd53fcd.js";import"./ErrorMessage-0b2ad8a4.js";import"./iconBase-98933817.js";function q({totalResult:t,requestCreateProduct:o}){const{filter:n}=h().props,[s,u]=i.useState({search:n.search??""}),r=y(s);return i.useEffect(()=>{if(r){const m=Object.keys(s).filter(c=>s[c]);let a={};for(const c of m)a[c]=s[c];return d.get(route(route().current()??""),a,{replace:!0,preserveState:!0,preserveScroll:!0}),()=>d.cancel()}},[s]),e.jsxs("div",{className:"block justify-between py-2 md:flex",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("h2",{className:"mr-6 text-xl font-semibold leading-tight text-gray-800",children:"Inventory"}),e.jsx(f,{id:"search",label:"Search for products...",type:"search",inputMode:"search",name:"search",size:"md",autoComplete:"on",icon:e.jsx(p,{}),value:s.search,autoFocus:!0,className:" md:w-72 ",onChange:m=>u(a=>({...a,search:m.target.value})),errorMsg:void 0,hideError:void 0,required:!1,disabled:!1}),s.search&&(r==null?void 0:r.search)===s.search&&e.jsx(l,{className:"hidden md:block",text:"Result",number:t})]}),e.jsxs("div",{className:"mt-3 flex items-center justify-end md:my-auto md:block",children:[!s.search&&(r==null?void 0:r.search)===s.search&&e.jsx(l,{className:"mt-1 md:mt-0",text:"Total",number:t}),s.search&&(r==null?void 0:r.search)===s.search&&e.jsx(l,{className:"mt-1 block md:mt-0 md:hidden",text:"Result",number:t}),e.jsxs(x,{className:"inline-flex pl-2 pr-2",onClick:()=>o(),children:[e.jsx(j,{className:"mr-2"}),e.jsx("span",{children:"Add New Product"})]})]})]})}function l({text:t,number:o,className:n=""}){return e.jsxs("p",{className:"m-0 mr-3 inline p-0 text-center text-gray-600 "+n,children:[t,": ",e.jsx("span",{className:"text-gray-900",children:o})]})}export{q as default};
