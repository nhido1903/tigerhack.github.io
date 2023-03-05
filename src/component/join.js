import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../style/join.css';


function join(){
    return (
        
        <div className='report'>

            <h1>You can sign up as the president of your organization or individually</h1>
            <br/>
            <br/>
            <br/>
            <br/>

         <Form>
            <Row className="mb-2">
            <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label> 
            <Col sm="12">
            <Form.Control type="name" placeholder="Name" />
            </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="userID">
            <Form.Label>UserID</Form.Label>
            <Col sm="10">
            <Form.Control type="userID" placeholder="UserID" />
            </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="password">
            <Form.Label>PassWord</Form.Label>
            <Col sm="10">
            <Form.Control type="password" placeholder="PassWord" />
            </Col>
            </Form.Group>

            <Form.Group as={Col} controlId="field">
            <Form.Label>Field</Form.Label>
                <Col sm="10">
                <Form.Select>
                    <option>Select Field</option>
                    <option value="1">Technology</option>
                    <option value="2">Marketing</option>
                    <option value="3">Finance</option>
                    </Form.Select>
                </Col>
            </Form.Group>
        </Row>

        <Row className="mb-2">
            <Form.Group as={Col} controlId="name">
            <Form.Label>Sign up as</Form.Label>
                <Col sm="15">
                <Form.Select>
                    <option>Select option</option>
                    <option value="1">Organization</option>
                    <option value="2">Individual</option>
                    </Form.Select>
                </Col>
            </Form.Group>
                <Form.Group as={Col} controlId="recruiteremail">
                    <Form.Label>Email</Form.Label>
                    <Col sm="20">
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
            </Row>

            <Row className="mb-4">
            <Button style={{color:'black'}} variant="primary" type="submit" >
                Apply
            </Button>
            </Row>

   </Form>
     </div>
    )
}

export default join;





    // <Form classname="report">

    //       <Row className="mb-3">
    //     <Form.Group as={Col} controlId="formGridEmail">
    //     <Form.Label>
    //       Name
    //     </Form.Label>
    //       <Form.Control type="name"/>
    // </Form.Group>

    // <Form.Group as={Row} className="mb-3" controlId="UserID">
    //     <Form.Label column sm="2">
    //       UserID
    //     </Form.Label>
    //     <Col sm="5">
    //       <Form.Control type="password"/>
    //     </Col>
    // </Form.Group>
      

    // <Form.Group as={Row} className="mb-3" controlId="field">
    //     <Form.Label column sm="2">
    //     Recruiter's field
    //     </Form.Label>
    //     <Col sm="2">
    //     <Form.Select>
    //         <option>Select Field</option>
    //         <option value="1">Technology</option>
    //         <option value="2">Marketing</option>
    //         <option value="3">Finance</option>
    //         </Form.Select>
    //     </Col>
    // </Form.Group>

    // <Form.Group as={Row} className="mb-3" controlId="recruiterEmail">
    //     <Form.Label column sm="2">
    //       Recruiter's email
    //     </Form.Label>
    //     <Col sm="5">
    //       <Form.Control type="email"/>
    //     </Col>
    // </Form.Group>

    // <Form.Group as={Row} className="mb-3" controlId="reponse">
        // <Form.Label column sm="2">
        // Report Result
        // </Form.Label>
        // <Col sm="2">
        // <Form.Select>
        //     <option>Responded?</option>
        //     <option value="1">Yes</option>
        //     <option value="2">No</option>
        //     </Form.Select>
    //     </Col>
    // </Form.Group>

    // <Form.Group as={Row} className="mb-3" controlId="time">
    //     <Form.Label column sm="2">
    //     Respond Time
    //     </Form.Label>
    //     <Col sm="2">
    //     <Form.Select>
            // <option>How long did you wait?</option>
            // <option value="1">Within 1 week</option>
            // <option value="2">Within 2 weeks</option>
            // <option value="2">Within 1 month</option>
            // <option value="2">Within 6 weeks</option>
            // <option value="2">More than 2 months</option>
    //     </Form.Select>
    //     </Col>
    // </Form.Group>

    // <Form.Group as={Row} className="mb-3" controlId="inrerview">
    //     <Form.Label column sm="2">
    //     Interview result
    //     </Form.Label>
    //     <Col sm="3">
    //     <Form.Select>
    //         <option>Did you get your interview scheduled?</option>
//     //         <option value="1">Yes</option>
//     //         <option value="2">No</option>
//     //         </Form.Select>
//     //     </Col>
//     // </Form.Group>

//     // </Form>


// <div classname="report">
//         <Form>
//         <Row className="mb-3">
//             <Form.Group as={Col} controlId="name">
//             <Form.Label  >Name</Form.Label> 
//             <Col sm="6">
//             <Form.Control type="email" placeholder="Name" />
//             </Col>
//             </Form.Group>

//             <Form.Group as={Col} controlId="userID">
//             <Form.Label>UserID</Form.Label>
//             <Col sm="6">
//             <Form.Control type="userID" placeholder="UserID" />
//             </Col>
//             </Form.Group>
//         </Row>

//         <Row className="mb-3">
//             <Form.Group as={Col} controlId="name">
//             <Form.Label column sm="2">
//                 Field
//                 </Form.Label>
//                 <Col sm="4">
//                 <Form.Select>
//                     <option>Select Field</option>
//                     <option value="1">Technology</option>
//                     <option value="2">Marketing</option>
//                     <option value="3">Finance</option>
//                     </Form.Select>
//                 </Col>
//             </Form.Group>
//                 <Form.Group as={Col} controlId="recruiteremail">
//                     <Form.Label>Recruiter's email</Form.Label>
//                     <Col sm="6">
//                     <Form.Control type="email" placeholder="Recruiter's email" />
//                     </Col>
//                 </Form.Group>
//             </Row>

//             <Row className="mb-3">
//             <Form.Group as={Col} controlId="respondse">
//             <Form.Label column sm="6">
//                 Email was responded?
//                 </Form.Label>
//                 <Col sm="6">
//                 <Form.Select>
//                     <option>Select an option?</option>
//                     <option value="1">Yes</option>
//                     <option value="2">No</option>
//                         </Form.Select>
//                 </Col>
//             </Form.Group>

//             <Form.Group as={Col} controlId="respondse">
//                 <Form.Label column sm="6">
//                     Scheduled an interview?
//                     </Form.Label>
//                     <Col sm="7">
//                     <Form.Select>
//                     <option>Select an option?</option>
//                     <option value="1">Yes</option>
//                     <option value="2">No</option>
//                         </Form.Select>
//                 </Col>
//             </Form.Group>

//             <Form.Group as={Col} controlId="response">
//                 <Form.Label column sm="6">
//                     What was your wait time?
//                     </Form.Label>
//                     <Col sm="6">
//                     <Form.Select>
//                     <option>How long did you wait?</option>
//                     <option value="1">Within 1 week</option>
//                     <option value="2">Within 2 weeks</option>
//                     <option value="2">Within 1 month</option>
//                     <option value="2">Within 6 weeks</option>
//                     <option value="2">More than 2 months - never</option>
//                     </Form.Select>
//                 </Col>
//             </Form.Group>
//             </Row>

//         <Button variant="primary" type="submit">
//             Submit
//         </Button>

//         </Form>
// </div>

//   );
// }




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);