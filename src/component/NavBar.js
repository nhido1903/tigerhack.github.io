import Nav from 'react-bootstrap/Nav';
import '../style/NavBar.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
  <Nav className="NavBar" variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link style={{color: 'black'}} href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color: 'black'}} href="/recruiter">Recruiters</Nav.Link>
    </Nav.Item>
    <Nav.Item className = 'tab4'>
        <Nav.Link style={{color: 'black'}}  href="/contribute">Contribute</Nav.Link>
    </Nav.Item>
    <Nav.Item className = 'tab4'>
        <Nav.Link style={{color: 'black'}} href="/report">Report</Nav.Link>
    </Nav.Item>
  </Nav>
  );
}
export default NavBar;