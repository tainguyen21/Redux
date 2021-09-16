import Banner from "components/Banner/Banner";
import PhotoForm from "components/PhotoForm/PhotoForm";
import React from "react";
import "./AddEdit.scss";

AddEdit.propTypes = {};

function AddEdit(props) {
  return (
    <div className="photo-edit">
      <Banner title="Your awesome photos" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submit: ", values)}
        />
      </div>
    </div>
  );
}

export default AddEdit;
