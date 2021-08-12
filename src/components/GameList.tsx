import React from "react";
import { Game } from "./Game";

interface IGameListProps {
    games?: {

    }
}

export const GameList: React.FC<IGameListProps> = ({ games }) => {

    return (
        <>
            <Game blue={true} />
            <Game />
        </>
    )


};