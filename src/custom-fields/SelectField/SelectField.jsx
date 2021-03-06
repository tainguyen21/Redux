import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  options: [],
  disabled: false,
};

function SelectField(props) {
  const { field, form, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find((option) => option.value === value);
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleChangeOption = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };

    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Select
        id={name}
        name={name}
        {...field}
        value={selectedOption}
        onChange={handleChangeOption}
        placeholder={placeholder}
        options={options}
        disabled={disabled}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
