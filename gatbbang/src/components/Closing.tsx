import { asset } from "../utils/asset"
import { Link } from "react-router-dom";
import "../css/components/Closing.css";

type ClosingProps = {
    title: string;
    desc: string;
    linkTo: string;
    linkLabel: string;
};

export default function Closing({ title, desc, linkTo, linkLabel }: ClosingProps) {
    return (
        <section className="closing section-dark">
            <div className="inner closing-inner">
                <img className="closing-bag" src={asset("images/mascot-bag.png")} alt="" />

                <div className="closing-text">
                    <h2 className="closing-title hand">{title}</h2>
                    <p className="closing-desc">{desc}</p>
                </div>

                <Link to={linkTo} className="btn btn-light">
                    {linkLabel} <span className="arrow" aria-hidden="true"></span>
                </Link>
            </div>
        </section>
    );
}