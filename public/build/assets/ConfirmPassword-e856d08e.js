import{r as n,j as r,a as u}from"./app-02238819.js";import{G as l}from"./GuestFormLayout-5fdad51a.js";import{P as c}from"./PrimaryButton-99b15eb8.js";import{I as f}from"./Input-48e0e8c0.js";import{u as w}from"./useBetterForm-371649f1.js";import"./index-5f78e2dd.js";import"./index-3a8e8dca.js";import"./index-8301804e.js";import"./index-9b1e206d.js";import"./index.esm-1f875cda.js";import"./iconBase-a22b7b87.js";import"./index.esm-e23caa02.js";import"./transition-c2dff889.js";import"./Footer-00b372bd.js";import"./SupportEmailLink-8edc76e2.js";import"./A-b07f1baa.js";import"./PrimaryLink-abf3da25.js";import"./BetterLink-489afceb.js";import"./FullLogo-68de4e81.js";import"./Logo-decfb8b0.js";import"./FormLayout-a88cce51.js";import"./ErrorMessage-c2c4745b.js";function z({auth:x}){const{data:o,setData:e,post:a,processing:t,errors:i,reset:m,isDirty:p}=w({password:""});n.useEffect(()=>()=>{m("password")},[]);const d=s=>{s.preventDefault(),a(route("password.confirm"))};return r.jsxs(l,{children:[r.jsx(u,{title:"Confirm Password"}),r.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),r.jsxs("form",{onSubmit:d,children:[r.jsx("div",{className:"mt-4",children:r.jsx(f,{label:"Password",id:"password",type:"password",name:"password",value:o.password,className:"mt-1 block w-full",autoFocus:!0,onChange:s=>e("password",s.target.value),required:!0,errorMsg:i.password,hideError:p("password"),disabled:t})}),r.jsx("div",{className:"mt-4 flex items-center justify-end",children:r.jsx(c,{type:"submit",className:"ml-4",disabled:t,children:"Confirm"})})]})]})}export{z as default};
