import { FC } from "react";
import { ChampionInfo } from "src/components/ChampionInfo";
import { GameInfo } from "src/components/GameInfo";
import { SoloRating } from "src/components/SoloRating";
import { SubTier } from "src/components/SubTier";
import { Summoner } from "src/types";

interface Props {
    summoner: Summoner;
    query: string;
}

export const SubContent: FC<Props> = ({ summoner, query }) => {

    return (
        <div className="flex flex-row min-w-max max-w-max m-auto">
            <div className="flex flex-col w-px300">
                <SoloRating summoner={summoner} />
                <SubTier summoner={summoner} />
                <ChampionInfo summonerId={query} />
            </div>
            <div className="flex flex-col w-px690 pl-3">
                <GameInfo summonerId={query} />
            </div>
        </div>
    )
}