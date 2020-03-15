import React , { Component } from "react";
import {Button,Card,Container} from 'react-bootstrap';

export class Faculty extends Component{  
    render(){
      var complaints=[{Category:"Academic",Comp_Desc:"Labs are not open",Enrlno:"0801IT171036",status:"Registered"},
      {Category:"Academic",Comp_Desc:"Labs are not open",Enrlno:"0801IT171010",status:"Registered"},
      {Category:"Academic",Comp_Desc:"Labs are not open",Enrlno:"0801IT171013",status:"Registered"},
      {Category:"Academic",Comp_Desc:"Labs are not open",Enrlno:"0801IT171010",status:"Registered"},
      {Category:"Academic",Comp_Desc:"Labs are not open",Enrlno:"0801IT171013",status:"Registered"}]
        return(
            <>  
              <Container style={{paddingTop:"8%"}}>  
                <ul>
                  {complaints.map((complaints,i) => 
                  <p key={i}>
                    <Card>
                      <Card.Header as="h5">{complaints.Category}</Card.Header>
                      <Card.Body>
                      <Card.Title>{complaints.Enrlno} registered this complaint.</Card.Title>
                      <Card.Text>{complaints.Comp_Desc}</Card.Text>
                      <Button variant="outline-success" >Resolve</Button>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </p>
                )}
              </ul>
            </Container>
          </>
          );
        }
    }    