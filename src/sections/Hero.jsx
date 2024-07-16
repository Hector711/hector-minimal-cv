import React from 'react';
import Section from '@/sections/components/Section';
import X from '@/assets/X.jsx';
import Instagram from '@/assets/Instagram.jsx';
import YouTube from '@/assets/YouTube.jsx';
import WhatsApp from '@/assets/WhatsApp.jsx';
import Mail from '@/assets/Mail.jsx';
import LinkedIn from '@/assets/LinkedIn.jsx';
import cv from '@/../cv-es.json';

const basics = cv.basics;

const SOCIAL_ICONS = {
  instagram: <Instagram />,
  youtube: YouTube,
  whatsapp: WhatsApp,
  mail: Mail,
  linkedin: LinkedIn,
};


export default function Hero() {
  return (
    <Section>
      <div className='container'>
        <div className='info'>
          <h1>Héctor Guerra</h1>
          <h2>Full Stack Programmer</h2>
          <span>
            <div></div>
            <div>Madrid, Spain.</div>
          </span>
          <footer id='print'>
            <p>Email: </p>
            <p>Telef.: </p>
            <p>LinkedIn: </p>
            <p>GitHub: </p>
          </footer>
          <footer id='no-print'>
            <div id='rrss-links'>
              {console.log(basics)}
             
            </div>
            <a
              id='webPage'
              target='_blank'
              title='Visitar la pagina web de nickname'
              href=''
            >
              <p>s</p>
            </a>
          </footer>
        </div>
        <figure id='avatar'>
          <img src="https://i.ibb.co/s5smtmL/profile-pic.jpg" alt="Héctor Avatar" />
        </figure>
      </div>
    </Section>
  );
}
