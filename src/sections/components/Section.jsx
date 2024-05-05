import React from 'react';

export default function Section({ children, sectionTitle }) {
  return (
    <section>
      <h2>{sectionTitle}</h2>
      {children}
    </section>
  );
}
