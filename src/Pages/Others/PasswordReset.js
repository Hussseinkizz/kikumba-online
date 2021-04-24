import React from "react";

const PasswordReset = () => {
  return (
    <section className="p-2 grid place-items-center space-y-6 w-full text-lg md:text-xl lg:text-2xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 capitalize text-center">
        You really forgot your password?
      </h1>
      <p className="px-8 text-center">
        No worries, we can help you regain access to your account, we will send you a
        temporary password to the email associated with your account.
      </p>
      <form
        className="grid 
      w-full
      space-y-5 
      place-items-center"
      >
        <label>Enter your account email below</label>
        <div className='w-4/5'>
        <input type="text" className="input" />
        </div>
        {/* Form Button */}
          <button
            className="px-2 text-white 
          bg-gray-900 border 
          border-gray-100 
          focus:text-gray-500 btn-plain 
          hover:bg-gray-800 
          focus:bg-gray-700 
          hover:text-gray-400 
          hover:border-gray-300 md:py-2"
          >
            Receive password
          </button>
      </form>
    </section>
  );
};

export default PasswordReset;
