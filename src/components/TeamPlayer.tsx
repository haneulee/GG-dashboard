import React from "react";

interface ITeamPlayerProps {
    player: {
        champion: {
            imageUrl: string;
            level: number;
        }
        summonerId: string;
        summonerName: string;
    }
}

export const TeamPlayer: React.FC<ITeamPlayerProps> = ({ player }) => {
    return (
        <div className="Summoner flex flex-row ml-1 pb-1 " style={{ minWidth: "88px" }}>
            <div className="ChampionImage w-5 mr-2">
                <img src={player.champion.imageUrl} />
            </div>
            <div className="SummonerName truncate" style={{ maxWidth: "60px" }}>
                {player.summonerName}
            </div>
        </div >
    )
};