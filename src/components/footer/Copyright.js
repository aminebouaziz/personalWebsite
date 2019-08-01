import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

class Copyright extends Component {
  render() {
    return (
      <div className="cpy">
        <Container className="container">
          <Row className="justify-content-md-center">
            &copy; Copyright Amine Bouaziz 2019
          </Row>
        </Container>
      </div>
    );
  }
}
export default Copyright;
