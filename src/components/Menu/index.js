import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export const Menu = () => {
  return (
    <nav className='menu'>
      <Link className='menu__item' to='/prics'>
        PREISE
      </Link>
      <Link className='menu__item' to='/references'>
        REFRENZEN
      </Link>
      <Link className='menu__item' to='/contact'>
        KONTAKT
      </Link>
    </nav>
  );
};
