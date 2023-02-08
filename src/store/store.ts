import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/theme/themeSlice";
import mailBoxSlice from "./features/mail-box/MailBoxSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        mailBox: mailBoxSlice,
    },
});

export default store;
