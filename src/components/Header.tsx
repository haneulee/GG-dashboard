import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query';
import { Link, useHistory } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { MostChampion } from "./MostChampion";

export const Header: React.FC = () => {
    const history = useHistory();
    const [tabState, setTabState] = useState('recentSearch');
    const [keyword, setKeyword] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const searchList = JSON.parse(localStorage.getItem('keywords') || '[]');
    const { isLoading, data, refetch } = useQuery('search', () =>
        fetch(
            `https://www.op.gg/ajax/autocomplete.json/keyword=${keyword}`
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
        console.log("key down =====> ", e.target.value, e.keyCode)
        setKeyword(e.target.value);
    }

    const onSubmit = () => {
        console.log("submit =====> ", keyword)
        const keywordList = JSON.parse(localStorage.getItem('keywords') || '[]')
        console.log(keyword, keywordList);

        if (keywordList.indexOf(keyword) === -1) {
            localStorage.setItem('keywords', JSON.stringify(keywordList.concat(keyword)))
        }

        history.push({ pathname: '/search', search: `?term=${keyword}`, })
    }

    return (
        <header className="bg-azure h-20 p-30 items-center flex justify-between">
            <div className="ml-5">
                <Link to="/" >
                    <img alt="OP.GG" height="16" src="//opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg" width="65" />
                </Link>
            </div>

            <div>
                <input
                    autoComplete="off"
                    className="pr-16 w-80 mr-5 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-90 focus:outline-none py-3 px-5 rounded-sm"
                    type="text"
                    placeholder="소환사명,챔피언..."
                    name="search"
                    onChange={onKeyDownHandler}
                    onKeyPress={e => {
                        if (e.key === 'Enter') {
                            onSubmit()
                        }
                    }}
                    onFocus={e => setIsFocus(true)}
                // onBlur={e => {
                //     console.log(e.target)
                //     setIsFocus(false)
                // }}
                />
                <button className="absolute right-7 top-5 w-10 h-10" onClick={onSubmit}>
                    <img height="14" src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg" alt="" />
                </button>
                < div className={`absolute flex flex-col z-50 w-80 bg-white shadow-lg mt-1 ${!(isFocus && keyword) ? "hidden" : ""}`} >
                    <div className="flex flex-col text-center">
                        {isLoading || !data ? <p>Loading...</p> :
                            data[0].groups[0].items.map((item: any, index: number) =>
                                <div onClick={onSubmit}>
                                    <MostChampion key={index} champions={item} />
                                </div>)}
                    </div>
                </div>
                <div className={`absolute flex flex-col z-50 w-80 bg-white shadow-lg mt-1 ${(isFocus && !keyword) ? "" : "hidden"}`} >
                    <div className="grid justify-items-stretch text-center grid-flow-col border-collapse">
                        <div className={`p-4 border-soloRatingBoxBorder ${tabState === "favorite" && 'border-r border-b bg-championInfoBg text-soloRatingTextGray'}`} data-type="recentSearch" onClick={onTabClick}>
                            최근검색
                        </div>
                        <div className={`p-4 border-soloRatingBoxBorder ${tabState === "recentSearch" && 'border-l border-b bg-championInfoBg text-soloRatingTextGray'}`} data-type="favorite" onClick={onTabClick}>
                            즐겨찾기
                        </div>
                    </div>
                    {/* 최근 검색*/}
                    <div className="flex flex-col text-center">
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
                                                    <div key={i} className="flex flex-row justify-between m-2 pl-3">
                                                        <div onClick={onSubmit}>{item}</div>
                                                        <div className="flex flex-row">
                                                            <div className="w-5 h-5 bg-center bg-no-repeat top-1Add" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-favorite-off.png)` }}></div>
                                                            <div className="w-5 h-5 bg-center bg-no-repeat Delete" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-history-delete.png)` }}></div>
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
        </header >
    );
};