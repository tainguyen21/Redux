import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner/Banner";
import Images from "../../../../constants/images";

Main.propTypes = {};

function Main(props) {
  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos"
        backgroundUrl={Images.PINK_BG}
      ></Banner>

      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default Main;
