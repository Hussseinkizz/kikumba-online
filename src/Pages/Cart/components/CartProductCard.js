import PropTypes from 'prop-types'
import * as IoIcons from 'react-icons/io5'

//todo: add states to remove from cart & add change quantity functionality

const CartProductCard = ({ productName, productImage, productPrice }) => {

  let quantity = 1;
  
  return (
    <div className="w-full mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg">
      <div className="px-4 py-2">
        <h1 className="flex justify-between text-xl font-bold text-gray-800 uppercase lg:text-3xl md:text-2xl">
          <div>{productName}</div>
          <div className='flex justify-between space-x-2 align-middle'>
            <span>
              <IoIcons.IoRemove className='hover:text-yellow-400 focus:text-yellow-500'/>
            </span>
            <span>{quantity}</span>
            <span>
              <IoIcons.IoAdd 
              className='hover:text-yellow-400 focus:text-yellow-500'/>
            </span>
          </div>
        </h1>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={productImage}
        alt={productName}
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">UGX {productPrice}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-yellow-300 focus:bg-yellow-500 focus:outline-none">
          Remove
        </button>
      </div>
    </div>
  );
};

CartProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.any.isRequired,
  productPrice: PropTypes.string.isRequired
}

CartProductCard.defaultProps = {
  productName: 'Product Name?',
  productImage: 'Product Image?',
  productPrice: 'Price?'
}

export default CartProductCard;
