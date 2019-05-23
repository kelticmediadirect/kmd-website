import React from 'react';
import { Link } from 'gatsby';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const BlogMain = ({ data }) => {
  console.log(data);
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <h1>News</h1>
        </Col>
      </Row>
      <Row>
        {data.blogPosts.edges.map(({ node }) => (
          <Col key={node.name}>
            <h2>{node.name}</h2>
            <p>{node.date.split('T')[0]}</p>
            <Link to={`/blog/${node.slug}`}>Read More...</Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogMain;
