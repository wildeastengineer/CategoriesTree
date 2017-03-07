import React, { Component, PropTypes } from 'react';

const propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.array,
    onNameChange: PropTypes.func,
    onRemoveClick: PropTypes.func,
    onAddClick: PropTypes.func,
};

class CategoryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tempName: this.props.name,
            editMode: false
        };

        this.handleEditButtonClick = this.handleEditButtonClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this);
        this.handleCancelButtonClick = this.handleCancelButtonClick.bind(this);
    }

    handleEditButtonClick() {
        this.setState({
            editMode: true
        });
    }

    handleNameChange(event) {
        this.setState({
            tempName: event.target.value
        });
    }

    handleSaveButtonClick() {
        this.props.onNameChange(this.props.id, this.state.tempName);

        this.setState({
            editMode: false,
            tempName: this.props.name
        });
    }

    handleCancelButtonClick() {
        this.setState({
            editMode: false,
            tempName: this.props.name
        });
    }

    render() {
        return (
            <li>
                {this.state.editMode ? (
                        <div>
                            <input
                                type='text'
                                value={this.state.tempName}
                                onChange={this.handleNameChange}
                            />
                            <button
                                onClick={this.handleSaveButtonClick}
                            >
                                Save
                            </button>
                            <button
                                onClick={this.handleCancelButtonClick}
                            >
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <div>
                            {this.props.name}
                            <button
                                onClick={this.handleEditButtonClick}
                            >
                                Edit
                            </button>
                            <button
                                onClick={this.props.onRemoveClick.bind(null, this.props.id)}
                            >
                                Remove
                            </button>
                            <button
                                onClick={this.props.onAddClick.bind(null, this.props.id, null)}
                            >
                                Add
                            </button>
                        </div>
                    )}

                {this.props.children && (
                    <ul>
                        {this.props.children.map((category) => (
                            <CategoryItem
                                key={category.id}
                                {...category}
                                onNameChange={this.props.onNameChange}
                                onRemoveClick={this.props.onRemoveClick}
                                onAddClick={this.props.onAddClick}
                            />
                        ))}
                    </ul>
                )}
            </li>
        );
    }
}

CategoryItem.propTypes = propTypes;

export default CategoryItem;
