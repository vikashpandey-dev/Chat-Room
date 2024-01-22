import API from "./api";

const GET_SIZE = "get";
const ADD_SIZE="add"

export default {
  AddSize(paylod) {
    return API.post(baseRoute(ADD_SIZE), paylod);
  },

  GetSize(payload){
    return API.post(baseRoute(GET_SIZE),payload)
  }
};
const baseRoute = (route) => {
  return `size/${route}`;
};
