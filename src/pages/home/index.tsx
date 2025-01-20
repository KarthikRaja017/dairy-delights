import About from '@/components/about';
import Footer from '@/components/footer';
import CustomHeader from '@/components/header';
import OfferSection from '@/components/offerSection';
import ProductSection from '@/components/products';
import Reviews from '@/components/reviews';
import { UpOutlined } from '@ant-design/icons'; // Import icons
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../comman';
import './styles.css';
const Home = () => {
  const isMobile = useIsMobile();

  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 },
    );

    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* <PageHelmet/> */}
      <div style={{ width: '100%', height: '100vh' }}>
        <div
          className={`fade-in ${visibleSections.includes(0) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[0] = el)}
        >
          <CustomHeader />
        </div>

        <div
          className={`fade-in ${visibleSections.includes(1) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[1] = el)}
        >
          <About />
        </div>

        {isMobile ? (
          <ProductSection />
        ) : (
          <div
            className={`fade-in ${visibleSections.includes(2) ? 'visible' : ''}`}
            ref={(el) => (sectionRefs.current[2] = el)}
          >
            <ProductSection />
          </div>
        )}

        <div
          className={`fade-in ${visibleSections.includes(3) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[3] = el)}
        >
          <OfferSection />
        </div>

        <div
          className={`fade-in ${visibleSections.includes(4) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[4] = el)}
        >
          <Reviews />
        </div>

        <div
          className={`fade-in ${visibleSections.includes(5) ? 'visible' : ''}`}
          ref={(el) => (sectionRefs.current[5] = el)}
        >
          <Footer />
        </div>

        {showScrollToTop && (
          <div className="scroll-to-top" onClick={scrollToTop}>
            <UpOutlined style={{ fontSize: '18px', color: 'white' }} />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
