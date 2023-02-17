import React from 'react';

const Day = ({day, month, isToday}) => {
    return <div className={`w-2/12 h-28 p-2 flex flex-col 
    border flex flex-col ${isToday ? "bg-gray-200" : ''}`}
    style={{
        borderColor: `${day?.other_month ? 'gray' : month.main_color}`,
        opacity: `${day?.other_month ? '0.2' : '1'}`,
    }}
    >
        <div>
            <span>{day.num}</span>
        </div>
    </div>
};


export default Day;