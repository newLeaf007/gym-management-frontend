import axios from "axios";
import { useEffect, useState } from "react";
import {  Input } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./Payment";

const MemberSelect = () => {
  
  const [data, setData] = useState([]);
  const [mid,setMid] =useState([])
  //function to get the details member with id
  const getMemberWithId = () => {

    axios.get(`http://localhost:8080/member/memberWithIds`).then(
      (response) => {
        console.log(response.data);
        setData(response.data);
        
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getMemberWithId();
  }, []);

  const  RenderArrayOption =()=>{
    const member = data.map(
      (element,index)=>{
        return(
          <option value={element.value} key={index+1}>{element.label}</option>
        )
      }
    )
      return(
        <Input type="select" onChange={e=>
         // console.log(e.target.value);
          setMid(e.target.value)
        }>
          <option value="">--select the member---</option>
          {member}
        </Input>
      )

  }
 return(
      <div>
        
        <RenderArrayOption/>
        <Payment data={mid}/>
      </div>
      
 )
  } 

export default MemberSelect;
