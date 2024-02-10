import "./App.css";
import React, { useEffect, useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Pages from "./pages/pages";
import RegisterForm from "./component/RegisterForm";
import Login from "./component/Login";
import { useSelector, useDispatch } from "react-redux";
import ChatUI from "./component/ChatUI";
function App() {
  const loginuser = useSelector((state) => state.auth_reducer.toggle);
  const checkregister = useSelector(
    (state) => state.auth_reducer.loginUser
  );
  console.log(checkregister,"checkregistercheckregister")
  const checktoken = localStorage.getItem("token");
  useEffect(() => {}, [loginuser, checkregister, checktoken]);
  return (
    <>
      <div>{loginuser == true ? <Login /> : null}</div>
      {console.log(checkregister,"checkregistercheckregister")}
      {checkregister._id ? (
        <div>
          <Pages />
        </div>
      ) : (
        <div>{loginuser == false ? <RegisterForm /> : null}</div>
      )}
      {/* <ChatUI/> */}
    </>
  );
}

export default App;
