import{r as p,j as a,R as f}from"./app-838cb2bb.js";import{r as x}from"./index-82366f85.js";import{C as d}from"./COUNTRIES-4fa12db1.js";import{S as y}from"./SelectInput-82c5f701.js";import"./index-1dd53fcd.js";import"./ErrorMessage-0b2ad8a4.js";function S({form:t,chosenCountry:c}){let s=d.filter(e=>{var r,n,m,o;return((n=(r=e.currencies)==null?void 0:r[0])==null?void 0:n.name)&&((o=(m=e.currencies)==null?void 0:m[0])==null?void 0:o.symbol)}).sort((e,r)=>e.currencies[0].name>r.currencies[0].name?1:e.currencies[0].name<r.currencies[0].name?-1:0).filter((e,r,n)=>n.length>r+1&&e.currencies[0].name!==n[r+1].currencies[0].name);function u(e){let r=null;return e!==null&&(r=s.findIndex(n=>n.name==e.name)),r===-1&&(r=null),r}p.useEffect(()=>{let e=u(c);e&&(l(e),t.setData("currency",s[e].currencies[0].symbol))},[c]);const[i,l]=p.useState(u(c));return a.jsx(y,{label:"Currency",value:i==null?void 0:i.toString(),errorMsg:t.errors.currency,hideError:t.isDirty("currency"),onChange:e=>{l(Number(e)),t.setData("currency",s[Number(e)].currencies[0].symbol)},required:!0,selected:e=>e&&f.cloneElement(e,{disabled:!0,className:"flex items-center opacity-100 px-0 gap-2 pointer-events-none"}),children:s.map((e,r)=>a.jsxs(x.Option,{value:r.toString(),className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-7 text-gray-900",children:e.currencies[0].symbol}),e.currencies[0].name]},r))})}export{S as default};
