'use client';

import React, {useEffect, useState} from 'react';
import meses from "@/lib/meses";
import DefaultMonth from "@/components/calendario/common/DefaultMonth";

const Month = () => {
    let [_currentMonthNum, _setCurrentMonthNum] = useState(new Date().getMonth());
    let [_currentMont, _setCurrentMonth] = useState(meses[_currentMonthNum]);


    return <div className="w-full h-full flex items-center flex">
        <div className="border border-red-500 cursor-pointer p-2" onClick={() => {
            console.log("prev", _currentMont)
            if(_currentMonthNum - 1 >= 0) {
                _setCurrentMonth(meses[_currentMonthNum - 1]);
                _setCurrentMonthNum(_currentMonthNum - 1);
            }

        }}>previous</div>
        <div className="w-full flex flex-col justify-center items-center">
            <div><strong className="text-2xl">{_currentMont.name}</strong></div>
            <div className="w-full flex">
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Domingo</strong>
                </div>
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Lunes</strong>
                </div>
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Martes</strong>
                </div>
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Miércoles</strong>
                </div>
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Jueves</strong>
                </div>
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Viernes</strong>
                </div>
                <div className={`w-2/12 p-2 flex flex-col border border-gray-200`}>
                    <strong>Sábado</strong>
                </div>
            </div>
            {
                _currentMont["days"] ? _currentMont.days.map((week, weekIndex) => {
                    return <div key={weekIndex} className="w-full flex">
                        {
                            week.map((day, dayIndex) => {
                                return <div key={dayIndex}
                                className={`w-2/12 h-28 p-2 flex flex-col border border-gray-400 
                                    ${day?.other_month ? "other_month bg-gray-100 opacity-30" : ""}
                                `}>
                                    <div>{day.num}</div>
                                </div>
                            })
                        }
                    </div>
                }) : <DefaultMonth />
            }
        </div>
        <div className="border border-cyan-300 cursor-pointer p-2" onClick={() => {
            console.log("curr", _currentMonthNum);
            if(_currentMonthNum + 1 <= 11) {
                _setCurrentMonth(meses[_currentMonthNum + 1]);
                _setCurrentMonthNum(_currentMonthNum + 1);
            }

        }}>next</div>

    </div>
};

export default Month;