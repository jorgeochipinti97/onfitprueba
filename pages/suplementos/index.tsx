import React from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductFilterPage } from "../../components/products/ProductFilter";

const index = () => {
  return (
    <ShopLayout title="Onfit - Suplementos" pageDescription="">
      <ProductFilterPage />
    </ShopLayout>
  );
};

export default index;
