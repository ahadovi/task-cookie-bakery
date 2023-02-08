import { createSlice } from "@reduxjs/toolkit";

export interface ThemeSwitcherState {
    darkModeClass: string,
}

const initialState: ThemeSwitcherState = {
    darkModeClass: localStorage.theme || 'light'
};

const themeSlice = createSlice({
    name: "theme-switcher",
    initialState,
    reducers: {
        setDarkTheme(state) {
            state.darkModeClass = 'dark';
            localStorage.theme = 'dark'
        },
        setDefaultTheme(state) {
            state.darkModeClass = 'light';
            localStorage.theme = 'light'
        },
    },
});

export const { setDarkTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;
