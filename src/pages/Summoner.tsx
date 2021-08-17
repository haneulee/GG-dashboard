import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ChampionInfo } from "../components/ChampionInfo";
import { GameInfo } from "../components/GameInfo";
import { MyInfo } from "../components/MyInfo";
import { SoloRating } from "../components/SoloRating";
import { SubTier } from "../components/SubTier";

export const Summoner = () => {
    const location = useLocation();
    const [_, query] = location.search.split("?term=");

    const { isLoading, error, data } = useQuery('summoner', () => fetch(
        `https://codingtest.op.gg/api/summoner/${query}`
    ).then((res) => res.json())
    );

    return (
        <div>
            {error ? <p>Error.</p> : isLoading ? <p>Loading...</p> : (
                <>
                    <MyInfo summoner={data?.summoner} />
                    <div className="border-layoutBorderColor border" />
                    <div className="flex flex-row min-w-max max-w-max m-auto">
                        <div className="flex flex-col w-px300">
                            <SoloRating leagueInfo={data?.summoner?.['leagues'][0]} />
                            <SubTier leagueInfo={data?.summoner?.['leagues'][1]} />
                            <ChampionInfo summonerId={query} />
                        </div>
                        <div className="flex flex-col w-px690 pl-3">
                            <GameInfo summonerId={query} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}