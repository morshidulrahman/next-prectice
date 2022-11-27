import React from 'react'

const EventDetailCard = ({ date, location, image }) => {
    const humanredabledate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    })
    const address = location.replace(", ", "\n")
    return (
        <div className="bg-slate-800 w-[40%] rounded-md  mx-auto p-10 flex gap-8 -mt-10 z-10">
            <img src={image} alt="" className='w-44 h-44 rounded-full p-1 bg-white object-cover' />
            <div className='mt-8'>
                <p className='text-white text-semibold mb-2'>{humanredabledate}</p>
                <p className='text-white text-semibold mb-2 w-36 leading-7'>{address}</p>
            </div>
        </div>
    )
}

export default EventDetailCard