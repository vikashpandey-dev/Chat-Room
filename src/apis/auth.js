import API from "./api";

const SIGNUP = "signup";
const signin = "signin";
const Allusewr="users"
const getsingle="getsingle"
const message="message"
const getmessage="getmessage"
const updateProfile="updateProfile"
const currentuser="currentuser"

export default {
  SignUpWithPassword(paylod) {
    return API.post(baseRoute(SIGNUP), paylod);
  },
  GetCurrentUSer(paylod) {
    return API.post(baseRoute(currentuser), paylod);
  },
  SigninWithPassword(paylod) {
    return API.post(baseRoute(signin), paylod);
  },
  Allusers(payload){
    return API.post(baseRoute(Allusewr),payload)
  },
  getsingle(payload){
    console.log(payload,"payloadpayloadpayload")
    return API.post(baseRoute(getsingle),payload)
  },
  updateProfile(payload){
    return API.post(baseRoute(updateProfile),payload,  {
      headers: {
        'Content-Type': 'multipart/form-data',
        // Add your authentication token if needed
        // Add any other headers as required
      },
    })
  },
  Message(payload){
    return API.post(baseRoute(message),payload)
  },
  GetMessahe(payload){
    return API.post(baseRoute(getmessage),payload)
  }
};

const baseRoute = (route) => {
  return `auth/${route}`;
};
