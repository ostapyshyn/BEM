import React from 'react';
import './index.css';
export const InfoSection = ({ image, isImageLeft }) => {
  const title = 'Webdesign Agentur';
  const about =
    'Wir sind ein wirksames Team von Programmierern und Designer und bieten professionelle Dienstlei stungen rund um’s Thema Webdesignund Online-Marketing an. Seit 2006 kultivieren wir.';

  if (isImageLeft) {
    return (
      <div className='info-section info-section__element'>
        <div className='info-section__img-body'>
          <div className='info-section__image'>
            <img src={image} alt='image-info' />
          </div>
          <h3 className='info-section__title'>{title}</h3>
        </div>

        <div className='info-section__about-body'>
          <h2 className='info-section__about-title'>{title}</h2>
          <p className='info-section__about-info'>{about}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className='info-section info-section__element'>
        <div className='info-section__about-body info-section__about-body--right' style={{ textAlign: 'end' }}>
          <h2 className='info-section__about-title'>{title}</h2>
          <p className='info-section__about-info'>{about}</p>
        </div>

        <div className='info-section__img-body'>
          <div className='info-section__image'>
            <img src={image} alt='image-info' />
          </div>
          <h3 className='info-section__title'>{title}</h3>
        </div>
      </div>
    );
  }
};
