import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

const Dashbaord = () => {
  const [dashbaord, setDashBaord] = useState({});
  const [member, setMember] = useState([]);
  const [month, setMonth] = useState([]);

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
      )
      .then(
        axios.get(`http://localhost:8080/monthwithamount`).then(
           (response)=>{
            console.log(response.data);
            setMonth(response.data);
           } ,
           (error)=>{
            console.log(error);
           }
        )
      )
  };

  useEffect(() => {
    getDashBoard();
  }, []);


  const rows = [
    {
      name: "Name",
      selector: (column) => column.name,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (column) => column.amount,
      sortable: true,
    },
  ];

  const comlums = [
    {
      name: "Month",
      selector: (column) => column.month,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (column) => column.total,
      sortable: true,
    },
  ];
  return (
    <div>
      <Card>
        <CardTitle tag="h3" className="text-center bg-success text-white">
          Total
        </CardTitle>
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
                <td>&#8377; {dashbaord.totalPayment} </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Row>
        <Col>
          <Card>
            <CardTitle tag="h3" className="text-center bg-success text-white">
              Memeber Total Amount
            </CardTitle>
            <CardBody>
              <DataTableExtensions
                columns={rows}
                data={member}
                print={false}
                export={false}
              >
                <DataTable
                  //columns={columns}
                  //data={data}
                  pagination
                />
              </DataTableExtensions>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardTitle tag="h3" className="text-center bg-success text-white">
              Month Total Amount
            </CardTitle>
            <CardBody>
              <DataTableExtensions
                columns={comlums}
                data={month}
                print={false}
                export={false}
              >
                <DataTable
                  //columns={columns}
                  //data={data}
                  pagination
                />
              </DataTableExtensions>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Dashbaord;
