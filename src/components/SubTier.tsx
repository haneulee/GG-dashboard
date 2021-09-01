import React, { FC } from "react";
import { Summoner } from "src/types";

interface Props {
    data: Summoner;
}

export const SubTier: FC<Props> = ({ data }) => {
    const leagueInfo = data.summoner.leagues[1];
    return (
        <div className="rating">
            <img src={leagueInfo.tierRank.imageUrl} className="w-20 h-20" alt="" />
            <div className="self-center pl-5">
                <div>{leagueInfo.tierRank.name}</div>
                <div className="font-bold">
                    {leagueInfo.tierRank.tier}
                </div>
            </div>
        </div>
    )
};