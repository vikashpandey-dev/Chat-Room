import API from "./api";

const GET_PRODUCT = "get";
const ADD_PRODUCT="add"
const formdata={
  headers:{
    "Content-Type": "multipart/form-data"
  },
}

export default {
  GetProduct(paylod) {
    return API.post(baseRoute(GET_PRODUCT), paylod);
  },

  AddProduct(payload){
    return API.post(baseRoute(ADD_PRODUCT),payload,formdata)
  }
};

const baseRoute = (route) => {
  return `product/${route}`;
};
