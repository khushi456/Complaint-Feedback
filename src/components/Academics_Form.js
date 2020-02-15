import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';
import './styles.css';

export class AcademicsForm extends React.Component{
    render(){
        return(
          <Container style={{paddingTop:"8%"}}>   
              <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                        <h4>Complaint Form - Course</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form>
                        <Form.Group as={Row} controlId="formYear">
                          <Form.Label column sm={3}>
                            <h6>Year</h6>
                          </Form.Label>
                        <Col sm={6} >
                          <Form.Control  as="select">
                            <option>Select...</option>
                            <option>First</option>
                            <option>Second</option>
                            <option>Third</option>
                            <option>Fourth</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formCourseCode">
                        <Form.Label column sm={3}>
                          <h6>Course_Code</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter course code here" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formDesc">
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

              <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
                        <h4>Complaint Form - Faculty</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form>
                      <Form.Group as={Row} controlId="formFacultyName">
                        <Form.Label column sm={3}>
                          <h6>Faculty Name</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter the name of faculty here" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formFacultyComplainDesc">
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
                        <h4>Complaint Form - TimeTable</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Form>
                      <Form.Group as={Row} controlId="formTimeTableYear">
                          <Form.Label column sm={3}>
                            <h6>Year</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select">
                            <option>Select...</option>
                            <option>First</option>
                            <option>Second</option>
                            <option>Third</option>
                            <option>Fourth</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formTimetableComplainDesc">
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


