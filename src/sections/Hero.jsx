import React from 'react';
import ModelSection from '@/components/ModelSection';
import X from '@/assets/icons/X.jsx';
import Instagram from '@/assets/icons/Instagram.jsx';
import YouTube from '@/assets/icons/YouTube.jsx';
import WhatsApp from '@/assets/icons/WhatsApp.jsx';
import Mail from '@/assets/icons/Mail.jsx';
import LinkedIn from '@/assets/icons/LinkedIn.jsx';
import Location from '@/assets/icons/Location.jsx';
import GitHub from '@/assets/icons/GitHub.jsx';
import cv from '@/../cv-es.json';
import { PopupModal } from 'react-calendly';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

const notify = () =>
  toast('Email copiado al portapapeles: hectorluengo.xx@gmail.com');

const basics = cv.basics;
const rrss = basics.rrss;

export default function Hero() {
  const { t } = useTranslation();
  const [calendlyPopUp, setCalendlyPopUp] = useState(false);
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
    <ModelSection className='hero'>
      <div className='info'>
        <header>
          <h1>Héctor Guerra</h1>
          <h3>{t('cv:basics.label')}</h3>
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
        <footer className='no-print' id='social-links'>
          <div id='social-links'>
            {basics.email &&
            (
              <>
                <button onClick={notify} className='hoverr social-links'>
                  {SOCIAL_ICONS['Mail']}
                </button>
                <Toaster
                  position='bottom-right'
                  containerClassName='toasts-container'
                  toastOptions={{
                    className: 'toasts',
                  }}
                />
              </>
            )}
            {rrss.map((item, i) => {
              const Icon = SOCIAL_ICONS[item.network];
              return (
                <a key={i} className='hoverr social-links'>
                  {Icon}
                </a>
              );
            })}
          </div>
          {basics.url && (
            <a
              id='web-page'
              target='_blank'
              title='Visitar la pagina web de '
              href={basics.url}
              className='hoverr social-links'
            >
              <p className='bold'>Página Web</p>
            </a>
          )}
          {basics.calendly && (
            <>
              <button
                id='calendly'
                className='hoverr social-links'
                onClick={() => setCalendlyPopUp(true)}
              >
                <p className='bold'>Reservar Llamada</p>
              </button>
              <PopupModal
                url={basics.calendly}
                rootElement={document.getElementById('root')}
                text='Reservar Llamada'
                onModalClose={() => setCalendlyPopUp(false)}
                open={calendlyPopUp}
              />
            </>
          )}
        </footer>
      </div>
      <figure id='avatar'>
        <img
          src='https://i.ibb.co/s5smtmL/profile-pic.jpg'
          alt='Héctor Avatar'
        />
      </figure>
    </ModelSection>
  );
}
