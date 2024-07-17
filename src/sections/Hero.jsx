import React from 'react';
import Section from '@/sections/components/Section';
import X from '@/assets/icons/X.jsx';
import Instagram from '@/assets/icons/Instagram.jsx';
import YouTube from '@/assets/icons/YouTube.jsx';
import WhatsApp from '@/assets/icons/WhatsApp.jsx';
import Mail from '@/assets/icons/Mail.jsx';
import LinkedIn from '@/assets/icons/LinkedIn.jsx';
import Location from '@/assets/icons/Location.jsx';
import GitHub from '@/assets/icons/GitHub.jsx';
import cv from '@/../cv-es.json';

const basics = cv.basics;
const rrss = basics.rrss;

export default function Hero() {
  const SOCIAL_ICONS = {
    Instagram: <Instagram />,
    YouTube: <YouTube />,
    WhatsApp: <WhatsApp />,
    Mail: <Mail />,
    LinkedIn: <LinkedIn />,
    GitHub: <GitHub />,
    X: <X />,
  };
  return (
    <Section id='hero'>
      <div className='info'>
        <header>
          <h1>Héctor Guerra</h1>
          <h3>Full Stack Developer</h3>
        </header>
        <span>
          <Location />
          <h5>Madrid, Spain.</h5>
        </span>
        <footer id='print'>
          <p>Email: </p>
          <p>LinkedIn: </p>
          <p>GitHub: </p>
        </footer>
        <footer className='no-print' id='rrss-links'>
          <div id='rrss-links'>
            <a>{SOCIAL_ICONS['Mail']} </a>
            {rrss.map((item, i) => {
              const Icon = SOCIAL_ICONS[item.network];
              return <a key={i}> {Icon} </a>;
            })}
          </div>
          <a
            id='web-page'
            target='_blank'
            title='Visitar la pagina web de nickname'
            href=''
          >
            <p>Página Web</p>
          </a>
        </footer>
      </div>
      <figure id='avatar'>
        <img
          src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
          alt='Héctor Avatar'
        />
      </figure>
    </Section>
  );
}
