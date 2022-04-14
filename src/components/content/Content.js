import React, { useState } from "react";
import "./content.css";
import Leagues from "./leagues/Leagues";
import Standings from "./standings/Standings";

const Content = () => {
  const [activeTab, setActiveTab] = useState(true);
  return (
    <div className="content__container">
      <div className="tabs">
        <div className="tab__leagues" onClick={() => setActiveTab(true)}>
          <h2 style={{ color: activeTab ? "rgb(161, 223, 217)" : null }}>
            Leagues
          </h2>
        </div>
        <div className="tab__standings" onClick={() => setActiveTab(false)}>
          <h2 style={{ color: !activeTab ? "rgb(161, 223, 217)" : null }}>
            Standings
          </h2>
        </div>
      </div>
      {activeTab ? <Leagues /> : <Standings />}
    </div>
  );
};

export default Content;
