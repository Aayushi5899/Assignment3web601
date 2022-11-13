import React,{useState, useEffect} from 'react';
import {Row, Col, Divider} from 'antd';
import axios from "axios";
import MyCard from './Components/MyCard';

function App() {
  
  const [blogs, setBlogs] = useState(null);
  const [status, setstatus] = useState(false);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      setBlogs(response.data)
      setstatus(true)
    }).catch(()=>{
      console.log("API call failed.")
      setstatus(false)
    })
  },[])





  return (
    <div>
      <Row gutter={16}>
      <Col className="gutter-row"></Col>
      </Row>
      <Divider orientation="center"> Items
      </Divider>
    <Row gutter={16}>
      { status && blogs.map((blogObj)=>{
        return <MyCard name={blogObj.name} email={blogObj.email} website={blogObj.website} phone={blogObj.phone}/>
        })}
    </Row>
    </div>
  );
}

export default App;
