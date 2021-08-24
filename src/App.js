

import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ascii_pic from './ascii_pic.png';

import './App.css';

const App = () => (
  <Container className="p-3" xs="10" md="6">

    <Row className="justify-content-md-center">
      <h4
        className="header"
        style={{textAlign: "center"}}
      >
        TOMCRAIG.ORG
      </h4>
      <img 
        src={ascii_pic}
        style={{maxWidth: "24rem"}}
      >
      </img>
    </Row>

    <Row >
      <p>
        __ADD SPACE HERE__

        I'm a software engineer living and working in the San Francisco Bay area.  Currently I'm working at Pandora Media, building front end tools for developers.  I've worked on advertising at Pandora and done research at NASA's Jet Propulsion Laboratory for the Juno Mission.  I make a podcast about culture called Total Immersion and I've recently setup an AI botnet.  I'm passionate about technology and I'm always learning something new.

I'm currently learning how to solve a Rubik's Cube, and the lyrics to this song.
      </p>
    </Row>
  </Container>
);

export default App;

