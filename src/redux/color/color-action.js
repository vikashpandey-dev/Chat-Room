import Rfactory from "../../apis";


export const GetColor = (payload) => {
  return async (dispatch) => {
    try {
      let {data} = await Rfactory.color.GetColor(payload);
      
      await dispatch(color_reducer(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const AddColor = (payload) => {
  return async (dispatch) => {
    try {
      let {data} = await Rfactory.color.AddColor(payload);

      // await dispatch(color_reducer_2(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};

export const color_reducer = (data) => {
  return {
    type: "Getcolor",
    payload: data,
  };
};
export const TOGGLE_COLOR = (data) => {

  return {
    type: "togglecolor",
    payload: data,
  };
};