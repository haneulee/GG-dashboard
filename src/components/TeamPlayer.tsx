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
        <div className="Summoner flex flex-row ml-1 pb-0.5 " style={{ width: "70px" }}>
            <div className="ChampionImage min-w-max pr-1">
                <img src={player.champion.imageUrl} alt="" width="16px" height="16px" />
            </div>
            <div className="SummonerName truncate" style={{ maxWidth: "52px" }}>
                {player.summonerName}
            </div>
        </div >
    )
};