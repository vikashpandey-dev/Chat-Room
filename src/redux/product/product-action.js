import Rfactory from "../../apis";

export const Getproduct = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.product.GetProduct(payload);
      console.log(data, "datadata");
      await dispatch(product_reducer(data));
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

export const Addproduct = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.product.AddProduct(payload);
      return data;
    } catch (err) {
      return err;
    }
  };
};
export const product_reducer = (data) => {
  return {
    type: "Getproduct",
    payload: data,
  };
};
export const product_reducer_2 = (data) => {
  return {
    type: "Getproduct2",
    payload: data,
  };
};
