import {configureStore} from '@reduxjs/toolkit';
import allLogsReducer from '../features/all logs/allLogsSlice.js';
import logReducer from '../features/Log/logSlice.js';
export const store = configureStore({
    reducer: {
        allLogs: allLogsReducer,
        log: logReducer
    },
});