import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../../icons/fb.png";
import ig from "../../icons/ig.png";
import tw from "../../icons/twitter.png";
import git from "../../icons/github.png";
import linked from "../../icons/linked.png";

class FooterContent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="secFooter sec1" sm>
              <h4>About me </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quia enim veritatis deleniti commodi consequuntur.
                <br /> <br />
                consequatur voluptatem voluptas corrupti <br /> a? Commodi
                blanditiis eveniet illum odit quo dolor eum illo repellendus
              </p>
            </Col>
            <Col className="secFooter sec2" sm>
              <h4>My centre of intereset</h4>
              <ul>
                <li>Sport</li>
                <li>Develpment</li>
                <li>Social live</li>
              </ul>
            </Col>
            <Col className="secFooter" sm>
              <h4>Follow me</h4>
              <div className="socialMedia">
                <a href="">
                  <img src={fb} alt="" />
                </a>
                <a href="">
                  <img src={git} alt="" />
                </a>
                <a href="">
                  <img src={tw} alt="" />
                </a>
                <a href="">
                  <img src={linked} alt="" />
                </a>
                <a href="">
                  <img src={ig} alt="" />
                </a>
              </div>
              <div className="cm">
                <h4>Contact me</h4>
                <b>E-mail:</b> <p>bouaziz.amine.18@gmail.com</p>
                <b>Phone:</b> <p>+216 53 451 615</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default FooterContent;
