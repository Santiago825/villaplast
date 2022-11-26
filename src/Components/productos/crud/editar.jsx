import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompts from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";
import "../empleados.css"


export default class ProductosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idProducto:this.props.getIdProducto(),
      rediret: false,
      message: {
        text: "",
        show: false,
      },
      confirmation:{
        title:"modificar Producto",
        text:"Desea Modificar el Producto ",
        show: false,
      },
      loading: false,
      producto: {
        codigo_producto: "",
        nombre_producto: "",
        marca: "",
        descripcion: "",
        precio: "",
      },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel=this.onCancel.bind(this);
    this.onConfirm=this.onConfirm.bind(this);
  }
  componentDidMount(){
    this.getProducto();
  }

  getProducto() {
    this.setState({ loading: true });
    request
      .get(`/productos/${this.state.idProducto}`)
      .then((response) => {
        this.setState({
          producto:response.data,
          loading:false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }
  guardarProductos() {
    this.setState({ loading: true });
    request
      .put(`/productos/${this.state.idProducto}`,this.state.producto)
      .then((response) => {
        if (response.data.exito) {
          this.props.changeTab("buscar");
          window.location.reload();
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: true });
      });
  }

  onCancel(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
      show:false,
      },
    })
  };
  onConfirm(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
      show:false,
      },
    },
    this.guardarProductos()
    );
  };

  setValue(inicioe, value) {
    this.setState({
      producto: {
        ...this.state.producto,
        [inicioe]: value,
      },
    });
  };
  onExitedMessage(){
    if(this.state.rediret){
        this.props.changeTab("buscar");
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
        <ConfirmationPrompts
        show={this.state.confirmation.show}
        title={this.state.confirmation.title}
        text={this.state.confirmation.text}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
        
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Editar productos</h1>
        </Row>
        <Row>
          <Form className="d-flex flex-wrap justify-content-center"> 
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasic">
              <Form.Label>codigo_producto</Form.Label>
              <Form.Control
              value={this.state.producto.codigo_producto}
                onChange={(e) => this.setValue("codigo_producto", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasic">
              <Form.Label>nombre_producto</Form.Label>
              <Form.Control
              value={this.state.producto.nombre_producto}
                onChange={(e) => this.setValue("nombre_producto", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasic">
              <Form.Label>marca</Form.Label>
              <Form.Control
              value={this.state.producto.marca}
                onChange={(e) => this.setValue("marca", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-5 mx-4" controlId="formBasicEmail">
              <Form.Label>descripcion</Form.Label>
              <Form.Control
                type="Email"
                value={this.state.producto.descripcion}
                onChange={(e) => this.setValue("descripcion", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-10 mx-4" controlId="formBasic">
              <Form.Label>precio</Form.Label>
              <Form.Control
              type="number"
              value={this.state.producto.precio}
                onChange={(e) => this.setValue("precio", e.target.value)}
              />
            </Form.Group>


            <Button
              className="mt-4"
              variant="success"
              onClick={() =>
                this.setState({
                  confirmation: { ...this.state.confirmation, show:true, }
                })}
            >
              Guardar producto
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
