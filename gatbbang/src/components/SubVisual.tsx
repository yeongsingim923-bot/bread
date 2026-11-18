import "../css/components/SubVisual.css";

type SubVisualProps = {
    image: string;
    kicker: string;
    title: React.ReactNode;
    desc: string;
    dark? : boolean;
};


function SubVisual({ image, kicker, title, desc, dark }: SubVisualProps) {

    return(
        <section className={`sub-visual ${dark ? "is-dark" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="inner sub-visual-inner">
                <p className="sub-visual-kicker">{kicker}</p>
                <h1 className="sub-visual-title hand">{title}</h1>
                <p className="sub-visual-desc">{desc}</p>
            </div>
        </section>
    )
}

export default SubVisual