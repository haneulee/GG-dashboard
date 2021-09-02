import React, { FC } from "react";
import { RecentWin } from "src/types";
import { getWinPct } from "src/util/utility";

interface Props {
    recentWin: RecentWin;
}

export const WeekRank: FC<Props> = ({ recentWin }) => {
    const wins = recentWin.wins;
    const losses = recentWin.losses;
    const winPct = getWinPct(wins, wins + losses);

    return (
        <div className="bg-championInfoBg flex flex-row justify-between text-center border-b border-soloRatingBoxBorder">
            <div className="pl-3 py-2" title={recentWin.name}>
                <img src={recentWin.imageUrl} width="45" className="rounded-full" alt={recentWin.name} />
            </div>
            <div className="p-2 self-center">
                <div className="text-soloRatingTextGray font-bold text-left w-16 truncate" title={recentWin.name}>
                    {recentWin.name}
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="text-soloRatingTextGray font-bold" title="">
                    {winPct}%
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="h-5 flex flex-row rounded-lg relative">
                    <div className="h-full bg-winGraph border border-winGraphBorder" style={{ width: `${winPct}px` }}>
                        <div className="text-xs text-left text-white absolute ml-1">{wins}승</div>
                    </div>

                    <div className="h-full bg-loseGraph border border-loseGraphBorder" style={{ width: `${100 - winPct}px` }}>
                        <div className="text-xs text-right text-white absolute right-0 mr-1">{losses}패</div>
                    </div>
                </div>
            </div>
        </div>

    )
};
