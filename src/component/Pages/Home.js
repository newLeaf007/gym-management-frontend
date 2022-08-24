import Header from "../Header";
import NavbarC from "../NavBarC";
import {Row,Col} from "reactstrap";
import SubHome from "./SubHome";
import Register from "./Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MemberSelect from "./MemberSelect";
import GetAllPayment from "./GetAllPayment";

const Home =()=>{
    return(
        <div>
            <Router>
            <Header/>
            <Row>
                <Col md="4">
                    <NavbarC/>
                </Col>
                <Col md="8">
                   <Routes>
                        <Route path="/" element={<SubHome/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/payment" element={<MemberSelect/>}/>
                        <Route path="/payment-all" element={<GetAllPayment/>}/>
                    </Routes> 
                </Col>
            </Row>
            </Router>
        </div>
    )
}
export default Home;