import { ModelSectionProps } from '@/types';

export default function ModelSection({
  children,
  title,
  id,
}: ModelSectionProps) {
  return (
    <section className='model' id={id}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
