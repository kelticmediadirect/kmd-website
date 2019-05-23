import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import BlogMain from '../components/blog/BlogMain';

const Blog = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog - Keltic Media Direct</title>
        <meta name="description" content="Irish Country and Traditional music." />
      </Helmet>
      <BlogMain data={data} />
    </Layout>
  );
};

export const query = graphql`
  query BlogQuery {
    blogPosts: allContentfulBlogPost {
      edges {
        node {
          name
          slug
          date
        }
      }
    }
  }
`;

export default Blog;