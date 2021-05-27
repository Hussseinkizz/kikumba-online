import * as Icons from 'react-icons/io5';
import Fade from 'react-reveal';

const CartEmpty = ({ history }) => {
  return (
    <>
      <Fade top>
        <h1 className="flex justify-center w-full text-3xl font-bold text-gray-800 uppercase md:text-4xl lg:text-5xl mb-30 md:mb-20 lg:mb-10">
          There's Nothing Here!
        </h1>
      </Fade>
      <section className="grid place-items-center space-y-6">
        <div className="p4">
          <Icons.IoCartOutline className="text-gray-200 w-48 h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 faa-float animated" />
        </div>
        <Fade bottom>
          <button
            className="block text-gray-900 bg-yellow-300 btn hover:bg-yellow-400 focus:bg-yellow-500"
            onClick={() => history.push('/')}
          >
            Go Shopping
          </button>
        </Fade>
      </section>
    </>
  );
};

export default CartEmpty;
