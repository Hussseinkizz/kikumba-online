import * as IoIcons from 'react-icons/io5'
import { Reveal } from 'react-reveal'
import { Link } from 'react-router-dom'

const NavOptions = ({onSelect}) => {
  return (
    <Reveal Effect='FadeInDown'>
          <div className='fixed z-50 w-32 px-2 py-4 text-gray-200 bg-gray-900 rounded right-2 top-14'>
          <Link to='/' onClick={onSelect}>  
      <div className='flex space-x-2 place-items-center hvr'>
        <span>
          <IoIcons.IoHomeOutline/>
        </span>
        <span>Home</span>
      </div>
          </Link>
          <Link to='/about' onClick={onSelect}>  
      <div className='flex space-x-2 place-items-center hvr'>
        <span>
          <IoIcons.IoPersonOutline/>
        </span>
        <span>About</span>
      </div>
      </Link>
      <Link to='/contact' onClick={onSelect}>  
      <div className='flex space-x-2 place-items-center hvr'>
        <span>
          <IoIcons.IoMailOutline/>
        </span>
        <span>Contact</span>
      </div>
      </Link>
      <Link to='#' onClick={onSelect}>  
      <div className='flex space-x-2 place-items-center hvr'>
        <span>
          <IoIcons.IoLogoInstagram/>
        </span>
        <span>Follow Us</span>
      </div>
      </Link>
      <Link to='#' onClick={onSelect}>  
      <div className='flex space-x-2 place-items-center hvr'>
        <span>
          <IoIcons.IoLogoWhatsapp/>
        </span>
        <span>Whatsapp</span>
      </div>
      </Link>
      <IoIcons.IoTriangle className='absolute w-6 h-6 text-gray-900 right-2 -top-3'/>
    </div>
    </Reveal>
  )
}

export default NavOptions
