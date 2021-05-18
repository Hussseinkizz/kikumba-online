import PropTypes from "prop-types";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import { useStore } from "../../../states/clientState/StoreProvider";

const ProductCard = ({
  productId,
  productName,
  productImage,
  productPrice,
  addToFavs,
  removeFromFavs,
  addToCart,
  removeFromCart
}) => {
  const { isFav, isAdded } = useStore()
 

  return (
    <section className="w-full mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg">
      <div className="px-4 py-2">
        <h1 className="flex justify-between text-xl font-bold text-gray-800 uppercase lg:text-3xl md:text-2xl">
          <span>{productName}</span>
          <span>
            {isFav ? (
              <IoIcons.IoHeart className="text-yellow-300"
              onClick={removeFromFavs} />
            ) : (
              <BiIcons.BiHeart className="hover:text-yellow-300"
              onClick={addToFavs} />
            )}
          </span>
        </h1>
      </div>

      <img
        className="object-cover w-full h-48 mt-2"
        src={productImage}
        alt={productName}
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">UGX {productPrice}</h1>
        {isAdded ? (
          <button
            className="px-2 py-1 text-xs font-semibold hover:text-gray-400 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-yellow-300 focus:text-gray-900 focus:outline-none"
            onClick={removeFromCart}
          >
            Remove
          </button>
        ) : (
          <button
            className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-yellow-300 focus:outline-none"
            onClick={() => addToCart(productId)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </section>
  );
};

ProductCard.defaultProps = {
  productId: "Product Id?",
  productName: "Product Name?",
  productImage: "Product Image?",
  productPrice: "Product Price?",
};

ProductCard.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  productImage: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default ProductCard;
