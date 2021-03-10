import { Button, Col } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";
import "./League.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const League = (props) => {
  const { strLeague, strLeagueAlternate, strSport, idLeague } = props.league;
  const history = useHistory();
  const handleClick = (idLeague) => {
    history.push(`leagues/${idLeague}`);
  };
  return (
    <Col
      style={{ color: "#603F83FF", backgroundColor: "#C7D3D4FF" }}
      className=" border border-info m-lg-4 ml-lg-5 m-1 m-sm-2 m-md-3 p-lg-4 p-1 p-sm-2 p-md-3 col-lg-3 col-12 col-sm-12 col-md-6"
    >
      <h3>{strLeague}</h3>
      <p>{strLeagueAlternate}</p>
      <p>{strSport}</p>
      <Button
        onClick={() => {
          handleClick(idLeague);
        }}
        variant="info"
      >
        Explore
        <FontAwesomeIcon className="icon ml-2" icon={faArrowRight} />
      </Button>
    </Col>
  );
};

export default League;
