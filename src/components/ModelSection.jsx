import React from 'react';

export default function ModelSection({
  children,
  title,
  id,
}) {
  return (
    <section className='model' id={id}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
