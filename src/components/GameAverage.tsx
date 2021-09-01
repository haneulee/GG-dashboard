import React, { FC } from "react";
import { Summary } from "src/types";

interface Props {
    summary: Summary;
}

export const GameAverage: FC<Props> = ({ summary }) => {
    const games = summary.wins + summary.losses;
    const kills = summary.kills;
    const assists = summary.assists;
    const deaths = summary.deaths;
    const wins = summary.wins;

    const kda = Math.round((kills + assists) / deaths);
    const winPct = Math.round((wins / games) * 100);
    const killPct = Math.round((kills / assists) * 100);

    const kdaColor = kda >= 5 ? "text-gameAvgYellow" : kda >= 4 ? "text-kdaBlue" : kda >= 3 ? "text-kdaGreen" : "text-soloRatingTextGra";

    return (
        <div className="flex flex-row w-full text-sm text-recentSearchColor border-r border-soloRatingBoxBorder">
            <div className="flex flex-row">
                <div className="p-2 flex flex-col text-center self-center">
                    <div>
                        <span className="total">{games}</span>전
                        <span className="win"> {wins}</span>승
                        <span className="lose"> {summary.losses}</span>패
                    </div>
                    <div className="text-xs w-28 h-28">
                        <div className="relative inline-block rounded-full w-24 h-24 mt-2" style={{ background: `conic-gradient(#1f8ecd 0% ${winPct}%, #c6443e ${winPct}% 100%` }}>
                            <span className="winPct"><b>{winPct}</b>%</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center self-center">
                    <div className="text-xs font-bold">
                        <span>{kills}</span>
                        <span> / </span>
                        <span>{assists}</span>
                        <span> / </span>
                        <span>{deaths}</span>
                    </div>
                    <div className="text-base">
                        <span className={`${kdaColor} font-bold`}>{kda}:1 </span>
                        <span className={`${killPct >= 60 ? 'text-loseGraphBorder' : 'text-soloRatingTextGray'}`}>
                            ({killPct}%)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};