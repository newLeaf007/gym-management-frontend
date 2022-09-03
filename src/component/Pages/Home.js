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
import Pic1 from   "./images/pic1.jpg";
import Login from "./Login";
import NavNew from "../NavNew";
const Home =()=>{
    return(
        <div>
            <Router>
            <NavNew/>
            <Row>
                <Col md="3">
                    <img
                        alt="side"
                        src={Pic1}
                        width="100%"
                        height="400px"
                    ></img>
                </Col>
                <Col md="9">
                   <Routes>
                        <Route path="/login" element={<Login/>}/>
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