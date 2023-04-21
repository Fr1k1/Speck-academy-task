import "./Hero.scss";
import Heroimg from "../../assets/images/landing.jpg";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <div>
            <section className="Hero">
                <figure className="Hero-Figure">
                    <img
                        src={Heroimg}
                        alt="Speck Academy hero"
                        className="Hero-Img"
                    />
                </figure>
                <div className="Hero-Overlay"></div>
                <div className="Hero-Content">
                    <div className="Hero-ContentInner">
                        <div className="Hero-TextCard">
                            <h1 className="Hero-Title">Speck Academy 2023 powered by FOI</h1>
                            <p className="Hero-Subtitle">
                                Make a turnaround in your career or upgrade your current skill
                                set with knowledge-based lessons from IT practice.
                            </p>
                            <Button>Explore courses</Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Hero