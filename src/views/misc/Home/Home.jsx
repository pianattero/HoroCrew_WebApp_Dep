import { Link } from "react-router-dom";
import { Animator, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, batch } from "react-scroll-motion"
import "./Home.css";
import imgLogo from "../../../assets/images/Backgrounds/logo2-removebg.png"

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveIn(), MoveOut(), Sticky());
export const Home = () => {
    return (

        <>
            <ScrollContainer>
                <ScrollPage page={0}>
                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                        <img src={imgLogo} />
                    </Animator>
                </ScrollPage>

                <ScrollPage page={1}>
                    <Animator animation={ZoomInScrollOut}>
                        <span style={{ fontSize: "35px" }}>✨Welcome✨</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "20px" }}> 💑🏼🧘🏾‍♂️👨🏾‍❤️‍💋‍👨🏼 Find Your True Self 👩🏼‍❤️‍👩🏾🧘🏼‍♀️👩🏾‍❤️‍💋‍👩🏿</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                        <span style={{ fontSize: "30px" }}>
                            <Animator animation={MoveIn(-1000, 0)}>🐐Capricorn♑</Animator>
                            <Animator animation={MoveIn(1000, 0)}>🐮Taurus♉</Animator>
                            <Animator animation={MoveIn(1000, 0)}>🐟Pisces♓</Animator>
                            <Animator animation={MoveOut(1000, 0)}>👯Gemini♊</Animator>
                            <Animator animation={MoveOut(-1000, 0)}> 🏹Sagitarius♐ </Animator>
                            <Animator animation={MoveOut(-1000, 0)}> ⚖️Libra♎ </Animator>
                            <Animator animation={MoveIn(-1000, 0)}>🌊Aquarius♒</Animator>
                            <Animator animation={MoveIn(1000, 0)}>🐏Aries♈</Animator>
                            <Animator animation={MoveIn(1000, 0)}>💸Virgo♍</Animator>
                            <Animator animation={MoveOut(-1000, 0)}> 🦂Scorpio♏ </Animator>
                            <Animator animation={MoveOut(-1000, 0)}> 🦀Cancer♋</Animator>
                            <Animator animation={MoveOut(-1000, 0)}> 🦁Leo♌</Animator>
                        </span>
                    </div>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                        <span style={{ fontSize: "80px" }}>
                            <Link type="button" className="btn join-btn primary" aria-current="page" to="/login"> 🚨 Already have an account?🤘🏽 </Link>
                        </span>
                        <br />
                        <span style={{ fontSize: "80px" }}>
                            <Link type="button" className="btn join-btn primary" aria-current="page" to="/signup">Join Us ❤️‍🔥 </Link>
                        </span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>

        </>

    )
}


/*export const Home = () => {

    return (
        <div className="allContainer-Home">
            <div id="titleContainer">
                <h1 className="title"> Welcome to HoroCrew</h1>
                <Link type="button" className="btn join-btn" aria-current="page" to="/signup">Join Us</Link>
                <Link type="button" className="btn join-btn" aria-current="page" to="/login"> Already have an account?</Link>
            </div>
        </div>
    )

}*/

