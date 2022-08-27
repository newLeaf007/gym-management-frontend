import axios from "axios";
import { useEffect, useState } from "react";
import ExceriseCard from "./ExceriseCard";


const EquipmentCards = (props) => {
  console.log(props.data.part);
  const [exc, setExc] = useState([]);
  const part = props.data.part;

  const getExersie = () => {
    axios({
      method: "GET",
      url: "http://localhost:8080/excerise/equipement/" + part,
     
    }).then(
      (response) => {
        setExc(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getExersie();
  }, [part]);
  return (
    <div>
     
      <ExceriseCard data={exc} />
    </div>
  );
};
export default EquipmentCards;
