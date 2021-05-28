const AddressForm = () => {
  return (
    <>
      {/* Address Form */}
      <form
        className="grid 
      w-full
      space-y-8 
      place-items-center mt-10 md:mt-15 lg:mt-20"
      >
        <section className="flex justify-center place-items-center w-full md:px-4 h-full">
          {/* Form Inputs */}
          <div className="flex flex-col space-y-3 md:justify-between md:h-full place-items-center px-4 md:px-0 md:w-3/5 w-full">
            <input
              type="text"
              placeholder="Your first name..."
              className="input"
            />
            <input
              type="text"
              placeholder="Your last name..."
              className="input"
            />
            <input type="text" placeholder="Your email..." className="input" />
            <input
              type="text"
              placeholder="Your address..."
              className="input"
            />

            {/* Form Buttons */}
            <div className="flex space-x-4 justify-between place-items w-full">
              <button
                className="px-8 text-white 
          bg-gray-900 border 
          border-gray-100 
          focus:text-gray-500 btn-plain 
          hover:bg-gray-800 
          focus:bg-gray-700 
          hover:text-gray-400 
          hover:border-gray-300 w-full md:py-2"
              >
                Proceed
              </button>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default AddressForm;
