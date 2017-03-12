import React, { Component, PropTypes } from 'react';
import { Button, FormControl, Glyphicon, InputGroup } from 'react-bootstrap';
import './EditCategoryForm.css';

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
            <div className='category-item-edit'>
                <InputGroup bsSize='small'>
                    <FormControl
                        type='text'
                        value={this.state.value}
                        onChange={this.handleNameChange}
                    />
                    <InputGroup.Button>
                        <Button
                            onClick={this.props.onSaveClick.bind(null, this.state.value)}
                        >
                            <Glyphicon glyph='ok' />
                        </Button>
                        <Button
                            onClick={this.props.onCancelClick}
                        >
                            <Glyphicon glyph='remove' />
                        </Button>
                    </InputGroup.Button>
                </InputGroup>
            </div>
        );
    }
}

EditCategoryForm.propTypes = propTypes;

export default EditCategoryForm;
