import React, {useEffect} from 'react';
import DarkMoon from "src/assets/images/dark.png";
import LightSun from "src/assets/images/light.png";
import {useDispatch, useSelector} from "react-redux";
import {setDarkTheme, setDefaultTheme} from "src/store/features/theme/themeSlice";

const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme);
    const colorTheme = theme?.darkModeClass === 'dark' ? 'light' : 'dark';

    const setDark = () => {
        dispatch(setDarkTheme());
    };

    const setDefault = () => {
        dispatch(setDefaultTheme());
    };

    useEffect(() => {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove(colorTheme);
        localStorage.setItem('theme', theme?.darkModeClass);
    }, [theme?.darkModeClass, colorTheme]);

    return (
        <div
            className={"absolute max-w-[10%] right-[5%] top-[5%] cursor-pointer"}
            onClick={theme?.darkModeClass === 'light' ? setDark : setDefault}
        >
            <img
                src={theme?.darkModeClass === 'dark' ? DarkMoon : LightSun}
                alt="Dark Light Mode"
            />
        </div>
    );
};

export default ThemeSwitcher;