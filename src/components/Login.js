import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export class FormPage extends Component{
    constructor(){
        super()
        this.state={
            Enrolno:'',
            Password:''
        };
    }
    changeEnrolnoHandler = e => {
      this.setState({Enrolno:e.target.value});
    }
    changePasswordHandler = e => {
      this.setState({Password:e.target.value});
    }
    submitHandler = e => {
      const url ='http://127.0.0.1:8000/login/'
      const data = { Enrolno:this.state.Enrolno, Password:this.state.Password}
      console.log(data);
      fetch(url, { method: 'GET',
      body: JSON.stringify(data), 
      headers:{ 'Content-Type': 'application/json' } }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response =>
         console.log('Success:', response)); 
    }
    render(){
        return (
        <MDBContainer style={{paddingTop:"8%",paddingLeft:"30%"}}>
        <MDBRow>
            <MDBCol md="6">
            <form onSubmit={this.submitHandler}>
                <p className="h4 text-center mb-4">Sign in</p>
                <label  className="grey-text">
                Enrollment Number
                </label>
                <input type="text" res="Enrolno"  required className="form-control" onChange={this.changeEnrolnoHandler} />
                <br />
                <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Password
                </label>
                <input type="password" res="Password" required className="form-control" onChange={this.changePasswordHandler}/>
                <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit" onClick="http://localhost:3000/home">Login</MDBBtn>
                </div>
            </form>
            </MDBCol>
        </MDBRow>
        </MDBContainer>
     );
    }
}   