import { asset } from "../utils/asset"
import { useEffect, useRef, useState } from "react"
import "../css/pages/Home.css"
import { Link } from "react-router-dom";
import Closing from "../components/Closing";
import BreadSlider from "../components/BreadSlider";
import { BREADS } from "../data/breads";

function Home() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const video = videoRef.current;
        if (!section || !video) return;

        let frame = 0;

        const update = () => {
            frame = 0;
            const rect = section.getBoundingClientRect();
            const total = rect.height - window.innerHeight;   // 스크롤할 수 있는 길이
            if (total <= 0 || !video.duration) return;

            // 0 ~ 1 사이: 얼마나 스크롤했는지
            const progress = Math.min(Math.max(-rect.top / total, 0), 1);
            video.currentTime = progress * video.duration;
            section.style.setProperty("--p" , String(progress));
            setDone(progress >= 0.6);
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        video.addEventListener("loadedmetadata", update);
        update();

        return () => {
            window.removeEventListener("scroll", onScroll);
            video.removeEventListener("loadedmetadata", update);
            cancelAnimationFrame(frame);
        };
    }, []);

    {/* 메인 비쥬얼 영상 */}
    const [done, setDone] = useState(false);

    return(
        <>
            <section className="main-visual" ref={sectionRef}>
                <div className={`visual-sticky ${done ? "is-done" : ""}`}>
                    <video
                        ref={videoRef}
                        className="visual-video"
                        src={asset("videos/oven-scroll.mp4")}
                        poster={asset("videos/oven-poster.jpg")}
                        muted
                        playsInline
                        preload="auto"
                    />

                    {/* 처음 문구 */}
                    <div className="visual-text visual-text-start">
                        <h1 className="visual-title hand">
                            매일 아침 <em>7시,</em><br />
                            골목에서 가장 먼저 켜지는 오븐
                        </h1>
                        <p className="visual-desc">
                            오븐에서 막 나온 빵만 진열대에 올리는 동네 빵집, 갓빵입니다.
                        </p>
                    </div>

                    {/* 영상 끝 문구 */}
                    <div className="visual-text visual-text-end" aria-hidden={!done}>
                        <p className="visual-title hand">갓 구운 <em>빵</em><br /> 나왔어요 !</p>
                        <p className="visual-desc">골목 끝 작은 빵집, 갓빵</p>
                    </div>

                    <p className="visual-scroll">
                        스크롤 해서 오븐 문 열기
                        <span className="visual-arrow" aria-hidden="true"></span>
                    </p>
                </div>
            </section>

            {/*갓빵의 자랑*/}
            <section className="pride section-dark">
                <div className="inner">
                    <div className="pride-head">
                        <h2 className="section-title">갓빵의 <em>자랑</em></h2>
                        <Link to="/menu" className="link-more">
                            전체 상품 보기 <span className="arrow" aria-hidden="true"></span>
                        </Link>
                    </div>

                    <article className="pride-item">
                        <div className="pride-img">
                            <img src={asset("images/croissant.jpg")} alt="결이 살아 있는 크루아상을 손으로 반 가르는 모습" />
                            <img className="pride-cutout" src={asset("images/croissant-cutout.png")} alt="" />
                        </div>

                        <div className="pride-text">
                            <img className="pride-en" src={asset("images/croissant-en.png")} alt="" />
                            <h3 className="pride-name hand">크루아상</h3>
                            <p className="pride-desc">
                                버터를 27겹 접어 겉은 바삭하고 속은 촉촉해요.<br />
                                갓빵에서 가장 먼저 나오는 빵이에요.
                            </p>
                            <ul className="pride-tags">
                                <li>매일 오전 8:00에 나와요</li>
                                <li>3,500원</li>
                            </ul>
                            <Link to="/menu/croissant" className="link-more">
                                크루아상 보기 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </article>
                </div>                    
            </section>

            {/* 소금빵 */}
            <section className="pride section-cream">
                <div className="inner">
                    <article className="pride-item reverse">
                        <div className="pride-img">
                            <img src={asset("images/salt-bread.jpg")} alt="굵은 소금이 뿌려진 소금빵이 쟁반에 놓인 모습" />
                        </div>

                        <div className="pride-text">
                            <img className="pride-en" src={asset("images/salt-bread-en.png")} alt="" />
                            <h3 className="pride-name hand">소금빵</h3>
                            <p className="pride-desc">
                                버터를 품은 반죽 위에 굵은 소금을 톡톡.<br />
                                바닥은 버터가 녹아 바삭하게 구워져요.
                            </p>
                            <ul className="pride-tags">
                                <li>매일 오전 9:30에 나와요</li>
                                <li>2,800원</li>
                            </ul>
                            <Link to="/menu/salt-bread" className="link-more">
                                소금빵 보기 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </article>       
                </div>
            </section>

            {/* 그 밖에도 매일 굽는 빵들 */}
            <BreadSlider
                title="그 밖에도 매일 굽는 빵들"
                breads={BREADS.filter((b) => b.id !== "croissant" && b.id !== "salt-bread")}
            />

            {/* 마무리 문구 */}
            <Closing
                title="오늘 하루, 빵 한 봉지만큼 행복하세요"
                desc="매일 아침 7시부터 갓 구운 빵을 담아드려요."
                linkTo="/visit"
                linkLabel="빵집 오는 길"
            />
        </>
    )
}

export default Home