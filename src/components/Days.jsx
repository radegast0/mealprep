import React, { useEffect, useState } from 'react'
import moment from 'moment'

function currentMonth() {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Get the first day of the current month
    const startDate = new Date(currentYear, currentMonth, 1);

    // Get the last day of the current month
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    const datesArray = [];

    for (let date = startDate; date <= lastDay; date.setDate(date.getDate() + 1)) {
        datesArray.push(new Date(date));
    }

    return datesArray;
}



  

const Days = (props) => {

    const [main, setMain] = useState({})
    const loaded = useState(false)

    const handleMain = (date, refresh = false) => {
        let data = {
            date: date,
            nextDate: date.clone().add(1, 'days'),
            prevDate: date.clone().subtract(1, 'days'),
            data: {}
        }
        setMain(data)
        props.setDate(date)
        props.setActive(false)
        if(refresh){
            props.handleRefresh()
        }
    }

    const handlePrev = () => {
        if(main.prevDate){
            handleMain(main.prevDate, true)
        }
    }

    const handleNext = () => {
        if(main.nextDate){
            handleMain(main.nextDate, true)
        }
    }

    useEffect(()=>{
        handleMain(moment())
    }, [])
    return (
        <div className='py-8 w-full'>

            <div className="lg:w-10/12 mx-auto flex flex-row gap-4">
                <div onClick={handlePrev} className='mx-4 my-auto cursor-pointer hover:scale-110 transition-all duration-500 text-primary-light'>
                    <svg className="w-10 h-10 rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M30 12 L16 24 2 12"></path></svg>
                </div>
                <div className='flex flex-row gap-1 w-full items-center justify-center'>
                    <div onClick={handlePrev} className='flex-[1_1_25%] hidden lg:flex h-full scale-75 justify-center bg-gray-100/60 hover:bg-gray-100 p-4 rounded-md text-primary-light text-center text-sm hover:scale-100 cursor-pointer transition-all duration-500'>
                        <div className='flex flex-col gap-2 justify-center h-full'>
                            {/* <span className='font-semibold text-xl'>20.05.2023</span> */}
                            <div className='my-5 flex flex-col'>
                                <span className='text-center font-semibold text-5xl my-4'>{main?.prevDate?.date()}</span>
                            </div>
                        </div>
                    </div>
                    <div onClick={props.loadDateData} className='flex-[1_1_50%] bg-gray-100/90 hover:bg-gray-100 p-8 rounded-md text-primary-light text-center shadow-xl hover:scale-110 cursor-pointer transition-all duration-500'>
                        <div className='flex flex-col gap-2 justify-center px-4'>
                            <span className='font-semibold text-xl'>{main?.date?.format("DD MMMM YYYY")} Meals And Calories</span>
                            <div className='my-10 flex flex-col'>
                                {
                                    props?.dayData?.meals?.length > 0 &&
                                    <div className='flex flex-row justify-between'>
                                        <div>
                                            <span>Total {props?.dayData?.meals?.length} Meals</span>
                                        </div>
                                        <div>
                                            <span>Total {props?.dayData?.meals?.reduce((accumulator, currentObject) => { return accumulator + currentObject.calories; }, 0)} Calories</span>
                                        </div>
                                    </div>
                                }
                                <span className='text-center font-semibold text-7xl my-4'>{main?.date?.date()}</span>
                            </div>
                            <div className='flex flex-col w-full justify-center items-center gap-4'>
                                Click to show
                                <div className='animate-bounce'>
                                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M30 12 L16 24 2 12"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div onClick={handleNext} className='flex-[1_1_25%] hidden lg:flex justify-center h-full scale-75 bg-gray-100/60 hover:bg-gray-100 p-4 rounded-md text-primary-light text-center text-sm hover:scale-100 cursor-pointer transition-all duration-500'>
                        <div className='flex flex-col gap-2 justify-center h-full'>
                            <div className='my-5 flex flex-col justify-center items-center gap-4'>
                                <span className='text-center font-semibold text-5xl my-4'>{main?.nextDate?.date()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={handleNext} className='mx-4 my-auto cursor-pointer hover:scale-110 transition-all duration-500 text-primary-light'>
                    <svg className="w-10 h-10 -rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M30 12 L16 24 2 12"></path></svg>
                </div>
            </div>

        </div>
    )
}

export default Days