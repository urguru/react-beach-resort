import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nihil.",
      },
      {
        icon: <FaHiking />,
        title: "Cool Hiking Places",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nihil.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free bus",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nihil.",
      },
      {
        icon: <FaBeer />,
        title: "Free cool drinks",
        info:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, nihil.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
