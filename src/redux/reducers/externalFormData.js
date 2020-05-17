import { initialState } from '../storeConst';

function externalFormData(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_DATA': {
      return { ...state, ...action.payload };
    }
    case 'RESET_DATA': {
      state.externalFormData = initialState;
      return { ...state, ...action.payload };
    }
    case 'DELETE_LAST_ROW_DATA': {
      let array = [];
      if (typeof state === 'object') {
        array = Object.values(state);
        array.pop();
        localStorage.setItem('externalFormData', JSON.stringify(array));
      }
      return { ...array, ...action.payload };
    }
    default:
      return state;
  }
}

export default externalFormData;
