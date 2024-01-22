import Rfactory from "../../apis";


export const GetCategory = (payload) => {
  return async (dispatch) => {
    try {
      let {data} = await Rfactory.category.GetCategory(payload);
      
      await dispatch(category_reducer(data));
      return data
    } catch (err) {
      console.log(err);
      return err
    }
  };
};
export const GetCategory2 = (payload) => {
  return async (dispatch) => {
    try {
      let {data} = await Rfactory.category.GetCategory2(payload);

      await dispatch(category_reducer_2(data));
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
export const category_reducer = (data) => {
  return {
    type: "GetCategory",
    payload: data,
  };
};
export const category_reducer_2 = (data) => {
  return {
    type: "GetCategory2",
    payload: data,
  };
};