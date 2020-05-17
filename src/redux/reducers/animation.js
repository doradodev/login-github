function animation(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ANIMATION': {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default animation;
