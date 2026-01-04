'use client'

import App from '@/components/band/App';
import Main from '@/components/main/App';
import NavBar from '@/components/nav/App';
import About from '@/components/about/App';
import Projects from '@/components/project/App';

export default function Home() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <NavBar />
      </div>
      <section id='home' style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 0 }}>
          <App />
        </div>
        
        <div style={{ margin: '10%', position: 'absolute', width: '50%', top: 0, right: 0, bottom: 0, left: 0, zIndex: 50 }}>
          <Main />
        </div>
      </section>

      <section id='about' style={{ margin: 'auto', marginTop: '-5%', width: '98%', position: 'relative', zIndex: 100 }}>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>
    </>
  );
}
