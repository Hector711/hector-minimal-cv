import React from 'react';
import ModelSection from '@/components/ModelSection';
import cv from '@/../cv-es.json';
import Dot from '@/assets/icons/Dot';
const { education } = cv;
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t } = useTranslation();
  return (
    <ModelSection sectionTitle='Formación' className='education'>
      {/* <h1>{t("cv:basics.nickname")}</h1> */}
      <ul>
        {education.map(({ name, institution, endDate, url }, i) => {
          return (
            <li key={i}>
              <article className='job-cards'>
                <header>
                  <Dot />
                  <span>
                    <h3>{name}</h3>
                    <span>en</span>

                    <a
                      className='institutions'
                      href={url}
                      target='_blank'
                      title={`Pagina web de ${url}`}
                    >
                      <h3>{institution}</h3>
                    </a>
                  </span>
                  <time>{endDate}</time>
                </header>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
