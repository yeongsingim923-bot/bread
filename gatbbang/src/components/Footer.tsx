import { asset } from "../utils/asset"
import { Link } from "react-router-dom"
import "../css/components/Footer.css"

function Footer() {

    return(
       <footer className="footer">
            <div className="footer-inner inner">
                <div className="footer-top">
                    <div className="footer-bread">
                        <Link to="/" className="footer-logo">
                            <img src={asset("images/logo.png")} alt="갓빵 홈으로" />
                        </Link>
                        <p className="footer-slogan">
                            좋은 빵은 좋은 하루를 만들어줘요
                        </p>
                    </div>

                    <address className="footer-info">
                        <p>갓빵 본점 · OO시 OO구 밀가루로 12, 1층</p>
                        <p>영업시간 07:00 – 20:00 · 매주 월요일 휴무</p>
                        <p>전화 <a href="tel:000-0000-0000">000-0000-0000</a></p>
                    </address>                    
                </div>

                <p className="footer-copy">© 2026 GATBBANG.</p>
            </div>
       </footer>
    )
}

export default Footer