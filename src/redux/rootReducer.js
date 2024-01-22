import { combineReducers } from "redux";

import auth_reducer from "./auth/auth-reducer";
import category_reducer from "./category/category-reducer";
import SIZE_REDUCER from "./size/size-reducer";
import color_reducer from "./color/color-reducer";
import product_reducer from "./product/product-reducer";
const rootreducer = combineReducers({
  product:product_reducer,
  size:SIZE_REDUCER,
  color:color_reducer,
  auth_reducer: auth_reducer,
  category: category_reducer,
});
export default rootreducer;
