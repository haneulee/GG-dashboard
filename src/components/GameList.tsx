import React, { memo, useCallback, useEffect, useState } from "react";
import Lottie from 'react-lottie';
import Loading from "../lottie/lottie-loading.json"
import api from "../util/APIUtil";
import { GameItem } from "./GameItem";

interface IGameListProps {
    games?: any[];
    summonerId: string;
    gameType: string;
}

export const GameList: React.FC<IGameListProps> = memo(({ games = [], summonerId, gameType }) => {
    const [loading, setLoading] = useState(false);
    const [gameArr, setGameArr] = useState<any>([]);

    const getGameData = useCallback(async () => {
        if (!games) return;
        try {
            const tempArr = [];
            setLoading(true);

            for (let index = 0; index < games.length; index++) {
                const game = games[index]
                const res = await api.fetchMatchDetail(summonerId, game.gameId);
                tempArr.push({ ...game, ...res });
            }

            setGameArr(tempArr);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }, [summonerId, games])

    useEffect(() => {
        getGameData()
    }, [getGameData])

    const renderGameList = () => {
        let data;

        if (gameType === 'all') {
            data = gameArr;
        } else if (gameType === 'solo') {
            data = gameArr.filter((game: any) => game.gameType === '솔랭');
        } else {
            data = gameArr.filter((game: any) => game.gameType === '자유 5:5 랭크');
        }

        return data.map((game: any) => <GameItem key={game.gameId} game={game} />)
    }

    return (
        <div className='GameItem'>
            {loading ? <Lottie
                options={{ animationData: Loading }}
                style={{ width: '100%', height: '100%' }}
            /> : renderGameList()}
        </div>
    )
});