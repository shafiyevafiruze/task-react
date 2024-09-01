import { Component } from "react";
import "./style.css";
import icon_1 from "../../assets/images/icon-1.png";
import icon_2 from "../../assets/images/icon-2.png";
import icon_3 from "../../assets/images/icon-3.png";
import icon_4 from "../../assets/images/icon-4.png";
import icon_5 from "../../assets/images/icon-5.png";
import icon_6 from "../../assets/images/icon-6.png";

class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="img-container">
        <div>
          <img src={icon_1} />
          <p>Workshops</p>
        </div>
        <div>
          <img src={icon_2} />
          <p>Exhibitions</p>
        </div>
        <div>
          <img src={icon_3} />
          <p>Food & Drinks</p>
        </div>
        <div>
          <img src={icon_4} />
          <p>Holidays</p>
        </div>
        <div>
          <img src={icon_5} />
          <p>Sports</p>
        </div>
        <div>
          <img src={icon_6} />
          <p>Concerts</p>
        </div>
      </div>
    );
  }
}

export default Main;
