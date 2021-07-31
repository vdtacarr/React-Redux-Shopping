import { combineReducers } from "redux";
import CategoryList from "../../components/categories/CategoryList";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from './categoryListReducer'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer'
const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default rootReducer;