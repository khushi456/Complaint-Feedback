import React , { Component } from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';
export class Feedback extends Component{
      constructor(){
        super()
        this.state={
            feedback:'',
            feedbackDesc:''
        };
    }
    changeFeedbackHandler = e => {
      this.setState({feedback:e.target.value});
    }
    changeFeedbackDescHandler = e => {
      this.setState({feedbackDesc:e.target.value});
    }
    submitHandler = e => {
      const url ='http://127.0.0.1:8000/api/Feedback/'
      const data = { feedback:this.state.feedback, feedback_Description:this.state.feedbackDesc}
      console.log(data);
      fetch(url, { method: 'POST',
      body: JSON.stringify(data), 
      headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response)); 
    }
    render(){
        return(
            <>
            <Container style={{paddingTop:"8%"}}>   
                  <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="" eventKey="0">
                            <h4>Feedback Form </h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <Form onSubmit= {this.submitHandler} >
                          <Form.Group as={Row} >
                            <Form.Label column sm={3}>
                              <h6>Feedback </h6>
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Control type ="text" res="feedback" onChange={this.changeFeedbackHandler} required/>
                            </Col>
                          </Form.Group>
                          <Form.Group as={Row} >
                            <Form.Label column sm={3} >
                              <h6>Feedback </h6>
                            </Form.Label>
                            <Col sm={6}>
                              <Form.Control as="textarea" rows="3" res="feedbackDesc" onChange={this.changeFeedbackDescHandler} required/>
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
            </>
            );
        }
    }            


    