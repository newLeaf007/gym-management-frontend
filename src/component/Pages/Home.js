import Header from "../Header";
import NavbarC from "../NavBarC";
import {Row,Col} from "reactstrap";
import SubHome from "./SubHome";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberSelect from "./MemberSelect";
import GetAllPayment from "./GetAllPayment";
import Dashbaord from "./Dashbaord";

const Home =()=>{
    return(
        <div>
            <Router>
            <Header/>
            <Row>
                <Col md="3">
                    <NavbarC/>
                </Col>
                <Col md="9">
                   <Routes>
                        <Route path="/" element={<SubHome/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/payment" element={<MemberSelect/>}/>
                        <Route path="/payment-all" element={<GetAllPayment/>}/>
                        <Route path="/dashboard" element={<Dashbaord/>}/>
                    </Routes> 
                </Col>
            </Row>
            </Router>
        </div>
    )
}
export default Home;