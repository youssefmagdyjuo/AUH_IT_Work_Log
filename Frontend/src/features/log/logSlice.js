import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date: new Date().toISOString(),
    tasks: '',
    notes: ''
};
const LogSlice = createSlice({
    name: "allLogs",
    initialState,
    reducers: {
        setFullLog: (state, action) => {
            return { ...state, ...action.payload };
        },
        updateTasks: (state, action) => {
            state.tasks = action.payload;
        },
        updateNotes: (state, action) => {
            state.notes = action.payload;
        },
        clearLog: () => initialState
    }
});
export const { setFullLog, updateTasks, updateNotes, clearLog } = LogSlice.actions;
export default LogSlice.reducer;