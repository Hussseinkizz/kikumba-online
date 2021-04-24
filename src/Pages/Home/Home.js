import ProductCard from './components/ProductCard'
import Data from '../../backend/data/Products_data'

const Home = () => {
  return (
    <section className='w-full gap-6 p-4 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0'>
    {
      Data.map((product, index) => (
      <ProductCard key={index}
      productId = {product.id}
      productName = {product.name}
      productImage = {product.image}
      productPrice = {product.price}
    />
      ))
    }
    </section>
  )
}

export default Home
