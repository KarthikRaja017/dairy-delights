import { useIsMobile } from '@/pages/comman';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Laura Smith',
    feedback:
      'My friend recently introduced me to your fresh milk, and I just wanted to let you know that it’s the best and tastiest milk I have ever tried!',
    image:
      'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-100x100.jpg', // Replace with the actual image
    designation: 'Michale William, CEO of Mart',
  },
  {
    name: 'John Doe',
    feedback:
      'The organic butter and milk products are amazing. I love the attention to quality and sustainability!',
    image:
      'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/author-thumb-1.jpg', // Replace with the actual image
    designation: 'John Doe, Nutritionist',
  },
  {
    name: 'Michale William',
    feedback:
      'My friend recently introduced me to your fresh milk and I just wanted to let you know that it’s the best and tastiest milk I have ...',
    image:
      'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/team-7-100x100.jpg', // Replace with the actual image
    designation: 'Ceo of Mart',
  },
];

const Testimonial = () => {
  const IsMobile = useIsMobile();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/bg-4.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 20px',
        textAlign: 'center',
        color: '#000',
        height: '410px',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '600px' }}>
          <div>
            <div style={{ display: 'flex', marginTop: '30px' }}>
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginBottom: '10px',
                  marginTop: IsMobile ? '40px' : 0,
                }}
              />
              <p
                style={{
                  fontStyle: 'italic',
                  fontSize: '16px',
                  lineHeight: '1.5',
                  margin: '30px 0 10px 10px',
                }}
              >
                {testimonials[currentIndex].feedback}
              </p>
            </div>
            <p style={{ fontWeight: 'bold', marginBottom: '0' }}>
              - {testimonials[currentIndex].name}
            </p>
            <p style={{ fontSize: '14px', color: '#555' }}>
              {testimonials[currentIndex].designation}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              display: 'inline-block',
              width: currentIndex === index ? '25px' : '20px',
              height: currentIndex === index ? '6px' : '5px',
              borderRadius: '25%',
              background: currentIndex === index ? '#000' : '#997c64',
              margin: '0 5px',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
