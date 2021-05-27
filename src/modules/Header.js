import * as IoIcons from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import NavMenu from './NavMenu';

//todo: if user is logged in, show the user photo else take user to signup

const Header = ({ totalCartItems }) => {
  let history = useHistory();

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-gray-900 text-gray-50">
        <nav className="flex justify-between px-4 py-2">
          <div className="flex space-x-2 align-middle">
            <span>
              <IoIcons.IoBagCheck className="w-6 h-6" />
            </span>
            <span className="space-x-2 font-semibold">
              <span>Kikumba</span>
              <span className="text-yellow-300">Online</span>
            </span>
          </div>
          <div className="flex space-x-2">
            <span className="relative">
              <IoIcons.IoCart
                className="w-6 h-6 icon"
                onClick={() => history.push('/cart')}
              />
              <span className="absolute px-1 text-xs text-gray-900 bg-yellow-300 rounded-full -right-1 -top-1">
                {totalCartItems ?? '0'}
              </span>
            </span>
            <span>
              <IoIcons.IoPersonCircle
                className="w-6 h-6 icon"
                onClick={() => history.push('/signup')}
              />
            </span>
            <span>
              <NavMenu />
            </span>
          </div>
        </nav>
      </header>
      <div id="spacer" className="w-full h-12" />
    </>
  );
};

export default Header;
