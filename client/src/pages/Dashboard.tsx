import React, { useState } from "react";
import AirQuality from "../components/AirQuality";
import './Dashboard.css';

export default function Dashboard(props: any) {
  let [theme, setTheme] = useState('light');

  const [themeName, themeTitle] = theme === 'dark' ? ['light', 'Light'] : ['dark', 'Dark']
  return (
    <div className={theme}>
      <div className="titleBar">
        <button onClick={() => setTheme(themeName)}>{themeTitle}</button>
      </div>
      <div className="content">
        <AirQuality />
      </div>
    </div>
  );
}
