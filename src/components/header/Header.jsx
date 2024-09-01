import { Component } from "react";
import "./style.css";
import eventlink from "../../assets/images/Eventslink.png";
import search from "../../assets/images/search.png";
import shop_bag from "../../assets/images/shopping-bag.png";
import user from "../../assets/images/user.png";
import bcg_img from "../../assets/images/bcg.png";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="menu">
            <img src={eventlink} />
            <a href="#">Events</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div className="header-2">
            <select name="" id="">
              <option value="">En</option>
              <option value="">Ru</option>
              <option value="">Aze</option>
            </select>
            <div className="icons">
              <a href="#">
                <img src={search} />
              </a>
              <a href="#">
                <img src={shop_bag} />
              </a>
              <a href="#">
                <img src={user} />
              </a>
            </div>
          </div>
        </div>
        <div className="bcg-img">
          <img src={bcg_img} alt="" />
          <div className="texts">
            <p className="p-1">ENJOY YOUR CITY TO THE FULLEST</p>
            <p className="p-2">
              Find events that match your interests and book your tickets
              effortlessly. From theater shows to sports events, we have it all!
            </p>
            <button>Find Events</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
