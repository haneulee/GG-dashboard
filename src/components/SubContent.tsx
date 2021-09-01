import { FC } from "react";
import { ChampionInfo } from "src/components/ChampionInfo";
import { GameInfo } from "src/components/GameInfo";
import { SoloRating } from "src/components/SoloRating";
import { SubTier } from "src/components/SubTier";
import { Summoner } from "src/types";

interface Props {
    data: Summoner;
    query: string;
}

export const SubContent: FC<Props> = ({ data, query }) => {

    return (
        <div className="flex flex-row min-w-max max-w-max m-auto">
            <div className="flex flex-col w-px300">
                <SoloRating data={data} />
                <SubTier data={data} />
                <ChampionInfo summonerId={query} />
            </div>
            <div className="flex flex-col w-px690 pl-3">
                <GameInfo summonerId={query} />
            </div>
        </div>
    )
}