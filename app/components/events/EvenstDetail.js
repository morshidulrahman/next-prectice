import React from 'react'
import { DUMMY_EVENTS } from '../../../dummy-data'
import EventDetailCard from './EventDetailCard'
const EvenstDetails = ({ id }) => {

    const events = DUMMY_EVENTS.filter(x => x.id === id)
    return (
        <>
            {events.map((item, index) => (
                <div key={index} >
                    <div className='bg-teal-600'>
                        <h1 className='text-center text-4xl font-bold pt-10 pb-20 text-white capitalize'> {item.title}</h1>
                    </div>
                    <EventDetailCard {...item} />
                    <div className='w-[44%] mx-auto mt-6'>
                        <p className='text-lg font-bold mt-2'>{item.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default EvenstDetails