import { useState } from "react"
import { useAddToCart } from "../../hooks/useFetchHooks"
import { ErrorUI, FetchUI } from "../../modules/StateModules"
import { useDispatch } from "../../states/clientState/StoreProvider"
import ProductCard from "./components/ProductCard"

// sub smart component --> HomeUI

const HomeUI = ({ products }) => {
  const dispatch = useDispatch()
  const [targetId, setTargetId] = useState('')
  const { status, error, data, isFetching } = useAddToCart(targetId);

  const onAddToCart = (id) => {
    setTargetId(id)
    switch (status) {
      case "error":
        return <ErrorUI error={error} />;

      case "success":
        return dispatch({
          type: "UPDATE_CART",
          newCart: data
        });

      default:
        return <FetchUI fetching={isFetching} />;
    }
  };


  return (
    <section className='w-full gap-6 p-4 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0'>
    {
      products.map((product, index) => (
      <ProductCard key={index}
      productId = {product.id}
      productName = {product.name}
      productImage = {product.media.source}
      productPrice = {product.price.formatted}
      addToCart={onAddToCart}
    />
      ))
    }
    </section>
  )
}

export default HomeUI
