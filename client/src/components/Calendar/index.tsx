import React from "react";
import './Calendar.css';

const daysOfWeek = ['Неделя', 'Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя']
const monthsOfYear = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Ноември', 'Октомври', 'Декември']

export default function Calendar() {
  const today = () => {
    let today = new Date()
    return {
      date: today.getDate(),
      day: daysOfWeek[today.getDay()],
      month: monthsOfYear[today.getMonth()],
      year: today.getFullYear()
    }
  }

  return (
    <div className="calendar">
      <span className="day">{today().day}</span>
      <span className="date">{today().date}</span>
      <span className="month">{today().month}</span>
      <span className="year">{today().year}</span>
    </div>
  );
}



