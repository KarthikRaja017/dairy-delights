import { useIsMobile } from '@/pages/comman';

const About = () => {
  const IsMobile = useIsMobile();

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: IsMobile ? '20px 50px' : '50px 100px',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: IsMobile
      ? 'none'
      : `url('https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/bg-5.jpg')`, // Replace with actual image URL
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundColor: IsMobile ? '#f7e3d8' : '',
  };

  const contentStyle = {
    flex: '1',
    marginLeft: IsMobile ? '0' : '50%',
  };

  const headingStyle = {
    fontSize: IsMobile ? '24px' : '32px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: IsMobile ? '10px' : '20px',
    fontFamily: 'Playfair Display',
  };

  const paragraphStyle = {
    fontSize: IsMobile ? '14px' : '16px',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: IsMobile ? '10px' : '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    fontSize: IsMobile ? '14px' : '16px',
    color: '#333',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  };

  const checkmarkStyle = {
    color: 'green',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Welcome to Our Farm</h1>
        <p style={paragraphStyle}>
          Dairy’s journey starts on the farm, and the road we travel demonstrates our unwavering
          commitment to sustainable nutrition, as our farmers provide lasting and meaningful
          nourishment to people, the planet, and our communities, both urban and rural.
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span> Our delicious foods provide a unique nutrient
            package that can help people.
          </li>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span> Dairy is a powerful part of the livelihoods of
            individuals, families, and communities.
          </li>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span> Sustainable agriculture practices that reduce our
            environmental footprint.
          </li>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span> While taking care of our greatest resource, our
            animals.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
