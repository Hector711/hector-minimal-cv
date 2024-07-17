import React from 'react';
import Section from '@/sections/components/Section';
import cv from '@/../cv-es.json';

const { about } = cv.basics;

export default function About() {
  return (
    <Section sectionTitle='About'>
      <p>{about}</p>
    </Section>
  );
}
