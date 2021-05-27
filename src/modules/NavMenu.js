import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useHistory } from 'react-router';

//todo: should include more logic for routes
//todo: add redirect and share functionalities

export default function NavMenu() {
  let history = useHistory();

  let handleRedirect = () => console.log('foo');
  let handleShare = () => console.log('bar');

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex  focus:outline-none">
              <IoIcons.IoEllipsisVertical className="w-6 h-6 icon" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-36">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={() => history.push('/')}
                    >
                      <BiIcons.BiHomeCircle className="h-4 w-4" />
                      <span>Home</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={() => history.push('/contact')}
                    >
                      <IoIcons.IoMailOutline className="h-4 w-4" />
                      <span>Contact</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={handleRedirect}
                    >
                      <IoIcons.IoLogoInstagram className="h-4 w-4" />
                      <span>Follow Us</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={handleShare}
                    >
                      <BiIcons.BiShareAlt className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={() => history.push('/about')}
                    >
                      <BiIcons.BiHelpCircle className="h-4 w-4" />
                      <span>About</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
