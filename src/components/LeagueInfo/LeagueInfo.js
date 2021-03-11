import React from "react";
import { useParams } from "react-router";
import "./LeagueInfo.css";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarker,
  faFlag,
  faFutbol,
  faMars,
  faGlobe,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const LeagueInfo = (props) => {
  const { idLeague } = useParams();
  const [leagueInfo, setLeagueInfo] = useState([]);
  const {
    intFormedYear,
    strGender,
    strCountry,
    strSport,
    strLeague,
    strBadge,
    strBanner,
    strFanart2,
    strFanart4,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strYoutube,
    strWebsite,
    strRSS,
  } = leagueInfo;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLeagueInfo(data.leagues[0]);
      });
  }, [idLeague]);
  console.log(leagueInfo);
  return (
    <Container fluid className="info" style={{ backgroundColor: "whitesmoke" }}>
      <Row className="bg-img">
        <Col>
          <img
            className="col-lg-3 col-3 col-sm-3 col-md-3 "
            src={strBadge}
            alt=""
          />
          <img
            className="col-lg-6 col-6 col-sm-6 col-md-6"
            src={strBanner}
            alt=""
          />
        </Col>
      </Row>
      <Row className=" mx-md-auto mx-sm-auto mx-auto">
        <Col className="col-lg-12 col-12 col-sm-12 col-md-12">
          <Card
            className="d-lg-flex flex-lg-row  mx-auto m-5 p-3"
            style={{ color: "#603F83FF", backgroundColor: "#C7D3D4FF" }}
          >
            {strGender === "Male" ? (
              <Card.Img
                className="col-lg-6 col-12 col-sm-12 col-md-12 "
                variant="top"
                src={strFanart2}
                alt="Male-Image"
              />
            ) : (
              <Card.Img
                className="col-lg-6 col-12 col-sm-12 col-md-12 "
                variant="top"
                src={strFanart4}
                alt="Female-Image"
              />
            )}
            <Card.Body className="col-lg-6 col-12 col-sm-12 col-md-12 ">
              <Card.Title>{strLeague}</Card.Title>

              <Card.Text>
                <FontAwesomeIcon className="icon mr-2" icon={faMapMarker} />
                Founded: {intFormedYear}
              </Card.Text>

              <Card.Text>
                <FontAwesomeIcon className="icon mr-2" icon={faFlag} />
                Country: {strCountry}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon className="icon mr-2" icon={faFutbol} />
                Sports Type: {strSport}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon className="icon mr-2" icon={faMars} />
                Gender: {strGender}
              </Card.Text>
              <Card.Text>
                <FontAwesomeIcon className="icon mr-2" icon={faGlobe} />
                Website: {strWebsite}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <p>
        <small>
          <b>{strDescriptionEN}</b>
        </small>
      </p>

      <a href={`https://${strFacebook}`}>
        <FontAwesomeIcon className="icon mr-2" icon={faFacebook} />
      </a>
      <a href={`https://${strTwitter}`}>
        <FontAwesomeIcon className="icon mr-2" icon={faTwitter} />
      </a>
      <a href={`https://${strYoutube}`}>
        <FontAwesomeIcon className="icon mr-2" icon={faYoutube} />
      </a>
      <a href={`https://${strRSS}`}>
        <FontAwesomeIcon className="icon mr-2 p-1" icon={faRss} />
      </a>
    </Container>
  );
};

export default LeagueInfo;
