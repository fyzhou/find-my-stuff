import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../../redux/ducks/redux";
import Item from "../../../model/ItemModel"

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
  };
}

class ItemForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAddItem(event) {
    event.preventDefault();
    const { name, description } = this.state;
    let item = Item.create(name, description)
    this.props.addItem(item)
    this.setState({ name: "", description: ""})
  }

  render() {
    const { name, description } = this.state;
    return (
    <div className="container">
      <form onSubmit={this.handleAddItem}>
        <div>
          <div className="row">
            <label 
              htmlFor="name" 
              className="control-label col-sm-1"
              >Name: </label>
            <input
              className="col-sm-11"
              type="text"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <label 
              htmlFor="description" 
              className="control-label col-sm-1"
              >Description: </label>
            <textarea
              className="col-sm-11"
              type="text"
              id="description"
              value={description}
              onChange={this.handleChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button 
              type="submit" 
              className="btn btn-primary"
              onClick={this.handleAddItem}
            >SAVE</button>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

const ConnectedItemForm = connect(
  null,
  mapDispatchToProps
)(ItemForm);

export default ConnectedItemForm;