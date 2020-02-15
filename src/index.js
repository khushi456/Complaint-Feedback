import React from "react";
import { render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./components/header";
import { AcademicsForm } from "./components/Academics_Form";
import { InfrastructureForm } from "./components/Infrastructure_Forms";
import { SanitationForm } from "./components/Sanitation_Forms";
import { MiscellenousForm } from "./components/Miscellenous_Forms";

class App extends React.Component{
    render(){
        return(
                <div>
                    <Header />
                    <MiscellenousForm />
                    <InfrastructureForm />
                </div>
                
        )
    }
}

render(<App/> , window.document.getElementById("app"));

