/* eslint-warning */
import {Navbar, Nav, NavDropdown, Button, Jumbotron} from 'react-bootstrap';
import React, {useState} from 'react'; 
import './App.css';
import Data from './data.js';
import {Link, Route, Switch} from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';

function App() {

  let[shoes, shoes변경] = useState(Data);
  let [stock, stock변경] = useState([10, 11, 12]);


  var isLoading=false;
  if(isLoading){
    return (<div> 로딩중 ........</div>);
  }
  return (

  <div className="App">
      <Navbar bg="light" expand="lg" className="">
  <Navbar.Brand href="#home">하하하</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

  </Navbar.Collapse>
</Navbar>


<Switch>
<Route exact path="/">
<Jumbotron className="background">
  <h1>20% season OFF</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
<div className="container">
    <div className="row">
      {
        shoes.map((a, i)=>{
          return <Product shoes={a} i={i}/>
        })
      }
    </div>
    <button className="btn btn-primary" onClick={()=>{
      isLoading=true;
      axios.post('서버url', {id : 'jiyeon', pw : '1234'});

      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((result)=>{
        isLoading=false;
        shoes변경([...shoes, ...result.data]);
      })
      .catch(()=>{
        console.log('fail')
        isLoading=false;
      })
    }}>더보기</button>
    <div className="newData">
    {

    }
    </div>
</div>
</Route>
<Route path="/detail/:id">
  <Detail shoes={shoes} stock={stock} stock변경={stock변경} />
</Route>

<Route path="/:id">
</Route>

</Switch>

</div>
  );
  

  
}

function Product(props){
  return(
  <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1) +".jpg"}
      width="100%"/>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price }</p>
  </div>
  );
}


export default App;
