import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import Loading from "../lottie/lottie-loading.json"
import { GameItem } from "./GameItem";

interface IGameListProps {
    games?: any[];
    summonerId: string;
    gameType: string;
}

export const GameList: React.FC<IGameListProps> = ({ games = [], summonerId, gameType }) => {
    const [loading, setLoading] = useState(false);
    const [gameArr, setGameArr] = useState<any>([]);

    const getGameData = async () => {
        setLoading(true);
        const tempArr = [];

        for (let index = 0; index < games.length; index++) {
            const game = games[index]
            const res = await fetch(`https://codingtest.op.gg/api/summoner/${summonerId}/matchDetail/${game.gameId}`);
            const body = await res.json();
            tempArr.push({ ...game, ...body });
        }

        setGameArr(tempArr);
        setLoading(false);
    }

    useEffect(() => {
        if (games) {
            getGameData()
        }
    }, [])

    return (
        <div className='GameItem'>
            {loading ? <Lottie
                options={{ animationData: Loading }}
            /> :
                <>
                    {(gameType === 'all' ? gameArr : gameType === 'solo' ? gameArr.filter((game: any) => game.gameType === '솔랭') : gameArr.filter((game: any) => game.gameType === '자유 5:5 랭크')).map((game: any) => <GameItem key={game.gameId} game={game} />)}
                </>}
        </div>
    )
};