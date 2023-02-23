import React, {useEffect, useState} from 'react';
import DayModal from "@/components/calendario/common/DayModal";

const Day = ({day, month, isToday, onClick}) => {
    let [_isToday, _setIsToday] = useState(0);
    let [showModal, setShowModal] = useState(false);

    useEffect(() => {
        _setIsToday(isToday);
    }, [isToday]);


    return <div className={`p-2 flex flex-col text-xs md:text-lg
        flex flex-col `}
        style={{
            opacity: `${day?.other_month ? '0.2' : '1'}`,
        }}
        onClick={() => {
            if(
                day.birthdays.length ||
                day.ninos.length ||
                day.jovenes.length ||
                day.femenil.length ||
                day.varones.length ||
                day.iglesia.length ||
                day.otro.length
            ) {
                onClick(day);
            }

        }}
    >
        <div className="w-full h-full overflow-y-auto" style={{maxHeight: "100px"}}>
            <span>{day.num}</span>
            <div className={`flex items-center ${day.birthdays.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.birthdays.length ? <span className="text-lg mr-1">🎂</span> : null
                    }
                </span>
                <div className={`lg:flex flex-col hidden ${day.birthdays.length ? "mb-2 cursor-pointer" : ""}`}>
                    {
                        day.birthdays.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.birthdays.length}</span> :
                            day.birthdays.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
            <div className={`flex items-center ${day.ninos.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.ninos.length ? <span className="text-lg mr-1">🎈</span> : null
                    }
                </span>
                <div className={`lg:flex flex-col hidden ${day.ninos.length ? "mb-2 cursor-pointer" : ""}`}>
                    {
                        day.ninos.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.ninos.length}</span> : day.ninos.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
            <div className={`flex items-center ${day.jovenes.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.jovenes.length ? <span className="text-lg mr-1">🙍‍</span> : null
                    }
                </span>
                <div className={`lg:flex flex-col hidden ${day.jovenes.length ? "mb-2 cursor-pointer" : 0}`}>
                    {
                        day.jovenes.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.jovenes.length}</span> : day.jovenes.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
            <div className={`flex items-center ${day.femenil.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.femenil.length ? <span className="text-lg mr-1">🙍‍</span> : null
                    }
                </span>
                <div className={`lg:flex flex-col hidden ${day.femenil.length ? "mb-2 cursor-pointer" : 0}`}>
                    {
                        day.femenil.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.femenil.length}</span> : day.femenil.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
            <div className={`flex items-center ${day.varones.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.varones.length ? <span className="text-lg mr-1">🧔‍</span> : null
                    }
                </span>
                <div className={`lg:flex flex-col hidden ${day.varones.length ? "mb-2 cursor-pointer" : 0}`}>
                    {
                        day.varones.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.varones.length}</span> : day.varones.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
            <div className={`flex items-center ${day.iglesia.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.iglesia.length ? <span className="text-lg mr-1">⛪</span> : null
                    }
                </span>
                <div className="lg:flex flex-col hidden">
                    {
                        day.iglesia.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.iglesia.length}</span> : day.iglesia.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
            <div className={`flex items-center ${day.otro.length ? "mb-2 cursor-pointer" : ""}`}>
                <span>
                    {
                        day.otro.length ? <span className="text-lg mr-1">🙂</span> : null
                    }
                </span>
                <div className={`lg:flex flex-col hidden ${day.otro.length ? "mb-2 cursor-pointer" : 0}`}>
                    {
                        day.otro.length > 2 ? <span className="text-xs flex justify-center items-center
                        p-2 border border-red-500 rounded-full" style={{width: "22px", height: "22px"}}>
                            {day.otro.length}</span> : day.otro.map((holiday, index) => {
                            return <span className="text-xs text-ellipsis overflow-hidden" key={index}>
                            {holiday}
                        </span>;
                        })
                    }
                </div>
            </div>
        </div>
    </div>
};


export default Day;