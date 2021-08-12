import React from "react";

interface IGameAverageProps {
    summary?: {
        kills: number;
        assists: number;
        deaths: number;
        wins: number;
        losses: number;
    }
}


export const GameAverage: React.FC<IGameAverageProps> = ({ summary }) => {
    const games = (summary?.wins || 0) + (summary?.losses || 0);
    const kills = summary?.kills || 1;
    const assists = summary?.assists || 1;
    const deaths = summary?.deaths || 1;
    const wins = summary?.wins || 1;

    const kda = Math.round((kills + assists) / deaths);
    const winPct = Math.round((wins / games) * 100);

    const kdaColor = kda >= 5 ? "text-gameAvgYellow" : kda >= 4 ? "text-kdaBlue" : kda >= 3 ? "text-kdaGreen" : "text-soloRatingTextGra";

    const options = {
        series: [{
            type: 'pie',
            data: [1, 2, 3]
        }]
    }

    return (
        <div className="flex flex-row w-full text-soloRatingText text-sm border-r border-soloRatingBoxBorder">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col text-center self-center">
                    <div className="WinRatioTitle">
                        <span className="total">{games}</span>전
                        <span className="win">{summary?.wins}</span>승
                        <span className="lose">{summary?.losses}</span>패
                    </div>
                    <div className="text-xs w-32 h-32">
                        <div className="relative inline-block rounded-full w-24 h-24 mt-5" style={{ background: `conic-gradient(#1f8ecd 0% ${winPct}%, #c6443e ${winPct}% 100%` }}>
                            <span className="absolute rounded-full text-lg text-soloRatingTextGray bg-soloRatingBoxBackground w-16 h-16 top-4 left-4 pt-4">{winPct}%</span>
                        </div>
                    </div>
                </div>
                <div className="p-2 flex flex-col text-center self-center">
                    <div className="text-xs font-bold">
                        <span className="Kill">{summary?.kills}</span>/
                        <span className="Death">{summary?.assists}</span>/
                        <span className="Assist">{summary?.deaths}</span>
                    </div>
                    <div className="text-lg">
                        <span className={`${kdaColor} font-bold`}>{kda}:1 </span>
                        <span className={`${winPct >= 60 ? 'text-loseGraphBorder' : 'text-soloRatingTextGray'} font-bold`} title="">(<span>{winPct}%</span>)</span>
                    </div>
                </div>
            </div>
        </div>
    )
};