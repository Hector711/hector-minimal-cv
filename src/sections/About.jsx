import React from 'react';
import ModelSection from '@/sections/components/ModelSection';
import cv from '@/../cv-es.json';

const { about } = cv.basics;

export default function About() {
  return (
    <ModelSection sectionTitle='About' className='about'>
      <p>{about}</p>
    </ModelSection>
  );
}
