import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
const GetAllPayment = () => {
  const [data, setData] = useState([]);

  //functions to get all the member
  const getAllMember = () => {
    axios.get(`http://localhost:8080/member/payment/all`).then(
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
    <div>
      <DataTableExtensions
        columns={columns}
        data={data}
        print={false}
        export={false}
      >
      <DataTable
        //columns={columns}
        //data={data}
        pagination
      />
      </DataTableExtensions>
    </div>
  );
};

export default GetAllPayment;
