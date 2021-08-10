import React from "react";
import { InputBox } from "./InputBox";


export const Header: React.FC = () => {
    return (
        <header className="bg-azure h-20 p-30 items-center flex justify-between">
            <div className="ml-5">
                <a href="https://www.op.gg/" >
                    <img alt="OP.GG" height="16" src="//opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg" width="65" />
                </a>
            </div>
            <InputBox />
        </header>
    );
};