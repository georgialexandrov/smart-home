import React from "react";
import './style.css'

export default function Data(props: any) {
  return (
    <div className="humidity">
      <span role="img" aria-label='humidity'>💦</span>{props.data}
    </div>
  );
}


