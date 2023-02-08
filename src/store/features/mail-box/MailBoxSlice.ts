import {createSlice} from "@reduxjs/toolkit";

export interface MailFallBoxState {
    mailBoxFall: number
}

const initialState: MailFallBoxState = {
    mailBoxFall: 0
};

const mailBoxSlice = createSlice({
    name: "falling-down-mailbox",
    initialState,
    reducers: {
        setMailBoxFallStyle(state) {
            state.mailBoxFall = 40;
        }
    },
});

export const {setMailBoxFallStyle} = mailBoxSlice.actions;

export default mailBoxSlice.reducer;