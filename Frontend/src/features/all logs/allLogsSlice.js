import { createSlice } from "@reduxjs/toolkit";
const allLogsSlice = createSlice({
    name: "allLogs",
    initialState: { 
        logs: []
    },
    reducers: {
        setAllLogs: (state, action) => {
            state.logs = action.payload;
        },
        deleteLog: (state, action) => {
            state.logs = state.logs.filter(log => log.id !== action.payload);
        }
    }
});
export const { setAllLogs, deleteLog } = allLogsSlice.actions;
export default allLogsSlice.reducer;