import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../Components/StyledHero";
export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.match.params.slug)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log("====================================");
    console.log(room);
    console.log("====================================");
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      size,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <React.Fragment>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <artice className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </artice>
            <artice className="info">
                <h3>info</h3>
            <h6>Price : ${price}</h6>
            <h6>Size : {size} SqFt</h6>
            <h6>Max Capacity :{capacity} {capacity>1?"People":"Person"}</h6>
            <h6>{pets?"Pets are welcome":"The owner doesnt like pets"}</h6>
            <h6>{breakfast?"We will provide you delicious breakfast":"Bring your own breakfast"}</h6>
            </artice>
          </div>
        </section>
        <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
            {extras.map((item,index)=>(<li key={index}>- {item}</li>))}
            </ul>
        </section>
      </React.Fragment>
    );
  }
}
