import React from 'react';
import "./Window.css";

type window = {
    cookieImage: string,
    title: string,
    className: string
}

const Window = ({cookieImage, title, className = ''}: window) => {
    return (
        <div className={`window absolute w-[130px] h-[130px] max-[800px]:w-[60px] max-[800px]:h-[60px] top-[16%] rounded-[10px] ${className}`}>
            <div className={`content absolute w-full h-full`}>
                <div className={`front absolute w-full h-full bg-[#84563C] text-white text-center text-[1.5rem] max-[800px]:text-[1rem] rounded-[5px] flex items-center justify-center cursor-pointer p-[0.25rem] dark:pointer-events-none`}>
                    {title}
                </div>
                <div className={`back absolute w-full h-full bg-[#84563C] text-white text-center text-[1.5rem] rounded-[5px] flex items-center justify-center cursor-pointer overflow-hidden dark:pointer-events-none`}>
                    <img src={cookieImage} alt="Cookie"/>
                </div>
            </div>
        </div>
    );
};

export default Window;