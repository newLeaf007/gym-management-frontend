import axios from "axios";
import { useEffect, useState } from "react";
import { Form,FormGroup,Input,Button,Container} from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Excersie from "./Excerise";
const BodyPart = () => {
  
  const [str,setStr] =useState([]);

  return (
    <div>
      <Form>
        <FormGroup>
            <Input type="select" id="part" name="part" onChange={(e)=>{
                setStr({...str,part:e.target.value})
            }}>
                <option value="">--select body part--</option>
                <option value="back">Back</option>
                <option value="chest">Chest</option>
                <option value="lower arms">Lower arms</option>
                <option value="lower legs">Lower Legs</option>
                <option value="neck">Neck</option>
                <option value="shoulders">Shoulders</option>
                <option value="upper arms">Upper arms</option>
                <option value="upper legs">Upper Legs</option>
                <option value="waist">Waist</option>

            </Input>
        </FormGroup>
      </Form>
      <Excersie data={str}/>
    </div>
  );
};

export default BodyPart;
