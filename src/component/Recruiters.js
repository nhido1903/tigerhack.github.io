import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/Recruiters.css'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState, useRef } from 'react';


function Recruiters() {

const [show, setShow] = useState(false);
const target = useRef(null);
const [show1, setShow1] = useState(false);
const target1 = useRef(null);
const [show2, setShow2] = useState(false);
const target2 = useRef(null);
const [show3, setShow3] = useState(false);
const target3 = useRef(null);
const [show4, setShow4] = useState(false);
const target4 = useRef(null);
const [show5, setShow5] = useState(false);
const target5 = useRef(null);
const [show6, setShow6] = useState(false);
const target6 = useRef(null);


  return (

<div class="container">
<div className='intro'>
            <h2>Exlore a list of recruiters, boost your career from here:</h2>
            <p>Technology, Economics, Financial, Marketing, ect . . . </p>
</div>

  <div class="row">
    <div class="col-sm">
        <div className="card1">
            <Card>
            <Card.Header>Amazon</Card.Header>
                <Card.Body>
                    <Card.Title>Vin Clare</Card.Title>
                    <Card.Text>
                    Respond Rate: 60%
                    </Card.Text>

                <Button className="primary" ref={target} onClick={() => setShow(!show)}>
                    Get email!
                </Button>
                
                <Overlay target={target.current} show={show} placement="right">
                    {(props) => (
                    <Tooltip id="b1" {...props}>
                        vinclare@amazon.com
                    </Tooltip>)}
                </Overlay>

                </Card.Body>
            </Card>
        </div>
        <div className="card2">
            <Card>
                <Card.Header>Google</Card.Header>
                <Card.Body>
                    <Card.Title>Alia Pate</Card.Title>
                    <Card.Text>
                    Respond Rate: 50%
                    </Card.Text>
                    <Button className="primary" ref={target1} onClick={() => setShow1(!show1)}>
                        Get email!
                    </Button>
                
                <Overlay target={target1.current} show={show1} placement="right">
                    {(props) => (
                    <Tooltip id="b2" {...props}>
                        aliapate@google.org
                    </Tooltip>)}
                </Overlay>  

                </Card.Body>
            </Card>
        </div>
        <div className="card3">
            <Card>
                <Card.Header>Intuit</Card.Header>
                <Card.Body>
                    <Card.Title>Erin Cole</Card.Title>
                    <Card.Text>
                    Respond Rate: 20%
                    </Card.Text>
                    <Button className="primary" ref={target2} onClick={() => setShow2(!show2)}>
                        Get email!
                    </Button>
                
                    <Overlay target={target2.current} show={show2} placement="right">
                        {(props) => (
                        <Tooltip id="b2" {...props}>
                            erincole@intuit.com
                        </Tooltip>)}
                    </Overlay> 
                </Card.Body>
            </Card>
        </div>    
        <div className="card4">
            <Card>
                <Card.Header>DePauw</Card.Header>
                <Card.Body>
                    <Card.Title>Emily Fletcher</Card.Title>
                    <Card.Text>
                    Respond Rate: 40%
                    </Card.Text>
                    <Button className="primary" ref={target3} onClick={() => setShow3(!show3)}>
                        Get email!
                    </Button>
                
                    <Overlay target={target3.current} show={show3} placement="right">
                        {(props) => (
                        <Tooltip id="b2" {...props}>
                            emily_2922@depauw.edu
                        </Tooltip>)}
                    </Overlay> 
                </Card.Body>
            </Card>
        </div>
    </div>

    <div class="col-sm">
        <div className="card1">
            <Card>
                <Card.Header>Microsoft</Card.Header>
                <Card.Body>
                    <Card.Title>Olivia Lee</Card.Title>
                    <Card.Text>
                    Respond Rate: 90%
                    </Card.Text>
                    <Button className="primary" ref={target4} onClick={() => setShow4(!show4)}>
                        Get email!
                    </Button>
                
                    <Overlay target={target4.current} show={show4} placement="right">
                        {(props) => (
                        <Tooltip id="b2" {...props}>
                            oliviaL@microsoft.org
                        </Tooltip>)}
                    </Overlay> 
                </Card.Body>
            </Card>
        </div>
        <div className="card2">
            <Card>
                <Card.Header>JP Morgan</Card.Header>
                <Card.Body>
                    <Card.Title>Erika Read</Card.Title>
                    <Card.Text>
                    Respond Rate: 41%
                    </Card.Text>
                    <Button className="primary" ref={target5} onClick={() => setShow5(!show5)}>
                        Get email!
                    </Button>
                
                    <Overlay target={target5.current} show={show5} placement="right">
                        {(props) => (
                        <Tooltip id="b2" {...props}>
                            erikRe@morgan.com
                        </Tooltip>)}
                    </Overlay> 
                </Card.Body>
            </Card>
        </div>
        <div className="card3">
            <Card>
                <Card.Header>Bloomberg</Card.Header>
                <Card.Body>
                    <Card.Title>Alicia Nguyen</Card.Title>
                    <Card.Text>
                    Respond Rate: 85%
                    </Card.Text>
                    <Button className="primary">Get Email</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="card4">
            <Card>
                <Card.Header>Purdue</Card.Header>
                <Card.Body>
                    <Card.Title>Olivia Yu</Card.Title>
                    <Card.Text>
                    Respond Rate: 10%
                    </Card.Text>
                    <Button className="primary">Get Email</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
    <div class="col-sm">
        <div className="card1">
            <Card>
                <Card.Header>Amazon</Card.Header>
                <Card.Body>
                    <Card.Title>Vin Clare</Card.Title>
                    <Card.Text>
                    Respond Rate: 60%
                    </Card.Text>
                    <Button className="primary">Get Email</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="card2">
            <Card>
                <Card.Header>Meta</Card.Header>
                <Card.Body>
                    <Card.Title>James Smith</Card.Title>
                    <Card.Text>
                    Respond Rate: 50%
                    </Card.Text>
                    <Button className="primary">Get Email</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="card3">
            <Card>
                <Card.Header>Intuit</Card.Header>
                <Card.Body>
                    <Card.Title>Erin Cole</Card.Title>
                    <Card.Text>
                    Respond Rate: 20%
                    </Card.Text>
                    <Button className="primary">Get Email</Button>
                </Card.Body>
            </Card>
        </div>
        <div className="card4">
            <Card>
                <Card.Header>WRGE</Card.Header>
                <Card.Body>
                    <Card.Title>Truc Nguyen</Card.Title>
                    <Card.Text>
                    Respond Rate: 100%
                    </Card.Text>
                    <Button className="primary">Get Email</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
  </div>
</div>

    )
}
export default Recruiters;


