import{j as e}from"./app-a6e2ab9e.js";import a from"./ItemOptions-283fdc88.js";import{N as c}from"./Num-fba263dc.js";import"./index.esm-29c11415.js";import"./iconBase-7f9d05a2.js";function p({requestChanged:o,requestIncrease:l,requestDecrease:r,transaction:s,taxPercent:i}){const t=s.product;return e.jsxs("div",{className:"group relative m-1 my-4 flex w-3/4 cursor-pointer flex-col overflow-hidden rounded-md bg-white shadow transition duration-300 ease-in-out hover:shadow-lg sm:my-1 sm:w-52",children:[e.jsx(a,{product:t,requestChanged:o,requestDecrease:r,requestIncrease:l,transaction:s}),e.jsx("div",{children:t.img&&e.jsx("img",{src:t.img.startsWith("http")?t.img:"products-images/"+t.img,alt:"Image of product: "+t.name})}),e.jsxs("div",{className:` bottom-0 flex w-full  flex-grow flex-col bg-black px-2 pb-1 ${t.img?"absolute bg-opacity-50":"h-full bg-opacity-80"}`,children:[e.jsx("h3",{className:`flex-grow text-center text-lg font-semibold text-white ${t.img?"":"mt-10"}`,children:t.name}),e.jsxs("div",{className:"flex justify-between font-light",children:[e.jsx("p",{className:"text-lg text-gray-100",children:e.jsx("span",{className:"font-normal",children:t.price==null?"N/A":e.jsx(c,{currency:"$",amount:t.price*(1+i)})})}),e.jsx("div",{className:"flex flex-col justify-center",children:t.stock==0?e.jsx("p",{className:"font-normal text-danger-400",children:"Out of Stock"}):s.quantity>(t.stock||1/0)?e.jsxs("p",{className:"font-normal text-danger-400",children:["Stock ",t.stock??"N/A"]}):e.jsxs("p",{className:"text-gray-200",children:["Stock ",e.jsx("span",{className:"font-normal",children:t.stock??"N/A"})]})})]})]})]})}export{p as default};
