import { Component } from "react";
import "./style.css";
import mail from "../../assets/images/mail.png";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="footer">
          <div className="footer-container">
            <div className="flex">
              <p>Events</p>
              <p>About us</p>
              <p>Contact us</p>
              <p>Sign in</p>
            </div>
            <div className="flex-2">
              <h1>EVENTSLINK</h1>
              <div className="mail">
                <img src={mail} />
                <p>eventslink@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
