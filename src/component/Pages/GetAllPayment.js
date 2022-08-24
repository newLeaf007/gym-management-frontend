import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
const GetAllPayment = () => {
  const [data, setData] = useState([]);

  //functions to get all the member
  const getAllMember = () => {
    axios.get(`http://localhost:8080/payment`).then(
      (response) => {
        console.log(response.data);
        setData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  //calling the function
  useEffect(() => {
    getAllMember();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Month",
      selector: (row) => row.month,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Payment Mode",
      selector: (row) => row.type,
      sortable: true,
    },
  ];

  

  return (
    <DataTable columns={columns} data={data} pagination  />
  )
};

export default GetAllPayment;
