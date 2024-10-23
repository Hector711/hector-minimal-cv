// import { useState } from 'react';
import ModelSection from '@/components/ModelSection';
import XIcon from '@/icons/XIcon';
import InstagramIcon from '@/icons/InstagramIcon';
import YouTubeIcon from '@/icons/YouTubeIcon';
import WhatsAppIcon from '@/icons/WhatsAppIcon';
import MailIcon from '@/icons/MailIcon';
import LinkedInIcon from '@/icons/LinkedInIcon';
import LocationIcon from '@/icons/LocationIcon';
import GitHubIcon from '@/icons/GitHubIcon';
import toast, { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { Basics, SocialIconsType, ProfileType } from '@/types';
import CalendlyButton from '@/components/CalendlyWidget';

export default function Hero() {
  const { t, i18n } = useTranslation();
  
  const notify = () =>
    toast(`Email copiado al portapapeles: ${basicsData.email}`);

  const language = i18n.language;

  const profilesObject = i18n.getResourceBundle(language, 'profiles');
  const profiles = Object.values(profilesObject);

  const basics = i18n.getResourceBundle(language, 'basics');
  const basicsData = Object.values(basics)[0] as Basics;
  console.log({basicsData});

  const SOCIAL_ICONS: SocialIconsType = {
    Instagram: <InstagramIcon />,
    YouTube: <YouTubeIcon />,
    WhatsApp: <WhatsAppIcon />,
    Mail: <MailIcon />,
    LinkedIn: <LinkedInIcon />,
    GitHub: <GitHubIcon />,
    X: <XIcon />,
  };
  return (
    <ModelSection id='hero'>
      <div className='info '>
        <header>
          <h1>{basicsData.name}</h1>
          <h3>{basicsData.label}</h3>
        </header>
        <span>
          <LocationIcon />
          <h5>
            {basicsData.city}, {basicsData.country}.
          </h5>
        </span>
        <footer id='social-links'>
          <div id='social-links-container'>
            {t('basics:email') && (
              <>
                <button onClick={notify} className='social-links'>
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
            {profiles.map((item, i) => {
              const profile = item as ProfileType;
              const Icon =
                SOCIAL_ICONS[profile.network as keyof SocialIconsType];
              return (
                <a
                  key={i}
                  href={profile.url ?? '#'}
                  className='social-links'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {Icon}
                </a>
              );
            })}
          </div>
          {basicsData.web_url && (
            <a
              id='web-page'
              target='_blank'
              title={`Visitar la pagina web de ${basicsData.name}`}
              href={basicsData.web_url ?? '#'}
            >
              <p>{t('translations:web_page')}</p>
            </a>
          )}
          {basicsData.calendly_url && (
            <CalendlyButton>
              <p>Reservar Llamada</p>
            </CalendlyButton>
          )}
        </footer>
      </div>
      <figure id='avatar'>
        <img src={basicsData.image} alt='Héctor Avatar' />
      </figure>
    </ModelSection>
  );
}
