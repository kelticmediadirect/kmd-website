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

const BlogPost = ({ data }) => {
  
  const { name, date, body} = data.contentfulBlogPost;
  console.log(name, date);
  return(
    <Layout>
      <Helmet>
        <title>Blog Post Name - Keltic Media Direct</title>
      </Helmet>
      <div style={{ marginTop: '56px' }}>
        <Container className="pt-5 mb-5">
          <Row>
            <Col>
              <h1>{name}</h1>
              <p>{date.split('T')[0]}</p>
              <hr />
              
              <div
                className="blogPostMd mt-5"
                dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export const query = graphql `
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      contentful_id
      slug
      name
      date
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default BlogPost;
