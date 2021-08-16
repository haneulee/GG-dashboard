import React from "react";
import { GameItem } from "./GameItem";

interface IGameListProps {
    games?: any[];
    update?: boolean;
    summonerId: string;
}

export const GameList: React.FC<IGameListProps> = ({ games, summonerId }) => {
    return (
        <div className='GameItem'>
            {games?.map(game => <GameItem key={game.gameId} game={game} summonerId={summonerId} />)}
        </div>
    )
};