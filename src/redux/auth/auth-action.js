import Rfactory from "../../apis";

export const signup = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.SignUpWithPassword(payload);
      console.log(data, "callaction");

      await dispatch(signup_reducer(data.user));
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("mobile", data.user.mobile);
      localStorage.setItem("id", data.user._id);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const GetCurrentUSer = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.GetCurrentUSer(payload);
      console.log(data, "callaction");

      await dispatch(signup_reducer(data.user));
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("mobile", data.user.mobile);
      localStorage.setItem("id", data.user._id);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const SigninWithPassword = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.SigninWithPassword(payload);
      console.log(data,"datadatadata")
      await dispatch(signup_reducer(data.user));
      localStorage.setItem("token", data.user.token);
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("mobile", data.user.mobile);
      localStorage.setItem("id", data.user._id);

      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const Allusers = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.Allusers(payload);
      await dispatch(Alluser_reducer(data.user));
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};

export const getsingle = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.getsingle(payload);
      await dispatch(Single_User(data.user));
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const Message = (payload) => {
  return async () => {
    try {
      let { data } = await Rfactory.auth.Message(payload);
      // await dispatch(Single_User(data.user));
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const GetMessahe = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.GetMessahe(payload);
      await dispatch(User_message(data.user));
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const updateProfile = (payload) => {
  return async (dispatch) => {
    try {
      let { data } = await Rfactory.auth.updateProfile(payload);
      // await dispatch(User_message(data.user));
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
};
export const User_message = (data) => {
  return {
    type: "usermessage",
    payload: data,
  };
};
export const Single_User = (data) => {
  return {
    type: "SingleUser",
    payload: data,
  };
};
export const Alluser_reducer = (data) => {
  return {
    type: "Alluser",
    payload: data,
  };
};
export const signup_reducer = (data) => {
  console.log(data, "datadatadatadata");
  return {
    type: "SignUp",
    payload: data,
  };
};
export const toggleopen = (data) => {
  return {
    type: "settoggle",
    payload: data,
  };
};
export const toggleregister = (data) => {
  return {
    type: "toggleregister",
    payload: data,
  };
};
