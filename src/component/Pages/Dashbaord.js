import axios from "axios";
import { useEffect, useState } from "react";
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,Button,CardGroup,CardText} from "reactstrap"

const Dashbaord = () => {
  const [dashbaord, setDashBaord] = useState({});
  const [member, setMember] = useState({});
  const [month, setMonth] = useState({});

  //function to api call dashboard
  const getDashBoard = () => {
    axios
      .get(`http://localhost:8080/dashboard`)
      .then(
        (response) => {
          console.log(response.data);
          setDashBaord(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .then(
        axios.get(`http://localhost:8080/memberwithamount`).then(
          (response) => {
            console.log(response.data);
            setMember(response.data);
          },
          (error) => {
            console.log(error);
          }
        )
      );
  };

  useEffect(() => {
    getDashBoard();
  }, []);
const people = member.map((element,index)=>{
    return(
        <p key={index+1}>{element.name}={element.amount}</p>
    )
})


  
  return (
    <div>
        {people}
        <p>Total Member = {dashbaord.totalMmember}</p>
        <p>Total Active Member ={dashbaord.activeTotalMember}</p>
        <p>Total Payment ={dashbaord.totalPayment}</p>
    </div>
  );
};
export default Dashbaord;
