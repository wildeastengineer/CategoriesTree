import React, { Component, PropTypes } from 'react';

const propTypes = {
    defaultValue: PropTypes.string,
    onSaveClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired
};

class EditCategoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.defaultValue
        };

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleNameChange}
                />
                <button
                    onClick={this.props.onSaveClick.bind(null, this.state.value)}
                >
                    Save
                </button>
                <button
                    onClick={this.props.onCancelClick}
                >
                    Cancel
                </button>
            </div>
        );
    }
}

EditCategoryForm.propTypes = propTypes;

export default EditCategoryForm;
