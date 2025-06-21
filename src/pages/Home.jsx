import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {

  return (
    <Container fluid>
    <Row className="banner-1">
        <Col className="banner-1 title">
          <h5 className="banner-1">SUMMER 2024</h5>
          <h1 className="banner-1">NEW COLLECTION</h1>
          <h4 className="banner-1">shorts, tees, tanks & more!</h4>
          <Button className="banner-1">
            <h3 className="banner-1">SHOP NOW</h3>
          </Button>
        </Col>
        <Col className="banner-1-img-col">
          <img
            src="/banner-1.png"
            alt=""
            className="banner-1 image"
            width="415px"
          />
        </Col>
      </Row>
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
        //future products
      </Row>
    </Container>
  );
};

export default Home;