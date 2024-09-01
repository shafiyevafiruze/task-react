import { Component } from "react";
import "./style.css";
import ibiza from "../../assets/images/ibiza.png";
import paris from "../../assets/images/paris.png";
import dubai from "../../assets/images/dubai.png";
import portofino from "../../assets/images/portofino.png";

class Section extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="section-container">
          <p>Popular destinations</p>
          <div className="country-imgs">
            <div>
              <img src={ibiza} />
              <p>Ibiza</p>
            </div>
            <div>
              <img src={paris} />
              <p>Paris</p>
            </div>
            <div>
              <img src={dubai} />
              <p>Dubai</p>
            </div>
            <div>
              <img src={portofino} />
              <p>Portofino</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Section;
