import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../store/actions';

const propTypes = {
    onAddClick: PropTypes.func
};

class AddCategoryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleAddClick() {
        this.props.onAddClick(this.state.name, null);

        this.setState({
            name: ''
        });
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    value={this.state.name}
                    onChange={this.handleNameChange}
                />
                <button
                    onClick={this.handleAddClick}
                >
                    Add
                </button>
            </div>
        );
    }
}

AddCategoryForm.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: (name, parent) => {
            dispatch(addCategory(name, parent))
        }
    };
};

export default connect(
    () => ({}),
    mapDispatchToProps
)(AddCategoryForm);
