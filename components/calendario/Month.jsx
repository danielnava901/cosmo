'use client';

import React, {useEffect, useState} from 'react';
import meses from "@/lib/meses";
import DefaultMonth from "@/components/calendario/common/DefaultMonth";
import Day from "@/components/calendario/Day";
import DayModal from "@/components/calendario/common/DayModal";

const Month = () => {
    let [realMonth] = useState(new Date().getMonth());
    let [realDay] = useState(new Date().getDate());
    let [_currentMonthNum, _setCurrentMonthNum] = useState(new Date().getMonth());
    let [_currentMont, _setCurrentMonth] = useState(meses[_currentMonthNum]);
    let [_selectedDay, _setSelectedDay] = useState(null);
    let [showDayModal, setShowDayModal] = useState(null);


    useEffect(() => {
        setShowDayModal(!!_selectedDay)
    }, [_selectedDay])

    return <div className="w-full h-full flex items-center flex relative" >
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
            <table className="table-fixed w-full" >
                <thead>
                <tr className="text-xs lg:text-lg">
                    <th className={``}>
                        <strong>Domingo</strong>
                    </th>
                    <th className={``}>
                        <strong>Lunes</strong>
                    </th>
                    <th className={``}>
                        <strong>Martes</strong>
                    </th>
                    <th className={``}>
                        <strong>Miércoles</strong>
                    </th>
                    <th className={``}>
                        <strong>Jueves</strong>
                    </th>
                    <th className={``}>
                        <strong>Viernes</strong>
                    </th>
                    <th className={``}>
                        <strong>Sábado</strong>
                    </th>
                </tr>
                </thead>
                <tbody style={{
                    backgroundColor: _currentMont.main_color
                }}>
                {
                    _currentMont["days"] ? _currentMont.days.map((week, weekIndex) => {
                        return <tr key={weekIndex} style={{height: "100px"}}>
                            {
                                week.map((day, dayIndex) => {

                                    return  <td key={dayIndex}
                                                className={`
                                                border border-slate-300
                                                ${_currentMonthNum === realMonth && day.num === realDay ? 
                                                    "bg-gray-200" : ""}`}
                                        style={{
                                            backgroundColor: day.other_month ?
                                                    "rgba(127,127,127,0.2)" : _currentMont.main_color
                                    }}
                                    >
                                        <Day
                                            key={dayIndex}
                                            day={day}
                                            isToday={_currentMonthNum === realMonth && day.num === realDay}
                                            month={_currentMont}
                                            onClick={(innerDay)=>{
                                                _setSelectedDay(innerDay)
                                            }}
                                        />
                                    </td>
                                })
                            }
                        </tr>
                    }) : <DefaultMonth />
                }
                </tbody>
            </table>

            <DayModal day={_selectedDay}
                      month={_currentMont}
                      show={showDayModal} onClose={() =>{
                _setSelectedDay(null);
            }} />
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