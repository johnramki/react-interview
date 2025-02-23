import {configureStore, createSlice} from '@reduxjs/toolkit';
import listSlice from '../reducers/listSlice';
const store = configureStore({
    reducer:{list:listSlice}
});
export default store;

