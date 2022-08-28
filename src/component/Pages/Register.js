import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import base_url from "../api/bootapi";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from "reactstrap";
const Register = () => {
  const sucessnotify = () => toast("Created successfully !!");
  useEffect(() => {
    document.title = "Register Member";
  });

  //for handler Register
  const [member, setMember] = useState({});

  const handleFunction = (e) => {
    console.log(member);
    postDataServer(member);
    e.preventDefault();
  };

  //function for two ways binding
  const postDataServer = (member) => {
    axios.post(`${base_url}/member`, member).then(
      (response) => {
        console.log(response);
        sucessnotify();
      },
      (error) => {
        console.log(error);
      }
    );
  };




  return (
    <div>
      <ToastContainer/>
      <Form onSubmit={handleFunction}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Raushan Kumar"
                type="text"
                onChange={(e) => {
                  setMember({ ...member, name: e.target.value });
                }}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Password</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+91-9199740364"
                type="text"
                onChange={(e) => {
                  setMember({ ...member, phone: e.target.value });
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            id="address"
            name="address"
            placeholder="1234 Main St"
            onChange={(e) => {
              setMember({ ...member, address: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success" outline className="m-2">
            Register
          </Button>
          <Button type="reset" color="warning">
            Reset
          </Button>
        </Container>
      </Form>
    </div>
  );
};
export default Register;
