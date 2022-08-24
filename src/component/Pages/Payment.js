import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Row, Col, FormGroup, Label, Button, Input } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
const Payment = (props) => {

  const sucessnotify = () => toast("Created successfully !!");
  

  const [payment,setPayment] =useState({})

  const handleFunction = (e) => {
    console.log(payment);
    console.log(parseInt(props.data));
    postDataServer(payment,parseInt(props.data));
    e.preventDefault();
  };

  //function for the api call
  const postDataServer=(payment, id) =>{
    axios.post(`http://localhost:8080/payment/member/${id}`,payment).then(
      (response)=>{
        console.log(response.data);
        sucessnotify();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  
  return (
    <div>
      
      
    <Form onSubmit={handleFunction}>

      <Row>
        <Col>
          <FormGroup>
            <Label for="amount">Amount</Label>
            <Input id="amount" name="amount" placeholder="350" type="text"  onChange={(e)=>{
              setPayment({...payment,amount:e.target.value})
            }} />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="month">Month</Label>
            <Input id="month" name="month" type="select"  onChange={(e)=>{
              setPayment({...payment,month:e.target.value})
            }}>
              <option value="">----select month---</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="Jun">Jun</option>
              <option value="Jul">Jul</option>
              <option value="Aug">Aug</option>
              <option value="Sep">Sep</option>
              <option value="Oct">Oct</option>
              <option value="Nov">Nov</option>
              <option value="Dec">Dec</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="year">Year</Label>
        <Input id="year" name="year" type="select" placeholder="2022" onChange={(e)=>{
          setPayment({...payment,year:e.target.value})
        }} >
          <option value="">---select year---</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="type">Mode of payment</Label>
        <Input id="type" name="type" type="select"   onChange={(e)=>{
          setPayment({...payment,type:e.target.value})
        }} 
         >
          <option value="">---Type of payment----</option>
          <option value="Google Pay">Google Pay</option>
          <option value="Phone Pe">Phone Pe</option>
          <option value="Paytm">Paytm</option>
          <option value="cash">cash</option>
        </Input>
      </FormGroup>
      <Button color="success" outline type="submit">
        Register
      </Button>
    </Form>
    <ToastContainer/>
    </div>
  );
};
export default Payment;
