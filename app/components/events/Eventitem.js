import React from 'react'
import Button from '../shared/Button'
const Eventitem = ({ title, date, image, location, id }) => {
    const humanredabledate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
    const address = location.replace(", ", "\n")
    return (
        <div className='flex w-1/2 rounded-xl shadow-xl mx-auto mb-5 p-5 space-x-5'>
            <img src={image} alt="title" className='w-44 h-44 rounded-md object-cover' loading='lazy' />
            <div>
                <p className='font-bold mb-2 text-xl'>{title}</p>
                <time className='font-semibold mb-1 block'>{humanredabledate}</time>
                <address className='font-semibold mb-1 not-italic w-44'>{address}</address>
                <div className='mt-7'>
                    <Button title='event explore' link={`/events/${id}`} />
                </div>
            </div>
        </div>
    )
}

export default Eventitem