import React , { Component} from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';

export class AcademicsForm extends Component{
  constructor() {
    super();
    this.state = {
      year:'',
      course_code:'',
      description: '',
      FacultyName:'',
      FacultyComplainDesc:'',
      TimeTableYear:'',
      TimetableComplainDesc:''
    };
  }
  onYearChange = (e) => {
    this.setState({ year: e.target.value });
  }
  onCourseCodeChange = (e) => {
    this.setState({ course_code: e.target.value });
  }
  ondescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }
  onFacultyNameChange = (e) => {
    this.setState({FacultyName: e.target.value});
  }
  onFacultyComplainDescChange = (e) => {
    this.setState({FacultyComplainDesc :e.target.value});
  }
  onTimeTableYearChange = (e) => {
    this.setState({ TimeTableYear: e.target.value });
  }
  onTimetableComplainDescChange = (e) => {
    this.setState({TimetableComplainDesc :e.target.value});
  }
  onSubmit = (e) => {
    const url ='http://127.0.0.1:8000/api/complaint/AcademicCourseComplaint/'
    const data = { description:this.state.description,year:this.state.year,
      course_code:this.state.course_code}
    console.log(data);
    fetch(url, { method: 'POST',
    body: JSON.stringify(data), 
    headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response)); }

    onFacultyFormSubmit = (e) => {
      const url ='http://127.0.0.1:8000/api/complaint/AcademicFacultyComplaint/'
      const data = { faculty_name:this.state.FacultyName,description:this.state.FacultyComplainDesc}
      console.log(data);
      fetch(url, { method: 'POST',
      body: JSON.stringify(data), 
      headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response)); }

      onTimeTableSubmit = (e) => {
        const url ='http://127.0.0.1:8000/api/complaint/AcademicTimetableComplaint/'
        const data = { year:this.state.TimeTableYear,description:this.state.TimetableComplainDesc}
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
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                        <h4>Course</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form onSubmit={this.onSubmit}>
                        <Form.Group as={Row} res="year">
                          <Form.Label column sm={3}>
                            <h6>Year</h6>
                          </Form.Label>
                        <Col sm={6} >
                          <Form.Control  as="select" onChange={this.onYearChange}>
                            <option>1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="course_code" onChange={this.onCourseCodeChange}>
                        <Form.Label column sm={3}>
                          <h6>Course_Code</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter course code here" required />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="description" onChange={this.ondescriptionChange}>
                        <Form.Label column sm={3}>
                          <h6>Complaint Description</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control as="textarea" rows="3" required/>
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
              <br/>
              <Card>
                    <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
                        <h4>Faculty</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form onSubmit={this.onFacultyFormSubmit}>
                      <Form.Group as={Row} res="FacultyName" onChange={this.onFacultyNameChange}>
                        <Form.Label column sm={3}>
                          <h6>Faculty Name</h6>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Control type="text" placeholder="Enter the name of faculty here"  required/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="FacultyComplainDesc" onChange={this.onFacultyComplainDescChange}>
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
                        <h4>TimeTable</h4>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <Form onSubmit={this.onTimeTableSubmit}>
                      <Form.Group as={Row} >
                          <Form.Label column sm={3}>
                            <h6>Year</h6>
                          </Form.Label>
                        <Col sm={6}>
                          <Form.Control  as="select" res="TimeTableYear" onChange={this.onTimeTableYearChange} required>
                            <option>1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                          </Form.Control>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} res="TimetableComplainDesc" onChange={this.onTimetableComplainDescChange}>
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


