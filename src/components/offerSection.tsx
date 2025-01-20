import { useIsMobile } from '@/pages/comman';

const OfferSection = () => {
  const IsMobile = useIsMobile();

  return (
    <div style={{ textAlign: 'center', padding: IsMobile ? '20px 50px' : '50px', backgroundColor: '#fff' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: IsMobile ? '20px' : '30px',
          flexWrap: 'wrap',
          marginLeft: IsMobile ? '0' : '150px',
        }}
      >
        {[
          {
            title: 'Farm Responsibility',
            description:
              'They should be concerned about their carbon footprint, biodiversity, and animal welfare.',
          },
          {
            title: 'Organic Grass Butter',
            description: 'We are dedicated to producing butter of the highest possible quality.',
          },
          {
            title: 'Whole Milk Gallon',
            description: 'Hancock is the world’s first 100 percent grass-fed organic milk brand.',
          },
        ].map((offer, index) => (
          <div
            key={index}
            style={{
              width: IsMobile ? '250px' : '300px',
              textAlign: 'left',
              marginRight: IsMobile ? '0px' : '50px',
            }}
          >
            <h3
              style={{
                fontWeight: 'bold',
                marginBottom: '10px',
                fontSize: IsMobile ? '15px' : '20px',
              }}
            >
              {offer.title}
            </h3>
            <p style={{ color: '#666', marginRight: IsMobile ? 0 : '20px' }}>{offer.description}</p>
            <a
              href="#"
              style={{ color: '#ceaf33', fontWeight: 'bold', textDecoration: 'underline' }}
            >
              Find Out More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
