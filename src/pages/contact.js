import React from 'react';
import Helmet from 'react-helmet';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap';

import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - Keltic Media Direct</title>
        <meta name="description" content="Irish Country and Traditional music." />
      </Helmet>
      <Container style={{ marginTop: '56px'}} className="mb-5">
        <Row className="py-5">
          <Col className="text-center" md={{ size: 6, offset: 3 }}>
            <h2>Contact</h2>
            <hr />
            <Form action={`https://formspree.io/kelticmediadirect@gmail.com`} method="POST">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input type="textarea" name="message" id="message" />
              </FormGroup>
              <Input type="text" name="_gotcha" style={{ display: 'none' }}/>
              <Button className="mt-5" color="primary" size="lg" block>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};

export default Contact;