import axios from "axios";
import { useEffect, useState } from "react";
import ExceriseCard from "./ExceriseCard";
import base_url from "../../api/bootapi";
import { getToken } from "../../../auth/Auth";


const Excersie = (props) => {
  console.log(props.data.part);
  const [exc, setExc] = useState([]);
  const part = props.data.part;
 // const base_url="http://Fitnesssquare-env.eba-rrebm6px.us-west-1.elasticbeanstalk.com";
  const getExersie = () => {
     axios({
      method: "GET",
      url: base_url+ "/excerise/bodyPart/" + part,
      headers:{
        'Authorization': `Bearer ${getToken()}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
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
export default Excersie;
