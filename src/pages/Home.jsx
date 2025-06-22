import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DesktopBanner from "../components/DesktopBanner.jsx";
import MobileBanner from "../components/MobileBanner.jsx";
import "./Home.css";

const Home = () => {

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);

    const handleResize = () => {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    {windowDimension < 1050 ?
      <MobileBanner/>
      :
      <DesktopBanner/>
      }
    <Container fluid className="home-container">
      <Row className="categories-title">
        <h3 className="categories-title">shop by category</h3>
        <h6 className="categories-title">whatcha lookin' for?</h6>
      </Row>
      <Row className="categories-row">
        <Col className="categories shirts-col">
          <a href="#shirts">
            <img src="/shirts.png" alt="" className="shirts" />
          </a>
        </Col>
        <Col className="categories shorts-col">
          <a href="#shorts">
            <img src="/shorts.png" alt="" className="shorts" />
          </a>
        </Col>
        <Col className="categories hats-col">
          <a href="#hats" className="hats-link">
            <img src="/hats.png" alt="" height="232px" className="hats" />
          </a>
          <a href="#athleisure" className="athleisure-link">
            <img
              src="/athleisure.png"
              alt=""
              height="232px"
              className="athleisure"
            />
          </a>
        </Col>
      </Row>
      <Row className="best-sellers">
        <h3 className="best-sellers">best sellers</h3>
        <h6 className="best-sellers">get 'em while you can</h6>
      </Row>
      <Row className="home-products-row">
      </Row>
    </Container>
    </>
  );
};

export default Home;