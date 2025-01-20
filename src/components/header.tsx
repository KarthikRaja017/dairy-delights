import { useIsMobile } from '@/pages/comman';
import {
  LeftCircleFilled,
  MailOutlined,
  MenuOutlined,
  PhoneOutlined,
  RightCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Drawer, Menu } from 'antd';
import { useEffect, useState } from 'react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedKey, setSelectedKey] = useState('home');
  const [drawerVisible, setDrawerVisible] = useState(false);
  const IsMobile = useIsMobile();

  const banners = [
    {
      title: 'Milk And Fresh Products',
      subtitle:
        'Dairy producers worldwide face similar challenges around animal welfare, farm profitability, food safety and work efficiency.',
      buttonText: 'VIEW ALL PRODUCTS',
      image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-4.jpg',
    },
    {
      title: 'Organic and Fresh Milk',
      subtitle: 'Experience the purity of organic milk sourced directly from farms.',
      buttonText: 'SHOP NOW',
      image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-5.jpg',
    },
    {
      title: 'Sustainable Farming Practices',
      subtitle: 'We ensure our farms follow the best practices for sustainability.',
      buttonText: 'LEARN MORE',
      image: 'https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/image-6.jpg',
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const menuItems = [
    { label: 'HOME', key: 'home' },
    { label: 'ABOUT US', key: 'about-us' },
    { label: 'PRODUCTS', key: 'products' },
    { label: 'SERVICES', key: 'services' },
    { label: 'CONTACT US', key: 'contact-us' },
  ];

  const headerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    padding: '10px 0',
    fontFamily: "'Roboto', sans-serif",
  };

  const topBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 20px',
    fontSize: '12px',
  };

  const menuStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderBottom: 'none',
  };

  const searchIconStyle = {
    fontSize: '20px',
    marginLeft: '20px',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        background: `url(${banners[currentSlide].image}) no-repeat center center/cover`,
        transition: 'background 0.5s ease-in-out',
      }}
    >
      <div style={headerStyle}>
        <div style={topBarStyle}>
          {!IsMobile && <div>We are serving whole Tamil Nadu Locality</div>}
          {IsMobile && (
            <div>
              <PhoneOutlined /> + (1800) 456 7890
            </div>
          )}
          <div style={{ display: 'flex', gap: '15px', color: '#fff' }}>
            {!IsMobile && (
              <div>
                <PhoneOutlined /> + (1800) 456 7890
              </div>
            )}
            <MailOutlined /> info@example.com
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
          }}
        >
          <div>
            <img
              src="https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/11/light-logo.png"
              alt="Logo"
              style={{ width: '200px' }}
            />
          </div>

          {!IsMobile ? (
            <Menu
              mode="horizontal"
              items={menuItems}
              style={menuStyle}
              theme="dark"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
            />
          ) : (
            <MenuOutlined
              style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }}
              onClick={showDrawer}
            />
          )}

          <SearchOutlined style={searchIconStyle} />
        </div>
      </div>

      <div
        style={{ position: 'relative', height: IsMobile ? '40vh' : '100vh', overflow: 'hidden' }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: `${(index - currentSlide) * 100}%`,
              width: '100%',
              height: '100%',
              transition: 'left 0.5s ease-in-out',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: IsMobile ? '20%' : '30%',
                left: '10%',
                color: '#fff',
                textAlign: IsMobile ? 'center' : 'left',
              }}
            >
              <h1
                style={{
                  fontSize: IsMobile ? '30px' : '58px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                {banner.title}
              </h1>
              <p style={{ fontSize: IsMobile ? '14px' : '18px', marginBottom: '20px' }}>
                {banner.subtitle}
              </p>
              <Button type="primary" style={{ backgroundColor: 'white', color: 'black' }}>
                {banner.buttonText}
              </Button>
            </div>
          </div>
        ))}

        <div
          style={{
            position: 'absolute',
            top: IsMobile ? '30%' : '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
          }}
          onClick={handlePrev}
        >
          <LeftCircleFilled style={{ fontSize: IsMobile ? '20px' : '30px', color: 'white' }} />
        </div>
        <div
          style={{
            position: 'absolute',
            top: IsMobile ? '30%' : '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
          }}
          onClick={handleNext}
        >
          <RightCircleFilled style={{ fontSize: IsMobile ? '20px' : '30px', color: 'white' }} />
        </div>
      </div>

      <Drawer
        placement="left"
        title={
          <>
            <div style={{ textAlign: 'center', padding: '0px 0' }}>
              <img
                src="https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/11/light-logo.png"
                alt="Logo"
                style={{ width: '200px', marginBottom: '10px' }}
              />
            </div>
          </>
        }
        closable={false}
        onClose={onClose}
        visible={drawerVisible}
        width={300}
        style={{ backgroundColor: 'black' }}
      >
        <Menu
          mode="inline"
          items={menuItems}
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          style={{ backgroundColor: 'black', color: 'white' }}
          theme="dark"
        />
      </Drawer>
    </div>
  );
};

export default App;
