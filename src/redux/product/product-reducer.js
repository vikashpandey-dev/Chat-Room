const initialState = {
  product:[],
    product2:[]
}
  const product_reducer= (state = initialState, action) => {
  switch (action.type) {
    case "Getproduct":
        return{
            ...state,
            product:action.payload.data
        }
        case "Getproduct2":
          return{
            ...state,
            product2:action.payload.data
          }
  default:
    return state
  }
}

export default  product_reducer