import{r as e,j as t}from"./app-e30e3373.js";import s from"./TotalInfo-c44b9720.js";import l from"./index-569f2a38.js";import n from"./CheckoutBtn-f3296d59.js";import"./Num-365aea31.js";import"./RowItem-11bbd191.js";import"./index.esm-4c7f24dd.js";import"./iconBase-9a4cfe4c.js";import"./index.esm-0cbf65bb.js";import"./EmptyCart-43d407f3.js";import"./index.esm-fe968406.js";import"./SecondaryButton-d8a11116.js";import"./TemplateModal-8ecc428e.js";import"./SecondaryMaterialBtn-7685974c.js";import"./transition-0872050b.js";import"./PrimaryMaterialBtn-ba06b072.js";import"./Checkbox-5e1fbb1b.js";import"./index-60ed7547.js";import"./index-a31732f7.js";import"./ErrorMessage-9cb9f1cc.js";import"./Input-8c19a9e2.js";function N({className:m="",billOperations:o}){const[r,p]=e.useState(0);return e.useEffect(()=>{function i(){p(window.scrollY)}return i(),window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[r]),t.jsxs("div",{style:{height:r>50?"100%":`calc(100% - ${50-r}px)`},className:`relative flex flex-col bg-gray-200 mx-4 transition-all duration-300 ease-in-out md:px-0 ${m}`,children:[t.jsx(s,{bill:o.form.data}),t.jsx(l,{billOperations:o}),t.jsx(n,{form:o.form})]})}export{N as default};
