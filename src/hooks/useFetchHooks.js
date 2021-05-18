import { useDebugValue } from "react";
import { useQuery } from "react-query";
import { commerce } from '../api/commerce'
// import axios from "axios";


// fetching products with axios failed for this use case so let's try the latter
// const getProducts = async () => {
//   const { data } = await axios.get(productsEndPoint);
//   return data;
// };

// creating a products fetching hook with commerce js api 
const getProducts = async () => {
  const { data } = await commerce.products.list()
  return data;
};

export function useProducts() {
  useDebugValue(getProducts ?? 'loading...')
  return useQuery("products", getProducts);
}

// creating a cart fetch hook
const getCart = async () => {
  const cart = await commerce.cart.retrieve()
  return cart;
};

export function useCart() {
  useDebugValue(getCart ?? 'loading...')
  return useQuery("cart", getCart);
}

//creating a add to cart hook
const addToCartById = async (productId) => {
  const data = await commerce.cart.add(productId)
  return data.cart;
};

export function useAddToCart(targetId) {
  useDebugValue(addToCartById ?? 'loading...')
  return useQuery(["add-to-cart", targetId], () => addToCartById(targetId));
}


