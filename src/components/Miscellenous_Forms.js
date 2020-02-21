import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';


export class MiscellenousForm extends React.Component{
    render(){
        return(
          <Container style={{paddingTop:"8%"}}>   
              <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                        <h4>Complaint Form - Miscellenous</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form>
                      <Form.Group as={Row} controlId="formDesc">
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" rows="3" required/>
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


