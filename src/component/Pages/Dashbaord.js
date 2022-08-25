import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardGroup,
  CardText,
  Table,
} from "reactstrap";

const Dashbaord = () => {
  const [dashbaord, setDashBaord] = useState({});
  const [member, setMember] = useState([]);
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
        <tr key={index}>
            <td>{element.name}</td>
            <td>{element.amount}</td>
        </tr>
    )
  })

  return (
    <div className="m-2">
      <Card className="m-2">
        <CardBody>
          <Table dark>
            <tbody>
              <tr>
                <td>Total Payment</td>
                <td>{dashbaord.totalMmember}</td>
              </tr>
              <tr>
                <td>Total Active Member</td>
                <td>{dashbaord.activeTotalMember}</td>
              </tr>

              <tr>
                <td>Total Paymemnt</td>
                <td>{dashbaord.totalPayment}</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Card className="m-2">
        <CardBody>
            <Table dark>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Amount</td>
                    </tr>
                   {people} 
                </tbody>
            </Table>
        </CardBody>
      </Card>
    </div>
  );
};
export default Dashbaord;
