import React from "react";
import useFetch from "../hooks/useFetch";

const testId = "Hide on bush";

export const MyInfo: React.FC = () => {
    const { loading, data: summoner, error } = useFetch(`https://codingtest.op.gg/api/summoner/${testId}?hl=ko`);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    console.log(summoner);

    return (
        <div className="bg-gray-200 w-full h-60 p-30 flex flex-col pl-40 pr-40 text-gray-500">
            <div className="flex flex-row p-5 text-xs ">
                <span className="p-1 mr-3 rounded-md bg-lankGray text-lankTextGray border-2 border-lankBorderGray" title="">
                    <b>S9</b> Silver</span>
                <span className="p-1 mr-3 rounded-md bg-lankGray text-lankTextGray border-2 border-lankBorderGray" title="Gold 4 0LP">
                    <b>S2020</b> Gold</span>

            </div>
            <div className="flex flex-row">
                <div className="w-32 h-32 mr-5 relative">
                    <div className="absolute bg-center bg-no-repeat w-32 h-32" style={{ backgroundImage: "url(//opgg-static.akamaized.net/images/borders2/silver.png)" }}></div>
                    <img width="100px" height="100px" className="m-auto mt-3" src="//opgg-static.akamaized.net/images/profile_icons/profileIcon4904.jpg?image=q_auto:best&amp;v=1518361200" />
                    <span className="text-lankTextYellow absolute w-11 left-10 bottom-1 pl-2.5 box-border" title="레벨" style={{ backgroundImage: "url(https://opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png)" }}>173</span>
                </div>
                <div className="flex flex-col">
                    <div className="text-2xl font-bold mt-5">플레이어아이디</div>
                    <div>레더 랭킹 <b>363,499</b>위 (상위 40.7%)</div>
                </div>
            </div>
        </div>
    );
};