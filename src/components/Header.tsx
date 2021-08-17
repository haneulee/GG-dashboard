import OutsideClickHandler from 'react-outside-click-handler';
import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { Link, useHistory } from "react-router-dom";
import { useQuery } from 'react-query';
import Loading from "../lottie/lottie-loading.json"
import Lottie from 'react-lottie';

export const Header: React.FC = () => {
    const history = useHistory();
    const [tabState, setTabState] = useState('recentSearch');
    const [keyword, setKeyword] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const searchList = JSON.parse(localStorage.getItem('keywords') || '[]');
    const { isLoading, error, data, refetch } = useQuery('search', () => fetch(
        `https://codingtest.op.gg/api/summoner/${keyword}`
    ).then((res) => res.json())
    );

    const onTabClick = (e: any) => {
        const { target } = e;
        const dataType = target.getAttribute('data-type');

        if (tabState !== dataType) {
            setTabState(dataType);
        }
    }

    const debouncedSearchTerm = useDebounce(keyword, 1000);

    const searchItems = async (search: string) => {
        console.log("API Call =====> ", search)
        refetch();
    };

    useEffect(() => {
        // debouncedSearchTerm가 바뀔 때만 재실행
        searchItems(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    const onKeyDownHandler = (e: any) => {
        setKeyword(e.target.value);
    }

    const onSubmit = (e: any, name?: string) => {
        setIsFocus(false);
        if (!(name || keyword)) return;

        const summonerName = name || keyword;
        const keywordList = JSON.parse(localStorage.getItem('keywords') || '[]')

        if (keywordList.indexOf(summonerName) === -1) {
            localStorage.setItem('keywords', JSON.stringify(keywordList.concat(summonerName)))
        }

        history.push({ pathname: '/search', search: `?term=${summonerName}`, })
    }

    return (
        <header className="bg-azure h-px97 p-30 items-center flex justify-between text-xs">
            <div className="ml-5">
                <Link to="/" >
                    <img alt="OP.GG" height="16" src="//opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg" width="65" />
                </Link>
            </div>
            <OutsideClickHandler onOutsideClick={() => setIsFocus(false)}>
                <div className="relative mr-5">
                    <input
                        autoComplete="off"
                        className="pr-16 w-px260 h-px32 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-90 focus:outline-none py-3 px-5 rounded-sm pl-px14 pt-px9 pr-px42 pb-px8"
                        type="text"
                        placeholder="소환사명,챔피언..."
                        name="search"
                        onChange={onKeyDownHandler}
                        onKeyPress={e => {
                            if (e.key === 'Enter') {
                                onSubmit(e, '')
                            }
                        }}
                        onFocus={e => setIsFocus(true)}
                    />
                    <button className="absolute right-2 top-0 w-8 h-8" onClick={onSubmit}>
                        <img height="14" src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg" alt="" />
                    </button>

                    < div className={`absolute flex flex-col z-50 w-full bg-white shadow-lg mt-1 ${!(isFocus && keyword) ? "hidden" : ""}`} >
                        <div className="flex flex-col text-center">
                            {isLoading || !data ?
                                <Lottie
                                    options={{ animationData: Loading }}
                                    style={{ width: '100%', height: '100%' }}
                                /> : error ? <p>Error!</p> :
                                    <div onClick={(e) => onSubmit(e, data.summoner.name)} className="cursor-pointer flex flex-row text-center text-xs">
                                        <div className="pl-3 py-2" title={data.summoner?.name}>
                                            <img src={data.summoner?.profileImageUrl} width="40" className="rounded-full" alt={data.summoner?.name} />
                                        </div>
                                        <div className="p-2 flex flex-col text-left">
                                            <div className="text-recentSearchColor font-bold text-base truncate w-px200" title={data.summoner?.name}>
                                                {data.summoner?.name}
                                            </div>
                                            <div>
                                                <span >
                                                    {data.summoner?.leagues[0].tierRank.tier}
                                                </span>
                                                <span> - </span>
                                                <span>
                                                    {data.summoner?.leagues[0].tierRank.lp} LP
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className={`absolute flex flex-col z-50 w-full bg-white shadow-lg mt-1 ${(isFocus && !keyword) ? "" : "hidden"}`} >
                        <div className="grid justify-items-stretch text-center grid-flow-col border-collapse h-px40 text-tabActiveColor  text-sm">
                            <div className={`pt-2 border-soloRatingBoxBorder cursor-pointer ${tabState === "favorite" && 'border-r border-b bg-championInfoBg text-soloRatingTextGray text-tabDisableColor bg-tabDisableBg'}`} data-type="recentSearch" onClick={onTabClick}>
                                최근검색
                            </div>
                            <div className={`pt-2 border-soloRatingBoxBorder cursor-pointer ${tabState === "recentSearch" && 'border-l border-b bg-championInfoBg text-soloRatingTextGray text-tabDisableColor bg-tabDisableBg'}`} data-type="favorite" onClick={onTabClick}>
                                즐겨찾기
                            </div>
                        </div>
                        {/* 최근 검색*/}
                        <div className="flex flex-col text-center text-recentSearchColor">
                            <div className="tabItem summoner-search-history--recent" >
                                <div className="RecentSummonerListWrap">
                                    {tabState === "recentSearch" &&
                                        <div className="flex flex-col m-5">
                                            {searchList.length === 0 ?
                                                <div>
                                                    <div className="m-auto my-3">
                                                        <img className="Image m-auto" width="16" height="16" src="//opgg-static.akamaized.net/images/site/icon-history-info@2x.png" alt="" />
                                                    </div>
                                                    <span className="">
                                                        최근에 본 소환사가 없습니다.
                                                    </span>
                                                </div> :
                                                <div>
                                                    {searchList.map((item: any, i: number) =>
                                                        <div key={i} className="flex flex-row justify-between my-2">
                                                            <div className="cursor-pointer text-left truncate w-px141" onClick={(e) => onSubmit(e, item)}>{item}</div>
                                                            <div className="flex flex-row">
                                                                <div className="w-5 h-5 bg-center bg-no-repeat top-1 cursor-pointer" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-favorite-off.png)` }}></div>
                                                                <div className="w-5 h-5 bg-center bg-no-repeat cursor-pointer" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-history-delete.png)` }}></div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            }
                                        </div>
                                    }
                                    {tabState === "favorite" &&
                                        <div className="flex flex-col m-5" >
                                            <div className="m-auto my-3">
                                                <img className="Image" width="16" height="16" src="//opgg-static.akamaized.net/images/site/icon-history-info@2x.png" alt="" />
                                            </div>
                                            <span>
                                                관심있는 소환사에 <i className="__spSite __spSite-100"></i> 즐겨찾기를 하여 편리하게 정보를 받아보세요.
                                            </span>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </header >
    );
};