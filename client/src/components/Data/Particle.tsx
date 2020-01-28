import React from "react";

export default function Data(props: any) {
  const color = (particle: number) => {
    if (particle < 10) return 'great';
    if (particle > 10 && particle < 30) return 'not_great';
    if (particle > 30 && particle < 50) return 'not_great_not_terrible';
    if (particle > 50) return 'terrible';
  }

  return (
    <div className="particle">
      <span className={color(props.data)}>{props.data}</span>
      <span className="title">{props.title}</span>
    </div>
  );
}
