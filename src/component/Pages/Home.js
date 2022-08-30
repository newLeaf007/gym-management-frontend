import Header from "../Header";
import NavbarC from "../NavBarC";
import {Row,Col} from "reactstrap";
import SubHome from "./SubHome";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberSelect from "./MemberSelect";
import GetAllPayment from "./GetAllPayment";
import Dashbaord from "./Dashbaord";
import BodyPart from "./Excersie/BodyPart";
import Excersie from "./Excersie/Excerise";
import Target from "./Excersie/Target";
import Equipement from "./Excersie/Equipement";

const Home =()=>{
    return(
        <div>
            <Router>
            <Header/>
            <Row>
                <Col md="12">
                   <Routes>
                        <Route path="/" element={<SubHome/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/payment" element={<MemberSelect/>}/>
                        <Route path="/payment-all" element={<GetAllPayment/>}/>
                        <Route path="/dashboard" element={<Dashbaord/>}/>
                        <Route path="/excerise/bodyPart" element={<BodyPart/>}/>
                        <Route path="/excerise/bodyPart/Excersie" element={<Excersie/>}/>
                        <Route path="/excerise/target" element={<Target/>}/>
                        <Route path="/excerise/equipement" element={<Equipement/>}/>
                        
                    </Routes> 
                </Col>
            </Row>
            </Router>
        </div>
    )
}
export default Home;