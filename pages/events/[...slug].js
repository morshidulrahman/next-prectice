import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import EventList from '../../app/components/events/EventList'
import Resultitems from '../../app/components/events/Resultitems'
import Button from '../../app/components/shared/Button'
import { DUMMY_EVENTS, getFilteredEvents } from '../../dummy-data'
const Filteredevents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = DUMMY_EVENTS.filter((x) => {
    let date = new Date(x.date)
    return date.getFullYear() === numYear && date.getMonth() === numMonth - 1
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className='mx-auto w-1/2 mt-5 bg-slate-800 text-white p-10 rounded-lg'>
        <p className='text-xl font-bold'>No events found for the chosen filter!</p>
        <div className='center mt-8'>
          <Button link='/events' title='Show All Events' />
        </div>
      </div>
    );
  }
  const date = new Date(numYear, numMonth - 1)

  return (
    <div>
      <Resultitems date={date} />
      <EventList item={filteredEvents} />
    </div>
  )
}

export default Filteredevents 