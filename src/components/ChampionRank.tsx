import React, { FC } from "react";
import { ChampionStats } from "src/types";
import { getKDA, getKDAColor, getWinPct } from "src/util/utility";

interface Props {
    champion: ChampionStats;
}

export const ChampionRank: FC<Props> = ({ champion }) => {
    const kills = champion.kills || 1;
    const assists = champion.assists || 1;
    const deaths = champion.deaths || 1;
    const games = champion.games || 1;

    const kda = getKDA(kills, assists, deaths);
    const winPct = getWinPct(champion.wins, games);
    const kdaColor = getKDAColor(kda);

    return (
        <div className="bg-championInfoBg flex flex-row justify-between text-center border-b border-soloRatingBoxBorder">
            <div className="pl-3 py-2" title={champion.name}>
                <a href="/champion/leona/statistics" target="_blank">
                    <img src={champion.imageUrl} width="45" className="rounded-full" alt={champion.name} />
                </a>
            </div>
            <div className="px-1 py-2 text-left">
                <div className="text-soloRatingTextGray font-bold text-left w-20 truncate" title={champion.name}>
                    {champion.name}
                </div>
                <div className="text-xs" title="평균 CS (CS/분)">
                    CS {champion.cs} ({champion.rank})
                </div>
            </div>
            <div className="px-1 py-2">
                <div className={`${kdaColor} font-bold`} title="">
                    <span>{kda}:1</span>
                    <span>평점</span>
                </div>
                <div className="text-xs">
                    <span>{kills}</span>
                    <span>/</span>
                    <span>{assists}</span>
                    <span>/</span>
                    <span>{deaths}</span>
                </div>
            </div>
            <div className="px-3 py-2">
                <div className={`${winPct >= 60 ? 'text-loseGraphBorder' : 'text-soloRatingTextGray'} font-bold`} title="">
                    {winPct}%
                </div>
                <div className="text-xs">{games} 게임</div>
            </div>
        </div>

    )
};
