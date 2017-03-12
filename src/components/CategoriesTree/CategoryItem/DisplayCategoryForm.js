import React, { PropTypes } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import './DisplayCategoryForm.css';

const propTypes = {
    name: PropTypes.string,
    onEditClick: PropTypes.func.isRequired,
    onRemoveClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
};

const DisplayCategoryForm = (props) => (
    <div className='category-item-display'>
        <div className='category-name-wrapper'>
            <span className='category-name'>
            {props.name}
        </span>
            <Button
                bsSize='small'
                onClick={props.onEditClick}
                className='edit-category-button'
            >
                <Glyphicon glyph='pencil' />
            </Button>
        </div>
        <Button
            bsSize='small'
            onClick={props.onRemoveClick}
        >
            <Glyphicon glyph='trash' />
        </Button>
        <Button
            bsSize='small'
            onClick={props.onAddClick}
        >
            <Glyphicon glyph='plus' />
        </Button>
    </div>
);

DisplayCategoryForm.propTypes = propTypes;

export default DisplayCategoryForm;
