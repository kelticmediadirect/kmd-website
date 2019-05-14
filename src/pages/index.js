import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import Main from '../components/home/Main';

const Index = ({ data }) => {
  const { serviceCD, serviceRadio, servicePublish, productLists } = data;

  return (
    <Layout>
      <Helmet>
        <title>Keltic Media Direct - Home</title>
        <meta name="description" content="Irish Country and Traditional music." />
      </Helmet>
      <Main
        serviceCD={serviceCD}
        servicePublish={servicePublish}
        serviceRadio={serviceRadio}
        productLists={productLists}
      />
    </Layout>
  )
};

export const query = graphql`
  query IndexQuery {
    serviceCD: file(relativePath: { eq: "images/cd.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    serviceRadio: file(relativePath: { eq: "images/radio.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    servicePublish: file(relativePath: { eq: "images/publish.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1920) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    productLists: allContentfulProductLists {
      edges {
        node {
          newReleases {
            albumName
            artistName
            slug
            price
            image {
              resize(width: 350) {
                src
              }
            }
          }
          featuredProducts {
            albumName
            artistName
            slug
            price
            image {
              resize(width: 350) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default Index;
