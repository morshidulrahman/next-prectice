import { useRouter } from 'next/router'
import React from 'react'
import EvenstDetails from '../../app/components/events/EvenstDetail'
const EventDetail = () => {
    const router = useRouter()
    const id = router.query.id
    return (
        <div>
            <EvenstDetails id={id} />
        </div>
    )
}

export default EventDetail