import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';


export class SanitationForm extends React.Component{
    render(){
        return(
          <Container style={{paddingTop:"8%"}}>   
              <Accordion>  
              <Card class="t-1">
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                        <h4>Complaint Form - Sanitation</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
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
                          <h6>Location</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="select">
                          <option>Select...</option>
                            <option>Classroom</option>
                            <option>Washroom</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formComplainDesc">
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" placeholder="Include necessary details here.."rows="3"/>
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


