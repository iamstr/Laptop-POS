import{j as t}from"./app-b733aa80.js";import{I as n}from"./Input-f31a5d66.js";import{u as o}from"./useBetterForm-fe81747f.js";import c from"./TaxRateInput-692286c7.js";import{P as l}from"./PrimaryMaterialBtn-2093adc3.js";import{u as m}from"./useTranslation-c33630a8.js";import{q as d}from"./transition-177ebb00.js";import"./index-6016834e.js";import"./index-c9736f8d.js";import"./ErrorMessage-42f308db.js";import"./Num-631ee9e0.js";function I({business:s}){const e=o({currency:s.currency,taxPercent:s.taxPercent,taxIdentificationNumber:s.taxIdentificationNumber}),i=r=>{r.preventDefault(),e.patch(route("business.update",s.id),{preserveScroll:!0})},{t:a}=m();return t.jsx("form",{onSubmit:i,className:"bg-white p-4 shadow sm:rounded-lg sm:p-8",children:t.jsxs("section",{className:"max-w-xl",children:[t.jsxs("header",{children:[t.jsx("h2",{className:"text-lg font-medium text-gray-900",children:a("Financial Details")}),t.jsx("p",{className:"text-normal mt-1 text-gray-600",children:a("Currency and Tax")})]}),t.jsxs("div",{className:"mt-6 space-y-6",children:[t.jsx(n,{id:"currency",label:"Currency Symbol",type:"text",className:"mt-1 block w-full",maxLength:5,value:e.data.currency,onChange:r=>e.setData("currency",r.target.value),disabled:e.processing,required:!0,autoComplete:"off",errorMsg:e.errors.currency,hideError:e.isDirty("currency"),hint:t.jsxs("span",{children:[a("You can use any Unicode symbol"),"("," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"$"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"£"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"¥"}),","," ",t.jsx("span",{className:"font-semibold text-blue-gray-600",children:"€"}),", ...etc)"]})}),t.jsx(c,{disabled:e.processing,errorMsg:e.errors.taxPercent,hideError:e.isDirty("taxPercent"),onChange:r=>e.setData("taxPercent",Number((Number(r.target.value)/100).toFixed(6))),value:e.data.taxPercent*100,currency:e.data.currency??"$"}),t.jsx(n,{type:"text",label:"Tax Identification Number",value:e.data.taxIdentificationNumber??"",onChange:r=>e.setData("taxIdentificationNumber",r.target.value),disabled:e.processing,required:!1,errorMsg:e.errors.taxIdentificationNumber,hideError:e.isDirty("taxIdentificationNumber")}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(l,{type:"submit",disabled:e.processing,children:a("Save")}),t.jsx(d,{show:e.recentlySuccessful,enter:"transition ease-in-out",enterFrom:"opacity-0",leaveTo:"opacity-0",leave:"transition ease-in-out",children:t.jsx("p",{className:"text-sm text-green-500",children:a("Saved")})})]})]})]})})}export{I as default};
