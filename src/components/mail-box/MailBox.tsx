import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setMailBoxFallStyle} from "src/store/features/mail-box/MailBoxSlice";
import Mailbox from "src/assets/images/mailbox.png";
const MailBox = () => {
    const dispatch = useDispatch();
    const mailBox = useSelector((state: any) => state.mailBox);

    const mailBoxStyle = () => {
        dispatch(setMailBoxFallStyle());
    }

    return (
        <div
            className={"absolute right-[5%] bottom-[0] max-w-[20%] cursor-pointer transition"}
            style={{transform: `translateY(${mailBox?.mailBoxFall}%) skewY(${mailBox?.mailBoxFall}deg)`}}
            onClick={mailBoxStyle}
        >
            <img src={Mailbox} alt="Mail Box"/>
        </div>
    );
};

export default MailBox;