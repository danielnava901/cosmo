'use client';

import React, {useState} from 'react';
import meses from "@/lib/meses";
import DefaultMonth from "@/components/calendario/common/DefaultMonth";
import Day from "@/components/calendario/Day";

const Month = () => {
    const realMonth = new Date().getMonth();
    const realDay = new Date().getDate();
    console.log("M", realMonth, "D", realDay);
    let [_currentMonthNum, _setCurrentMonthNum] = useState(new Date().getMonth());
    let [_currentMont, _setCurrentMonth] = useState(meses[_currentMonthNum]);


    return <div className="w-full h-full flex items-center flex ">
        <div className="w-12 flex justify-center items-center cursor-pointer p-2"
             onClick={() => {

            if(_currentMonthNum - 1 >= 0) {
                _setCurrentMonth(meses[_currentMonthNum - 1]);
                _setCurrentMonthNum(_currentMonthNum - 1);
            }else {
                _setCurrentMonth(meses["11"]);
                _setCurrentMonthNum(11);
            }

        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

        </div>
        <div className="w-full flex flex-col justify-center items-center">
            <div><strong className="text-2xl">{_currentMont.name}</strong></div>
            <div className="w-full flex text-xs md:text-lg">
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Domingo</strong>
                </div>
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Lunes</strong>
                </div>
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Martes</strong>
                </div>
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Miércoles</strong>
                </div>
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Jueves</strong>
                </div>
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Viernes</strong>
                </div>
                <div className={`w-2/12 h-fit p-0.5 md:p-2 flex flex-col border border-gray-200`}>
                    <strong>Sábado</strong>
                </div>
            </div>
            {
                _currentMont["days"] ? _currentMont.days.map((week, weekIndex) => {
                    return <div key={weekIndex} className="w-full flex">
                        {
                            week.map((day, dayIndex) => {
                                console.log("isToday", _currentMonthNum, realMonth, day.num, realDay);
                                return  <Day
                                    key={dayIndex}
                                    day={day}
                                    isToday={_currentMonthNum === realMonth && day.num === realDay}
                                    month={_currentMont}
                                />
                            })
                        }
                    </div>
                }) : <DefaultMonth />
            }
        </div>
        <div className="w-12 flex justify-center items-center cursor-pointer p-2" onClick={() => {
            if(_currentMonthNum + 1 <= 11) {
                _setCurrentMonth(meses[_currentMonthNum + 1]);
                _setCurrentMonthNum(_currentMonthNum + 1);
            }else {
                _setCurrentMonth(meses[0]);
                _setCurrentMonthNum(0);
            }

        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>

    </div>
};

export default Month;