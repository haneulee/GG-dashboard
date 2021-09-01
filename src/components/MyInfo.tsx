import React, { FC } from "react";
import { Summoner } from "src/types";

interface Props {
    data: Summoner;
}

export const MyInfo: FC<Props> = ({ data }) => {
    return (
        <div className="w-px990 h-60 flex flex-col m-auto text-gray-500">
            <div className="flex flex-row px-2 py-5 text-xs ">
                <span className="badge">
                    <b>S9</b> Silver</span>
                <span className="badge">
                    <b>S2020</b> Gold</span>
            </div>
            <div className="flex flex-row">
                <div className="w-32 h-32 mr-5 relative">
                    <div className="absolute bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: `url(${data.summoner.profileBorderImageUrl})` }}></div>
                    <img width="100px" height="100px" className="m-auto mt-3" src={data.summoner.profileImageUrl} alt="" />
                    <span className="level" title="레벨" style={{ backgroundImage: "url(https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png)" }}>
                        {data.summoner.level}
                    </span>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold mt-5">{data.summoner.name}</div>
                    <div>레더 랭킹 <b>{data.summoner.ladderRank.rank}</b>위 (상위 {data.summoner.ladderRank.rankPercentOfTop}%)</div>
                </div>
            </div>
        </div>
    );
};