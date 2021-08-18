import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import Loading from "../lottie/lottie-loading.json"
import { GameAverage } from "./GameAverage";
import { GameList } from "./GameList";
import { MostChampion } from "./MostChampion";
import { PositionStat } from "./PositionStat";

interface IGameInfoProps {
    summonerId: string;
}

export const GameInfo: React.FC<IGameInfoProps> = ({ summonerId }) => {
    const [gameType, setGameType] = useState('all');
    const [loading, setLoading] = useState(false);
    const [{ games, champions, summary, positions }, setData] = useState<any>({});

    useEffect(() => {
        if (summonerId) {
            setLoading(true);
            fetch(`https://codingtest.op.gg/api/summoner/${summonerId}/matches`)
                .then(res => res.json())
                .then(res => {
                    if (res) {
                        setData(res)
                        setLoading(false);
                    }
                });
        }
    }, [])

    const onTabClick = (e: any) => {
        const { target } = e;
        const targetType = target.getAttribute('data-type')

        if (targetType !== gameType) {
            setGameType(targetType);
        }
    }

    return (
        <>
            {loading ? <Lottie
                options={{ animationData: Loading }}
                style={{ width: '100%', height: '100%' }}
            /> :
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
                            <GameAverage summary={summary} />
                            <MostChampion champions={champions} />
                            <PositionStat positions={positions} />
                        </div>
                    </div>
                    <GameList games={games} summonerId={summonerId} gameType={gameType} />
                </>
            }
        </>
    )
};