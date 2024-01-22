import API from "./api";

const GET_COLOR = "get";
const ADD_COLOR="add"


export default {
  GetColor(paylod) {
    return API.post(baseRoute(GET_COLOR), paylod);
  },

  AddColor(payload){
    return API.post(baseRoute(ADD_COLOR),payload)
  }
};
const baseRoute = (route) => {
  return `color/${route}`;
};
