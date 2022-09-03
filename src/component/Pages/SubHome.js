import axios from "axios";
import { useEffect, useState } from "react";
import DataTable  from "react-data-table-component";
import React from "react";
import base_url from "../api/bootapi";


const SubHome = () => {
  const [data, setData] = useState([]);

  //functions to get all the member
  const getAllMember = () => {
    axios.get(`${base_url}/member`).then(
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
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: "Added",
      selector: (row) => row.addedOn,
      sortable: true,
    },
    {
      name: "Active",
      selector: (row) => row.payment.month,
      sortable: true,
    },
  ];


  return (
    <div>
      
      <DataTable
        columns={columns}
        data={data}
        pagination
        
      />
    </div>
  );
};
export default SubHome;
