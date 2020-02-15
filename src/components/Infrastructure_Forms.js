import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';
import './styles.css';


export class InfrastructureForm extends React.Component{
    render(){
        return(
          <Container style={{paddingTop:"8%"}}>   
              <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header}  eventKey="0">
                        <h4>Complaint Form - Lab</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form>
                        <Form.Group as={Row} controlId="formLabNumber">
                          <Form.Label column sm={3}>
                            <h6>Lab Number</h6>
                          </Form.Label>
                        <Col sm={6} >
                          <Form.Control  as="select">
                            <option>Select...</option>
                            <option>IT-101</option>
                            <option>IT-102</option>
                            <option>IT-204</option>
                            <option>IT-205</option>
                            <option>IT-206</option>
                            <option>IT-207</option>
                            <option>IT-208</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formSystemNumber">
                        <Form.Label column sm={3}>
                          <h6>System Number</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="number" placeholder="Enter system number here" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formSystemFaultDesc">
                        <Form.Label column sm={3}>
                          <h6>Problem Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" rows="3"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 3 }}>
                          <Button variant="outline-secondary" type="submit">Submit</Button>{' '}
                        </Col>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
                        <h4>Complaint Form - Projector</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form>
                      <Form.Group as={Row} controlId="formRoomNumber">
                          <Form.Label column sm={3}>
                            <h6>Room Number</h6>
                          </Form.Label>
                        <Col sm={6} >
                          <Form.Control  as="select">
                            <option>Select...</option>
                            <option>LT-302</option>
                            <option>IT-101</option>
                            <option>QEEE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formProjectorFaultDesc">
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" rows="3"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 3 }}>
                          <Button variant="outline-secondary" type="submit">Submit</Button>{' '}
                        </Col>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>          

              <Card class="t-1">
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="2">
                        <h4>Complaint Form - Furniture</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Form>
                      <Form.Group as={Row} controlId="formBuildingName">
                          <Form.Label column sm={3}>
                            <h6>Building Name</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select">
                            <option>Select...</option>
                            <option>ATC</option>
                            <option>LT</option>
                            <option>IPE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formRoomNum">
                        <Form.Label column sm={3}>
                          <h6>Room Number</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter room number here" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formComplainDesc">
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" rows="3"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 3 }}>
                          <Button variant="outline-secondary" type="submit">Submit</Button>{' '}
                        </Col>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>     

              <Card class="t-1">
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="4">
                        <h4>Complaint Form - Electricity</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Form>
                      <Form.Group as={Row} controlId="formBuildingName">
                          <Form.Label column sm={3}>
                            <h6>Building Name</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select">
                            <option>Select...</option>
                            <option>ATC</option>
                            <option>LT</option>
                            <option>IPE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formRoomNum">
                        <Form.Label column sm={3}>
                          <h6>Room Number</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter room number here" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formComplainDesc">
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" rows="3"/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 3 }}>
                          <Button variant="outline-secondary" type="submit">Submit</Button>{' '}
                        </Col>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>           
            </Accordion>       
        </Container>
        );
    }
}


