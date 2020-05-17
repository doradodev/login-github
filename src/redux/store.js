import { createStore, combineReducers } from "redux";
import steps from "./reducers/steps";
import formData from "./reducers/formData";
import externalFormData from "./reducers/externalFormData";
import animation from "./reducers/animation";
import { initialState } from "./storeConst";

const reducers = combineReducers({
  steps,
  formData,
  externalFormData,
  animation,
});

const store = createStore(reducers, initialState);

export default store;
