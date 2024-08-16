import React from 'react';
import ModelSection from '@/components/ModelSection';
import cv from '@/../cv-es.json';

const { about } = cv.basics;

export default function About() {
  return (
    <ModelSection sectionTitle='Sobre Mi' className='about'>
      <p>{about}</p>
    </ModelSection>
  );
}
