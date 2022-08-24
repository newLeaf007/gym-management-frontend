import {ListGroup,ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
const NavbarC = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/register">Register memeber</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/payment">Payment</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/payment-all">Payment made in as month</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/member-list">Member List by current month</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/">Member List table</Link>
        
      </ListGroup>
    </div>
  );
};

export default NavbarC;
