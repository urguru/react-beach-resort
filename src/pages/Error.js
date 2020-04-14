import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
export const Error = (props) => {
    const location=props.location.pathname
    return (
        <Hero>
            <Banner title="Error 404" subtitle={`The page that you were trying to look for ${location} cannot be found`}>
            <Link to="/" className="btn-primary">
                Back to Home
            </Link>
            </Banner>
        </Hero>
    )
}
