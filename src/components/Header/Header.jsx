import React from "react";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="2">
            <a
              href="google.com"
              className="header__link header__title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Easy front end
            </a>
          </Col>
          <Col xs="2">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
