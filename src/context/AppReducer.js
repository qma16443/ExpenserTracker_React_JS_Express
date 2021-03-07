export default (state, action) => {
  switch(action.type) {
    case 'UPDATE_TRANSACTION':
      return {
        ...state,
        transactions:action.payload
      }
    default:
      return state;
  }
}