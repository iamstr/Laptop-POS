import{j as r,d as n}from"./app-838cb2bb.js";import{e as o,f as d}from"./index.esm-d6b3890a.js";import{I as s}from"./index-1dd53fcd.js";function x({paginateItems:e,className:l="",...t}){return r.jsx(r.Fragment,{children:e.links.length>3&&r.jsxs("div",{...t,className:"flex justify-center pb-10 "+l,children:[r.jsx(n,{href:e.prev_page_url??"",as:e.prev_page_url?"a":"span",preserveState:!0,children:r.jsx(s.IconButton,{disabled:!e.prev_page_url,variant:"outlined",className:"rounded-r-none border-r-0",children:r.jsx(o,{strokeWidth:2,className:"h-4 w-4"})})}),e.links.filter(a=>Number.isInteger(Number(a.label))).map(a=>r.jsx(n,{href:a.url,preserveState:!0,children:r.jsx(s.IconButton,{variant:"outlined",className:"rounded-none border-r-0 text-base "+(a.active?"bg-primary-800 text-gray-100":""),children:a.label})},a.label)),r.jsx(n,{href:e.next_page_url??"",as:e.prev_page_url?"a":"span",preserveState:!0,children:r.jsx(s.IconButton,{disabled:!e.next_page_url,variant:"outlined",className:"rounded-l-none",children:r.jsx(d,{strokeWidth:2,className:"h-4 w-4"})})})]})})}export{x as P};
