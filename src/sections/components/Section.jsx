import React from 'react';

export default function Section({ children, sectionTitle, id, className }) {
  return (
    <section id={id} className={className}>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      {children}
    </section>
  );
}
