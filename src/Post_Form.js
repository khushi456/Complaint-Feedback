import React from "react";
import { Form,Button, Container ,Row ,Col,Accordion,Card} from 'react-bootstrap';


export class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            title:'',
            body:''
        }
    }
    render(){
        const{userId ,title ,body}=this.state 
        return(

        )
    }
}


