import React from 'react';

import logoImg from '../images/logo192.png'
import ContinueButton from '../UI/button/button'

function Header() {
  return (
    <header className="bg-black p-4 text-white flex items-center justify-between">
      <div className="flex items-center">
        <img src={logoImg} alt='Logo' className='h-12 mr-2.5' />
        <h1>tulip</h1>
      </div>
      <ContinueButton />
    </header>
  );

}

export default Header;