import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import {Row} from "react-bootstrap";
import Cookies from "universal-cookie/es6";

const cookies=new Cookies();


export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Logout(){
    cookies.remove("_s");
    window.location.reload();
  }

  render() {
    return (
      <Navbar fixed="top" id="navbar" bg="success" expand="lg" variant="dark">
        <Container >
          <Navbar.Brand href="#home">VillaPlast J&C</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link> 
              <Nav.Link href="#link">Link</Nav.Link>*/}
            </Nav>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title="Usuario">
                <Dropdown.Header>
                  <Row className="d-flex justify-content-center">
                    <FontAwesomeIcon className="fs-3 "  icon={faUserSecret} />
                  </Row>
                  <Row>
                    
                  </Row>

                </Dropdown.Header>
                <Dropdown.Divider/>
              <Dropdown.Item className="text-center" onClick={()=>this.Logout()} >cerrar Sesion</Dropdown.Item>

            </DropdownButton>
          </Navbar.Collapse>
        </Container>
   
      </Navbar>
      
    );
  }
}
