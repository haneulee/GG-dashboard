import React, { FC } from "react";
import { PLAYER } from "src/types";

interface Props {
    player: PLAYER;
}

export const TeamPlayer: FC<Props> = ({ player }) => {
    return (
        <div className="flex flex-row ml-1 pb-0.5 " style={{ width: "70px" }}>
            <div className="min-w-max pr-1">
                <img src={player.champion.imageUrl} alt="" width="16px" height="16px" />
            </div>
            <div className="truncate" style={{ maxWidth: "52px" }}>
                {player.summonerName}
            </div>
        </div >
    )
};