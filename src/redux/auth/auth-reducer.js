const initialState = {
    loginUser:{},
    toggle:false,
    alluser:[],
    SingleUser:{},
    toggleregiter:false,
    usermessage:[]
}

  const auth_reducer= (state = initialState, action) => {
    console.log(action.type,"actionactionaction")
  switch (action.type) {
    case "SignUp":
        return{
            ...state,
            loginUser:action.payload
        }
        case "settoggle":
          return{
            ...state,
            toggle:action.payload.toggle
          }
          case "toggleregister":
            return{
              ...state,
              toggleregiter:action.payload.toggleregister
            }
            case "Alluser":
              return{
                ...state,
                alluser:action.payload
              }
              case "SingleUser":
                return{
                  ...state,
                  SingleUser:action.payload
                }
                case "usermessage":
                  return{
                    ...state,
                    usermessage:action.payload
                  }
  default:
    return state
  }
}

export default  auth_reducer