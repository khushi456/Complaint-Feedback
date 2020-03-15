import React , { Component } from "react";
import {Card,Container,Alert} from 'react-bootstrap';
export class MyComplaints extends Component{  
  state = {
    complaints: []
  };
  async componentDidMount() {
    try {
      var res = await fetch('http://127.0.0.1:8000/api/complaint/AcademicCourseComplaint/'); // fetching the data from api, before the page loaded
      var complaints =await res.json();
      this.setState({
        complaints
      });
    } catch (serverGetSearchError) {
      console.log(serverGetSearchError);
    }
  }
    render(){
        return(
            <>
              <Container style={{paddingTop:"8%"}}>  
                <ul>
                  {this.state.complaints.map((complaints,i) => 
                  <p key={i}>
                    <Card>
                      <Card.Header as="h5" >Complaint registered by {complaints.enrolno} ,{complaints.year} Year </Card.Header>
                      <Card.Body>
                      <Card.Text><h6 style={{display:'inline'}}>Course_Code: </h6>{complaints.course_code}<br/>
                      <h6 style={{display:'inline'}}>Complaint Description: </h6>{complaints.description}</Card.Text>
                      <Alert variant="info" show={complaints.status ==='Registered'}><h6>{complaints.status}</h6></Alert>
                      <Alert variant="warning" show={complaints.status ==='Initiated'}><h6>{complaints.status}</h6></Alert>
                      <Alert variant="success" show={complaints.status ==='Resolved'}><h6>{complaints.status}</h6></Alert>
                      </Card.Body>
                    </Card><br/>
                  </p>
                )}
              </ul>
            </Container>
          </>
          );
        }
    }    
   