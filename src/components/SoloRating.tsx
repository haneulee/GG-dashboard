import React from "react";

interface ISoloRatingProps {
    leagueInfo?: {
        wins?: number,
        losses?: number,
        tierRank?: {
            division: string;
            imageUrl: string;
            lp: number;
            name: string;
            shortString: string;
            string: string;
            tier: string;
            tierDivision: string;
            tierRankPoint: number;
        };
    };
}

export const SoloRating: React.FC<ISoloRatingProps> = ({ leagueInfo }) => {
    const winPercentage = (leagueInfo?.wins || 0) / (leagueInfo?.wins || 1 + (leagueInfo?.losses || 1)) * 100;
    const totalGameCount = (leagueInfo?.wins || 0) + (leagueInfo?.losses || 0);
    return (
        <div className="flex flex-row w-full h-30 p-5 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <div className="w-20 h-20" title="">
                <img src={leagueInfo?.tierRank?.imageUrl} className="Image" alt="" />
            </div>
            <div className="ml-5">
                <div className="text-xs">{leagueInfo?.tierRank?.name}</div>
                <div className="text-soloRatingTextGray font-bold">탑 (총 {totalGameCount}게임)</div>
                <div className="text-soloRatingTextBlue text-lg font-bold">{leagueInfo?.tierRank?.tier} {leagueInfo?.tierRank?.shortString}</div>
                <div className="TierInfo">
                    <span className="text-soloRatingTextGray font-bold">
                        {leagueInfo?.tierRank?.lp} LP
                    </span>
                    <span> / </span>
                    <span className="WinLose">
                        <span className="wins">{leagueInfo?.wins}승</span>
                        <span className="losses"> {leagueInfo?.losses}패</span>
                        <br />
                        <span className="winratio">승률 {winPercentage}%</span>
                    </span>
                </div>
            </div>
        </div>
    )
};