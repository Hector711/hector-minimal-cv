import React from 'react';

export default function Section({ children, sectionTitle, id, className }) {
  return (
    <section id={id} className={className}>
      {sectionTitle && <h3>{sectionTitle}</h3>}
      {children}
    </section>
  );
}
