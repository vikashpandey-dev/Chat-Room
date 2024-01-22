const initialState = {
    category:[],
    category2:[]
}
  const category_reducer= (state = initialState, action) => {
  switch (action.type) {
    case "GetCategory":
        return{
            ...state,
            category:action.payload.data
        }
        case "GetCategory2":
          return{
            ...state,
            category2:action.payload.data
          }
  default:
    return state
  }
}

export default  category_reducer