import React, { Component } from "react";

import Copyright from "./Copyright";
import FooterContent from "./FooterContent";

import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <FooterContent />
        <Copyright />
      </div>
    );
  }
}
export default Footer;
