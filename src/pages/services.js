import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import ServicesComponent from '../components/services/ServicesComponent';

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Services - Keltic Media Direct</title>
        <meta name="description" content="Irish Country and Traditional music." />
      </Helmet>
      <ServicesComponent />
    </Layout>
  )
};

export default Services;