import React from 'react';
import GitHub from '@/assets/icons/GitHub';
import RightArrow from '@/assets/icons/RightArrow';

export default function Footer() {
  return (
    <footer className='no-print' id='body-footer'>
      <div id='footer-container'>
        <div id='cv-maker'>
          <p>Hecho con Minimal CV Maker</p>
          <RightArrow />
          <a href='https://github.com/Hector711/minimal-cv-maker' target='_blank'>
            Crea el tuyo propio
          </a>
        </div>
        {/* <a href='' target='_blank'>
          Repositorio <GitHub />
        </a> */}
      </div>
    </footer>
  );
}
