import Banner from "components/Banner/Banner";
import PhotoForm from "components/PhotoForm/PhotoForm";
import { addPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./AddEdit.scss";

AddEdit.propTypes = {};

function AddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(values) {
    return new Promise((resolve) => {
      console.log("Form submit:", values);
      setTimeout(() => {
        const action = addPhoto(values);
        dispatch(action);
        history.push("/photos");
      }, 2000);
    });
  }

  return (
    <div className="photo-edit">
      <Banner title="Your awesome photos" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEdit;
