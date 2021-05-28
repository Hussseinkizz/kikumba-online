import PropTypes from 'prop-types';
import { useState } from 'react';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';

/**
 *
 *
 * @param {*} { productId, productQty, productName, productImage, productPrice, updateQuantity, removeFromCart }
 * @return {*}
 */

const CartProductCard = (props) => {
  const [isRemoved, setIsRemoved] = useState(false);

  const handleRemove = () => {
    props.removeFromCart(props.productId);
    setIsRemoved(true);
  };

  return (
    <section className="w-full mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg flex flex-auto flex-col">
      <div className="px-4 py-2">
        <h1 className="flex justify-between text-xl font-bold text-gray-800 uppercase md:text-2xl">
          <div>{props.productName}</div>
          <div className="flex justify-between space-x-2 align-middle">
            <span>
              <IoIcons.IoRemove
                className="hover:text-yellow-400 focus:text-yellow-500"
                onClick={() =>
                  props.updateQuantity(props.productId, props.productQty - 1)
                }
              />
            </span>
            <span>{props.productQty}</span>
            <span>
              <IoIcons.IoAdd
                className="hover:text-yellow-400 focus:text-yellow-500"
                onClick={() =>
                  props.updateQuantity(props.productId, props.productQty + 1)
                }
              />
            </span>
          </div>
        </h1>
      </div>

      <img
        className="object-fill w-full mt-2 h-72 flex flex-auto flex-grow"
        src={props.productImage}
        alt={props.productName}
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">
          UGX {props.productPrice}
        </h1>
        {isRemoved ? (
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase bg-white rounded focus:outline-none">
            <BiIcons.BiLoaderAlt className="text-yellow-300 animate-spin" />
          </button>
        ) : (
          <button
            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-yellow-300 focus:outline-none"
            onClick={handleRemove}
          >
            Remove
          </button>
        )}
      </div>
    </section>
  );
};

CartProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.any.isRequired,
  productPrice: PropTypes.string.isRequired,
};

CartProductCard.defaultProps = {
  productName: 'Product Name?',
  productImage: 'Product Image?',
  productPrice: 'Price?',
};

export default CartProductCard;
