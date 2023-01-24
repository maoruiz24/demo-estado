import { combineReducers } from "@reduxjs/toolkit";  
import oredenesReducer from './orden/ordenesSlice'

const rootReducer = combineReducers({
  reducer: {
     ordenes: oredenesReducer,
  },
});

export default rootReducer;