import React from "react";


export const SubTier: React.FC = () => {
    return (
        <div className="flex flex-row w-full h-30 p-5 m-2 text-soloRatingText text-sm bg-soloRatingBoxBackground border border-soloRatingBoxBorder">
            <img src="//opgg-static.akamaized.net/images/medals/default.png" className="w-20 h-20" />
            <div className="self-center pl-5">
                <div className="sub-tier__rank-type">자유 5: 5 랭크</div>
                <div className="font-bold">
                    Unranked
                </div>
            </div>
        </div>
    )
};