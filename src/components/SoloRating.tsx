import React, { FC } from "react";
import { Summoner } from "src/types";

interface Props {
    summoner: Summoner
}

export const SoloRating: FC<Props> = ({ summoner }) => {
    const leagueInfo = summoner.leagues[0];
    const totalGameCount = leagueInfo.wins + leagueInfo.losses;
    const winPercentage = Math.round((leagueInfo.wins / totalGameCount) * 100);
    return (
        <div className="rating">
            <div className="w-20 h-20" title="">
                <img src={leagueInfo.tierRank.imageUrl} className="Image" alt="" />
            </div>
            <div className="ml-5">
                <div className="text-xs">{leagueInfo.tierRank.name}</div>
                <div className="text-soloRatingTextGray font-bold">탑 (총 {totalGameCount}게임)</div>
                <div className="text-soloRatingTextBlue text-lg font-bold">{leagueInfo.tierRank.tier} {leagueInfo.tierRank.shortString}</div>
                <div>
                    <span className="text-soloRatingTextGray font-bold">
                        {leagueInfo.tierRank.lp} LP
                    </span>
                    <span> / </span>
                    <span>
                        <span>{leagueInfo.wins}승</span>
                        <span> {leagueInfo.losses}패</span>
                        <br />
                        <span>승률 {winPercentage}%</span>
                    </span>
                </div>
            </div>
        </div>
    )
};