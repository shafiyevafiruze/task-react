import { Component } from "react";
import "./style.css";
import puzzle_img from "../../assets/images/puzzle-img.png";

class Last extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="last-container">
          <div>
            <h1>Join Eventslink</h1>
            <p>
              People use Eventslink to meet new people, learn new things, find
              support, get out of their comfort zones, and pursue their
              passions, together. Membership is free.
            </p>
            <button>Sign up</button>
          </div>
          <img src={puzzle_img} />
        </div>
      </>
    );
  }
}

export default Last;
