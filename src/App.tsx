import './App.css'
import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Divisor from './components/Divisor'
import Divisor2 from './components/Divisor2'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nabvar from './components/Nabvar'
import Nosotros from './components/Nosotros'
import Products from './components/Products'
import SocialMedia from './components/SocialMedia'
import Testimonials from './components/Testimonials'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar la posición de desplazamiento en cada desplazamiento
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Mostrar el botón de "Scroll hacia arriba" cuando se desplaza más allá de una cierta altura
    const scrollTop = window.pageYOffset;
    const scrollThreshold = 100;
    setIsVisible(scrollTop > scrollThreshold);
  };

  const scrollToTop = () => {
    // Desplazarse suavemente hacia arriba cuando se hace clic en el botón
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Nabvar/>
    <Hero/>
    <Products/>
    <Divisor/>
    <Nosotros/>
    <Testimonials/>
    <SocialMedia/>
    <Footer/>
    <Divisor2/>
    <Contact/>
    <>
    <a
          href="https://wa.me/51949773008"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-20 right-4 z-10 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 26 26"
          >
            <path
              fill="#4ac959"
              d="M22 6.55a12.61 12.61 0 0 0-.1-1.29a4.29 4.29 0 0 0-.37-1.08a3.66 3.66 0 0 0-.71-1a3.91 3.91 0 0 0-1-.71a4.28 4.28 0 0 0-1.08-.36A10.21 10.21 0 0 0 17.46 2H6.55a12.61 12.61 0 0 0-1.29.1a4.29 4.29 0 0 0-1.08.37a3.66 3.66 0 0 0-1 .71a3.91 3.91 0 0 0-.71 1a4.28 4.28 0 0 0-.36 1.08A10.21 10.21 0 0 0 2 6.54v10.91a12.61 12.61 0 0 0 .1 1.29a4.29 4.29 0 0 0 .37 1.08a3.66 3.66 0 0 0 .71 1a3.91 3.91 0 0 0 1 .71a4.28 4.28 0 0 0 1.08.36a10.21 10.21 0 0 0 1.28.11h10.91a12.61 12.61 0 0 0 1.29-.1a4.29 4.29 0 0 0 1.08-.37a3.66 3.66 0 0 0 1-.71a3.91 3.91 0 0 0 .71-1a4.28 4.28 0 0 0 .36-1.08a10.21 10.21 0 0 0 .11-1.28V6.55ZM12.23 19a7.12 7.12 0 0 1-3.43-.9l-3.8 1l1-3.72a7.11 7.11 0 0 1-1-3.58a7.18 7.18 0 1 1 7.23 7.2Zm0-13.13A6 6 0 0 0 7.18 15l.14.23l-.6 2.19L9 16.8l.22.13a6 6 0 0 0 3 .83a6 6 0 0 0 6-6a6 6 0 0 0-6-6Zm3.5 8.52a1.82 1.82 0 0 1-1.21.85a2.33 2.33 0 0 1-1.12-.07a8.9 8.9 0 0 1-1-.38a8 8 0 0 1-3.06-2.7a3.48 3.48 0 0 1-.73-1.85a2 2 0 0 1 .63-1.5a.65.65 0 0 1 .48-.22H10c.11 0 .26 0 .4.31s.51 1.24.56 1.33a.34.34 0 0 1 0 .31a1.14 1.14 0 0 1-.18.3c-.09.11-.19.24-.27.32s-.18.18-.08.36a5.56 5.56 0 0 0 1 1.24a5 5 0 0 0 1.44.89c.18.09.29.08.39 0s.45-.52.57-.7s.24-.15.4-.09s1.05.49 1.23.58s.29.13.34.21a1.56 1.56 0 0 1-.07.78Z"
            />
          </svg>
        </a>
        <button
          className={`fixed bottom-4 right-4 z-10 bg-gray-800 text-white px-4 py-2 rounded-md ${
            isVisible ? "visible" : "invisible"
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m7 14l5-5l5 5H7Z" />
          </svg>
        </button>
    </>
    </>

  )
}

export default App
