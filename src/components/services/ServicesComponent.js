import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

import styles from './ServicesComponent.module.css';

const ServicesComponent = () => {
  return (
    <div style={{ marginTop: '56px'}}>
      <Container>
          <Row>
            <Col lg={{ offset: 3, size: 6 }}>
              <h1>Manufacturing</h1>
              <hr className="bg-primary" />
              <p>CD/DVD duplication and replication services can be obtained from <a href="http://mainstreetduplication.com/" target="_blank">Main Street Duplication</a>.</p>
              <ul className={`${styles.list}`}>
                <li>CD Duplication/Replication</li>
                <li>DVD Duplication/Replication</li>
                <li>Print services covering all your needs for a professional presentation of you, your products and events.</li>
              </ul>
            </Col>
            <Col lg={{ offset: 3, size: 6 }}>
              <h1>Publishing</h1>
              <hr className="bg-primary" />
              <p>The publishing and royalties service includes the following but the artist must agree and sign the authorisation forms to set up and administer the accounts on their behalf. Official application forms are available on request.</p>
              <ul className={`${styles.list}`}>
                <li>Membership applications to IMRO. RAAP, PPI, PPS. MCPS, PRO</li>
                <li>Register the artists musical works with the above</li>
                <li>Application for ISRC codes</li>
                <li>Assigning catalogue numbers, bar codes, UPC and etc to all musical works</li>
                <li>Submission of live performances and broadcasts(including Ireland, UK and International)</li>
                <li>Tours and Residencies submissions</li>
                <li>Application for all licences for Audio and Visual Productions</li>
                <li>Updating and filing all the above material on the artists behalf</li>
                <li>Monetization: itunes, Tunecore, You Tube and etc</li>
                <li>All royalties will be lodged in the Artists bank accounts</li>
              </ul>
            </Col>
            <Col lg={{ offset: 3, size: 6 }}>
              <h1>Promotion</h1>
              <hr className="bg-primary" />
              <p>Radio and Television promotion includes the following.</p>
              <ul className={`${styles.list}`}>
                <li>Release all musical works/new singles/albums to Radio Stations</li>
                <li>Post hard copy of Albums/Singles to DJ's</li>
                <li>Compose Press Releases and updated Bio</li>
                <li>Email MP3's/Wav Files etc to all DJ's</li>
                <li>Send MP4/MOV etc to their requested TV Channels</li>
                <li>Arrange/contact DJs for interviews</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default ServicesComponent;
