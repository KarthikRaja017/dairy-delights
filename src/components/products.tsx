import { useIsMobile } from '@/pages/comman';
import { Button } from 'antd';

const products = [
  {
    title: 'Butter',
    description: 'In a centrifuge, the fat in the milk is separated as ...',
    image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-4-1.jpg', // Replace with the actual image
  },
  {
    title: 'Butter Milk',
    description: 'Skimmed milk is acidified to make buttermilk. The milk thickens slightly ...',
    image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-5-1.jpg', // Replace with the actual image
  },
  {
    title: 'Cheese',
    description: 'Cheese can ripen in as little as four weeks or as ...',
    image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-6-1.jpg', // Replace with the actual image
  },
  {
    title: 'Condensed Milk',
    description: 'Our condensed milk is used to make caramel, sweets, and cakes, ...',
    image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-7-1.jpg', // Replace with the actual image
  },
];

const handleMouseEnter = (e) => {
  e.currentTarget.style.transform = 'rotate(25deg)';
  const outline = e.currentTarget.nextElementSibling;
  if (outline) {
    outline.style.transform = 'scale(1)';
  }
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = 'rotate(0)';
  const outline = e.currentTarget.nextElementSibling;
  if (outline) {
    outline.style.transform = 'scale(0)';
  }
};

const ProductSection = () => {
  const IsMobile = useIsMobile();
  const containerStyle = {
    display: 'inline-block',
    position: 'relative',
    margin: IsMobile ? '10px 20px' : '20px',
    textAlign: IsMobile ? 'center' : 'left',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: IsMobile ? '100px' : '150px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.5)',
    transform: IsMobile ? 'scale(0.9)' : 'scale(1)',
  };
  const outlineStyle = {
    position: 'absolute',
    top: '-5px',
    left: '-5px',
    width: IsMobile ? '110px' : '161px',
    height: IsMobile ? '110px' : '161px',
    borderRadius: '50%',
    border: '2px solid #FFD700',
    boxSizing: 'border-box',
    pointerEvents: 'none',
    transition: 'transform 0.3s ease',
    transform: 'scale(0)',
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          textAlign: 'center',
          padding: IsMobile ? '20px' : '50px',
          backgroundColor: '#f9f5ee',
        }}
      >
        <h2
          style={{
            fontSize: IsMobile ? '24px' : '26px',
            fontWeight: 'bold',
            marginBottom: '10px',
            fontFamily: 'Playfair Display',
          }}
        >
          What We Offer
        </h2>
        <p
          style={{
            fontSize: IsMobile ? '14px' : '15px',
            color: '#666',
            margin: IsMobile ? '0 10px' : '0  200px',
          }}
        >
          When mankind realized the nutritional advantages of cow, goat, and sheep milk thousands of
          years ago, we were already consuming it. People drink milk, eat bread with butter oil, and
          drink tea with thick cream. We will do it for you.
        </p>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '40px',
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                width: IsMobile ? '140px' : '240px',
                textAlign: 'center',
                borderRadius: '10%',
                overflow: 'hidden',
              }}
            >
              <div style={containerStyle}>
                <img
                  alt={product.title}
                  src={product.image}
                  style={imageStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                <div style={outlineStyle}></div>
              </div>
              <h3
                style={{
                  fontWeight: 'bold',
                  fontSize: IsMobile ? '14px' : '16px',
                  marginTop: '20px',
                  fontFamily: 'Playfair Display',
                }}
              >
                {product.title}
              </h3>
              <p style={{ color: '#666', fontSize: IsMobile ? '12px' : '14px' }}>
                {product.description}
              </p>
            </div>
          ))}
        </div>
        <Button
          type="primary"
          style={{
            marginTop: IsMobile ? '20px' : '30px',
            backgroundColor: '#f9c100',
            color: '#000',
            border: 'none',
            padding: '10px 20px',
            fontSize: '16px',
            fontFamily: 'Roboto',
          }}
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default ProductSection;
