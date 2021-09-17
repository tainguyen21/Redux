import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputField/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField/RandomPhotoField";
import SelectField from "custom-fields/SelectField/SelectField";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup } from "reactstrap";
import "./PhotoForm.scss";

PhotoForm.propTypes = {};

function PhotoForm() {
  const initialValues = {
    title: "",
    category: "",
    photo: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Submit: ", values)}
    >
      {(formikProps) => {
        //const { values, errors, touched } = formikProps;

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="category"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary" className="my-btn">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
