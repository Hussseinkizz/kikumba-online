import { useHistory, Link } from 'react-router-dom'

const Login = () => {

  let history = useHistory()

  return (
    <section
      className="p-2 grid
      place-items-center"
    >
    {/* User Login Form */}
      <form
      className="grid 
      w-full
      space-y-8 
      place-items-center"
      >
      {/* Welcoming Text */}
        <p
        className=" 
        w-full 
        text-3xl font-bold
        text-gray-800 md:text-4xl 
        lg:text-5xl
        text-center md:my-4 lg:my-8"
        >
          <span className='px-2 md:block'>
            Glad to have you here,
            <span className="text-yellow-500 px-2">welcome back!</span>
          </span>
        </p>

        <section className="flex justify-center place-items-center w-full md:px-4 h-full">

         {/* Form Inputs */}
          <div className='flex flex-col space-y-3 md:justify-between md:h-full place-items-center px-4 md:px-0 md:w-3/5 w-full'>
            <input
              type="text"
              placeholder="Your email address..."
              className="input"
            />
            <input
              type="password"
              placeholder="Your password..."
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
          hover:border-gray-300"
              >
                Login
              </button>
              <span className="p-2"> ---- Or ---- </span>
              <button
                className="px-2 text-gray-900 
          border border-gray-300 
          btn-plain hover:bg-yellow-300 
          focus:bg-yellow-400"
          onClick={() => history.push('/signup')}
              >
                Create Account
              </button>
            </div>
            <label
          className="flex mt-2 space-x-1 
          text-sm place-items-center w-full 
          justify-center md:text-base lg:text-lg"
            >
            <Link to='/password-reset' className='hover:text-yellow-500 focus:text-yellow-700 duration-200 transition-colors hover:underline'>
              Forgot your password?
            </Link>
            </label>
          </div>
        </section>
      </form>
    </section>
  );
};

export default Login;
