import React from 'react';
import './index.css';

import address from '../../../images/address.svg';
import envelope from '../../../images/envelope.svg';
import phone from '../../../images/telephone.svg';

export const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <div className='contact-info__all'>
        <div className='contact-info__body'>
          <div className='contact-info__item'>
            <div className='contact-info__item-img' style={{ width: '93px' }}>
              <img src={address} alt='address' />
            </div>
            <h4 className='contact-info__item-data'>Poststr, 45, 44890 Hamburg</h4>
          </div>

          <div className='contact-info__item'>
            <div className='contact-info__item-img'>
              <img src={envelope} alt='envelope' />
            </div>
            <h4 className='contact-info__item-data'>hello@tratata.de</h4>
          </div>

          <div className='contact-info__item'>
            <div className='contact-info__item-img'>
              <img src={phone} alt='phone' />
            </div>
            <h4 className='contact-info__item-data-phone'>040 380-33-44</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
