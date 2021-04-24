import * as IoIcons from 'react-icons/io5'
import * as FaIcons from "react-icons/fa";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <section className='p-2 grid place-items-center space-y-6'>
    {/* Branding */}
      <div className='flex flex-col md:flex-row place-items-center justify-center w-full'>
        <IoIcons.IoBagCheck className='text-5xl md:text-6xl lg:text-8xl md:pb-2 text-gray-900'/>
        <div className='text-5xl md:text-6xl lg:text-8xl space-x-2 font-bold text-gray-900'>
          <span>Kikumba</span>
          <span className='text-yellow-400'>Online</span>
        </div>
      </div>
      {/* descriptive text */}
      <p className='text-center px-10 text-lg md:text-xl lg:text-2xl text-font'>We're fashion advocates changing the fashion indurstry in Uganda by modernizing and leveraging modern technology and still embracing today's richer logistics. We bring your favourite fashions to your mobile screen and we finally also ship it to your door. Just make the order!</p>
      <div>
      <h2 className='text-base md:text-lg lg:text-xl'>Give us a follow and catch up our fashion updates</h2>
      <div className='flex w-full space-x-4 place-items-center justify-center mt-8 text-base md:text-lg lg:text-xl'>
          <Link to='#'>
            <FaIcons.FaWhatsapp className='icon'/>
          </Link>
          <Link to='#'>
            <FaIcons.FaFacebook className='icon'/>
          </Link>
          <Link to='#'>
            <FaIcons.FaInstagram className='icon'/>
          </Link>
          <Link to='#'>
            <FaIcons.FaTwitter className='icon'/>
          </Link>
        </div>
      </div>
    </section>
    {/* page footer */}
    <footer className='text-sm md:text-base lg:text-lg bottom-2 absolute w-full flex justify-center place-items-center text-gray-500'>&copy; Kikumba Fashions 2021</footer>
    </>
  )
}

export default About
