import React from 'react';
import { graphql } from 'gatsby';
import {
  Container,
  Row,
  Col,
  Button
} from 'reactstrap';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import ImageBlock from '../components/product/ImageBlock';

const Product = ({ data }) => {
  // console.log(data);
  const {
    albumName,
    artistName,
    price,
    trackList,
    image,
    contentful_id,
    slug
  } = data.contentfulProduct;

  return (
    <Layout>
    <div style={{ marginTop: '56px'}}>
    <Helmet>
      <title>{artistName} {albumName} - Keltic Media Direct</title>
    </Helmet>
    <Container className="py-5">
      <Row>
        <Col md={5}>
          <ImageBlock image={image}/>
        </Col>
        <Col md={7}>
        <h2>{albumName}</h2>
        <h2>{artistName}</h2>
        <div className="d-flex my-3">
          <h4 className="mr-4">£{price}</h4>
          <a
            className="snipcart-add-item"
            href="#"
            data-item-id={contentful_id}
            data-item-name={`${artistName} - ${albumName}`}
            data-item-price={price}
            data-item-url={`/products/${slug}`}
          >
            <Button color="success">Add To Cart</Button>
          </a>
        </div>
        <hr />
        {trackList && (
          <div
            dangerouslySetInnerHTML={{
              __html: trackList.childMarkdownRemark.html
            }}
          />
        )}
        </Col>
      </Row>
    </Container>
    </div>
    </Layout>
  );
};

export const query = graphql `
  query ProductQuery($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      contentful_id
      slug
      albumName
      artistName
      price
      trackList {
        childMarkdownRemark {
          html
        }
      }
      image {
        resize(width: 900) {
          src
        }
      }
    }
  }
`;

export default Product;
