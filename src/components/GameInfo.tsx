import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { GameAverage } from "./GameAverage";
import { GameList } from "./GameList";
import { MostChampion } from "./MostChampion";
import { PositionStat } from "./PositionStat";

interface IGameInfoProps {
    result?: {
        loading?: boolean,
        data?: any,
        error?: string,
    }
}

export const GameInfo: React.FC<IGameInfoProps> = ({ result }) => {
    const [gameType, setGameType] = useState('all');
    const [localGame, setLocalGame] = useState(result?.data?.games);

    useEffect(() => {
        if (result?.data?.games) {
            setLocalGame(result?.data?.games);
        }
    }, [result?.data?.games])

    if (result?.loading) return <p>Loading...</p>;
    if (result?.error) return <p>Error!</p>;

    const onTabClick = (e: any) => {
        const { target } = e;
        const targetType = target.getAttribute('data-type')

        if (targetType !== gameType) {
            switch (targetType) {
                case 'all':
                    setLocalGame(result?.data?.games.filter((game: any) => game.gameType))
                    break;
                case 'solo':
                    setLocalGame(result?.data?.games.filter((game: any) => game.gameType === '솔랭'))
                    break;
                case 'free':
                    setLocalGame(result?.data?.games.filter((game: any) => game.gameType === '자유 5:5 랭크'))
                    break;

                default:
                    break;
            }
            setGameType(targetType);
        }
    }

    return (
        <>
            <div className="w-full m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
                <div className="text-center flex flex-row pl-2 h-10 font-bold border-b border-soloRatingBoxBorder ">
                    <div className={`p-2 ${gameType === "all" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="all" onClick={onTabClick}>
                        전체
                    </div>
                    <div className={`p-2 ${gameType === "solo" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="solo" onClick={onTabClick}>
                        솔로게임
                    </div>
                    <div className={`p-2 ${gameType === "free" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="free" onClick={onTabClick}>
                        자유랭크
                    </div>
                </div>
                <div className="flex flex-row bg-championInfoBg">
                    <GameAverage summary={result?.data?.summary} />
                    <MostChampion champions={result?.data?.champions} />
                    <PositionStat positions={result?.data?.positions} />
                </div>
            </div>
            <GameList games={localGame} />
        </>
    )
};