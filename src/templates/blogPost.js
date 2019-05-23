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
  console.log(data);
  return(
    <Layout>
      <div style={{ marginTop: '56px' }}>
        <Helmet>
          <title>Blog Post Name - Keltic Media Direct</title>
        </Helmet>
        <h1>Blog Post</h1>
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

export default BlogPost;
