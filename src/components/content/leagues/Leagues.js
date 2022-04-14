import React, { useState, useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("https://api-football-standings.azharimm.site/leagues").then(
      (res) => {
        console.log(res);
        setLeagues(res.data.data);
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="leagues__container">
      {loading ? (
        <div>
          <TailSpin color="#fff" height={120} width={120} />
        </div>
      ) : (
        leagues?.map((league) => (
          <Link to="leagueDetails" key={league.id} className="leagues__item">
            <img src={league.logos.light} alt={league.name} />
            <h2>{league.name}</h2>
          </Link>
        ))
      )}
    </div>
  );
};

export default Leagues;
