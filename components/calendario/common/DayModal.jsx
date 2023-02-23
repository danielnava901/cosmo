import React, {useEffect, useState} from 'react';

const DayModal = ({show, day, month, onClose = () => {}}) => {
    let [_show, _setShow] = useState(show);

    useEffect(() => {
        console.log("show", show);
        _setShow(show);
    }, [show]);

    return <>
        {_show && day ? <>
            <div className="w-full h-full absolute top-0 right-0 bottom-0 left-0 flex
            justify-center items-center" onClick={() => {onClose(false)}}>
            </div>
            <div className="absolute bg-white shadow flex flex-col w-1/2" style={{margin: "20px auto"}}>
                <div className="rounded-tl-lg rounded-tr-lg
                    flex  items-center p-2 text-sm p-6 bg-teal-500">
                    <span className="text-white mr-4" style={{fontSize: "3.5rem"}}>
                        {day.num}
                    </span>
                    <span className="text-xl text-white uppercase" >{month ? month.name : ""}</span>
                </div>
                <div className="w-full overflow-y-auto p-6 " style={{maxHeight: "500px"}}>
                    <div className={`w-full ${day.birthdays.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Cumpleaños</div>
                        {day.birthdays.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                    <div className={`w-full ${day.iglesia.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Actividades de la iglesia en general</div>
                        {day.iglesia.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                    <div className={`w-full ${day.ninos.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Actividades de los niños</div>
                        {day.ninos.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                    <div className={`w-full ${day.jovenes.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Actividades de los jóvenes</div>
                        {day.jovenes.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                    <div className={`w-full ${day.femenil.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Actividades de la sociedad femenil</div>
                        {day.femenil.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                    <div className={`w-full ${day.varones.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Actividades de lo soc de varones</div>
                        {day.varones.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                    <div className={`w-full ${day.otro.length ? "mb-5" : "hidden"}`}>
                        <div className="font-bold">Otras actividades</div>
                        {day.otro.map((holiday, index) => {
                            return <div key={index} className="text-sm ml-4 flex items-center">🔹 {holiday}</div>
                        })}
                    </div>
                </div>
            </div>
        </> : null}
    </>
};

export default DayModal;