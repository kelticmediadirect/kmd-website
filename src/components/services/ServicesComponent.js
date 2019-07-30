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
            <p>The following are the services available to clients from Emerald Isle Entertainments.</p>
            <ul className={`${styles.list}`}>
              <li>Prices or fees to be discussed at the meeting which will be arranged with the artist.</li>
              <li>All information will be discussed and available to the artist/artists at that meeting.</li>
              <li>Emerald Isle Entertainments will contact the client on receiving a brief description of their enquiry by email to the email addresses below. A link to their social media platforms or profiles is a requirement. Contact will not be made unless we receive these.</li>
            </ul>
          </Col>
          <Col lg={{ offset: 3, size: 6 }}>
            <h1>Manufacturing</h1>
            <hr className="bg-primary" />
            <p>A recording of material and images will be sent to a reputable business and they arrange the artwork, master a copy, duplicate the amount requested, and we get the finished product to the artist on receipt of payment to our account. Artists must sign off on the proof which we will forward for your attention.</p>
          </Col>
          <Col lg={{ offset: 3, size: 6 }}>
            <h1>Publishing/Royalties</h1>
            <hr className="bg-primary" />
            <p>This service will include the following, but the artist must agree and sign the authorisation forms for Emerald Isle Entertainments to set up and administer the accounts on their behalf. We have all the official application forms available at your request.</p>
            <ul className={`${styles.list}`}>
              <li>Membership applications to IMRO. RAAP, PPI, PPS. MCPS, PRO.</li>
              <li>Register the artists musical works with the above.</li>
              <li>Application for ISRC codes.</li>
              <li>Assigning catalogue numbers, bar codes, UPC and etc to all musical works.</li>
              <li>Submission of live performances and broadcasts(including Ireland, UK and International).</li>
              <li>Tours and Residencies submissions.</li>
              <li>Application for all licences for Audio and Visual Productions.</li>
              <li>Updating and filing all the above material on the artists behalf.</li>
              <li>Monetization: itunes, Tunecore, You Tube and etc.</li>
              <li>*All royalties will be lodged in the Artists bank accounts by the platforms. All artists must register their bank account details with the above platforms.</li>
            </ul>
          </Col>
          <Col lg={{ offset: 3, size: 6 }}>
            <h1>Radio Promotion</h1>
            <hr className="bg-primary" />
            <p>Radio promotion includes the following.</p>
            <ul className={`${styles.list}`}>
              <li>Release all musical works/new singles/albums to Radio Stations</li>
              <li>Post hard copy of Music/Albums/Singles to DJ's</li>
              <li>Compose Press Releases and updated Bio</li>
              <li>Email MP3's/Wav Files etc to all DJ's</li>
              <li>Arrange/contact DJs for interviews. We can make the contact on the clients behalf.</li>
            </ul>
            <p>Keltic Media Direct will not be responsible for elevating any artist and therefore we cannot promise airplay/tv appearances/interviews for any artist. The interview would be entirely at the Radio/Radio Presenters/DJ's or TV's discretion.</p>
          </Col>
          <Col lg={{ offset: 3, size: 6 }}>
            <h1>TV Promotion</h1>
            <hr className="bg-primary" />
            <p>Television promotion includes the following.</p>
            <ul className={`${styles.list}`}>
              <li>Send MP4/MOV etc to their requested TV Channels. An MP4 in 10/80 HD by We Transfer is required. We do not accept any files through dropbox.</li>
              <li>Compose Bio. All information for bio to be forwarded by the artist to Emerald Isle Entertainment.</li>
            </ul>
            <p>Keltic Media Direct will not be responsible for elevating any artist and therefore we cannot promise airplay/tv appearances/interviews for any artist. The interview would be entirely at the Radio/Radio Presenters/DJ's or TV's discretion.</p>
          </Col>
          <Col lg={{ offset: 3, size: 6 }}>
            <h1>Management/Agency</h1>
            <hr className="bg-primary" />
            <p>Emerald Isle Entertainments can discuss the management/agency and fees with artists at a meeting. It includes Ireland and UK venues.</p>
          </Col>
          <Col lg={{ offset: 3, size: 6 }}>
            <h1>Backing Tracks</h1>
            <hr className="bg-primary" />
            <p>We will upload a link of approx 15 seconds of a recorded copy of a backing track which can be then sold from the website. The full backing track will be forwarded in the format requested - mp3/audio file/midi file on receiving payment to our account.</p>
            <p>We do have a copy of a manager's contract. That particular contract would only be used if 'Emerald Isle Entertainments' were to take up a managerial role.</p>
            <p>All correspondence on the website to be addressed to the following email addresses:emeraldislepromo@gmail.com / emeraldisleents@gmail.com</p>
          </Col>
        </Row>
          {/* <Row>
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
          </Row> */}
        </Container>
      </div>
  );
};

export default ServicesComponent;
