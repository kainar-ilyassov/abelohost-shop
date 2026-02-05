import { api } from "./axios";

export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export async function getProducts(limit = 12): Promise<ProductsResponse> {
  const { data } = await api.get<ProductsResponse>("/products", {
    params: { limit },
  });
  return data;
}
