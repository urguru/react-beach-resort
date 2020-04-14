import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import RoomsContainer from '../Components/RoomsContainer'
export const Rooms = () => {
    return (
      <React.Fragment>
        <Hero hero="roomsHero">
          <Banner title="Our Rooms">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer/>
      </React.Fragment>
    );
}
