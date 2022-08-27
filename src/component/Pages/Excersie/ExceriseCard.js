import {Card,CardImg,CardBody,CardTitle,CardText,Row,Col,Table} from "reactstrap"

const ExceriseCard = (props)=>{
    console.log(props.data);

    const excerise = props.data.map((element)=>{
        return(
            <Col sm="3">
            <Card className="my-1">
            <CardImg
              alt={element.id}
              src={element.gifUrl}
              style={{
                height: 200
              }}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h6">
                {element.name}
              </CardTitle>
              <CardText>
               <Table dark>
                    <tbody>
                        <tr>
                            <td>Equipement</td>
                            <td>{element.equipment}</td>
                        </tr>
                        <tr>
                            <td>Body Part</td>
                            <td>{element.bodyPart}</td>
                        </tr>
                        <tr><td>Target</td>
                        <td>{element.target}</td></tr>
                    </tbody>
               </Table>
              </CardText>
              
            </CardBody>
          </Card>
          </Col>
        )
    })
    return(
        <div>
            <Row>
            {excerise}
            </Row>
        </div>
    )

}
export default ExceriseCard;