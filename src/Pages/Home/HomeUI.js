import ProductCard from './components/ProductCard';

// dumb component --> HomeUI

const HomeUI = ({ products, addToCart }) => {
  return (
    <section className="w-full gap-6 p-4 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          productName={product.name}
          productImage={product.media.source}
          productPrice={product.price.formatted}
          addToCart={addToCart}
        />
      ))}
    </section>
  );
};

export default HomeUI;
