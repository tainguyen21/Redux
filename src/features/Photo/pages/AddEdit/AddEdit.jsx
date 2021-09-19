import Banner from "components/Banner/Banner";
import PhotoForm from "components/PhotoForm/PhotoForm";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { randomNumber } from "utils/common";
import "./AddEdit.scss";

AddEdit.propTypes = {};

function AddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editedPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  const initialValues = isAddMode
    ? {
        title: "",
        category: "",
        photo: "",
      }
    : editedPhoto;

  function handleSubmit(values) {
    return new Promise((resolve) => {
      console.log("Form submit:", values);
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
      }, 2000);
    });
  }

  return (
    <div className="photo-edit">
      <Banner title="Your awesome photos" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEdit;
