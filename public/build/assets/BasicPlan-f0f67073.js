import{j as e,q as o}from"./app-c75c3175.js";import r from"./Plan-32bc21ee.js";import{NumberOfAccountsBenefit as c,NumberOfProductsBenefit as m,NumberOfInvoicesBenefit as a,AccessPeriodBenefit as f,NoSetupFeesBenefit as p,ResponsiveBenefit as u,SupportTeamBenefit as l}from"./SharedBenefits-84dd732a.js";import"./PrimaryButton-0d2e9d6e.js";import"./A-1b712d76.js";import"./Num-486568c8.js";import"./index-229510e1.js";import"./index-6f974e4c.js";import"./index.esm-ba2fe7d6.js";import"./iconBase-c97da7c1.js";import"./index.esm-905fa34a.js";const x=3.99,b=39.9;function _({period:s,planProps:t}){return e.jsx(r,{title:"Basic",desc:"Suitable for small businesses or individuals who need a simple and affordable POS system",period:s,monthlyPrice:x,annualPrice:b,benefits:e.jsx(B,{}),...t})}function B(){const{basic:s}=o().props.plansMaxRes;return[e.jsx(c,{numberOfAccounts:s.accounts}),e.jsx(m,{numberOfProducts:s.products}),e.jsx(a,{numberOfInvoices:s.bills}),e.jsx(f,{}),e.jsx(p,{}),e.jsx(u,{}),e.jsx(l,{})].map((i,n)=>e.jsx("li",{className:"flex items-center space-x-3",children:i},n))}export{b as BASIC_ANNUAL_PRICE,x as BASIC_MONTHLY_PRICE,B as BasicPlanBenefits,_ as default};
