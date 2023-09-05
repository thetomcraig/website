import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Helmet} from "react-helmet";
import ascii_pic from './assets/ascii_pic.png';

import './App.css';

const App = () => (
  // Header and Picture
  <Container >
    <Helmet>
      <meta charSet="utf-8" />
      <title>TomCraig.org</title>
      <link rel="canonical" href="http://tomcraig.org" />
    </Helmet>

    <Row className="justify-content-md-center">
      <h4
        className="header"
        style={{textAlign: "center", paddingBottom:30, paddingTop:20}}
      >
        TOMCRAIG.ORG
      </h4>
      <img 
        src={ascii_pic}
        alt="Tom Craig ASCII Art"
        style={{maxWidth: "24rem", paddingBottom:30}}
      >
      </img>
    </Row>

    <Row>
      <Col/>

      <Col xs={12} sm={12} md={10} lg={8} xl={6}>
        <p>
          My name is Tom Craig, and I build things.
        </p>
        <p>
            I do freelance web development.<br/>
            (You can see my profile <a href="https://www.upwork.com/freelancers/~017287fbe859ac7cbc?viewMode=1">here!</a>)
        </p>
        <p>
            I make software in my free time, too.
            (<a href="https://github.com/thetomcraig/chit">Here's one project</a>)
        </p>
        <p>
          I have done front and back end software engineering for Pandora Media, Welkin Health Ceres Imaging, and Coread.
        </p>
        <p>
          I have also been a research fellow at NASA's Jet Propulsion Laboratory for the Juno Mission.
        </p>
      </Col>

      <Col/>

    </Row>
  </Container>
);

export default App;

