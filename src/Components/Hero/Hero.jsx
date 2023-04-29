//import "./Hero.scss";
import HeroImage from "../../assets/images/landing.jpg";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

import { Hero as HeroWrapper, HeroFigure, HeroImg, HeroOverlay, HeroContent, HeroContentInner, HeroTextCard, HeroTitle, HeroSubtitle } from "./HeroStyle"


const Hero = () => {
    return (

        <HeroWrapper>
            <HeroFigure>
                <HeroImg src={HeroImage} />
            </HeroFigure>

            <HeroOverlay />

            <HeroContent>

                <HeroContentInner>
                    <HeroTextCard>
                        <HeroTitle>Speck Academy 2023 powered by FOI</HeroTitle>
                        <HeroSubtitle>Make a turnaround in your career or upgrade your current skill
                            set with knowledge-based lessons from IT practice.</HeroSubtitle>

                        <Link to="/courses" className="button"> <Button>Explore courses</Button></Link>

                    </HeroTextCard>
                </HeroContentInner>
            </HeroContent>

        </HeroWrapper>



    )
}

export default Hero