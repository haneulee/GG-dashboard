import React from "react";
import { GameItem } from "./GameItem";

interface IGameListProps {
    games?: any[];
    update?: boolean;
}

export const GameList: React.FC<IGameListProps> = ({ games }) => {

    console.log(games)
    return (
        <div className='GameItem'>
            {games?.map(game => <GameItem key={game.gameId} game={game} />)}
        </div>
    )
};