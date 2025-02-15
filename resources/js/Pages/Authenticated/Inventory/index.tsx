import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  AuthPageProps,
  IFilterProduct,
  ILaravelPaginate,
  IModalAction,
  IProduct,
} from "@/types";
import { Head } from "@inertiajs/react";
import Product from "./Partials/Product";
import { useState } from "react";
import Pagination from "@/Components/Pagination";
import { BsSearch } from "react-icons/bs";
import CreateEditProductModal from "@/Components/Modals/CreateEdit/ProductModal/CreateEditProductModal";
import InventoryHeader from "./Partials/InventoryHeader";
import Footer from "@/Layouts/GuestLayout/Partials/Footer";
import UpdateProductStockModal from "@/Components/Modals/UpdateProductStockModal";
import { useTranslation } from "react-i18next";

export default function Inventory({
  auth,
  products: paginateProducts,
}: AuthPageProps<{
  products: ILaravelPaginate<IProduct>;
  filter: IFilterProduct;
}>) {
  const products: IProduct[] = paginateProducts.data;
  const [modalAction, setModalAction] = useState<IModalAction<IProduct>>({
    state: "create",
    open: false,
    data: null,
  });
  const [updateStockAction, setUpdateStockAction] = useState<
    { open: true; product: IProduct } | { open: false; product?: IProduct }
  >({ open: false });

  const { t, i18n } = useTranslation();
  return (
    <>
      <Head title={ t( "Inventory"   )}/>
      <CreateEditProductModal
        key="inventoryCreateEditProductMOdal"
        modalAction={modalAction}
        setModalAction={setModalAction}
      />
      <UpdateProductStockModal
        key="inventoryUpdateProductStockModal"
        modalAction={updateStockAction}
        close={() => setUpdateStockAction((p) => ({ ...p, open: false }))}
      />
      <AuthenticatedLayout
        user={auth.user}
        header={
          <InventoryHeader
            totalResult={paginateProducts.total}
            requestCreateProduct={() =>
              setModalAction({
                state: "create",
                open: true,
                data: null,
              })
            }
          />
        }
      >
        <div className="flex min-h-[75vh] flex-col justify-between">
          <div className="flex flex-wrap justify-center py-6">
            {products.length === 0 && (
              <div dir={i18n.dir()} className="my-20 flex gap-4 opacity-50">
                <BsSearch className="mt-1" />
                <p>{ t( "No products found!" ) }</p>
              </div>
            )}
            {products.map((p) => (
              <Product
                key={p.id}
                product={p}
                requestShow={() =>
                  setModalAction({ state: "show", open: true, data: p })
                }
                requestEdit={() =>
                  setModalAction({
                    state: "edit",
                    data: p,
                    open: true,
                  })
                }
                requestChangeStock={() =>
                  setUpdateStockAction({ open: true, product: p })
                }
              />
            ))}
          </div>
          <Pagination paginateItems={paginateProducts} />
          <Footer />
        </div>
      </AuthenticatedLayout>
    </>
  );
}
