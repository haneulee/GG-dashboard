import React from "react";
import { InputBox } from "./InputBox";
import { MostChampion } from "./MostChampion";


export const Header: React.FC = () => {
    return (
        <header className="bg-azure h-20 p-30 items-center flex justify-between">
            <div className="ml-5">
                <a href="https://www.op.gg/" >
                    <img alt="OP.GG" height="16" src="//opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg" width="65" />
                </a>
            </div>
            <form>
                <InputBox />
                <button className="absolute right-7 top-5 w-10 h-10">
                    <img height="14" src="//opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg" />
                </button>

                {/* 검색 리스트 */}
                <div className="absolute flex flex-col z-50 w-80 bg-white shadow-lg mt-1 hidden" >
                    <div className="grid justify-items-stretch text-center grid-flow-col border-collapse">
                        <div className="p-4 border-soloRatingBoxBorder" data-type="Total">
                            <a href="#">
                                최근검색
                            </a>
                        </div>
                        <div className="p-4 border-l border-b border-soloRatingBoxBorder bg-championInfoBg text-soloRatingTextGray" data-type="Solo">
                            <a href="#">
                                즐겨찾기
                            </a>
                        </div>
                    </div>
                    {/* 최근 검색*/}
                    <div className="flex flex-col text-center">
                        <div className="tabItem summoner-search-history--recent" >
                            <div className="RecentSummonerListWrap">
                                <div className="flex flex-col m-5" >
                                    <div className="m-auto my-3">
                                        <img className="Image" width="16" height="16" src="//opgg-static.akamaized.net/images/site/icon-history-info@2x.png" />
                                    </div>
                                    <span className="">
                                        최근에 본 소환사가 없습니다.
                                    </span>
                                </div>
                                <div className="flex flex-col m-5">
                                    <div className="flex flex-row justify-between m-2 pl-3">
                                        <a href="/summoner/userName=A%20i" className="Link">A i</a>
                                        <div className="flex flex-row">
                                            <div className="w-5 h-5 bg-center bg-no-repeat top-1Add" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-favorite-off.png)` }}></div>
                                            <div className="w-5 h-5 bg-center bg-no-repeat Delete" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-history-delete.png)` }}></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between m-2 pl-3">
                                        <a href="/summoner/userName=A%20i" className="Link">A i</a>
                                        <div className="flex flex-row">
                                            <div className="w-5 h-5 bg-center bg-no-repeat top-1Add" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-favorite-off.png)` }}></div>
                                            <div className="w-5 h-5 bg-center bg-no-repeat Delete" style={{ backgroundImage: `url(//opgg-static.akamaized.net/images/site/icon-history-delete.png)` }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col m-5" >
                                    <div className="m-auto my-3">
                                        <img className="Image" width="16" height="16" src="//opgg-static.akamaized.net/images/site/icon-history-info@2x.png" />
                                    </div>
                                    <span>
                                        관심있는 소환사에 <i className="__spSite __spSite-100"></i> 즐겨찾기를 하여 편리하게 정보를 받아보세요.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 아이디 자동완성*/}
                <div className="absolute flex flex-col z-50 w-80 bg-white shadow-lg mt-1 " >
                    <div className="flex flex-col text-center">
                        <MostChampion />
                    </div>
                </div>
            </form>
        </header >
    );
};