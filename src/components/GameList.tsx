import React from "react";
import { Game } from "./Game";

export const GameList: React.FC = () => {

    return (
        <>
            <Game blue={true} />
            <Game />
        </>
    )


};