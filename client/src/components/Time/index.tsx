import React, { useState } from "react";
import './Time.css';

const formatDate = (now: Date = new Date()) => {
  let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours()
  let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes()

  return `${hours}:${minutes}`
}

export default function Time() {
  let now = new Date()
  const [time, updateTime] = useState(formatDate(now))

  const timeout = (60 - now.getSeconds()) * 1000
  setTimeout(() => updateTime(formatDate()), timeout)

  return (
    <div className="time">{time}</div>
  );
}
