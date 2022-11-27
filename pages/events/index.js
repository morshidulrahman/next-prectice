
import { useRouter } from 'next/router'
import React from 'react'
import EventList from '../../app/components/events/EventList'
import Searchevent from '../../app/components/events/Searchevent'
import { DUMMY_EVENTS } from '../../dummy-data'
const AllEventspage = () => {
    const router = useRouter()
    const findevents = (year, month) => {
        router.push(`/events/${year}/${month}`)
    }
    return (
        <>
            <Searchevent onsearch={findevents} />
            <EventList item={DUMMY_EVENTS} />
        </>
    )
}

export default AllEventspage