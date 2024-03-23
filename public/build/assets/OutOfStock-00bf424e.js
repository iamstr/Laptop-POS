import{r as n,j as t}from"./app-b733aa80.js";import{B as l}from"./BetterLink-91206f94.js";import{C as p,U as m}from"./UpdateProductStockModal-2af8295c.js";import{A as u}from"./A-26d2f0eb.js";import h from"./Product-6c505b37.js";import{r as s}from"./index-6016834e.js";import{n as f,o as x}from"./index-9ca673dc.js";import{u as j}from"./useTranslation-c33630a8.js";import"./Input-f31a5d66.js";import"./ErrorMessage-42f308db.js";import"./SecondaryMaterialBtn-e8480018.js";import"./transition-177ebb00.js";import"./SecondaryButton-3366fa05.js";import"./DefaultProductImg-fc4d6fee.js";import"./Checkbox-bdfba73c.js";import"./Num-631ee9e0.js";import"./ProductOptions-a19f7925.js";import"./Dropdown-1840d60d.js";import"./index-f0312942.js";import"./iconBase-e5c9f32e.js";import"./index-84652058.js";import"./AlertModal-71b3ab3b.js";import"./TemplateModal-1a00ecdb.js";import"./PrimaryMaterialBtn-2093adc3.js";import"./useBetterForm-fe81747f.js";import"./FromDate-4e94fd30.js";import"./KeyValue-48762baa.js";import"./index-c9736f8d.js";function J({paginate:e}){const[c,r]=n.useState({state:"create",open:!1,data:null}),[d,i]=n.useState({open:!1}),{t:a}=j();return t.jsxs(t.Fragment,{children:[t.jsx(p,{modalAction:c,setModalAction:r},"DashboardOutOfStockCreateEditProductModal"),t.jsx(m,{modalAction:d,close:()=>i(o=>({...o,open:!1}))},"DashboardOutOfStockUPdateProductStockModal"),t.jsx(s.Card,{className:"rounded-none shadow sm:rounded-lg",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:t.jsxs("div",{className:"p-6",children:[t.jsxs("header",{children:[t.jsx(s.Typography,{variant:"h6",color:"blue-gray",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:a("Out of Stock Products")}),t.jsx(u,{href:route("product.index",{stock:"out"}),className:"font-normal",children:a("Viw all out of stock products")})]}),t.jsx("section",{children:e.total>0?t.jsxs("div",{className:"relative flex overflow-hidden",children:[t.jsx("div",{className:"pointer-events-none absolute right-0 z-[1] flex h-full w-52 justify-end bg-gradient-to-l from-white to-transparent",children:e.total>5&&t.jsx("div",{className:"mb-2 self-center",children:t.jsx(s.Tooltip,{content:"Viw all out of stock products",children:t.jsx("span",{className:"pointer-events-auto",children:t.jsx(l,{className:"inline-block self-center rounded-[50%] p-2 align-middle text-gray-700 transition duration-200 ease-in-out hover:bg-black hover:bg-opacity-10 hover:text-gray-900 focus:outline-none",href:route("product.index",{stock:"out"}),children:t.jsx(f,{className:"text-lg"})})})})})}),e.data.map(o=>t.jsx(h,{product:o,requestEdit:function(){r({data:o,open:!0,state:"edit"})},requestShow:function(){r({data:o,open:!0,state:"show"})},requestChangeStock:function(){i({open:!0,product:o})}},o.id))]}):t.jsxs("div",{className:"my-20 flex justify-center gap-4 opacity-60",children:[t.jsx(x,{className:"mt-1"}),t.jsx("p",{children:a("You have no products with empty stock")})]})})]})})]})}export{J as default};
