import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LeagueDetails = () => {
  const [leagues, setLeagues] = useState([]);
  const [leaugueDetails, setLeagueDetails] = useState("eng.1");

  useEffect(() => {
    axios(
      `https://api-football-standings.azharimm.site/leagues/${leaugueDetails}`
    )
      .then((res) => {
        console.log(res);
        setLeagues(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="leagues__container">
      {leagues?.map((league) => (
        <Link to="leagueDetails" key={league.id} className="leagues__details">
          <h2>{league.name}</h2>
          <h2>{league.slug}</h2>
          <h2>{league.abbr}</h2>
          <h2>{league.logos.light}</h2>
        </Link>
      ))}
    </div>
  );
};

export default LeagueDetails;
