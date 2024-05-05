import React from 'react';
import Section from '@/sections/components/Section';

export default function Hero() {
  return (
    <Section>
      <div class='container'>
        <div class='info'>
          <h1>NAME</h1>
          <h2>full</h2>
          <span>
            <div>
            </div>
            <div>
              city,region
            </div>
          </span>
          <footer id='print'>
            <p>Email: </p>
            <p>Telef.: </p>
            <p>LinkedIn: </p>
            <p>GitHub: </p>
          </footer>
          <footer id='no-print'>
            <div id='profiles'>
              {/* {email && (
                <a
                  href={'mailto'}
                  title={'Enviar un correo electrónico a nickname al correo email'}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  icon
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phone}`}
                  title={`Llamar por teléfono a ${nickname} al número ${phone}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  icon
                </a>
              )}
              {profiles.map(({ network, url }) => {
                const Icon = SOCIAL_ICONS[network];

                return (
                  <a
                    href={url}
                    title={`Visitar el perfil de ${nickname} en ${network}`}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon />
                  </a>
                );
              })} */}
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
        <figure>
          {/* <Image id='img' src={image} width='140' height='140' alt={name} /> */}
        </figure>
      </div>
    </Section>
  );
}
