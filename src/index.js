import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/header";
import { AcademicsForm } from "./components/Academics_Form";
import { InfrastructureForm } from "./components/Infrastructure_Forms";
import { SanitationForm } from "./components/Sanitation_Forms";
import { MiscellenousForm } from "./components/Miscellenous_Forms";
import {Feedback} from "./components/Feedback";
import {MyComplaints} from "./components/MyComplaints";
import { ActiveComplaints } from "./components/ActiveComplaints";
import { Faculty } from "./components/Faculty";

class App extends React.Component{
    render(){
        return(
                <div>
                    <BrowserRouter>
                        <Route />
                            <Switch>
                                <Route exact path="/" component={Header,ActiveComplaints}/>
                                <Route path="/academics" component={AcademicsForm} />
                                <Route path="/infrastructure" component={InfrastructureForm} />
                                <Route path="/miscellenous" component={MiscellenousForm} />
                                <Route path="/sanitation" component={SanitationForm} />
                                <Route path="/mycomplaints" component={MyComplaints}/>
                                <Route path="/feedback" component={Feedback} />
                                <Route path="/faculty" component={Faculty} />
                            </Switch>
                     </BrowserRouter>
                    <Header />
                </div>
                
        )
    }
}

render(<App/> , window.document.getElementById("app"));

