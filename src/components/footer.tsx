import { useIsMobile } from '@/pages/comman';
import { Divider, Space } from 'antd';

const Footer = () => {
  const IsMobile = useIsMobile();

  return (
    <div
      style={{
        backgroundColor: 'rgb(238 225 216)',
        padding: IsMobile ? '20px' : '40px',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          maxWidth: IsMobile ? '500px' : '1200px',
          margin: '0 auto',
        }}
      >
        <Space direction="vertical" size={20}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: IsMobile ? '5px' : '20px',
            }}
          >
            <img
              src="https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/11/hancock_logo.png"
              alt="Logo"
              style={{
                width: IsMobile ? '150px' : '250px',
              }}
            />
          </div>
          <p style={{ margin: '0 0 10px' }}>
            854 Lorance Road, Rose Valley, <br />
            vellore,632 602 <br />
            Tamil Nadu.
          </p>
          <Space direction="vertical">
            <p style={{ margin: 0, fontWeight: '700' }}>Call us</p>
            <p style={{ margin: 0 }}>1800 456 7890</p>
          </Space>
        </Space>

        <Space
          direction="vertical"
          size={20}
          style={{
            marginTop: IsMobile ? 5 : '20px',
            marginLeft: IsMobile ? '60px' : 0,
            marginRight: IsMobile ? '30px' : 0,
          }}
        >
          <h3
            style={{ fontWeight: IsMobile ? '600' : '700', marginBottom: IsMobile ? '0' : '20px' }}
          >
            Useful Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a
                href="#"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                }}
              >
                About Us
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000' }}>
                Contact Us
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000' }}>
                Our Farmers
              </a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#000' }}>
                Services
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#000' }}>
                Testimonials
              </a>
            </li>
          </ul>
        </Space>

        {!IsMobile && (
          <Space direction="vertical" size={20} style={{ marginTop: '20px' }}>
            <h3 style={{ fontWeight: '700', marginBottom: '20px' }}>Newsletter</h3>
            <p style={{ margin: '0 0 10px' }}>Get latest updates and offers.</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  border: 'none',
                  padding: '10px 25px',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  backgroundColor: '#f8ba3d',
                  border: 'none',
                  padding: '10px 15px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                  alt="Send"
                  style={{ width: '16px', height: '16px' }}
                />
              </button>
            </div>
          </Space>
        )}
      </div>

      {IsMobile && (
        <>
          <Space direction="vertical" size={20} style={{ marginTop: '20px' }}>
            <h3 style={{ fontWeight: '700', marginBottom: IsMobile ? 0 : '20px' }}>Newsletter</h3>
            <p style={{ margin: '0 0 10px' }}>Get latest updates and offers.</p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: IsMobile ? 0 : '20px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                overflow: 'hidden',
                backgroundColor: '#fff',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  border: 'none',
                  padding: '10px 25px',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                style={{
                  backgroundColor: '#f8ba3d',
                  border: 'none',
                  padding: '10px 15px',
                  cursor: 'pointer',
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                  alt="Send"
                  style={{ width: '16px', height: '16px' }}
                />
              </button>
            </div>
          </Space>
        </>
      )}
      <div>
        <Divider />
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: IsMobile ? '0px' : '30px',
          marginBottom: '-35px',
          fontSize: '14px',
          color: '#777',
          borderTop: '1px solid #ddd',
          paddingTop: IsMobile ? 0 : '10px',
          backgroundImage: IsMobile
            ? 'none'
            : 'url("https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/bg-6.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          height: IsMobile ? '10vh' : '30vh',
          display: 'flex',
          flexDirection: IsMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          marginRight: IsMobile ? 0 : '100px',
          marginLeft: IsMobile ? 0 : '100px',
        }}
      >
        <p style={{ margin: 0, color: 'black' }}>© Copyright Hankcok Farm . All right reserved</p>
        {!IsMobile && <p style={{ margin: 0, color: 'black' }}>Created by Karthik Raja Y</p>}
      </div>
      {IsMobile && (
        <>
          <p style={{ margin: 0, color: 'black', marginLeft: '50px' }}>Created by Karthik Raja Y</p>
        </>
      )}
    </div>
  );
};

export default Footer;
