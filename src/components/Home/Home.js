import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import League from "../League/League";
import "./Home.css";

const Home = () => {
  const [leagues, setLeagues] = useState({});
  useEffect(() => {
    const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeagues(data.leagues));
  }, []);

  const leagueArray = Object.values(leagues);

  const leagueData = leagueArray.slice(0, 15);

  return (
    <div className="home">
      <h1>Soccer Sports</h1>
      <Container className="container">
        <Row>
          {leagueData.map((lg) => (
            <League league={lg}></League>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
