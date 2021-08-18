import React, { useEffect, useState } from "react";
import { ChampionRank } from "./ChampionRank";
import { WeekRank } from "./WeekRank";
import Loading from "../lottie/lottie-loading.json"
import Lottie from 'react-lottie';

interface IChampionInfoProps {
    summonerId: string;
}

interface IDataProps {
    champions: [],
    recentWinRate: []
}

export const ChampionInfo: React.FC<IChampionInfoProps> = ({ summonerId }) => {
    const [tab, setTab] = useState('champion');
    const [loading, setLoading] = useState(false);
    const [{ champions, recentWinRate }, setData] = useState<IDataProps>({} as IDataProps);

    useEffect(() => {
        if (!summonerId) return;
        setLoading(true);
        fetch(`https://codingtest.op.gg/api/summoner/${summonerId}/mostInfo`)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setData(res)
                    setLoading(false);
                }
            });
    }, [summonerId]);

    const onTabClick = (target: string) => {
        if (target === 'champion') {
            if (tab !== "champion") {
                setTab('champion');
            }
        } else {
            if (tab !== "recent") {
                setTab('recent');
            }
        }
    }

    return (
        <div className="w-full h-auto m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            {loading ? <Lottie
                options={{ animationData: Loading }}
                style={{ width: '100%', height: '100%' }}
            /> :
                <>
                    <div className="grid grid-cols-2 text-center border-collapse h-10">
                        <div className={`pt-2 border-soloRatingBoxBorder cursor-pointer ${tab === 'champion' && 'bg-championInfoBg text-soloRatingTextGray border-r'} ${tab === 'recent' ? 'border-b' : ''}`} onClick={() => onTabClick('champion')}>
                            챔피언 승률
                        </div>
                        <div className={`pt-2 border-soloRatingBoxBorder cursor-pointer ${tab === 'recent' && 'bg-championInfoBg text-soloRatingTextGray border-l'} ${tab === 'champion' ? 'border-b' : ''}`} onClick={() => onTabClick('recent')}>
                            7일간 랭크 승률
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {tab === 'champion' && champions?.sort((a: any, b: any) => { return b.games - a.games; }).map((champion: any, id: number) => <ChampionRank key={id} champion={champion} />)}
                        {tab === 'recent' && recentWinRate?.sort((a: any, b: any) => { return (b.wins + b.losses) - (a.wins + a.losses); }).map((recentWin: any, id: number) => <WeekRank key={id} recentWin={recentWin} />)}
                    </div>
                </>
            }
        </div>
    )
};