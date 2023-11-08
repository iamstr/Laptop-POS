import{q as l,j as t}from"./app-838cb2bb.js";import{P as i}from"./PrimaryButton-a97409fe.js";import{I as r}from"./Input-9f56e393.js";import{u as c}from"./useBetterForm-d6b57cfa.js";import d from"./TaxRateInput-357bebf2.js";import m from"./CountryInput-c3c5f16d.js";import{PhoneInput as u}from"./PhoneInput-e542fdcb.js";import{t as n}from"./transition-59daec51.js";import"./index-82366f85.js";import"./index-1dd53fcd.js";import"./ErrorMessage-0b2ad8a4.js";import"./Num-43ff67d1.js";import"./COUNTRIES-4fa12db1.js";import"./SelectInput-82c5f701.js";function S(){const a=l().props.auth.business,e=c({...a}),o=s=>{s.preventDefault(),e.patchDirty(route("business.update",a.id),{preserveScroll:!0})};return t.jsx(t.Fragment,{children:t.jsxs("form",{onSubmit:o,className:"space-y-6",children:[t.jsx("div",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:t.jsxs("section",{className:"max-w-xl",children:[t.jsxs("header",{children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Business Details"}),t.jsx("p",{className:"mt-1 text-normal text-gray-600",children:"Name and Logo"})]}),t.jsxs("div",{className:"mt-6 space-y-6",children:[t.jsx(r,{label:"Business Name",type:"text",value:e.data.name,errorMsg:e.errors.name,hideError:e.isDirty("name"),className:"mt-1 block w-full",autoComplete:"off",maxLength:50,onChange:s=>e.setData("name",s.target.value),required:!0,disabled:e.processing}),t.jsx("p",{className:"!mt-9 text-normal text-gray-600",children:"Location and Contact"}),t.jsx(m,{form:e}),t.jsx(r,{label:"City",type:"text",errorMsg:e.errors.city,hideError:e.isDirty("city"),value:e.data.city,className:"mt-1 block w-full",autoComplete:"city",onChange:s=>e.setData("city",s.target.value),required:!0,disabled:e.processing}),t.jsx(r,{label:"Address",type:"text",value:e.data.address,errorMsg:e.errors.address,hideError:e.isDirty("address"),className:"mt-1 block w-full",autoComplete:"address",onChange:s=>e.setData("address",s.target.value),required:!0,disabled:e.processing}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(i,{type:"submit",disabled:e.processing,children:"Save"}),t.jsx(n,{show:e.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:t.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})," "]})]})}),t.jsx("div",{className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:t.jsxs("section",{className:"max-w-xl",children:[t.jsxs("header",{children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Financial Details"}),t.jsx("p",{className:"mt-1 text-normal text-gray-600",children:"Currency and Tax."})]}),t.jsxs("div",{className:"mt-6 space-y-6",children:[t.jsx(r,{id:"currency",label:"Currency",type:"text",className:"mt-1 block w-full",value:e.data.currency,onChange:s=>e.setData("currency",s.target.value),disabled:e.processing,required:!0,autoComplete:"off",errorMsg:e.errors.currency,hideError:e.isDirty("currency"),hint:t.jsxs("span",{children:["You can use any Unicode symbol ("," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"$"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"£"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"¥"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"€"}),", ...etc)"]})}),t.jsx(d,{disabled:e.processing,errorMsg:e.errors.taxPercent,hideError:e.isDirty("taxPercent"),onChange:s=>e.setData("taxPercent",Number((Number(s.target.value)/100).toFixed(6))),value:e.data.taxPercent*100,currency:e.data.currency??"$"}),t.jsx(u,{chosenCountry:null,form:e}),t.jsx(r,{type:"text",label:"Tax Identification Number",value:e.data.taxIdentificationNumber??"",onChange:s=>e.setData("taxIdentificationNumber",s.target.value),disabled:e.processing,required:!1,errorMsg:e.errors.taxIdentificationNumber,hideError:e.isDirty("taxIdentificationNumber")}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(i,{type:"submit",disabled:e.processing,children:"Save"}),t.jsx(n,{show:e.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:t.jsx("p",{className:"text-sm text-green-500",children:"Saved"})})]})," "]})]})})]})})}export{S as default};
