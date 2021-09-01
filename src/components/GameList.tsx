import React, { FC, memo, useCallback, useEffect, useState } from "react";
import api from "src/util/APIUtil";
import constants from "src/constants";
import { Game } from "src/types";
import { GameItem } from "src/components/GameItem";

interface Props {
    games: Game[];
    summonerId: string;
    gameType: string;
}

export const GameList: FC<Props> = memo(({ games = [], summonerId, gameType }) => {
    const [gameArr, setGameArr] = useState<Game[]>([]);

    const getGameData = useCallback(async () => {
        if (!games) return;
        try {
            const tempArr = [];

            for (let index = 0; index < games.length; index++) {
                const game = games[index]
                const res = await api.fetchMatchDetail(summonerId, String(game.gameId));
                tempArr.push({ ...game, ...res });
            }

            setGameArr(tempArr);
        } catch (error) {
            console.log(error);
        }
    }, [summonerId, games])

    useEffect(() => {
        getGameData()
    }, [getGameData])

    const renderGameList = () => {
        let data;

        if (gameType === constants.GAME_TAB_ALL) {
            data = gameArr;
        } else if (gameType === constants.GAME_TAB_SOLO) {
            data = gameArr.filter((game: any) => game.gameType === constants.GAME_SOLO_RANK);
        } else {
            data = gameArr.filter((game: any) => game.gameType === constants.GAME_FREE_RANK);
        }

        return data.map((game: any) => <GameItem key={game.gameId} game={game} />)
    }

    return (
        <div>
            {renderGameList()}
        </div>
    )
});