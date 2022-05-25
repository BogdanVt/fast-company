import React from "react";
import PropTypes from "prop-types";

const SelectField = ({
    label,
    value,
    onChange,
    defaultOption,
    options,
<<<<<<< HEAD
    error,
    name
=======
    error
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options;

    return (
        <div className="mb-4">
<<<<<<< HEAD
            <label htmlFor={name} className="form-label">
=======
            <label htmlFor="validationCustom04" className="form-label">
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
                {label}
            </label>
            <select
                className={getInputClasses()}
<<<<<<< HEAD
                id={name}
                name={name}
=======
                id="validationCustom04"
                name="profession"
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
<<<<<<< HEAD

=======
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
<<<<<<< HEAD
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    name: PropTypes.string
=======
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
>>>>>>> 9da33f6b79b7dcf4f7b55dbdd848eda6a442934e
};

export default SelectField;
