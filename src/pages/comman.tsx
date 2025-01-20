import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';


export const getIsMobile = () => window.innerWidth <= 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export const PageHelmet = ({
  title = 'Hankcok Farm',
  vendor = {},
  // description = 'Fresh Flowers',
}) => {
  return (
    <Helmet>
      <title>
        {title}
        {/* {vendor?.fullName ? ` | ${vendor?.fullName}` : ''} */}
      </title>
      {/* <meta name="description" content={description} /> */}
      {/* <link rel="icon" type="image/png" href={'/logo.png'} /> */}
    </Helmet>
  );
};
