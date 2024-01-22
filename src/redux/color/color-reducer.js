const initialState = {
    category:[],
    category2:[],
    togglecolors:false,
}
  const color_reducer= (state = initialState, action) => {
  
  switch (action.type) {
    case "GetCategory":
        return{
            ...state,
            category:action.payload.data
        }
        case "togglecolor":
          return{
            ...state,
            togglecolors:action.payload.togglecolors
          }
  default:
    return state
  }
}

export default  color_reducer