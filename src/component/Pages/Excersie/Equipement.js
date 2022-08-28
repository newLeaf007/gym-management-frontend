import axios from "axios";
import { useEffect, useState } from "react";
import { Form,FormGroup,Input} from "reactstrap";
import EquipmentCards from "./EquipmentCards";
import base_url from "../../api/bootapi";
const Equipement = () => {
  
  const [name,setName] =useState([]);
  const [str,setStr] =useState([]);


  //fetch the distict list of name
  const getDistinct=()=>{
    axios.get(`${base_url}/excerise/equipement`).then(
        (response)=>{
            console.log(response.data);
            setName(response.data);
        },
        (error)=>{
            console.log(error);
        }
    )
  }

  useEffect(()=>{
    getDistinct();
  },[])

  const target = name.map((item,index)=>{
    return(
        <option value={item} key={index}>{item}</option>
    )
  })
  
  return (
    <div>
      <Form>
        <FormGroup>
            <Input type="select" id="part" name="part" onChange={(e)=>{
                setStr({...str,part:e.target.value})
            }}>
            <option value="">---select the Equipement ---</option>
            {target}
            </Input>
        </FormGroup>
      </Form>
      <EquipmentCards data={str}/>
    </div>
  );
};

export default Equipement;
