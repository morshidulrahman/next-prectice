import React from 'react'
import Eventitem from './Eventitem'

const EventList = ({ item }) => {
    return (
        <div className='mt-10'>
            {item.map((items, index) => (
                <Eventitem {...items} key={index} />
            ))}
        </div>
    )
}

export default EventList