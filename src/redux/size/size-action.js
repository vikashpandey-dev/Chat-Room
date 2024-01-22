import Rfactory from "../../apis";

export const AddSize = (payload) => {
  return async (dispatch) => {
    try {
      let {data} = await Rfactory.size.AddSize(payload);
      
      // await dispatch(SIZE_REDUCER(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const GetSize = (payload) => {
  return async (dispatch) => {
    try {
      let {data} = await Rfactory.size.GetSize(payload);

      await dispatch(GET_SIZE(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const AddCategory=(payload)=>{
  return async (dispatch)=>{
    try{
let {data}=await Rfactory.category.AddCategory(payload)
return data
    }catch(err){
      return err
    }
  }
}
export const GET_SIZE = (data) => {
  return {
    type: "getsize",
    payload: data,
  };
};
export const TOGGLE_SIZE = (data) => {
  console.log(data,"zzzzzzzzzzzzzzzzzz")
  return {
    type: "toggle",
    payload: data,
  };
};