import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChampionInfo } from "../components/ChampionInfo";
import { GameInfo } from "../components/GameInfo";
import { MyInfo } from "../components/MyInfo";
import { SoloRating } from "../components/SoloRating";
import { SubTier } from "../components/SubTier";
import Loading from "../lottie/lottie-loading.json"
import Lottie from 'react-lottie';

export const Summoner = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [_, query] = location.search.split("?term=");

    useEffect(() => {
        if (!query) return;
        setLoading(true);
        fetch(`https://codingtest.op.gg/api/summoner/${query}`)
            .then(res => res.json())
            .then(res => {
                if (res.summoner) {
                    setData(res)
                    setLoading(false);
                }
            });
    }, [query]);

    return (
        <div className="min-h-max">
            {loading ?
                <Lottie
                    options={{ animationData: Loading }}
                    style={{ width: '100%', height: '100%' }}
                /> : (
                    <>
                        <MyInfo data={data} />
                        <div className="border-layoutBorderColor border" />
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
                    </>
                )}
        </div>
    );
}