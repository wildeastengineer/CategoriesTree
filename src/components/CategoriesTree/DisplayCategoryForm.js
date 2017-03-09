import React, { PropTypes } from 'react';

const propTypes = {
    name: PropTypes.string,
    onEditClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
};

const DisplayCategoryForm = (props) => (
    <div>
        {props.name}
        <button
            onClick={props.onEditClick}
        >
            Edit
        </button>
        <button
            onClick={props.onRemoveClick}
        >
            Remove
        </button>
        <button
            onClick={props.onAddClick}
        >
            Add
        </button>
    </div>
);

DisplayCategoryForm.propTypes = propTypes;

export default DisplayCategoryForm;
