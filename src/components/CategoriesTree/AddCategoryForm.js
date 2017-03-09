import React, { Component, PropTypes } from 'react';

const propTypes = {
    onAddClick: PropTypes.func
};

class CategoryItem extends Component {
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
        this.props.onAddClick(null, this.state.name);

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

CategoryItem.propTypes = propTypes;

export default CategoryItem;
