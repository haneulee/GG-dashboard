import React from "react";

interface ISoloRatingProps {
    leagueInfo?: {
        wins?: number,
        losses?: number,
        tierRank?: {
            imageUrl?: string;
            lp?: number;
            tier?: number;
            shortString?: string;
        };
    };
}

export const SoloRating: React.FC<ISoloRatingProps> = ({ leagueInfo }) => {
    const winPercentage = (leagueInfo?.wins || 0) / (leagueInfo?.wins || 1 + (leagueInfo?.losses || 1)) * 100;
    return (
        <div className="flex flex-row w-full h-30 p-5 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <div className="w-20 h-20" title="솔랭">
                <img src={leagueInfo?.tierRank?.imageUrl} className="Image" />
            </div>
            <div className="ml-5">
                <div className="text-xs">솔로랭크</div>
                <div className="text-soloRatingTextGray font-bold">탑 (총 27게임)</div>
                <div className="text-soloRatingTextBlue text-lg font-bold">{leagueInfo?.tierRank?.tier} {leagueInfo?.tierRank?.shortString}</div>
                <div className="TierInfo">
                    <span className="text-soloRatingTextGray font-bold">
                        {leagueInfo?.tierRank?.lp} LP
                    </span>
                    /
                    <span className="WinLose">
                        <span className="wins">{leagueInfo?.wins}승</span>
                        <span className="losses">{leagueInfo?.losses}패</span>
                        <br />
                        <span className="winratio">승률 {winPercentage}%</span>
                    </span>
                </div>
            </div>
        </div>
    )
};