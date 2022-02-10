import "./intro.css";
import Profile from "../../img/ayoub.png";
import Instagram from "../../img/i.png";
import Youtube from "../../img/y.png";
import Linkedin from "../../img/l.png";
import Twitter from "../../img/t.png";




const Intro = () => {
    return (
        <div className="infoIntro">
            <div className="leftIntro">
                <div className="leftIntro_Separation">
                    <h1 className="name">Im Shouqfi Ayoub and im a developper Full Stack . </h1>
                    <div className="Slide">
                        <div className="SlideAnimation">
                            <p className="slideIthem">Web Developer</p>
                            <p className="slideIthem">UI/UX Designer</p>
                            <p className="slideIthem">Backend Developper</p>
                            <p className="slideIthem">Front-end Developper</p>
                            <p className="slideIthem">Artist</p>
                        </div>
                    </div>


                    <div className="reseauIntro">
                    </div>

                    <div className="reseauIthem">
                        <a href=""> <img src={Instagram} alt="" /></a>
                        <a href=""> <img src={Youtube} alt="" /></a>
                        <a href=""> <img src={Linkedin} alt="" /></a>
                        <a href=""> <img src={Twitter} alt="" /></a>

                    </div>

                </div>

            </div>
            <div className="rightIntro">
                <div className="intro_photo">
                    <img src={Profile} alt="" />
                </div>
            </div>
        </div>



    );
};

export default Intro;
