import About from '@/sections/About';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Hero from '@/sections/Hero';
import Languages from '@/sections/Languages';

export default function HomePage() {
  return (
    <main className='animate-fade-in-up' id='body-main'>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Languages />
      <Experience />
    </main>
  );
}
