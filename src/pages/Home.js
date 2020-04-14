import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/Services";
import FeaturedRooms from '../Components/FeaturedRooms'
export const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Luxurious rooms"
          subtitle="deluxe rooms starting ay $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
    </React.Fragment>
  );
};
