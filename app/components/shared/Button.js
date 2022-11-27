import React from 'react'
import Link from 'next/link'
const Button = ({ title, link, onClick }) => {
    if (link) {
        return (
            <Link href={link}>
                <a className="bg-emerald-500 px-5 py-3 rounded-md cursor-pointer text-white font-semibold capitalize" >{title}</a>
            </Link>
        )
    }
    return (
        <button className="bg-emerald-500 p-2 px-5  rounded-md cursor-pointer text-white font-semibold capitalize" onClick={onClick}>{title}</button>
    )
}

export default Button