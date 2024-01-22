import API from "./api";

const SIGNUP = "signup";
const GET_CATEGORY = "get";
const ADD_CATEGORY="add"


export default {
  GetCategory(paylod) {
    return API.post(baseRoute(GET_CATEGORY), paylod);
  },
  GetCategory2(paylod) {
    return API.post(baseRoute(GET_CATEGORY), paylod);
  },
  AddCategory(payload){
    return API.post(baseRoute(ADD_CATEGORY),payload)
  }
};

const baseRoute = (route) => {
  return `category/${route}`;
};
