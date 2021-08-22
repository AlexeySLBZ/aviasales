import React from "react";
import './Tabs.css';

export default function Tabs({}) {
  return (
    <div className="tabs">
      <button className="tabs__button" value="CАМЫЙ ДЕШЕВЫЙ">CАМЫЙ ДЕШЕВЫЙ</button>
      <button className="tabs__button2" value="CАМЫЙ БЫСТРЫЙ">CАМЫЙ БЫСТРЫЙ</button>
      <button className="tabs__button2" value="ОПТИМАЛЬНЫЙ">ОПТИМАЛЬНЫЙ</button>
    </div>
  )
}
