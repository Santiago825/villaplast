import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";
import "../empleados.css"

export default class Crear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      loading: false,
      productos: {
        codigo_producto: "",
        nombre_producto: "",
        marca: "",
        descripcion: "",
        precio: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(inicioe, value) {
    this.setState({
      producto: {
        ...this.state.producto,
        [inicioe]: value,
      },
    });
  }
  guardarProductos() {
    this.setState({ loading: true });
    request
      .post("/productos", this.state.producto)
      .then((response) => {
        if (response.data.exito) {
          this.setState({
            rediret: response.data.exito,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: true });
      });
  }
  onExitedMessage(){
    if(this.state.rediret){
        this.props.changeTab("buscar");
        window.location.reload();
        
    }
  };
  render() {
    return (
      <Container id="empleados-crear-container">
        <MessagePrompts
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Craer productos</h1>
        </Row>
        <Row>
          <Form className="d-flex flex-wrap justify-content-center">
            <Form.Group className="mb-3 col-lg-5 mx-4 " controlId="formBasic">
              <Form.Label>codigo_producto</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("codigo_producto", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasic">
              <Form.Label>nombre_producto</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("nombre_producto", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasic">
              <Form.Label>marca</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("marca", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasicEmail">
              <Form.Label>descripcion</Form.Label>
              <Form.Control
                onChange={(e) => this.setValue("descripcion", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasic">
              <Form.Label>precio</Form.Label>
              <Form.Control
              type="number"
                onChange={(e) => this.setValue("precio", e.target.value)}
              />
            </Form.Group>

            <Button
            className="mt-4"

              variant="success"
              onClick={() => console.log(this.guardarProductos())}
            >
              Guardar Producto
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
