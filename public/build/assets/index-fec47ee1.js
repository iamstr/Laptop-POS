import{r as e,j as t}from"./app-550d434d.js";import s from"./TotalInfo-8cab3cdc.js";import l from"./index-9601a5d6.js";import n from"./CheckoutBtn-138dc10b.js";import"./Num-bcd2d943.js";import"./RowItem-0a9c44b0.js";import"./index.esm-a48dccec.js";import"./iconBase-22d03553.js";import"./index.esm-480a25f7.js";import"./EmptyCart-5d0a1197.js";import"./index.esm-f75906b1.js";import"./SecondaryButton-1e3b4d63.js";import"./TemplateModal-5dad181c.js";import"./DangerButton-ebfe2674.js";import"./transition-c9d25913.js";import"./PrimaryButton-b9c3c764.js";import"./Checkbox-68d06e32.js";import"./InputError-2b9f5d85.js";import"./InputHint-254e5eaa.js";import"./InputLabel-70803a93.js";import"./TextInput-584083dd.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};
