import { useQuery } from "@/hooks/useQuery";
import { productService } from "@/services/product";
import React from "react";

export const ListProduct = ({ query }) => {
  const { data, loading } = useQuery({
    queryFn: () => productService.getProduct(query),
  });

  return (
    <ListProductCard />
  )
};
