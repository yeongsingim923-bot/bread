import { asset } from "../utils/asset"
import { Link } from "react-router-dom"
import SubVisual from "../components/SubVisual"
import "../css/pages/Menu.css"
import { BREADS, findBread, type Bread } from "../data/breads"
import { useEffect, useState } from "react";

function Menu() {

    const [tray, setTray] = useState<string[]>([]);        // 담은 빵 id 목록 (담은 순서대로)
    const [last, setLast] = useState<Bread | null>(null);  // 방금 담은 빵

    const add = (b: Bread) => {
        setTray((t) => [...t, b.id]);
        setLast(b);
    };
    const removeAt = (k: number) => {
        setTray((t) => t.filter((_, i) => i !== k));
    };
    const clear = () => {
        setTray([]);
        setLast(null);
    };

        const [receipt, setReceipt] = useState(false);   // 영수증 열림 여부

    /* 영수증 목록: 빵마다 몇 개 담았는지 */
    const items = BREADS
        .filter((b) => tray.includes(b.id))
        .map((b) => ({ bread: b, count: tray.filter((id) => id === b.id).length }));

    /* 날짜 */
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const stamp = `${now.getFullYear()}.${pad(now.getMonth() + 1)}.${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;

    /* 영수증이 열려 있는 동안 뒤 페이지 스크롤 막기 */
    useEffect(() => {
        if (!receipt) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [receipt]);

    const [sheetOpen, setSheetOpen] = useState(false);

    return(
        <>
           <SubVisual
                image={asset("images/menu-hero.jpg")}
                kicker="MENU"
                title="오늘 굽는 빵"
                desc="빵을 눌러 트레이에 담아보세요"
                dark
           />

           <section className="pick section-dark">
                <div className="inner">
                    <h2 className="section-title pick-head">오늘의 빵</h2>
                    <p className="pick-note hand">빵을 골라보세요</p>

                    <div className="pick-grid">
                        <div className="pick-shelves">
                            {[0,3].map((start) => (
                                <ul className="shelf" key={start}>
                                    {BREADS.slice(start, start + 3).map((b) => (
                                        <li className="shelf-item" key={b.id}>
                                            <button type="button" className="shelf-bread" onClick={() => add(b)} aria-label={`${b.name} 트레이에 담기`}>
                                                <img src={b.img} alt="" />
                                            </button>
                                            <Link to={`/menu/${b.id}`} className="shelf-tag">
                                                <span className="hand">{b.name}</span>
                                                <span className="hand">{b.price}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ))} 
                        </div>

                        <aside className={`tray-box ${sheetOpen ? "is-open" : ""}`} aria-label="내 트레이">
                            <button type="button" className="tray-toggle"
                                onClick={() => setSheetOpen(!sheetOpen)} aria-expanded={sheetOpen}>
                                <span className="tray-handle" aria-hidden="true"></span>
                                <span className="tray-toggle-title">내 트레이</span>
                                <span className="tray-count"><b>{tray.length}</b> 개 담음</span>
                            </button>

                            <div className="tray-body">
                                <div className="tray-head">
                                    <h3 className="hand">내 트레이</h3>
                                    <button type="button" className="tray-clear" onClick={clear}>비우기</button>
                                </div>

                                <div className="tray" aria-live="polite">
                                    {tray.length === 0 ? (
                                        <p className="tray-empty hand">
                                            아직 비어 있어요<br />집게를 들고 빵을 골라보세요!
                                        </p>
                                    ) : (
                                        tray.map((id, k) => {
                                            const b = findBread(id)!;
                                            return (
                                                <button type="button" className="tray-bread" key={k}
                                                    onClick={() => removeAt(k)} aria-label={`${b.name} 하나 빼기`}>
                                                    <img src={b.img} alt="" />
                                                </button>
                                            );
                                        })
                                    )}
                                </div>

                                {last && tray.length > 0 && (
                                    <div className="tray-info">
                                        <img src={last.img} alt="" />
                                        <div>
                                            <p className="tray-info-kicker hand">방금 담은 빵</p>
                                            <p className="tray-info-name hand">{last.name}</p>
                                            <p className="tray-info-desc">{last.desc}</p>
                                        </div>
                                    </div>
                                )}

                                <button type="button" className="btn btn-dark tray-go" disabled={tray.length === 0} onClick={() => setReceipt(true)}>
                                    봉투에 담기 <span className="arrow" aria-hidden="true"></span>
                                </button>
                            </div>
                        </aside>

                        {sheetOpen && <div className="sheet-back" onClick={() => setSheetOpen(false)}></div>}

                    </div>
                </div>
           </section>

            {receipt && (
                <div className="receipt-wrap">
                    <div className="receipt-back" onClick={() => setReceipt(false)}></div>

                    <div className="receipt" role="dialog" aria-modal="true" aria-labelledby="rc-title">
                        <button type="button" className="rc-close" onClick={() => setReceipt(false)} aria-label="영수증 닫기">
                            ✕
                        </button>
                        <img className="rc-emblem" src={asset("images/logo-emblem.png")} alt="" />
                        <p className="rc-shop hand" id="rc-title">갓빵 · 오늘의 빵 봉투</p>
                        <p className="rc-date">{stamp} · {tray.length}개</p>

                        <ul className="rc-items">
                            {items.map(({ bread, count }) => (
                                <li key={bread.id}>
                                    <span>{bread.name}</span>
                                    <i aria-hidden="true"></i>
                                    <span>× {count}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="rc-msg hand">오늘 하루, 빵 한 봉지만큼 행복하세요</p>

                        <div className="rc-btns">
                            <button type="button" className="btn rc-ghost" onClick={() => setReceipt(false)}>
                                계속 고르기 <span className="arrow" aria-hidden="true"></span>
                            </button>
                            <Link to="/visit" className="btn btn-dark">
                                빵집 오는 길 <span className="arrow" aria-hidden="true"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Menu