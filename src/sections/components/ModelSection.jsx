import React from 'react';

export default function ModelSection({
  children,
  sectionTitle,
  className,
}) {
  return (
    <section id='section-model' className={className}>
      {sectionTitle && <h2>{sectionTitle}</h2>}
      <div id='section-main' className={className}>{children}</div>
    </section>
  );
}

