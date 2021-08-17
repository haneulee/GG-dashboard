import React from "react";

interface IChampionRankProps {
    champion?: {
        name: string;
        cs: number;
        rank: number;
        imageUrl: string;
        games: number;
        kills: number;
        assists: number;
        deaths: number;
        wins: number;
    };
}

export const ChampionRank: React.FC<IChampionRankProps> = ({ champion }) => {
    const kills = champion?.kills || 1;
    const assists = champion?.assists || 1;
    const deaths = champion?.deaths || 1;
    const games = champion?.games || 1;
    const wins = champion?.wins || 1;

    const kda = Math.round((kills + assists) / deaths);
    const winPct = Math.round((wins / games) * 100);

    const kdaColor = kda >= 5 ? "text-gameAvgYellow" : kda >= 4 ? "text-kdaBlue" : kda >= 3 ? "text-kdaGreen" : "text-soloRatingTextGra";

    return (
        <div className="bg-championInfoBg flex flex-row justify-between text-center border-b border-soloRatingBoxBorder">
            <div className="pl-3 py-2" title={champion?.name}>
                <a href="/champion/leona/statistics" target="_blank">
                    <img src={champion?.imageUrl} width="45" className="rounded-full" alt={champion?.name} />
                </a>
            </div>
            <div className="px-1 py-2 text-left">
                <div className="text-soloRatingTextGray font-bold text-left w-20 truncate" title={champion?.name}>
                    {champion?.name}
                </div>
                <div className="text-xs" title="평균 CS (CS/분)">
                    CS {champion?.cs} ({champion?.rank})
                </div>
            </div>
            <div className="px-1 py-2">
                <div className={`${kdaColor} font-bold`} title="">
                    <span className="KDA">{kda}:1</span>
                    <span className="Text">평점</span>
                </div>
                <div className="text-xs">
                    <span className="Kill">{champion?.kills}</span>
                    <span className="Bar">/</span>
                    <span className="Death">{champion?.assists}</span>
                    <span className="Bar">/</span>
                    <span className="Assist">{champion?.deaths}</span>
                </div>
            </div>
            <div className="px-3 py-2">
                <div className={`${winPct >= 60 ? 'text-loseGraphBorder' : 'text-soloRatingTextGray'} font-bold`} title="">
                    {winPct}%
                </div>
                <div className="text-xs">{champion?.games} 게임</div>
            </div>
        </div>

    )
};
