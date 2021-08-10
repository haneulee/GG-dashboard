import React from "react";


export const SoloRating: React.FC = () => {
    return (
        <div className="flex flex-row w-full h-30 p-5 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <div className="w-20 h-20" title="솔랭">
                <img src="//opgg-static.akamaized.net/images/medals/silver_3.png?image=q_auto:best&amp;v=1" className="Image" />
            </div>
            <div className="ml-5">
                <div className="text-xs">솔로랭크</div>
                <div className="text-soloRatingTextGray font-bold">탑 (총 27게임)</div>
                <div className="text-soloRatingTextBlue text-lg font-bold">Silver 3</div>
                <div className="TierInfo">
                    <span className="text-soloRatingTextGray font-bold">
                        50 LP
                    </span>
                    /
                    <span className="WinLose">
                        <span className="wins">312승</span>
                        <span className="losses">317패</span>
                        <br />
                        <span className="winratio">승률 50%</span>
                    </span>
                </div>
            </div>
        </div>
    )
};