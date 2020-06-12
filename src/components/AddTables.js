import React, { Component } from "react";
import { Button, Modal, Form, Col, ButtonGroup } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "./AddTables.css";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "react-placeholder/lib/reactPlaceholder.css";

// Handles the add table button and table details of availabe and new tables.
class AddTables extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      length: "",
      width: "",
      active: false,
      table: false,
      value: 0,
      modal: false,
    };
  }
  // To handle the counter and keep track of values
  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  };
  // To handle the counter and keep track of values
  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };
  // handles opening and closing of the table details modal
  modal = () => {
    const table = this.state.modal;
    this.setState({ modal: !table });
  };
  // To get values like length and width and update them in state
  getValue = (values, event) => {
    console.log(event.target.value);
    let currentVal = event.target.value;
    this.setState(() => {
      let arr = this.state;
      arr[values] = currentVal;
    });
  };
  // closes modals
  handleClose() {
    this.setState({ show: false, modal: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  // changes stateb of the class when called
  changeState = () => {
    console.log("Hi");
    const current = this.state.active;
    this.setState({ active: !current });

    this.modal();
  };
  // submits the add table form and fetched all the submitted values
  submitForm = (e) => {
    const current = this.state.table;
    this.setState({ table: true });
    this.handleClose();
  };

  render() {
    const style = {
      height: "" + `${parseInt(this.state.length) * 50}` + "px",
      width: "" + `${parseInt(this.state.width) * 50}` + "px",
      background: "white",
      border: "2px solid",
      borderRadius: "25%",
    };
    return (
      <>
        <div className={this.state.active ? "modal-view" : "modal"}></div>
        <Button
          variant="success"
          className="add"
          size="lg"
          onClick={this.handleShow}
        >
          Add Table
        </Button>
        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="lead">Add Table</Modal.Title>
            <hr></hr>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.submitForm}>
              <Form.Row className="mb-2">
                <Form.Label className="font-weight-bold">Table #:</Form.Label>
              </Form.Row>

              <Form.Row className="mb-2">
                <Form.Label className="font-weight-bold">
                  Seat Capacity:
                </Form.Label>
                <Form.Group className="form-inline">
                  <div className="def-number-input number-input">
                    <Button
                      variant="outline"
                      onClick={this.decrease.bind(this, "value")}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </Button>

                    <Form.Control
                      className="quantity"
                      name="quantity"
                      value={this.state.value}
                      onChange={() => console.log("change")}
                      size="xs"
                    />
                    <Button
                      onClick={this.increase.bind(this, "value")}
                      variant="outline"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>
                  </div>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Label className="font-weight-bold mr-3">
                  Table Size:
                </Form.Label>
                <Form.Label className=" mr-2">Length:</Form.Label>
                <Col xs={1}>
                  <Form.Group controlId="control">
                    <Form.Control
                      className="pb-2"
                      type="number"
                      placeholder="1"
                      onChange={this.getValue.bind(this, "length")}
                    />
                  </Form.Group>
                </Col>
                <Form.Label className="mr-2">Width:</Form.Label>
                <Col xs={1}>
                  <Form.Group controlId="control">
                    <Form.Control
                      className="pb-2"
                      type="number"
                      placeholder="1"
                      onChange={this.getValue.bind(this, "width")}
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={this.submitForm}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>

        <div
          className={this.state.table ? "image-view" : "image"}
          onClick={this.changeState}
          style={style}
        >
          <span className="lead align-middle">Table A2</span>
        </div>
        <div className="t1" onClick={this.modal}>
          <span className="lead alignMiddle">Table A1</span>
        </div>
        <div className="t2" onClick={this.modal}>
          <span className="lead align-middle">Table B1</span>
        </div>

        <Modal
          size="lg"
          show={this.state.modal}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            {" "}
            <Modal.Title>Table:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form">
              <ButtonGroup className="buttons" vertical>
                <Button variant="light">Print Order</Button>
                <Button variant="light">Print Invoice</Button>
                <Button variant="light">Add Item</Button>
                <Button variant="light">End Order</Button>
                <Button variant="light">Switch Table</Button>
                <Button variant="light">Table Setting</Button>
              </ButtonGroup>
              <Form>
                <Form.Label></Form.Label>

                <Form.Group>
                  <Form.Label className="lead">Order Details:</Form.Label>
                  <div className="def-number-input number-input form-inline mb-2">
                    <span className=" font-weight-bold">
                      Pork feet noodles:
                    </span>

                    <Button
                      variant="outline"
                      onClick={this.decrease.bind(this, "value")}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </Button>
                    <Form.Control
                      className="quantity"
                      name="quantity"
                      value={this.state.value}
                      onChange={() => console.log("change")}
                      size="xs"
                    />
                    <Button
                      onClick={this.increase.bind(this, "value")}
                      variant="outline"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>
                  </div>
                  <div className="def-number-input number-input form-inline mb-2">
                    <span className=" font-weight-bold">Cooked Pork:</span>
                    <Button
                      variant="outline"
                      onClick={this.decrease.bind(this, "value")}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </Button>

                    <Form.Control
                      className="quantity"
                      name="quantity"
                      value={this.state.value}
                      onChange={() => console.log("change")}
                      size="xs"
                    />
                    <Button
                      onClick={this.increase.bind(this, "value")}
                      variant="outline"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>
                  </div>
                  <div className="def-number-input number-input form-inline mb-2">
                    <span className=" font-weight-bold">
                      Fish In Chilli Sauce:
                    </span>
                    <Button
                      variant="outline"
                      onClick={this.decrease.bind(this, "value")}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </Button>

                    <Form.Control
                      className="quantity"
                      name="quantity"
                      value={this.state.value}
                      onChange={() => console.log("change")}
                      size="xs"
                    />
                    <Button
                      onClick={this.increase.bind(this, "value")}
                      variant="outline"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>
                  </div>
                </Form.Group>
                <hr />
                <div>
                  <span className="font-weight-bold mt-2">
                    Subtotal: $53.50
                  </span>
                  <br />
                  <span className="font-weight-bold mt-2">Discount: $0</span>
                  <br />
                  <span className="font-weight-bold mt-2">Tax: $2.50 </span>
                  <br />
                  <span className="font-weight-bold mt-2">
                    Order Total: $56.00
                  </span>
                  <br />
                </div>
              </Form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="success" type="submit" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default AddTables;
