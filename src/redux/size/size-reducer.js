const initialState = {
    size:[],
    category2:[],
    togglesize:false
}
  const SIZE_REDUCER= (state = initialState, action) => {
  switch (action.type) {
    case "getsize":
        return{
            ...state,
            category:action.payload.data
        }
        case "toggle":
          return{
            ...state,
            togglesize:action.payload.togglesize
          }
  default:
    return state
  }
}

export default  SIZE_REDUCER