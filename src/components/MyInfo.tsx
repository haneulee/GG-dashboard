import React from "react";

interface IMyInfoProps {
    data?: {
        summoner?: {
            name?: string;
            level?: number;
            ladderRank?: {
                rank?: number;
                rankPercentOfTop?: number;
            }
            profileImageUrl?: string;
            profileBorderImageUrl?: string;
        }
    }
}

export const MyInfo: React.FC<IMyInfoProps> = ({ data }) => {
    const summoner = data?.summoner;

    return (
        <div className="w-px990 h-60 flex flex-col m-auto text-gray-500">
            <div className="flex flex-row p-5 text-xs ">
                <span className="p-1 mr-3 rounded-md bg-lankGray text-lankTextGray border-2 border-lankBorderGray" title="">
                    <b>S9</b> Silver</span>
                <span className="p-1 mr-3 rounded-md bg-lankGray text-lankTextGray border-2 border-lankBorderGray" title="Gold 4 0LP">
                    <b>S2020</b> Gold</span>

            </div>
            <div className="flex flex-row">
                <div className="w-32 h-32 mr-5 relative">
                    <div className="absolute bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: `url(${summoner?.profileBorderImageUrl})` }}></div>
                    <img width="100px" height="100px" className="m-auto mt-3" src={summoner?.profileImageUrl} alt="" />
                    <span className="text-lankTextYellow absolute w-11 left-10 bottom-1 pl-2.5 box-border" title="레벨" style={{ backgroundImage: "url(https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png)" }}>{summoner?.level}</span>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold mt-5">{summoner?.name}</div>
                    <div>레더 랭킹 <b>{summoner?.ladderRank?.rank}</b>위 (상위 {summoner?.ladderRank?.rankPercentOfTop}%)</div>
                </div>
            </div>
        </div>
    );
};