import React, { Component } from "react";
import { Button, Modal, Form, Col, Figure } from "react-bootstrap";

const NewTable = (props) => {
  return (
    <Figure>
      <Figure.Image
        width={props.width}
        height={props.height}
        alt="171x180"
        src="./pic.jpg"
      />
    </Figure>
  );
};
export default NewTable;
