import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import ShopList from '../components/shop/ShopList';

const Shop = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Shop - Keltic Media Direct</title>
        <meta name="description" content="Irish Country and Traditional music." />
      </Helmet>
      <ShopList data={data} />
    </Layout>
  )
};

export const query = graphql`
  query ShopQuery {
    allContentfulProduct {
      edges {
        node {
          albumName
          artistName
          slug
          price
          tags
          trackList {
            trackList
          }
          image {
            resize(width: 350) {
              src
            }
          }
        }
      }
    }
  }
`;

export default Shop;
