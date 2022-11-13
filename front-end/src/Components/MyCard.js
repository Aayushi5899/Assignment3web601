import { Card , Col} from "antd"
export default function MyCard(props){


    return(
        <Col className="gutter-row" xs={24} xl={6}>
            <div style={{marginBottom:"10px" , marginTop:"10px"}}>
        <Card title={props.name} extra={<a href="#">More</a>}>
      <p>{props.email}</p>
      <p>{props.website}</p>
      <p>{props.phone}</p>
    </Card>
    </div>
    </Col>
    )
}