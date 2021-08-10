import React from "react";

export const GameList: React.FC = () => {

    return (
        <div className="flex flex-row w-full h-32 justify-between m-2 bg-gameListBlueBg border border-gameListBlueBorder">
            <div className="GameStats">
                <div className="GameType" title="솔랭">
                    솔랭
                </div>
                <div className="TimeStamp"><span className="_timeago _timeCountAssigned tip" data-datetime="1628596752" data-type="" data-interval="60" title="2021년 8월 11일 오전 2시 33분">34분 후</span></div>
                <div className="Bar"></div>
                <div className="GameResult">
                    패배									</div>
                <div className="GameLength">18분 18초</div>

            </div>
            <div className="GameSettingInfo">
                <div className="ChampionImage">
                    <a href="/champion/swain/statistics" target="_blank">
                        <img src="//opgg-static.akamaized.net/images/lol/champion/Swain.png?image=c_scale,q_auto,w_46&amp;v=1626880099" className="Image" alt="스웨인" />
                    </a>
                </div>

                <div className="SummonerSpell">
                    <div className="Spell">
                        <img src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="Image tip" title="<b style='color: #ffc659'>점멸</b><br><span>커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.</span>" alt="점멸" />
                    </div>
                    <div className="Spell">
                        <img src="//opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="Image tip" title="<b style='color: #ffc659'>점화</b><br><span>적 챔피언을 불태워 5초 동안 70~410의 고정 피해(챔피언 레벨에 따라 변동)를 입히고 모습을 드러내며 치료 효과를 감소시킵니다.</span>" alt="점화" />
                    </div>
                </div>
                <div className="Runes">
                    <div className="Rune">
                        <img src="//opgg-static.akamaized.net/images/lol/perk/8112.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="Image tip tpd-delegation-uid-1" title="" alt="감전" />
                    </div>
                    <div className="Rune">
                        <img src="//opgg-static.akamaized.net/images/lol/perkStyle/8300.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="Image tip" title="<b style='color: #ffc659'>영감</b><br><span>다양한 방식의 전투 보조</span>" alt="영감" />
                    </div>
                </div>
                <div className="ChampionName">
                    <a href="/champion/swain/statistics" target="_blank">스웨인</a>
                </div>
            </div>
            <div className="KDA">
                <div className="KDA">
                    <span className="Kill">1</span> /
                    <span className="Death">9</span> /
                    <span className="Assist">0</span>
                </div>
                <div className="KDARatio">
                    <span className="KDARatio ">0.11:1</span> 평점				</div>
            </div>
            <div className="Stats">
                <div className="Level">
                    레벨8
                </div>
                <div className="CS">
                    <span className="CS tip" title="미니언 15  + 몬스터 0<br>분당CS 0.8개">15 (0.8)</span> CS
                </div>
                <div className="CKRate tip tpd-delegation-uid-1" title="">
                    킬관여 20%
                </div>
                <div className="MMR">
                    <span>매치 평균</span>
                    <br />
                    <b>Silver 3</b>
                </div>
            </div>
            <div className="Items">
                <div className="ItemList">
                    <div className="Item">
                        <img src="//opgg-static.akamaized.net/images/lol/item/3851.png?image=q_auto:best&amp;v=1626880099" className="Image tip tpd-delegation-uid-1" title="" alt="얼음 송곳니" />
                    </div>
                    <div className="Item">
                        <img src="//opgg-static.akamaized.net/images/lol/item/3157.png?image=q_auto:best&amp;v=1626880099" className="Image tip" title="<b style='color: #00cfbc'>존야의 모래시계</b><br><span>사용하면 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다.</span><br><span><mainText><stats>주문력 <attention>65</attention><br>방어력 <attention>45</attention><br>스킬 가속 <attention>10</attention></stats><br><br><active>사용 시 -</active> <active>경직:</active> 2.5초 동안 <status>무적</status> 및 <status>대상으로 지정할 수 없는 상태</status>가 되지만, 그동안 아무런 행동도 할 수 없습니다. (재사용 대기시간 120초)</mainText><br></span><br><span>가격:</span> <span style='color: #ffc659'>2600 (50)</span>" alt="존야의 모래시계" />
                    </div>
                    <div className="Item">
                        <img src="//opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&amp;v=1626880099" className="Image tip" title="<b style='color: #00cfbc'>장화</b><br><span>이동 속도가 약간 증가합니다.</span><br><span><mainText><stats>이동 속도 <attention>25</attention></stats></mainText><br></span><br><span>가격:</span> <span style='color: #ffc659'>300 (300)</span>" alt="장화" />
                    </div>
                    <div className="Item">
                        <img src="//opgg-static.akamaized.net/images/lol/item/3364.png?image=q_auto:best&amp;v=1626880099" className="Image tip tpd-delegation-uid-1" title="" alt="예언자의 렌즈" />
                    </div>
                    <div className="Item">
                        <img src="//opgg-static.akamaized.net/images/lol/item/1027.png?image=q_auto:best&amp;v=1626880099" className="Image tip tpd-delegation-uid-1" title="" alt="사파이어 수정" />
                    </div>
                    <div className="Item">
                        <img src="//opgg-static.akamaized.net/images/lol/item/1052.png?image=q_auto:best&amp;v=1626880099" className="Image tip" title="<b style='color: #00cfbc'>증폭의 고서</b><br><span>주문력이 약간 상승합니다.</span><br><span><mainText><stats>주문력 <attention>20</attention></stats></mainText><br></span><br><span>가격:</span> <span style='color: #ffc659'>435 (435)</span>" alt="증폭의 고서" />
                    </div>
                    <div className="Item">
                        <div className="Image NoItem"></div>
                    </div>
                    <button className="Button OpenBuildButton tip tpd-delegation-uid-1" title="" type="button">
                        <img className="On" src="//opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png" />
                        <img className="Off" src="//opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png" />
                    </button>
                </div>
                <div className="Trinket">
                    <img src="//opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png" />
                    제어 와드 <span className="wards vision">3</span></div>
            </div>
            <div className="FollowPlayers Names">
                <div className="Team">
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-146 tip" title="야스오">야스오</div>
                            <div className="Image20 __sprite __spc20 __spc20-146 tip" title="야스오">야스오</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=Stay+Late" className="Link" target="_blank">Stay Late</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-150 tip tpd-delegation-uid-1" title="">자크</div>
                            <div className="Image20 __sprite __spc20 __spc20-150 tip" title="자크">자크</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=%EC%8A%B9%EC%9B%90%EB%98%A5%EA%BC%AC%EC%B9%BC%EB%9D%BC%EB%98%A5%EA%BC%AC" className="Link" target="_blank">승원똥꼬칼라똥꼬</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-40 tip tpd-delegation-uid-1" title="">하이머딩거</div>
                            <div className="Image20 __sprite __spc20 __spc20-40 tip" title="하이머딩거">하이머딩거</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=%EB%B0%94+%EC%9C%84" className="Link" target="_blank">바 위</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-68 tip" title="루시안">루시안</div>
                            <div className="Image20 __sprite __spc20 __spc20-68 tip" title="루시안">루시안</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=%EA%B0%95%EB%AF%BC%EC%A0%9C%EB%A5%BC%EC%9E%8A%EB%8A%94%EB%B2%95" className="Link" target="_blank">강민제를잊는법</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-13 tip tpd-delegation-uid-1" title="">블리츠크랭크</div>
                            <div className="Image20 __sprite __spc20 __spc20-13 tip" title="블리츠크랭크">블리츠크랭크</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=%EB%8B%B9%EC%97%B0%ED%9E%88%EB%84%88%EB%A1%9C%EC%A0%95%ED%96%88%EB%8B%A4" className="Link" target="_blank">당연히너로정했다</a>
                        </div>
                    </div>
                </div>
                <div className="Team">
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-88 tip tpd-delegation-uid-1" title="">오른</div>
                            <div className="Image20 __sprite __spc20 __spc20-88 tip" title="오른">오른</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=l%EB%82%B4+%EB%A8%B8%EB%A6%AC%EC%97%90+%ED%95%9C%EB%B0%9Cl" className="Link" target="_blank">l내 머리에 한발l</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-142 tip tpd-delegation-uid-1" title="">워윅</div>
                            <div className="Image20 __sprite __spc20 __spc20-142 tip" title="워윅">워윅</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=dnljfnakl" className="Link" target="_blank">dnljfnakl</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-11 tip tpd-delegation-uid-1" title="">아지르</div>
                            <div className="Image20 __sprite __spc20 __spc20-11 tip" title="아지르">아지르</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=%EC%96%91%EB%8F%84%ED%86%A8" className="Link" target="_blank">양도톨</a>
                        </div>
                    </div>
                    <div className="Summoner ">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-16 tip" title="케이틀린">케이틀린</div>
                            <div className="Image20 __sprite __spc20 __spc20-16 tip" title="케이틀린">케이틀린</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=%EC%98%A4%ED%96%89%EC%A7%80" className="Link" target="_blank">오행지</a>
                        </div>
                    </div>
                    <div className="Summoner Requester">
                        <div className="ChampionImage">
                            <div className="Image16 __sprite __spc16 __spc16-117 tip" title="스웨인">스웨인</div>
                            <div className="Image20 __sprite __spc20 __spc20-117 tip" title="스웨인">스웨인</div>
                        </div>
                        <div className="SummonerName">
                            <a href="//www.op.gg/summoner/userName=LilTommy" className="Link" target="_blank">LilTommy</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="StatsButton">
                <div className="Content">
                    <div className="Item">
                        <a id="right_match" href="#" className="Button MatchDetail">
                            <span className="__spSite __spSite-198 Off"></span>
                            <span className="__spSite __spSite-197 On"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-10 bg-gameListBlueMoreBg border border-gameListBlueMoreBorder"></div>
        </div>
    )


};