import React, { Component } from "react";
import { connect } from "react-redux";
import { Table,Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as ProductActions from "../../redux/actions/productActions";
import * as CartActions from "../../redux/actions/cartActions";


class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = product =>{
      this.props.actions.addToCart({quantity:1,product})
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>ProductName</th>
              <th>UnitPrice</th>
              <th>QuantityPErUNit</th>
              <th>UnitsInStock</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.products.map((product) => (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitsInStock}</td>
                <td>
                    <Button color="success" onClick={this.addToCart(product)} >
                        Sepete Ekle
                    </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(ProductActions.getProducts, dispatch),
      addToCart:bindActionCreators(CartActions.addToCart,dispatch)
    },
  };
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
