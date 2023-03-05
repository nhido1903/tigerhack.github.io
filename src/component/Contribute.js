import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import '../style/Contribute.css'
import ReactDOM from 'react-dom';

function contribue() {
  return (
    <div className='contr'>
      <div className='tx'>
        <h2>Contribute to the databse here!</h2>
            <p>Sharing knowledge, empowering minds!</p>
            <br/>
            <br/>
            <br/>
            <br/>
      </div>
    <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-1"
            id="inlineFormInput"
            placeholder="Recruiter's name"
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-1"
            id="inlineFormInput"
            placeholder="Recruiter's company"
          />
        </Col>
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            className="mb-1"
            id="inlineFormInput"
            placeholder="Recruiter's email"
          />
        </Col>
        <Col xs="auto">
          <Form.Check
            type="checkbox"
            id="autoSizingCheck"
            className="mb-1"
            label="Asked for consent"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-1">
            Contribute
          </Button>
        </Col>
      </Row>
    </Form>
    </div>
  );
}


export default contribue;
