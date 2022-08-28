import axios from "axios";
import { useEffect, useState } from "react";
import {  Input,Label } from "reactstrap";
import Payment from "./Payment";
import base_url from "../api/bootapi";

const MemberSelect = () => {
  
  const [data, setData] = useState([]);
  const [mid,setMid] =useState([])
  //function to get the details member with id
  const getMemberWithId = () => {

    axios.get(`${base_url}/member/memberWithIds`).then(
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
        <div className="m-2">
          <Label for="Member" >Member</Label>
        <Input type="select" onChange={e=>
         // console.log(e.target.value);
          setMid(e.target.value)
        }>
          <option value="">--select the member---</option>
          {member}
        </Input>
        </div>
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
