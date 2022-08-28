import {ListGroup} from "reactstrap";
import { Link } from "react-router-dom";
const NavbarC = () => {
  return (
    <div>
      <ListGroup className="text-center">
        <Link className="list-group-item list-group-item-action" tag="a" to="/register" >Register memeber</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/payment">Payment</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/payment-all">Payment Details</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/dashboard">Dashboard</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/">Member List table</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/excerise/bodyPart">List of body part</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/excerise/target">List of Target</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/excerise/equipement">List of Equipement</Link>
      </ListGroup>
    </div>
  );
};

export default NavbarC;
