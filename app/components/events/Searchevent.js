import React from 'react'
import Button from '../shared/Button'
import { useRef } from 'react'
const Searchevent = ({ onsearch }) => {
    const monthref = useRef()
    const yearref = useRef()
    const submithandeler = (e) => {
        e.preventDefault()
        const selectedyear = yearref.current.value
        const selectedmonth = monthref.current.value

        onsearch(selectedyear, selectedmonth)
    }
    return (
        <div>
            <form onSubmit={submithandeler}>
                <div className='w-[50%] mx-auto p-5 bg-slate-300 rounded-md flex gap-5 justify-between items-center mt-5'>
                    <div>
                        <label htmlFor="Year" className='mr-3 font-bold text-lg'>Year</label>
                        <select className='rounded-md px-3 py-1 border-none' ref={yearref}>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="Month" className='mr-3 font-bold text-lg'>Month</label>
                        <select className='rounded-md px-3 py-1 border-none' ref={monthref}>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">Agust</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                    </div>
                    <div>
                        <Button title='filterd' />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchevent