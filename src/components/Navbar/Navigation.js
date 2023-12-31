import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Creates alternative navigation for pages that don't require full topbar action. */
const NavigationBar = () => {
  return (
    <Navbar bg="#e6e6e6" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <FontAwesomeIcon
            icon={faHeartbeat}
            style={{
              color: '#09798C',
              fontSize: '50px',
              marginLeft: '35px',
              marginTop: '15px',
              marginBottom: '18px',
              verticalAlign: 'middle'
            }}
          />
          <span
            style={{
              color: '#09798C',
              fontSize: '35px',
              padding: '6px',
              verticalAlign: 'middle'
            }}
          >
            CROWD-CARE
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;