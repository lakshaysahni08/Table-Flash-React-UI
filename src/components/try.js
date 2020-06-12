import React, { Component } from "react";
import {
  Button,
  Modal,
  Form,
  Col,
  Figure,
  ButtonGroup,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CounterInput from "react-bootstrap-personalized-counter";
import "font-awesome/css/font-awesome.min.css";
import "./AddTables.css";
import NewTable from "./NewTable";

class Try extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  submitForm = (e) => {
    console.log(e);
    this.handleClose();
  };

  render() {
    return (
      <>
        <Modal
          size="lg"
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            {" "}
            Open
            <Modal.Title>Table:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ButtonGroup vertical>
              <Button variant="light">Print Order</Button>
              <Button variant="light">Print Invoice</Button>
              <Button variant="light">Add Item</Button>
              <Button variant="light">End Order</Button>
              <Button variant="light">Switch Table</Button>
              <Button variant="light">Table Setting</Button>
            </ButtonGroup>
            <Form onSubmit={this.submitForm}>
              <Form.Row>
                <Form.Label>Table #:</Form.Label>
              </Form.Row>

              <Form.Row>
                <Form.Label>Order Details:</Form.Label>
                <Form.Group>
                  <CounterInput
                    value={2}
                    min={1}
                    max={50}
                    glyphPlus={{ glyph: "fa fa-plus-circle", position: "left" }}
                    glyphMinus={{
                      glyph: "fa fa-minus-circle",
                      position: "right",
                    }}
                    onChange={(value) => {
                      console.log(value);
                    }}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Label>Table Size:</Form.Label>
                <Form.Label>Length:</Form.Label>
                <Col xs={1}>
                  <Form.Group controlId="control">
                    <Form.Control
                      className="pb-5"
                      componentClass="length"
                      type="number"
                      placeholder="1"
                    />
                  </Form.Group>
                </Col>
                <Form.Label>Width:</Form.Label>
                <Col xs={1}>
                  <Form.Group controlId="control">
                    <Form.Control
                      className="pb-2"
                      type="number"
                      placeholder="1"
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
            <Button variant="primary" type="submit" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Try;
