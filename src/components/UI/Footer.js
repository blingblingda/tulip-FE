import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as FormIcon } from '../../assets/icons/form.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthenticated = () => {
    return !!localStorage.getItem('token');
  };

  const handleNavigate = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  // Basic footer content for non-authenticated users
  const basicFooterContent = (
    <div className="text-center p-6 text-gray-600">
      <p>© {new Date().getFullYear()} Tulip. All rights reserved.</p>
    </div>
  );

  return (
    <footer className="fixed inset-x-0 bottom-0 bg-black text-white shadow-lg">
      {isAuthenticated() ? (
        <nav className="flex justify-around items-center h-16">
          <button
            onClick={() => handleNavigate('/')}
            className={`flex flex-col items-center w-full focus:outline-none ${location.pathname === '/' ? 'pointer-events-none opacity-50' : ''}`}
          >
            <HomeIcon className="h-12 w-12" />
          </button>
          <button
            onClick={() => handleNavigate('/registration')}
            className={`flex flex-col items-center w-full focus:outline-none ${location.pathname === '/registration' ? 'pointer-events-none opacity-50' : ''}`}
          >
            <FormIcon className="h-12 w-12" />
          </button>
          <button
            onClick={() => handleNavigate('/match')}
            className={`flex flex-col items-center w-full focus:outline-none ${location.pathname === '/match' ? 'pointer-events-none opacity-50' : ''}`}
          >
            <HeartIcon className="h-12 w-12" />
          </button>
        </nav>
      ) : (
        basicFooterContent
      )}
    </footer>
  );
};

