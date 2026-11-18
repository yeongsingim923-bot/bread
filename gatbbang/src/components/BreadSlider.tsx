import { useState } from "react";
import type { Bread } from "../data/breads";
import { Link } from "react-router-dom";
import "../css/components/BreadSlider.css";

type BreadSliderProps = {
    title: string,
    breads : Bread[],
    light? : boolean,
}

function BreadSlider( { title , breads , light }:BreadSliderProps ) {

    const [ index , setIndex ] = useState(0) ;
    const current = breads[index];

    const prev = () => setIndex( (i) => (i - 1 + breads.length) % breads.length);
    const next = () => setIndex( (i) => (i + 1) % breads.length);

    return(
        <section className={`others ${light ? "section-cream" : "section-dark"}`}>
            <div className="inner">
                <div className="others-head">
                    <h2 className="section-title">{title}</h2>
                </div>

                <div className="others-slider">
                    <div className="others-shelf">
                        <ul className="others-track" style={{ transform: `translateX(-${index * 100}%)`}}>
                            {breads.map(( b , i ) => (
                                <li className="others-slide" key={b.id} aria-hidden={i !== index}> 
                                    <img src={b.img} alt={b.name} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="others-info">
                    <button type="button" className="others-btn" onClick={prev} aria-label="이전 빵">&lt;</button>

                    <Link to={`/menu/${current.id}`} className="others-card" aria-live="polite">
                        <p className="others-name hand">{current.name}</p>
                        <p className="others-price hand">{current.price}</p>
                        <p className="others-time">매일 {current.time}</p>
                    </Link>

                    <button type="button" className="others-btn" onClick={next} aria-label="다음 빵">&gt;</button>
                </div>
                
                <Link to="/menu" className="link-more others-more">
                    전체 상품 보기 <span className="arrow" aria-hidden="true"></span>
                </Link>
            </div>
        </section>
    )
}

export default BreadSlider