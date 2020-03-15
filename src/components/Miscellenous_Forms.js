import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';

export class MiscellenousForm extends React.Component{
  constructor() {
    super();
    this.state = {
      description: ''
    };
  }
  onChange = (e) => {
    this.setState({ description: e.target.value });
  }
  onSubmit = (e) => {
    const url ='http://127.0.0.1:8000/api/complaint/MiscellaneousComplaint/'
    const data = { description:this.state.description}
    fetch(url, { method: 'POST',
    body: JSON.stringify(data), 
    headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }
    render(){
        return(
          <Container style={{paddingTop:"8%"}}>   
              <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                        <h4>Miscellenous</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form onSubmit={this.onSubmit}>
                      <Form.Group as={Row} ref="description" onChange={this.onChange}>
                        <Form.Label column sm={3} >
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


