import React, { useRef } from "react";
import "./Button.scss"

interface Props {
    buttonName: string;
    onClickHandler: any;

}

const Button = ({ buttonName, onClickHandler }: Props) => {
    return (
        <button className="btn" onClick={onClickHandler}>
            {buttonName}
        </button>

    );
};

export default Button;