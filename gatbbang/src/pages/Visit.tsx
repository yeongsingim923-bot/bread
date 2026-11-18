import { asset } from "../utils/asset"
import { Link } from "react-router-dom"
import "../css/pages/Visit.css"
import SubVisual from "../components/SubVisual"

/* 요일별 영업시간 */
const WEEK = [
    { n: 1, day: "월요일", short: "월", time: "휴무" },
    { n: 2, day: "화요일", short: "화", time: "07–20" },
    { n: 3, day: "수요일", short: "수", time: "07–20" },
    { n: 4, day: "목요일", short: "목", time: "07–20" },
    { n: 5, day: "금요일", short: "금", time: "07–20" },
    { n: 6, day: "토요일", short: "토", time: "07–20" },
    { n: 0, day: "일요일", short: "일", time: "07–20" },
];

/* 오는 방법 */
const WAYS = [
    { kind: "지하철", place: "OO역 3번 출구",  desc: "공원 방향 도보 7분", img: asset("images/croissant-cutout.png") },
    { kind: "버스",   place: "밀밭공원 정류장", desc: "길 건너 바로 앞",    img: asset("images/salt-bread-cutout.png") },
    { kind: "자동차", place: "건물 뒤 주차장",  desc: "구매 시 1시간 무료",  img: asset("images/scone-cutout.png") },
];

function Visit() {

    const today = new Date().getDay();   // 오늘 요일 번호 (일 0 ~ 토 6)

    return(
        <>
            <SubVisual
                image={asset("images/visit-hero.jpg")}
                kicker="매장안내"
                title="빵집 오는 길"
                desc="공원 옆 노란 간판"
                dark
            />

            {/* 갓빵 본점 */}
            <section className="store section-dark">
                <div className="inner">
                    <h2 className="section-title store-head">갓빵 본점</h2>

                    <div className="store-item">
                        <div className="store-map">
                            <img src={asset("images/visit-map.png")} alt="갓빵 주변 지도. 큰길에서 골목으로 들어가 공원을 지나면 골목 끝에 빵집이 있어요." />
                        </div>

                        <div className="store-text">
                            <p className="store-en hand" aria-hidden="true">Visit Us</p>
                            <h3 className="store-name hand">밀가루로 12, 1층</h3>
                            <address className="store-address">
                                OO시 OO구 밀가루로 12, 1층<br />
                                전화 000-0000-0000<br />
                                건물 뒤 공용주차장 (구매 시 1시간 무료)
                            </address>

                            <ul className="store-tags">
                                <li>OPEN 07:00 – 20:00</li>
                                <li>매주 월요일 휴무</li>
                            </ul>

                            <Link to="/menu" className="link-more">
                                오늘 굽는 빵 보기 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 갓 구운 그대로 담아드려요 */}
            <section className="hours section-cream" id="hours">
                <div className="inner">
                    <article className="hours-item">
                        <div className="hours-img">
                            <img src={asset("images/visit-bag.jpg")} alt="집게로 갓 구운 크루아상을 종이봉투에 담는 모습" />
                        </div>

                        <div className="hours-text">
                            <p className="hours-en hand" aria-hidden="true">OPEN 7AM</p>
                            <h2 className="section-title hours-title">갓 구운 그대로 담아드려요</h2>
                            <p className="hours-desc">
                                오븐은 아침 7시에 켜지고, 첫 크루아상은 8시에 나와요.<br />
                                나온 지 30분 안 된 빵만 봉투에 담아드려요.
                            </p>

                            <ul className="hours-week">
                                {WEEK.map((w) => (
                                    <li
                                        key={w.n}
                                        className={`${w.n === today ? "is-today" : ""} ${w.time === "휴무" ? "is-off" : ""}`}
                                        aria-current={w.n === today ? "date" : undefined}
                                    >
                                        <span className="day-long">{w.day}</span>
                                        <span className="day-short">{w.short}</span>
                                        <span>{w.time}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/menu" className="link-more">
                                메뉴 보기 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* 이렇게 오세요 */}
            <section className="way section-cream">
                <div className="inner">
                    <h2 className="section-title way-head">이렇게 오세요</h2>

                    <ul className="way-shelf">
                        {WAYS.map((w) => (
                            <li className="way-item" key={w.kind}>
                                <div className="way-bread">
                                    <img src={w.img} alt="" />
                                </div>
                                <div className="way-tag">
                                    <p className="way-kind hand">{w.kind}</p>
                                    <p className="way-place">{w.place}</p>
                                    <p className="way-desc">{w.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Visit