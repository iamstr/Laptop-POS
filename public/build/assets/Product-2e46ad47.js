import{j as s}from"./app-dd313135.js";import{e as r}from"./index.esm-8defed37.js";import{P as a}from"./ProductOptions-b6fae951.js";import{N as l}from"./Num-dabff9b6.js";import"./iconBase-2f17a443.js";import"./Dropdown-dafb2859.js";import"./transition-9da6ec54.js";import"./index.esm-92086401.js";import"./AlertModal-c39dbbe0.js";import"./TemplateModal-0b1aa5e7.js";import"./DangerButton-ad406bde.js";import"./PrimaryButton-83bf4880.js";import"./SecondaryButton-16255ccf.js";function w({product:e,requestEdit:i,requestShow:t,taxPercent:m}){return s.jsxs("div",{onClick:()=>t(),className:"group relative m-4 flex cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-52",children:[s.jsx(a,{product:e,requestEdit:i,requestShow:t}),s.jsx("div",{children:e.img?s.jsx("img",{src:e.img.startsWith("http")?e.img:"products-images/"+e.img,alt:"Image "+(e.img??"")+" of product "+e.name}):s.jsx(r,{className:"mx-auto mt-4 h-24 w-24 text-primary-700"})}),s.jsxs("div",{className:"flex flex-grow flex-col px-4  py-4 ",children:[s.jsx("h3",{className:"flex-grow text-lg font-semibold text-gray-600",children:e.name}),s.jsxs("div",{className:"mt-2 flex justify-between",children:[s.jsx("p",{title:e.price===null?"":"$"+e.price+" without tax",className:"text-lg font-thin text-primary-700",children:e.price===null?"N/A":s.jsx(l,{currency:"$",className:"font-semibold",amount:e.price*(1+m)})}),s.jsx("div",{className:"flex flex-col justify-center",children:e.stock===0?s.jsx("p",{className:"font-thin text-red-500",children:"Out of Stock"}):s.jsxs("p",{className:"font-thin text-gray-500",children:["Stock"," ",s.jsx("span",{className:"font-normal text-secondary-600",children:e.stock??"N/A"})]})})]})]})]})}export{w as default};
