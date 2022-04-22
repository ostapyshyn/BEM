import React from 'react';

import { BottomFooter } from './BottomFooter/';
import { ContactInfo } from './ContactInfo/';
import { Form } from './Form/';
import { Menu } from '../Menu/';

import './index.css';

export const Footer = () => {
  return (
    <>
      <div className='cotacts-menu'>
        <Menu />
      </div>
      <div className='contacts'>
        <ContactInfo />
        <Form />
      </div>
      <BottomFooter />
    </>
  );
};
