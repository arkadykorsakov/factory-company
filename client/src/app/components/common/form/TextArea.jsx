import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ label, onChange, error, value, name }) => {
    const getInputClasses = (error) => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) =>
        onChange({
            name: target.name,
            value: target.value
        });
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <textarea
                name={name}
                onChange={handleChange}
                className={getInputClasses(error)}
                id="content"
                rows="3"
                value={value}
            ></textarea>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};
TextArea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextArea;
