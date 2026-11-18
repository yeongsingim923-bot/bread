import { Link, useParams } from "react-router-dom"
import "../css/pages/BreadDetail.css"
import { ampm, BREADS, findBread } from "../data/breads"
import BreadSlider from "../components/BreadSlider";

function BreadDetail() {
    const { id } = useParams();
    const bread = findBread( id ?? "")
    
    if (!bread) {
        return (
            <section className="detail section-dark">
                <div className="inner detail-none">
                    <p>찾는 빵이 없어요.</p>
                    <Link to="/menu" className="link-more">
                        메뉴로 돌아가기 <span className="arrow" aria-hidden="true"></span>
                    </Link>
                </div>
            </section>
        );
    }

    return(
        <>
           <section className="detail section-dark">
                <div className="inner">
                    <div className="detail-top">
                        <p className="detail-crumb">{bread.name}</p>
                        <Link to="/menu" className="detail-back">목록으로 돌아가기</Link>
                    </div>

                    <div className="detail-item">
                        <div className="detail-img">
                            <img src={bread.photo} alt={`${bread.name} 사진`} />
                        </div>

                        <div className="detail-text">
                            <p className="detail-en hand" aria-hidden="true">{bread.en}</p>
                            <h1 className="detail-name">{bread.name}</h1>
                            <p className="detail-desc">{bread.desc}</p>

                            <ul className="detail-tags">
                                <li>매일 {ampm(bread.time)}에 나와요</li>
                                <li>{bread.price}</li>
                            </ul>

                            <div className="detail-tip">
                                <p className="detail-tip-title hand">갓빵 팁</p>
                                <p>{bread.tip}</p>
                            </div>
                        </div>
                    </div>                    
                </div>
           </section>

           <BreadSlider
                key={bread.id}
                title="이런 빵은 어때요?"
                breads={BREADS.filter((b) => b.id !== bread.id)}
                light
            />
        </>
    )
}

export default BreadDetail