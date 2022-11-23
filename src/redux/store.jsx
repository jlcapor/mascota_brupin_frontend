import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth/authSlice";
import usersReducer from "./reducers/users/usersSlice";
import customerReducer from "./reducers/customers/customerSlice";
import petsReducer from "./reducers/pets/petsSlice";
import modalReducer from "./reducers/iu/modalSlice";
import alertaReducer from "./reducers/iu/alertaSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
  customer: customerReducer,
  pets: petsReducer,
  modal: modalReducer,
  alerta: alertaReducer,

});


const store = configureStore({
  reducer: rootReducer
});

export default store;
