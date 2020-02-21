import React , { Component } from "react";
import { Table,Container, Card,Accordion} from 'react-bootstrap';

export class ActiveComplaints extends Component{
    render(){
        return(
          <>
          <Container style={{paddingTop:"8%"}}>   
          <h4>Active Complaints</h4><br></br>
          <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
              <h6>Academic</ h6></Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
              <Card.Body>
              <Table size="sm" hover>
                    <tbody>
                        <tr>
                            <td>Issue with time table of IT 3rd year</td>
                        </tr>
                        <tr>
                            <td>Faculty not completing syllabus</td>
                        </tr>
                        <tr>
                            <td>Faculty not teaching properly</td>
                        </tr>
                        <tr>
                            <td>Lab timings not suitable</td>
                        </tr>
                        <a href='#' style={{float:'right'}}>view more...</a>
                    </tbody>
                </Table>
              </Card.Body>
            </Accordion.Collapse>
            </Card>
            <br/>
            <Card>
            <Accordion.Toggle as={Card.Header} variant="" eventKey="1">
              <h6>Infrastructure</h6></Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
              <Card.Body>
              <Table size="sm" hover>
                    <tbody>            
                        <tr>
                            <td>System 112 in lab 111 not working.</td>
                        </tr>
                        <tr>
                            <td>Benches broken in Lt 302.</td>
                        </tr>
                        <tr>
                            <td>White board not visible and projector not working.</td>
                        </tr>
                        <tr>
                            <td>Tubelight not working in lt 202.</td>
                        </tr>
                        <a href='#' style={{float:'right'}}>view more...</a>
                    </tbody>
                </Table>
              </Card.Body>
              </Accordion.Collapse>
            </Card>
            <br/>
            <Card>
            <Accordion.Toggle as={Card.Header} variant="" eventKey="2">
              <h6>Sanitation</h6></Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
              <Card.Body>
            <Table size="sm" hover>
                    <tbody>
                       
                        <tr>
                            <td>Stinking smell from lt 3rd floor washrooms.</td>
                        </tr>
                        <tr>
                            <td>Water coolers dont work.</td>
                        </tr>
                        <tr>
                            <td>Atc washroom are never clean.</td>
                        </tr>
                        <tr>
                            <td>Food left on classroom benches.</td>
                        </tr>
                        
                        <a href='#' style={{float:'right'}}>view more...</a>
                    </tbody>
                </Table>
                </Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            </Container>
          </>
        );
    }
}
