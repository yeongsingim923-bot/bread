import { asset } from "../utils/asset"
import { Link } from "react-router-dom"
import SubVisual from "../components/SubVisual"
import "../css/pages/About.css"
import Closing from "../components/Closing"

{/* 갓빵의 하루 시간표 */}
const TIMES = [
    { time: "05:00" , name : "반죽" , desc: "전날 밤 냉장고에서 48시간 쉰 반죽을 꺼내 모양을 잡아요."},
    { time: "06:00" , name : "발효" , desc: "27도 발효실에서 한 번 더 천천히 부풀려요."},
    { time: "07:00" , name : "오븐 ON" , desc: "골목에서 가장 먼저 오븐 불이 켜져요."},
    { time: "08:00" , name : "첫 판" , desc: "버터 27겹 크루아상이 제일 먼저 나와요."},
    { time: "09:30" , name : "소금빵" , desc: "하루 여섯 판 굽는 소금빵의 첫 판이에요."},
    { time: "13:00" , name : "오후 판" , desc: "식사빵과 두번째 바게트가 나와요."},
    { time: "17:00" , name : "마지막 판" , desc: "퇴근길 손님을 위한 마지막 빵이에요."},
    { time: "20:00" , name : "내일 준비" , desc: "문을 닫고, 남은 빵은 동네 푸드뱅크로 보내요."},
]

function About() {

    return(
        <>
            <SubVisual
                image={asset("images/about-hero.jpg")}
                kicker="브랜드 소개"
                title={<>식은 빵은<br />진열대에 올리지 않아요</>}
                desc="이름이 곧 원칙인 골목 끝 작은 빵집"
            />

            {/* 갓빵의 이야기 */}
            <section className="story section-dark">
                <div className="inner">
                    <h2 className="section-title story-head">갓빵의 이야기</h2>

                    <article className="story-item">
                        <div className="story-img">
                            <img src={asset("images/about-oven.jpg")} alt="문이 열린 오븐 안에서 김이 피어오르는 크루아상" />
                        </div>

                        <div className="story-text">
                            <img className="story-en" src={asset("images/since-2019-en.png")} alt="" />
                            <h3 className="story-name">이름이 곧 원칙이에요</h3>
                            <p className="story-desc">
                                갓빵은 '갓 구운 빵'의 줄임말이에요.<br />
                                나온 지 30분이 지난 빵은 반값 바구니로 옮기고,<br />
                                하루 12번 오븐을 열어 막 나온 빵만 진열대에 올려요.
                            </p>
                            <Link to="/menu" className="link-more">
                                오늘 굽는 빵 보기 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* 48시간 기다린 반죽 */}
            <section className="story section-cream">
                <div className="inner">
                    <article className="story-item reverse">
                        <div className="story-img">
                            <img src={asset("images/about-dough.jpg")} alt="밀가루 뿌린 나무판 위에서 반죽을 빚는 손" />
                        </div>

                        <div className="story-text">
                            <img className="story-en" src={asset("images/slow-doug-en.png")} alt="" />
                            <h3 className="story-name">48시간 기다린 반죽</h3>
                            <p className="story-desc">
                                우리 밀 70%에 오픈 날부터 키운<br />
                                천연 발효종 '르방이'를 넣어요.<br />
                                냉장고에서 이틀을 천천히 쉬어야 고소한 맛이 나요.
                            </p>
                            <Link to="/menu" className="link-more">
                                오늘 굽는 빵 보기 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            <section className="day section-dark">
                <div className="inner">
                    <h2 className="section-title day-head">갓빵의 하루</h2>

                    <div className="day-card">
                        <div className="day-card-head">
                            <h3 className="day-title hand">갓빵 하루 시간표</h3>
                            <p className="day-sub">매일 똑같이, 같은 시간에</p>
                        </div>

                        <ol className="day-list">
                            {TIMES.map((t) => (
                                <li className="day-row" key={t.time}>
                                    <span className="day-time hand">{t.time}</span>
                                    <div>
                                        <p className="day-name">{t.name}</p>
                                        <p className="day-desc">{t.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* 마무리 문구 */}
            <Closing
                title="남은 빵은 동네 푸드뱅크로"
                desc="그날 팔지 못한 빵은 다음 날 팔지 않아요. 매일 저녁 8시에 보내요."
                linkTo="/menu"
                linkLabel="메뉴보기"
            />
        </>
    )
}

export default About