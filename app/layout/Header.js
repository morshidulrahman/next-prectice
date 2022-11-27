import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-slate-800 p-10 flex justify-between items-center'>
            <Link href="/" className='text-2xl font-bold text-white cursor-pointer'>
                <a className='text-2xl font-bold text-white cursor-pointer'>Next events</a>
            </Link>
            <Link href="/events" >
                <a className='text-2xl font-bold text-white cursor-pointer'>All events</a>
            </Link>
        </div>
    )
}

export default Header