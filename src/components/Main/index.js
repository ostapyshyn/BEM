import React from 'react';

import { MainTitle } from './MainTitle';
import { InfoSection } from './InfoSection';
import './index.css';

import crunchy from '../../images/crunchy.png';
import emerald from '../../images/emerald.png';
import space from '../../images/space.png';
import spring from '../../images/spring.png';
import chat from '../../images/chat.png';

export const Main = () => {
  return (
    <main className='main main__element'>
      <MainTitle />
      <section className='main__info-blocks'>
        <InfoSection image={crunchy} isImageLeft={true} />
        <InfoSection image={emerald} isImageLeft={false} />
        <InfoSection image={space} isImageLeft={true} />
        <InfoSection image={spring} isImageLeft={false} />
        <div class='chat'>
          <a href='#form'>
            <img src={chat} alt='chat' />
          </a>
        </div>
      </section>
    </main>
  );
};
