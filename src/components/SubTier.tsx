import React from "react";

interface ISubTierProps {
    leagueInfo?: {
        wins?: number,
        losses?: number,
        tierRank?: {
            imageUrl?: string;
            name?: string;
            tier?: number;
        };
    };
}

export const SubTier: React.FC<ISubTierProps> = ({ leagueInfo }) => {
    return (
        <div className="flex flex-row w-full h-30 p-5 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <img src={leagueInfo?.tierRank?.imageUrl} className="w-20 h-20" alt="" />
            <div className="self-center pl-5">
                <div className="sub-tier__rank-type">{leagueInfo?.tierRank?.name}</div>
                <div className="font-bold">
                    {leagueInfo?.tierRank?.tier}
                </div>
            </div>
        </div>
    )
};