import axios from "axios";
import { useEffect, useState } from "react";
import ExceriseCard from "./ExceriseCard";
import base_url from "../../api/bootapi";
import { getToken } from "../../../auth/Auth";

const EquipmentCards = (props) => {
  console.log(props.data.part);
  const [exc, setExc] = useState([]);
  const part = props.data.part;
 // const base_url="http://Fitnesssquare-env.eba-rrebm6px.us-west-1.elasticbeanstalk.com";

  const getExersie = () => {
    axios({
      method: "GET",
      url:  base_url+"/excerise/equipement/" + part,
     headers:{
      "Authorization" :`Bearer ${getToken()}`
     }
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
