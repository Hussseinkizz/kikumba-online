import * as IoIcons from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useStateValue } from '../hooks/StateProvider'
import NavOptions from './NavOptions'

//todo: if user is logged in, show the user photo else take user to signup

const Header = ({ toggleNav, closeNav, navState }) => {
  const [{ cart }, dispatch] = useStateValue()

  return (
    <>
    <header className='fixed top-0 z-50 w-full bg-gray-900 text-gray-50'>
      <nav className='flex justify-between px-4 py-2'>
        <div className='flex space-x-2 align-middle'>
        <span>
          <IoIcons.IoBagCheck className='w-6 h-6'/>
        </span>
        <span className='space-x-2 font-semibold'>
        <span>Kikumba</span>
        <span className='text-yellow-300'>Online</span>
        </span>
        </div>
        <div className='flex space-x-2'>
          <span className='relative'>
          <Link to='/cart' onClick={closeNav}>
            <IoIcons.IoCart className='w-6 h-6 icon'/>
            <span className='absolute px-1 text-xs text-gray-900 bg-yellow-300 rounded-full -right-1 -top-1'>
              {cart?.length}
            </span></Link>
          </span>
          <span>
          <Link to='/signup' onClick={closeNav}>            
            <IoIcons.IoPersonCircle className='w-6 h-6 icon'/>
          </Link>
          </span>
          <span>
            <IoIcons.IoEllipsisVertical className='w-6 h-6 icon' 
            onClick={toggleNav}/>
          </span>
        </div>
      </nav>
    </header>
    <div id='spacer' className='w-full h-12'/>
    {navState && <NavOptions onSelect={closeNav}/>}
    </>
  )
}

export default Header
