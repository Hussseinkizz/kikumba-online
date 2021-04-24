import CartProductCard from './components/CartProductCard'
import Image1 from '../../static/media/images/shoe/sh1.jpg';
import Image2 from '../../static/media/images/shoe/sh8.jpg';
import Image3 from '../../static/media/images/shoe/sh3.jpg';
import Image4 from '../../static/media/images/shoe/sh4.jpg';
import Image5 from '../../static/media/images/shoe/sh12.jpg';
import Image6 from '../../static/media/images/shoe/sh10.jpg';
import { useHistory } from 'react-router-dom'

const CartPage = () => {

  let total = '128,000'
  let history = useHistory()
  
  return (
    <section>
      <h1 className='flex justify-center w-full text-3xl font-bold text-gray-800 uppercase md:text-4xl lg:text-5xl'>Thanks For Shopping</h1>
      <section className='w-full gap-6 p-4 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0'>
    <CartProductCard
      productName = 'Nike Blur'
      productImage = {Image1}
      productPrice = '47,000'
    />
    <CartProductCard
      productName = 'Multi Color'
      productImage = {Image2}
      productPrice = '35,000'
    />
    <CartProductCard
      productName = 'Lofers Leathal'
      productImage = {Image3}
      productPrice = '77,000 All'
    />
    <CartProductCard
      productName = 'Converse'
      productImage = {Image4}
      productPrice = '40,000'
    />
    <CartProductCard
      productName = 'Adidas SPLY'
      productImage = {Image5}
      productPrice = '60,000'
    />
    <CartProductCard
      productName = 'Wave Runner'
      productImage = {Image6}
      productPrice = '50,000'
    />
    </section>
    <section className='w-full gap-6 p-4 space-y-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0'>
      <div className='block w-full px-2 py-1 space-x-2 font-bold text-center text-white bg-gray-900 rounded md:inline-block'>
        <span>Total Pricing</span>
        <span>{total} Shs</span>
      </div>
      <button className='block text-gray-900 bg-red-300 btn hover:bg-red-400 focus:bg-red-500'>
      Remove All Items</button>
      
      <button className='block text-gray-900 bg-green-300 btn hover:bg-green-400 focus:bg-green-500'>
      Proceed To Checkout</button>
      
      <button className='block text-gray-900 bg-yellow-300 btn hover:bg-yellow-400 focus:bg-yellow-500 lg:col-start-1 lg:col-end-4 lg:py-2' 
      onClick={() => history.push('/')}>
      Continue Shopping</button>
      
    </section>
    </section>
  ) 
}

export default CartPage
