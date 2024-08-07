import About from '@/sections/About';
import Education from '@/sections/Education';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Languages from '@/sections/Languages';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';

function App() {
  return (
    <>
      <Navbar />
      <main className="animate-fade-in-up" id='body-main'>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Languages />
      </main>
      <Footer />
    </>
  );
}

export default App;
