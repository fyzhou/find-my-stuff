import React, { Component } from "react";
import { connect } from "react-redux";
import ItemView from "../components/item/item-view.component"
import ItemForm from "../components/item/item-form.component"
import { SearchBox } from "../components/search-box/search-box.component"

const mapStateToProps = state => {
  return { items: state.items };
};

class ItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: ''
    };
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField } = this.state;
    const visibleItems = this.props.items.items.filter(item => item.name.includes(searchField));
    return (
      <div className="container">
        <ItemForm />
        <div id="list-item-section">
          <label 
              htmlFor="search-box" 
              className="control-label col-sm-1"
              >Filter: </label>
          <SearchBox 
            placeholder="filter items by name" 
            handleChange={this.onSearchChange}
          />
          <ul>
            {visibleItems.map(el => (
              <li key={el.name}><ItemView item={el}/></li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const ConnectedItemPage = connect(
  mapStateToProps
)(ItemPage);

export default ConnectedItemPage;