import React from "react";
import { ShopLayout } from "../../components/layouts";
import { ProductFilterPage } from "../../components/products/ProductFilter";

const index = () => {
  return (
    <ShopLayout title="Onfit - Equipamiento" pageDescription="">
      <ProductFilterPage />
    </ShopLayout>
  );
};

export default index;
