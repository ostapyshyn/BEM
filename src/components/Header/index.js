import React from 'react';

import { Menu } from '../Menu/';
import './index.css';

import head_img from '../../images/bg.png';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__body'>
        <div class='header__logo'>GENIUS</div>

        <div className='header__nav'>
          <Menu />

          <div className='header__lang'>
            <select className='header__langSelect' name='lang' id='lang-sel'>
              <option value='english'>EN</option>
              <option value='german'>GE</option>
            </select>
          </div>
        </div>
      </div>

      <div className='header__image'>
        <img className='header__img' src={head_img} alt='company' />
      </div>
    </header>
  );
};
