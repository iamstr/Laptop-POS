import{r as a,j as e}from"./app-097abe58.js";import{A as i}from"./AppName-242dec4e.js";import{t as l}from"./transition-5f37107b.js";function d(){const t=["grocery store","bookstore","clothing boutique","electronics store","gift shop","café","ice cream truck","hair salon","Restaurant","food truck","street vendor","florist","pharmacy","pet store","souvenir shop"],[n,o]=a.useState("grocery store");return a.useEffect(()=>{const s=setInterval(()=>{o(r=>t[(t.indexOf(r)+1)%t.length])},2e3);return()=>clearInterval(s)},[]),e.jsxs("div",{className:"mb-6 justify-center text-xl text-gray-600 md:-ml-20",children:[e.jsx("span",{children:"Whatever is your use case, "}),e.jsx("div",{className:"block md:inline ",children:e.jsxs("div",{className:"-ml-10 inline md:ml-0",children:[e.jsx(i,{})," is built for ",e.jsx("span",{className:"text-secondary-600 md:hidden",children:"all retailers"}),t.map((s,r)=>e.jsx(l,{appear:!0,show:s===n,enter:"transition ease-in-out duration-700 transform order-first",enterFrom:"opacity-0 translate-y-8",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in-out duration-300 transform absolute",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-8",unmount:!0,className:"absolute text-left text-secondary-600 hidden md:inline",children:s},r))]})})]})}export{d as default};
