import React from 'react'
import Button from '../shared/Button'

const Resultitems = ({ date }) => {

    const humanredabledate = new Date(date).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    })

    return (
        <div className='mx-auto w-72 mt-5 flex items-center flex-col'>
            <h1 className='text-2xl font-bold text-slate-800 mb-4'>Events in {humanredabledate}</h1>
            <Button title='show all events' link="/events" />
        </div>
    )
}

export default Resultitems