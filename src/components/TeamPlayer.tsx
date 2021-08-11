import React from "react";


export const TeamPlayer: React.FC = () => {
    return (
        <div className="Summoner flex flex-row ml-1 pb-1">
            <div className="ChampionImage">
                <div className="bg-center bg-no-repeat w-5 h-4" style={{ backgroundImage: "url(//opgg-static.akamaized.net/assets/champion16.png?image=q_auto&v=1626880099)", backgroundPosition: "0px -2336px" }}></div>
            </div>
            <div className="SummonerName" style={{ maxWidth: "60px" }}>
                <a href="//www.op.gg/summoner/userName=Stay+Late" className="no-underline truncate block" target="_blank">Stay Late</a>
            </div>
        </div>
    )
};