import Loading from "../lottie/lottie-loading.json"
import Lottie from 'react-lottie';
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import api from "../util/APIUtil";
import { ChampionInfo } from "../components/ChampionInfo";
import { GameInfo } from "../components/GameInfo";
import { MyInfo } from "../components/MyInfo";
import { SoloRating } from "../components/SoloRating";
import { SubTier } from "../components/SubTier";
import { useLocation } from "react-router-dom";
import { ErrorFallback } from "../components/common/ErrorFallback";

export const Summoner = () => {
    const location = useLocation();
    const [_, query] = location.search.split("?term=");
    const [data, setData] = useState();

    const getData = useCallback(async () => {
        if (!query) return;
        try {
            const res = await api.fetchSummoner(query);
            if (res.summoner) {
                setData(res);
            }
        } catch (error) {
            console.log(error);
        }
    }, [query])

    useEffect(() => {
        getData();
    }, [getData]);

    const renderSummoner = () =>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Lottie
                options={{ animationData: Loading }}
                style={{ width: '100%', height: '100%' }}
            />}>
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
            </Suspense>
        </ErrorBoundary>

    return (
        <div className="min-h-max">
            {renderSummoner()}
        </div>
    );
}