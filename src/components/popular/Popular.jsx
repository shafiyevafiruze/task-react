import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
import calendar from "../../assets/images/calendar.png";
import ticket from "../../assets/images/ticket.png";
import check_circle from "../../assets/images/check-circle.png";
import image_2 from "../../assets/images/image 2.png";
import image_3 from "../../assets/images/image 3.png";
import image_4 from "../../assets/images/image 4.png";
import image_5 from "../../assets/images/image 5.png";

class Popular extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    const slides = [
      {
        image: image_2,
        title: "Art & Wine",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$45",
      },
      {
        image: image_3,
        title: "Outdoor Yoga Session",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_4,
        title: "Food Truck Festival",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_5,
        title: "Dream Festival",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_2,
        title: "Charity Fun Run",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_3,
        title: "Science Fair & Expo",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_4,
        title: "Salsa Dancing Night",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
    ];

    return (
      <div className="popular-container">
        <div className="main-texts">
          <h3>Popular events near you</h3>
          <h4>See all</h4>
        </div>
        <Slider {...settings} className="slider">
          {slides.map((slide, index) => (
            <div key={index} className="slide-m">
              <div className="heart-btn">
                <img src={slide.image} alt={slide.title} />
                <button className="favorite-btn">&#10084;</button>
              </div>
              <h1>{slide.title}</h1>
              <div className="calendar-div">
                <img className="calendar" src={calendar} alt="Calendar icon" />
                <p>{slide.date}</p>
              </div>
              <div className="check-circle-div">
                <img
                  className="check-circle"
                  src={check_circle}
                  alt="Check circle icon"
                />
                <p>{slide.going}</p>
              </div>
              <div className="ticket-div">
                <img className="ticket" src={ticket} alt="Ticket icon" />
                <p>{slide.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Popular;
