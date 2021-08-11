import React from "react";
import { TeamPlayer } from "./TeamPlayer";

interface IGameProps {
    blue?: boolean
}

export const Game: React.FC<IGameProps> = ({ blue }) => {

    return (
        <div className={`flex flex-row w-full h-32 justify-between m-2 border ${blue ? 'bg-gameListBlueBg  border-gameListBlueBorder' : 'bg-gameListRedBg  border-gameListRedBorder'} text-soloRatingTextGray text-xs text-center`}>
            <div className="p-2 self-center">
                <div className="font-bold" title="솔랭">
                    솔랭
                </div>
                <div className="TimeStamp"><span className="_timeago _timeCountAssigned tip" data-datetime="1628596752" data-type="" data-interval="60" title="2021년 8월 11일 오전 2시 33분">34분 후</span></div>
                <div className="w-6 h-0.5 m-auto my-2 bg-gameListRedBorder"></div>
                <div className="text-loseGraphBorder font-bold">
                    패배									</div>
                <div className="GameLength">18분 18초</div>

            </div>
            <div className="p-2 self-center flex flex-col">
                <div className="flex flex-row">
                    <a href="/champion/swain/statistics" target="_blank">
                        <img src="//opgg-static.akamaized.net/images/lol/champion/Swain.png?image=c_scale,q_auto,w_46&amp;v=1626880099" className="rounded-full" alt="스웨인" />
                    </a>
                    <div className="pl-1">
                        <div className="">
                            <img src="//opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="rounded-md tip" title="<b style='color: #ffc659'>점멸</b><br><span>커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.</span>" alt="점멸" />
                        </div>
                        <div className="">
                            <img src="//opgg-static.akamaized.net/images/lol/spell/SummonerDot.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="rounded-md tip" title="<b style='color: #ffc659'>점화</b><br><span>적 챔피언을 불태워 5초 동안 70~410의 고정 피해(챔피언 레벨에 따라 변동)를 입히고 모습을 드러내며 치료 효과를 감소시킵니다.</span>" alt="점화" />
                        </div>
                    </div>
                    <div className="Runes">
                        <div className="Rune">
                            <img src="//opgg-static.akamaized.net/images/lol/perk/8112.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="rounded-full tip tpd-delegation-uid-1" title="" alt="감전" />
                        </div>
                        <div className="Rune">
                            <img src="//opgg-static.akamaized.net/images/lol/perkStyle/8300.png?image=c_scale,q_auto,w_22&amp;v=1626880099" className="rounded-full tip" title="<b style='color: #ffc659'>영감</b><br><span>다양한 방식의 전투 보조</span>" alt="영감" />
                        </div>
                    </div>
                </div>
                <div className="pt-2">
                    <a href="/champion/swain/statistics" target="_blank">스웨인</a>
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="KDA text-sm pb-1">
                    <span className="Kill font-bold">1</span> /
                    <span className="Death font-bold text-loseGraphBorder">9</span> /
                    <span className="Assist font-bold">0</span>
                </div>
                <div className="KDARatio font-bold pb-1">
                    <span className="KDARatio text-gameTextBlack">0.11:1</span> 평점
                </div>
                <div className="Badge p-1 text-white">
                    <span className="bg-loseGraph border-loseGraphBorder border rounded-lg px-1 ml-1">더블킬</span>
                    <span className="bg-gameBadgeBg border-gameBadgeBorder border rounded-lg px-1 ml-1">ACE</span>
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="Level">
                    레벨8
                </div>
                <div className="CS">
                    <span className="CS tip" title="미니언 15  + 몬스터 0<br>분당CS 0.8개">15 (0.8)</span> CS
                </div>
                <div className="CKRate text-loseGraphBorder" title="">
                    킬관여 20%
                </div>
                <div className="MMR">
                    <span>매치 평균</span>
                    <br />
                    <b className="text-gameTextBlack">Silver 3</b>
                </div>
            </div>
            <div className="p-2 self-center">
                <div className="ItemList flex flex-row">
                    <div className="Item w-7 m-0.5">
                        <img src="//opgg-static.akamaized.net/images/lol/item/3851.png?image=q_auto:best&amp;v=1626880099" className="rounded-lg tip tpd-delegation-uid-1" title="" alt="얼음 송곳니" />
                    </div>
                    <div className="Item w-7 m-0.5">
                        <img src="//opgg-static.akamaized.net/images/lol/item/3157.png?image=q_auto:best&amp;v=1626880099" className="rounded-lg tip" title="<b style='color: #00cfbc'>존야의 모래시계</b><br><span>사용하면 아무런 행동도 취할 수 없는 대신 공격도 받지 않는 무적 상태가 됩니다.</span><br><span><mainText><stats>주문력 <attention>65</attention><br>방어력 <attention>45</attention><br>스킬 가속 <attention>10</attention></stats><br><br><active>사용 시 -</active> <active>경직:</active> 2.5초 동안 <status>무적</status> 및 <status>대상으로 지정할 수 없는 상태</status>가 되지만, 그동안 아무런 행동도 할 수 없습니다. (재사용 대기시간 120초)</mainText><br></span><br><span>가격:</span> <span style='color: #ffc659'>2600 (50)</span>" alt="존야의 모래시계" />
                    </div>
                    <div className="Item w-7 m-0.5">
                        <img src="//opgg-static.akamaized.net/images/lol/item/1001.png?image=q_auto:best&amp;v=1626880099" className="rounded-lg tip" title="<b style='color: #00cfbc'>장화</b><br><span>이동 속도가 약간 증가합니다.</span><br><span><mainText><stats>이동 속도 <attention>25</attention></stats></mainText><br></span><br><span>가격:</span> <span style='color: #ffc659'>300 (300)</span>" alt="장화" />
                    </div>
                    <div className="Item w-7 m-0.5">
                        <img src="//opgg-static.akamaized.net/images/lol/item/3364.png?image=q_auto:best&amp;v=1626880099" className="rounded-lg tip tpd-delegation-uid-1" title="" alt="예언자의 렌즈" />
                    </div>

                </div>
                <div className="ItemList flex flex-row">
                    <div className="Item w-7 m-0.5">
                        <img src="//opgg-static.akamaized.net/images/lol/item/1027.png?image=q_auto:best&amp;v=1626880099" className="rounded-lg tip tpd-delegation-uid-1" title="" alt="사파이어 수정" />
                    </div>
                    <div className="Item w-7 m-0.5">
                        <img src="//opgg-static.akamaized.net/images/lol/item/1052.png?image=q_auto:best&amp;v=1626880099" className="rounded-lg tip" title="<b style='color: #00cfbc'>증폭의 고서</b><br><span>주문력이 약간 상승합니다.</span><br><span><mainText><stats>주문력 <attention>20</attention></stats></mainText><br></span><br><span>가격:</span> <span style='color: #ffc659'>435 (435)</span>" alt="증폭의 고서" />
                    </div>
                    <div className="Item w-7 m-0.5 bg-soloRatingTextGray opacity-50 rounded-lg">
                        <div className=" "></div>
                    </div>
                    <button className="Button OpenBuildButton tip tpd-delegation-uid-1" title="" type="button">
                        <img className="Off" src="//opgg-static.akamaized.net/css3/sprite/images/icon-buildred-p.png" />
                    </button>
                </div>
                <div className="Trinket flex flex-row justify-center m-1">
                    <img src="//opgg-static.akamaized.net/images/site/summoner/icon-ward-red.png" className="mr-1" />
                    <span className="wards vision">제어 와드 3</span></div>
            </div>
            <div className="p-2 self-center flex flex-row">
                <div className="Team flex flex-col">
                    <TeamPlayer />
                    <TeamPlayer />
                    <TeamPlayer />
                    <TeamPlayer />
                    <TeamPlayer />
                </div>
                <div className="Team flex flex-col">
                    <TeamPlayer />
                    <TeamPlayer />
                    <TeamPlayer />
                    <TeamPlayer />
                    <TeamPlayer />
                </div>
            </div>
            <div className={`align-items-center w-10 border ${blue ? 'bg-gameListBlueMoreBg border-gameListBlueMoreBorder' : 'bg-gameListRedMoreBg  border-gameListRedMoreBorder'}`}>
                <i className={`border-solid inline-block border-r-2 border-b-2 transform rotate-45 p-1 mt-24 ${blue ? 'border-gameMoreBlue' : 'border-gameMoreRed'}`}></i>
            </div>
        </div>
    )

};
