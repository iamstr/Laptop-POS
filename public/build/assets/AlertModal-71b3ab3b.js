import{j as e}from"./app-b733aa80.js";import{h as x,i as d}from"./index-84652058.js";import{T as c}from"./TemplateModal-1a00ecdb.js";import{u as f}from"./useTranslation-c33630a8.js";function w({icon:a,buttons:r,title:i,paragraph:s,isOpen:n,requestClose:o}){let t=null;a==="danger"?t=e.jsx(x,{className:" h-6 w-6 text-red-600","aria-hidden":"true"}):a==="info"&&(t=e.jsx(d,{className:" h-6 w-6 text-blue-600","aria-hidden":"true"}));const{t:l}=f();return e.jsx(c,{title:l(i),buttons:r,open:n,closeModal:m=>o(m),icon:t&&e.jsx("div",{className:"mx-auto mb-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:t}),children:e.jsx("h1",{className:"text-sm text-gray-600",children:typeof s=="string"?l(s):s})})}export{w as A};
