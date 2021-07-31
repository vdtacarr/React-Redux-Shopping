import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem,Badge} from "reactstrap";
import { bindActionCreators } from "redux";
import * as CategoryActions from "../../redux/actions/categoryActions";
import * as ProductActions from "../../redux/actions/productActions";


class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
selectCategory=(category) =>{
  this.props.actions.changeCategory(category);
  this.props.actions.getProducts(category.id)
}

  render() {
    return ( 
      <div>
        <h3> Categories</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() =>this.selectCategory(category) }
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        CategoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        CategoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(
        ProductActions.getProducts,
        dispatch
      )
    },
  };
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
