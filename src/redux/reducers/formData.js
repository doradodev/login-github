function formData(state = {}, action) {
  switch (action.type) {
    case "UPDATE_AUTH": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default formData;
