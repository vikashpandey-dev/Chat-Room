import { React, useState } from "react";
import { MdComputer } from "react-icons/md";
import { GoKey } from "react-icons/go";
import { RiWechatLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoBrushOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateProfile, GetCurrentUSer } from "../../redux/auth/auth-action";
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
function Profile(props) {
  const dispatch = useDispatch();
  let baseurl = "https://drive.google.com/uc?id=";

  const [selectedFile, setSelectedFile] = useState(null);
  let users = useSelector((state) => state.auth_reducer.loginUser);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const formdata = new FormData();
    formdata.append("profile", event.target.files[0]);
    formdata.append("id", localStorage.getItem("id"));
    dispatch(updateProfile(formdata));
    let payload2 = {
      id: localStorage.getItem("id"),
    };
    dispatch(GetCurrentUSer(payload2));
    // You can add additional logic here if needed, e.g., file validation or upload handling.
  };
  let baseurls = "http://localhost:3000/upload/";
  const closepopup = () => {};
  let data = { setval: false };
  return (
    <>
      <div
        className={
          props
            ? "w-1/3  absolute flex h-9/12 z-20 bottomplus bottomplus-animate min-h-[70%]"
            : "bottomminus"
        }
      >
        <div
          className="absolute left0 top-1 cursor-pointer w-10 h-9  flex justify-center items-center hover:bg-gray-200 rounded-full"
          onClick={() => props.setval(data)}
        >
          <RxCross2 size={30} color="colorblack" className="w-6 h-6" />
        </div>
        <div className="leftprofile bgf1f1f2 w-4/12  ">
          <div className="flex flex-column justify-between h-full ">
            <div className="flex flex-column w-full">
              <div className="flex justify-center  w-full py-2.5 mx-1 hover:bg-gray-200">
                <div className=" flex justify-center items-center   w-5/12">
                  <MdComputer className="w-5" />
                </div>
                <div className=" w-7/12">
                  <p className="mb-0 text-sm w-full text-left">General</p>
                </div>
              </div>
              <div className="flex justify-center  py-2.5 mx-1 hover:bg-gray-200">
                <div className=" flex justify-center items-center w-5/12 ">
                  <GoKey className="w-5" />
                </div>
                <div className=" w-7/12">
                  <p className="mb-0 text-sm w-full text-left">Account</p>
                </div>
              </div>
              <div className="flex justify-center  py-2.5 mx-1 hover:bg-gray-200">
                <div className=" flex justify-center items-center w-5/12">
                  <RiWechatLine className="w-5" />
                </div>
                <div className="text-left w-7/12">
                  <p className="mb-0 text-sm">Chats</p>
                </div>
              </div>
              <div className="flex justify-center  py-2.5 mx-1 hover:bg-gray-200">
                <div className=" flex justify-center items-center w-5/12">
                  <IoMdNotificationsOutline className="w-5" />
                </div>
                <div className="text-left w-7/12">
                  <p className="mb-0 text-sm">Notification</p>
                </div>
              </div>
              <div className="flex justify-center  py-2.5 mx-1 hover:bg-gray-200">
                <div className=" flex justify-center items-center w-5/12">
                  <IoBrushOutline className="w-5" />
                </div>
                <div className="text-left w-7/12">
                  <p className="mb-0 text-sm">Personalization</p>
                </div>
              </div>
              <div className="flex justify-center  py-2.5 mx-1 hover:bg-gray-200">
                <div className=" flex justify-center items-center w-5/12">
                  <IoIosHelpCircleOutline className="w-5" />
                </div>
                <div className=" w-7/12">
                  <p className="mb-0 text-sm">Help</p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex justify-center  py-2.5 mx-1 bg-gray-200">
              <div className=" flex justify-center items-center w-5/12">
                <CgProfile className="w-5" />
              </div>
              <div className=" w-7/12">
                <p className="mb-0 text-sm">Profile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightprofile bg-white w-8/12 ">
          <div className="mx-4 my-3">
            <div className="flex items-center w-20 h-20 rounded-full bg-e1e1e1 backgrounddadada justify-center  ">
              <label
                htmlFor="fileInput"
                className="w-20 h-20 rounded-full bg-e1e1e1 flex justify-center items-center "
              >
                {users.image ? (
                  <img
                    className="w-full h-full rounded-full"
                    src={`${baseurls}${users.image}`}
                    alt="h"
                  />
                ) : (
                  <FaUser className="w-7 h-7 colora2a2a2" />
                )}
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
                accept=".jpg, .jpeg, .png, .gif" // Specify the accepted file types if needed
              />
              {/* Add other UI elements here without disturbing the existing layout */}
            </div>
            <div className="flex item-center my-3">
              <h2 className="text-sm font-bold color1b1b1b w-5/12">
                {users.name}
              </h2>
              <div className="w-7/12 flex justify-end">
                <MdOutlineModeEdit />
              </div>
            </div>
            <div className="flex item-center my-3">
              <h2 className="text-base font-normal colora2a2a2  w-5/12">
                About
              </h2>
              <div className="w-7/12 flex justify-end">
                <MdOutlineModeEdit />
              </div>
            </div>
            <div className="flex item-center my-3 flex-column">
              <h2 className="text-base font-normal colora2a2a2 w-5/12">
                Phone Number
              </h2>
              <div className="w-7/12 flex">
                <h2 className="text-sm font-normal">+91 {users.mobile}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
