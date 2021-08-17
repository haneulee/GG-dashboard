import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { GameAverage } from "./GameAverage";
import { GameList } from "./GameList";
import { MostChampion } from "./MostChampion";
import { PositionStat } from "./PositionStat";

interface IGameInfoProps {
    summonerId: string;
}

export const GameInfo: React.FC<IGameInfoProps> = ({ summonerId }) => {
    const [gameType, setGameType] = useState('all');
    const { isLoading, error, data } = useQuery('summoner_match', () => fetch(
        `https://codingtest.op.gg/api/summoner/${summonerId}/matches`
    ).then((res) => res.json())
    );
    const [localGame, setLocalGame] = useState(data?.games);

    useEffect(() => {
        if (data?.games) {
            setLocalGame(data?.games);
        }
    }, [data?.games])

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    const onTabClick = (e: any) => {
        const { target } = e;
        const targetType = target.getAttribute('data-type')

        if (targetType !== gameType) {
            switch (targetType) {
                case 'all':
                    setLocalGame(data?.games.filter((game: any) => game.gameType))
                    break;
                case 'solo':
                    setLocalGame(data?.games.filter((game: any) => game.gameType === '솔랭'))
                    break;
                case 'free':
                    setLocalGame(data?.games.filter((game: any) => game.gameType === '자유 5:5 랭크'))
                    break;

                default:
                    break;
            }
            setGameType(targetType);
        }
    }

    return (
        <>
            <div className="w-full m-2 text-tabColor text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
                <div className="text-center flex flex-row pl-2 h-10 font-bold border-b border-soloRatingBoxBorder ">
                    <div className={`p-2 cursor-pointer ${gameType === "all" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="all" onClick={onTabClick}>
                        전체
                    </div>
                    <div className={`p-2 cursor-pointer ${gameType === "solo" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="solo" onClick={onTabClick}>
                        솔로게임
                    </div>
                    <div className={`p-2 cursor-pointer ${gameType === "free" ? 'border-b-2 border-soloRatingTextBlue text-soloRatingTextBlue' : ''}`} data-type="free" onClick={onTabClick}>
                        자유랭크
                    </div>
                </div>
                <div className="flex flex-row bg-championInfoBg">
                    <GameAverage summary={data?.summary} />
                    <MostChampion champions={data?.champions} />
                    <PositionStat positions={data?.positions} />
                </div>
            </div>
            <GameList games={localGame} summonerId={summonerId} />
        </>
    )
};