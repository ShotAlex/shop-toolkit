import React from 'react';
import {HelmetProvider, Helmet} from 'react-helmet-async';


const Seo = ({title}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>App | {title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;