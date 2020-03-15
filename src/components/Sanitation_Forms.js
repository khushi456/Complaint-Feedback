import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';

export class SanitationForm extends React.Component{
  constructor() {
    super();
    this.state = {
      formBuildingName: '',
      formRoomNum:'',
      formComplainDesc:'',
    };
  }
  onChange = (e) => {
    this.setState({ formBuildingName: e.target.value })};
  onRoomChange = (e) => {
    this.setState({ formRoomNum:e.target.value })};
  onDescChange = (e) => {
    this.setState({ formComplainDesc:e.target.value})};
  
  onSubmit = (e) => {
    const url ='http://127.0.0.1:8000/api/complaint/SanitationComplaint/'
    const data = { building_name:this.state.formBuildingName, location:this.state.formRoomNum,
      description:this.state.formComplainDesc }
    fetch(url, { method: 'POST',
    body: JSON.stringify(data), 
    headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }
    render(){
        return(
          <Container style={{paddingTop:"8%"}}>   
              <Accordion defaultActiveKey="0">  
              <Card className="t-1">
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                        <h4>Sanitation</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form onSubmit={this.onSubmit}>
                      <Form.Group as={Row} res="formBuildingName" onChange={this.onChange}>
                          <Form.Label column sm={3}>
                            <h6>Building Name</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select">
                            {/* <option value="">Select...</option> */}
                            <option value="ATC">ATC</option>
                            <option value="LTE">LTE</option>
                            <option value="IPE">IPE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} onChange={this.onRoomChange}>
                        <Form.Label column sm={3}>
                          <h6>Location</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="select"  res="formRoomNum" required>
                          {/* <option>Select...</option> */}
                          <option>Classroom</option>
                          <option>Washroom</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formComplainDesc" onChange={this.onDescChange}>
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" placeholder="Include necessary details here.."rows="3" required/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 3 }}>
                          <Button variant="outline-secondary" type="submit">Submit</Button>
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