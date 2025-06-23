import { useState, useEffect } from "react";
import { Col, Container, Navbar, Nav, Row } from "react-bootstrap";
import "./MobileNavigationBar.css";

const MoblieNavigationBar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleOpenMenu = () => setShowMenu(true);
  
  const handleCloseSearch = () => setShowSearch(false);
  const handleOpenSearch = () => setShowSearch(true);
  return (
      <Navbar className="mobile-navbar">
        <Container fluid className="mobile-navigation-container">
          <Col className={showSearch ? "mobile-search-col" : "mobile-logo-col"}>
          {showSearch ? 
          <>
            <Nav.Link className="mobile-search-btn" >
            <img
              src="/search.svg"
              alt="search"
              className="mobile-search-svg"
              />
            </Nav.Link>
            <input type="text" className="mobile-search-bar" placeholder="search"
                  onReset={(e) => console.log(e)}
                  onChange={(e) => {
                    setSearchState(e.target.value);
                  }}
                  onKeyUp={(e) => e.key === "Enter" && handleSearch(e)}/>
            <img src="/close.svg" alt="close" className="mobile-close-search" onClick={handleCloseSearch}/>
          </>
            :
            <Navbar.Brand href="/" className="mobile-logo">
              <p className="mobile-logo-text">melon</p>
              <img
                src="/melon-icon.svg"
                alt="logo"
                className="mobile-logo-svg"
              />
            </Navbar.Brand>
          }
          </Col>
          <Col className="mobile-links-col" style={{display: showSearch ? "none" : "inherit"}}>
            <Nav.Link className="mobile-navbar-link">
              <img
                src="/search.svg"
                alt="search"
                className="mobile-search-svg"
                onClick={handleOpenSearch}
              />
            </Nav.Link>
            <Nav.Link className="mobile-navbar-link">
              <img
                src="/account.svg"
                alt="account"
                className="mobile-account-svg"
              />
            </Nav.Link>
            <Nav.Link className="mobile-navbar-link">
              <img
                src="/favorite.svg"
                alt="favorites"
                className="mobile-favorite-svg"
              />
            </Nav.Link>
            <Nav.Link className="mobile-navbar-link"  href="/cart">
              <img src="/cart.svg" alt="cart" className="mobile-cart-svg" />
              {" "}0
            </Nav.Link>
            <Nav.Link className="mobile-navbar-link" onClick={() => showMenu ? handleCloseMenu() : handleOpenMenu()}>
              {showMenu ? 
              <img src="/close.svg" alt="close" className="mobile-close-svg" />
              :
              <img src="/menu.svg" alt="more" className="mobile-menu-svg" />
              }
            </Nav.Link>
          </Col>
        </Container>
        <Container className="mobile-dropdown" style={{display: showMenu ? "flex" : "none"}}>
          <Nav.Link className="mobile-dropdown-link">
            <Row className="mobile-dropdown-row">
              new arrivals
              <img src="/chevron_forward.svg" alt=">" className="forward-svg" />
            </Row>
          </Nav.Link>
          <Nav.Link className="mobile-dropdown-link" href="/browse/all?g=men">
            <Row className="mobile-dropdown-row">
              men
              <img src="/chevron_forward.svg" alt=">" className="forward-svg" />
            </Row>
          </Nav.Link>
          <Nav.Link className="mobile-dropdown-link"  href="/browse/all?g=women">
            <Row className="mobile-dropdown-row">
              women
              <img src="/chevron_forward.svg" alt=">" className="forward-svg" />
            </Row>
          </Nav.Link>
          <Nav.Link className="mobile-dropdown-link" href="/browse/accessories">
            <Row className="mobile-dropdown-row">
              accessories
              <img src="/chevron_forward.svg" alt=">" className="forward-svg" />
            </Row>
          </Nav.Link>
          <Nav.Link className="mobile-dropdown-link" href="/browse/shoes">
            <Row className="mobile-dropdown-row">
              shoes
              <img src="/chevron_forward.svg" alt=">" className="forward-svg" />
            </Row>
          </Nav.Link>
          <Nav.Link className="mobile-dropdown-link">
            <Row className="mobile-dropdown-row">
              sale
              <img src="/chevron_forward.svg" alt=">" className="forward-svg" />
            </Row>
          </Nav.Link>
        </Container>
      </Navbar>
  );
};

export default MoblieNavigationBar;
