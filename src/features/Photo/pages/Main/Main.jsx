import Images from "constants/images";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../../components/Banner/Banner";

Main.propTypes = {};

function Main(props) {
  const photos = useSelector((state) => state.photos);

  console.log("List photos: ", photos);

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
