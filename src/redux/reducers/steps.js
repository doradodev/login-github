
function steps(state = {}, action) {
  switch (action.type) {
    case 'SET_INITIAL_STEP': {
      return { ...state, ...action.payload }
    }
    case 'UPDATE_STEP': {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export default steps;