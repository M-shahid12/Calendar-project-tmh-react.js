import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarData from './CalendarData';
import calendarImage from './img/calendarImage.jpg';


function TmhCalendar() {
    const [date, changeDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [userSelectedDate, setUserSelectedDate] = useState(null);
    const [availableDates, setAvailableDates] = useState([]);
    let calendarDates = [];

    useEffect(() => {
        CalendarData[0].availableDays.forEach((item) => {
            calendarDates.push(item.date);
        });
        setAvailableDates(calendarDates);
    }, []);

    function changeValue(val) {
        changeDate(val);
        setUserSelectedDate(val);
    }

    function isDateAvailable(selectedDate) {
        return availableDates.includes(selectedDate.toISOString().split("T")[0]);
    }

    function tileContent({ date, view }) {
        if (view === "month") {
            const dateStr = date.toISOString().split("T")[0];
            const isSelected = selectedDate && dateStr === selectedDate.toISOString().split("T")[0];
            const isUserSelected = userSelectedDate && dateStr === userSelectedDate.toISOString().split("T")[0];
            const isAvailable = isDateAvailable(date);

            return (
                <div className={`day-tile ${isSelected ? "selected-day" : ""}`}>
                    {isAvailable && !isUserSelected && <div className="available-dot" />}
                </div>
            );
        }
    }



    return (
        <div className="tmh-calendar-container">
            <style>
                {`
              
                    .tmh-calendar-container {
                        width:20rem;
                        height:5rem;
                        border-color:gray;
                    
                        margin: 0 auto;
                        font-family: 'Arial', sans-serif;
                    }

                   
                    .calendar-header {
                        text-align: center;
                        margin-top:5px;
                        margin-bottom: 5px;

                        color:red
                    }

                    .available-dot {
                        width: 10px;
                        height: 10px;
                        background-color: green;
                        border-radius: 50%;
                        margin: auto;
                    }

                    .day-tile {
                        position: relative;
                        height: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        color:Red;
                        transition: background-color 0.3s;
                    }
        .design img{
                        display:flex;
                        width:20rem;
                        height:8rem;
                        
                       
                    }

                    .day-tile:hover {
                        background-color: #f0f0f0;
                    }

                    .selected-day {
                        background-color: #e6f7ff;
                        border-radius: 50%;
                    }
                `}
            </style>
            <h3 className="calendar-header">

                Create a calendar in React JS
            </h3>
            <h2 className="design">
                <img src={calendarImage} alt="" />
            </h2>

            <Calendar onChange={changeValue} value={date} tileContent={tileContent} />
            <p>The selected date is - {date.toLocaleDateString()}</p>
            {isDateAvailable(date) ? (
                <p>This person is available on {date.toLocaleDateString()}.</p>
            ) : (
                <p>This person is not available on {date.toLocaleDateString()}.</p>
            )}
        </div>
    );
}

export default TmhCalendar;
