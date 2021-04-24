import * as BiIcons from "react-icons/bi";
import { useHistory, Link } from 'react-router-dom'

const SignUp = () => {

  let history = useHistory()

  return (
    <section
      className="p-2 grid
      place-items-center"
    >
    {/* User Signup Form */}
      <form
      className="grid 
      w-full
      space-y-8 
      place-items-center"
      >
      {/* CTA & Value Preposition Text */}
        <p
        className=" 
        w-full 
        text-3xl font-bold
        text-gray-800 md:text-4xl 
        lg:text-5xl
        text-center md:my-4 lg:my-8"
        >
          <span className='px-2 md:block'>
            Become one of
            <span className="text-yellow-500 px-2">fashion pros</span>,
          </span>
            join us to
            <span className="text-green-500 px-2">get discounts</span>or
            <span className="text-purple-500 px-2">sell your own stuff</span>
            with us.
        </p>

        <section className="md:flex md:justify-center place-items-center w-full md:px-4 h-full md:gap-10">
        <div
            className="p-4 md:p-12 grid place-items-center border 
          border-gray-300 rounded m-4 md:m-0 md:h-full md:w-3/5 lg:w-3/4 image-bg"
          >
          {/* User Photo Upload Component */}
            <div
            className="p-4 m-2 border 
          border-gray-300 rounded-full 
          hover:bg-gray-50"
            >
              <BiIcons.BiUserPlus className="text-5xl text-gray-300" />
              {/* //todo: Show a tick icon on successful upload */}
            </div>
            <button className='font-bold 
            text-gray-300
            border-gray-300 
            focus:text-gray-900
            focus:bg-yellow-300 
            hover:text-gray-500 
            hover:border-gray-500
            btn-plain border rounded px-2 mt-4'>
              Upload Photo
              </button>
          </div>
         {/* Form Inputs */}
          <div className='flex flex-col space-y-3 md:justify-between md:h-full place-items-center px-4 md:px-0 md:w-3/5 w-full'>
            <input
              type="text"
              placeholder="Your full names..."
              className="input"
              name="fullNames"
            />
            <input
              type="email"
              placeholder="Your  email address..."
              className="input"
            />
            <input
              type="phone"
              placeholder="Your phone number..."
              className="input"
              name="phone"
            />
            <input
              type="password"
              placeholder="Your password..."
              className="input"
              name="password"
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
          hover:border-gray-300"
          type="submit"
              >
                Sign Up
              </button>
              <span className="p-2"> ---- Or ---- </span>
              <button
                className="px-2 text-gray-900 
          border border-gray-300 
          btn-plain hover:bg-yellow-300 
          focus:bg-yellow-400"
          onClick={() => history.push('/login')}
              >
                Login Instead
              </button>
            </div>
            <label
          className="flex mt-2 space-x-1 
          text-sm place-items-center w-full 
          justify-center md:text-base lg:text-lg"
            >
              <BiIcons.BiCheckSquare />
              By Signing up you agree to our
              <span
                className="pl-1 text-yellow-500 
          hover:underline"
              >
              <Link to='/terms-and-conditions'>
                terms & conditions
              </Link>
              </span>
              .
            </label>
          </div>
        </section>
      </form>
    </section>
  );
};

export default SignUp;
