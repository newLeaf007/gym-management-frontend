import axios from "axios";
import { useEffect, useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";
import TargetCards from "./TargetCards";
import base_url from "../../api/bootapi";
import { getToken } from "../../../auth/Auth";
const Target = () => {
  const [name, setName] = useState([]);
  const [str, setStr] = useState([]);

  //fetch the distict list of name
  const getDistinct = () => {
    axios({
      method: "GET",
      url: base_url + "/excerise/target",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }).then(
      (response) => {
        console.log(response.data);
        setName(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getDistinct();
  }, []);

  const target = name.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <div>
      <Form>
        <FormGroup>
          <Input
            type="select"
            id="part"
            name="part"
            onChange={(e) => {
              setStr({ ...str, part: e.target.value });
            }}
          >
            <option value="">---select the target ---</option>
            {target}
          </Input>
        </FormGroup>
      </Form>
      <TargetCards data={str} />
    </div>
  );
};

export default Target;
