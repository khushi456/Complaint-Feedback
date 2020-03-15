import React from "react";
import { Form,Button,Container,Row,Col,Accordion,Card} from 'react-bootstrap';

export class InfrastructureForm extends React.Component{
  constructor() {
    super();
    this.state = {
      LabNumber:'',
      SystemNumber:'',
      SystemFaultDesc: '',
      RoomNumber:'',
      ProjectorFaultDesc:'',
      BuildingName:'',
      RoomNum:'',
      ComplainDesc:''
    };
  }
  onLabNumberChange = (e) => {
    this.setState({ LabNumber: e.target.value });
  }
  onSystemNumberChange = (e) => {
    this.setState({ SystemNumber: e.target.value });
  }
  onSystemFaultDescChange = (e) => {
    this.setState({ SystemFaultDesc: e.target.value });
  }
  onRoomNumberChange = (e) => {
    this.setState({RoomNumber: e.target.value});
  }
  onProjectorFaultDescChange = (e) => {
    this.setState({ProjectorFaultDesc :e.target.value});
  }
  onBuildingNameChange= (e) => {
    this.setState({ BuildingName: e.target.value });
  }
  onRoomNumChange = (e) => {
    this.setState({RoomNum :e.target.value});
  }
  onComplainDescChange = (e) => {
    this.setState({ComplainDesc :e.target.value});
  }
  onRoomNumChange = (e) => {
    this.setState({RoomNum :e.target.value});
  }
  onComplainDescChange = (e) => {
    this.setState({ComplainDesc :e.target.value});
  }
  onLabComplaintSubmit = (e) => {
    const url ='http://127.0.0.1:8000/api/complaint/InfrastructureLabComplaint/'
    const data = { lab_no:this.state.LabNumber,sys_no:this.state.SystemNumber,
      description:this.state.SystemFaultDesc}
    console.log(data);
    fetch(url, { method: 'POST',
    body: JSON.stringify(data), 
    headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }

    onProjectorComplaintSubmit = (e) => {
      const url ='http://127.0.0.1:8000/api/complaint/InfrastructureProjectorComplaint/'
      const data = { room_no:this.state.RoomNumber,description:this.state.ProjectorFaultDesc}
      console.log(data);
      fetch(url, { method: 'POST',
      body: JSON.stringify(data), 
      headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response)); }

      onFurnitureComplaintSubmit = (e) => {
        const url ='http://127.0.0.1:8000/api/complaint/InfrastructureFurnitureComplaint/'
        const data = { building_name:this.state.BuildingName,room_no:this.state.RoomNum,
        description:this.state.ComplainDesc}
        console.log(data);
        fetch(url, { method: 'POST',
        body: JSON.stringify(data), 
        headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response)); }
      onElectricityComplaintSubmit = (e) => {
        const url ='http://127.0.0.1:8000/api/complaint/InfrastructureElectricityComplaint/'
        const data = { building_name:this.state.BuildingName,room_no:this.state.RoomNum,
        description:this.state.ComplainDesc}
        console.log(data);
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
                    <Accordion.Toggle as={Card.Header}  eventKey="0">
                        <h4>Lab </h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form onSubmit={this.onLabComplaintSubmit}>
                        <Form.Group as={Row} >
                          <Form.Label column sm={3}>
                            <h6>Lab Number</h6>
                          </Form.Label>
                        <Col sm={6} >
                          <Form.Control   as="select" res="LabNumber" onChange={this.onLabNumberChange} required>
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
                      <Form.Group as={Row} res="SystemNumber" onChange={this.onSystemNumberChange}>
                        <Form.Label column sm={3}>
                          <h6>System Number</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="number" placeholder="Enter system number here" required />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="SystemFaultDesc" onChange={this.onSystemFaultDescChange} required>
                        <Form.Label column sm={3}>
                          <h6>Problem Description</h6>
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
              <br/>
              <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
                        <h4>Projector</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form onSubmit={this.onProjectorComplaintSubmit}>
                      <Form.Group as={Row} res="RoomNumber" onChange={this.onRoomNumberChange} >
                          <Form.Label column sm={3}>
                            <h6>Room Number</h6>
                          </Form.Label>
                        <Col sm={6} >
                          <Form.Control  as="select" required>
                            <option>LT-302</option>
                            <option>IT-101</option>
                            <option>QEEE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="ProjectorFaultDesc" onChange={this.onProjectorFaultDescChange}>
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
              <br/>
              <Card className="t-1">
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="2">
                        <h4>Furniture</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Form onSubmit={this.onFurnitureComplaintSubmit}>
                      <Form.Group as={Row} >
                          <Form.Label column sm={3}>
                            <h6>Building Name</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select" res="BuildingName" onChange={this.onBuildingNameChange} required>
                            <option>Select...</option>
                            <option>ATC</option>
                            <option>LT</option>
                            <option>IPE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="RoomNum" onChange={this.onRoomNumChange}>
                        <Form.Label column sm={3}>
                          <h6>Room Number</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter room number here" required />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="ComplainDesc" onChange={this.onComplainDescChange}>
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
              <br/>
              <Card className="t-1">
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="4">
                        <h4>Electricity</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <Form onSubmit={this.onElectricityComplaintSubmit}>
                      <Form.Group as={Row} res="BuildingName" onChange={this.onBuildingNameChange}>
                          <Form.Label column sm={3}>
                            <h6>Building Name</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select" required>
                            <option>Select...</option>
                            <option>ATC</option>
                            <option>LT</option>
                            <option>IPE</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="RoomNum" onChange={this.onRoomNumChange}>
                        <Form.Label column sm={3}>
                          <h6>Room Number</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter room number here"  required/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="ComplainDesc" onChange={this.onComplainDescChange}>
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