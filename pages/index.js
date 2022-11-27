import React from 'react'
import EventList from '../app/components/events/EventList'
import { getFeaturedEvents } from "../dummy-data"
const Homepage = () => {
    const featuredData = getFeaturedEvents()
    return (
        <>

            <EventList item={featuredData} />
        </>
    )
}

export default Homepage 