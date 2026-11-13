import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Rail from './components/Rail.jsx';
import Hero from './components/Hero.jsx';
import HomeStyle from './components/HomeStyle.jsx';
import Portfolio from './components/Portfolio.jsx';
import Stories from './components/Stories.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  // fade each .rv block in the first time it scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.1 },
    );
    document.querySelectorAll('.rv').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Rail />
      <main>
        <Hero />
        <HomeStyle />
        <Portfolio />
        <Stories />
        <Contact />
      </main>
    </>
  );
}
