import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import calendar from "../../assets/images/calendar.png";
import ticket from "../../assets/images/ticket.png";
import check_circle from "../../assets/images/check-circle.png";
import image_6 from "../../assets/images/image 6.png";
import image_7 from "../../assets/images/image 7.png";
import image_8 from "../../assets/images/image 8.png";
import image_9 from "../../assets/images/image 9.png";

class Upcoming extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    const slides = [
      {
        image: image_6,
        title: "Outdoor Movie Night",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$45",
      },
      {
        image: image_7,
        title: "Tech Meetup",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_8,
        title: "Photography Workshop",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_9,
        title: "Live Jazz Concert",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_7,
        title: "Charity Fun Run",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_8,
        title: "Science Fair & Expo",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
      {
        image: image_9,
        title: "Salsa Dancing Night",
        date: "MON, JUL 21 * 4:00 PM",
        going: "18 going",
        price: "$15",
      },
    ];

    return (
      <div className="upcoming-container">
        <div className="main-texts">
          <h3>Upcoming Events</h3>
          <h4>See All</h4>
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

export default Upcoming;
