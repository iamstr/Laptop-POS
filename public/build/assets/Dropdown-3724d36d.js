import{r as a,j as t,d as u}from"./app-838cb2bb.js";import{t as x}from"./transition-59daec51.js";const p=a.createContext({open:!1,setOpen:()=>{},toggleOpen:()=>{}}),i=({children:e})=>{const[n,o]=a.useState(!1),r=()=>{o(s=>!s)};return t.jsx(p.Provider,{value:{open:n,setOpen:o,toggleOpen:r},children:t.jsx("div",{className:"relative",children:e})})},m=({children:e})=>{const{open:n,setOpen:o,toggleOpen:r}=a.useContext(p);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"div-style",type:"button",onClick:s=>{s.stopPropagation(),r()},children:e}),n&&t.jsx("button",{className:"div-style fixed inset-0 z-40 h-[100vh] w-full",type:"button",onClick:s=>{s.stopPropagation(),o(!1)}})]})},f=({align:e="right",width:n="48",contentClasses:o="py-1 bg-white",children:r})=>{const{open:s,setOpen:g}=a.useContext(p);let l="origin-top";e==="left"?l="origin-top-left left-0":e==="right"&&(l="origin-top-right right-0");let c="";return n==="48"&&(c="w-48"),t.jsx(t.Fragment,{children:t.jsx(x,{as:a.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:t.jsx("button",{type:"button",className:`div-style absolute z-50 mt-2 rounded-md shadow-lg ${l} ${c}`,onClick:d=>{d.stopPropagation(),g(!1)},children:t.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+o,children:r})})})})},h=({className:e="",children:n,...o})=>t.jsx(u,{...o,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+e,children:n});i.Trigger=m;i.Content=f;i.Link=h;const b=i;export{b as D};
