import React, { useState } from "react";
import { useQuery } from 'react-query';
import { ChampionRank } from "./ChampionRank";
import { WeekRank } from "./WeekRank";

interface IChampionInfoProps {
    summonerId: string;
}

export const ChampionInfo: React.FC<IChampionInfoProps> = ({ summonerId }) => {
    const [tab, setTab] = useState('champion');
    const { isLoading, error, data } = useQuery('summoner_mostInfo', () => fetch(
        `https://codingtest.op.gg/api/summoner/${summonerId}/mostInfo`
    ).then((res) => res.json())
    );

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    let { champions, recentWinRate } = data;

    champions.sort((a: any, b: any) => {
        return b.games - a.games;
    });

    recentWinRate.sort((a: any, b: any) => {
        return (b.wins + b.losses) - (a.wins + a.losses);
    });

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
        <div className="w-full h-30 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <div className="grid justify-items-stretch text-center grid-flow-col border-collapse">
                <div className={`p-4 border-soloRatingBoxBorder ${tab === 'champion' && 'bg-championInfoBg text-soloRatingTextGray border-r'} ${tab === 'recent' ? 'border-b' : ''}`} onClick={() => onTabClick('champion')}>
                    챔피언 승률
                </div>
                <div className={`p-4 border-soloRatingBoxBorder ${tab === 'recent' && 'bg-championInfoBg text-soloRatingTextGray border-l'} ${tab === 'champion' ? 'border-b' : ''}`} onClick={() => onTabClick('recent')}>
                    7일간 랭크 승률
                </div>
            </div>
            <div className="flex flex-col">
                {tab === 'champion' && champions?.map((champion: any, id: number) => <ChampionRank key={id} champion={champion} />)}
                {tab === 'recent' && recentWinRate?.map((recentWin: any, id: number) => <WeekRank key={id} recentWin={recentWin} />)}
            </div>
        </div>
    )
};