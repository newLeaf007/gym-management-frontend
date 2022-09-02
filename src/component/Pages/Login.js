import axios from "axios";
import { useState } from "react";
import { doLogin } from "../../auth/Auth";
import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { isAdmin } from "../../auth/Auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [member, setMember] = useState([]);

  const navigate = useNavigate()

  //handle form for the login
  const handleform=(e)=>{
    console.log(member);
    postServerLogin(member);
    e.preventDefault();
  }

  //server call for the post to get the token
  const postServerLogin=(member)=>{
    axios.post(`${base_url}/api/v1/auth/login`,member).then(
        (response)=>{
            console.log(response.data);
            //sace the data to local storage
            doLogin(response.data,()=>{
                console.log("login details is saved in local storage")
                console.log(response.data.member.roles[0].name);
                navigate("/")
            })
        },
        (error)=>{
            console.log(error)
        }
    )
  }
  return (
    <Form onSubmit={handleform}>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              id="username"
              name="username"
              placeholder="9199740364"
              type="text"
              onChange={(e) => {
                setMember({ ...member, username: e.target.value });
              }}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="*******"
              type="password"
              onChange={(e) => {
                setMember({ ...member, password: e.target.value });
              }}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button color="success" outline type="submit">
        Login
      </Button>
    </Form>
  );
};
export default Login;
