import React, { useState } from "react";
import PropTypes from "prop-types";
import { validator } from "../../../utils/validator";
import TextArea from "../form/TextArea";

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validatorConfig = {
        content: {
            isRequired: {
                message: "Напишите комментарий"
            }
        }
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const clearForm = () => {
        setData();
        setErrors([]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        clearForm({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>New comment</h2>

            <TextArea
                value={data?.content || ""}
                onChange={handleChange}
                name="content"
                label="Сообщение"
                error={errors.content}
            />

            <button className="btn btn-primary" disabled={!isValid}>
                Создать
            </button>
        </form>
    );
};
AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};
export default AddCommentForm;
