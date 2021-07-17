import { configureStore } from "@reduxjs/toolkit";

import logRed from './loginSlice';
//import logtaskreducer from '../reducer/loginreducer';

export const store = configureStore({
    reducer:{
        logReducer: logRed,
        //logReducer: logtaskreducer
    },
});