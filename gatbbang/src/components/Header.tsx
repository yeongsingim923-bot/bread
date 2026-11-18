import { asset } from "../utils/asset"
import { Link , NavLink, useLocation } from "react-router-dom";
import '../css/components/Header.css'
import { useEffect, useState } from "react";

export default function Header() {
    const [ open , setOpen ] = useState(false);
    const { pathname, hash } = useLocation();

    useEffect(() => {
        setOpen(false);
    } , [ pathname , hash ])

    return (
        <header className={`header ${open ? "is-open" : "" }`}>
            <div className="header-inner inner">
                <Link to="/" className="logo">
                    <img src={asset("images/logo.png")} alt="갓빵 홈으로" />
                </Link>

                <button 
                    type="button"
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label={ open ? "메뉴 닫기" : "메뉴 열기"}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className="gnb">
                    <ul className="gnb-left">
                        <li><NavLink to="/about" data-text="브랜드 소개">브랜드 소개</NavLink></li>
                        <li><NavLink to="/menu" data-text="메뉴">메뉴</NavLink></li>
                    </ul>

                    <div className="gnb-right">
                        <ul>
                            <li><NavLink to="/visit" end data-text="매장 안내">매장 안내</NavLink></li>
                        </ul>

                        <Link to="/visit#hours" className="open-badge">
                            OPEN 07:00 - 20:00
                            <span className="m-only"> · 월요일 휴무</span>
                        </Link>
                </div>
                </nav>
                
            </div>
        </header>
    );
}