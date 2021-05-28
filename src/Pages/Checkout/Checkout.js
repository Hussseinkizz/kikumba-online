import Fade from 'react-reveal';
import * as BiIcons from 'react-icons/bi';
// import { useState } from 'react';
import AddressForm from './components/AddressForm';

const Checkout = () => {
  // const [isActive, setIsActive] = useState(false);
  // const [isDone, setIsDone] = useState(false);

  return (
    <section className="p-2 grid place-items-center">
      <Fade top>
        {/* PAGE TITLE */}
        <p
          className=" 
        w-full 
        text-3xl font-bold
        text-gray-800 md:text-4xl 
        lg:text-5xl
        text-center mb-10 md:mb-15 lg:mb-20"
        >
          <span className="px-2 md:block">
            Where should we bring your
            <span className="text-yellow-500 px-2">purchase.</span>
          </span>
        </p>
      </Fade>
      {/* CUSTOM STEPPERS */}
      <div className="w-4/5 h-1 bg-yellow-100 relative mb-10">
        <h1 className="w-full absolute">
          <span className="w-10 h-10 bg-yellow-300 rounded-full font-bold transform -translate-y-4 -translate-x-1 absolute text-center grid place-items-center text-lg md:text-xl lg:text-2xl text-gray-900">
            <BiIcons.BiCheck />
          </span>
          <span className="w-10 h-10 bg-yellow-100 rounded-full font-bold transform -translate-y-4 -translate-x-6 absolute text-center grid place-items-center text-lg md:text-xl lg:text-2xl text-yellow-200 left-1/2">
            2
          </span>
          <span className="w-10 h-10 bg-yellow-100 rounded-full font-bold transform -translate-y-4 translate-x-1 absolute text-center grid place-items-center text-lg md:text-xl lg:text-2xl text-yellow-200 right-0">
            3
          </span>
        </h1>
      </div>
      {/* STEPPER TITLES */}
      <h1 className="flex justify-between text-sm capitalize w-11/12 px-2 md:px-8 lg:px-12">
        <span className="font-semibold">shipping details</span>
        <span className="text-gray-500 transform -lg:translate-x-6">payment methods</span>
        <span className="text-gray-500">confirmation</span>
      </h1>
      {/* STEP CONTENT */}
      <div className="w-4/5">
        <AddressForm />
      </div>
    </section>
  );
};

export default Checkout;
