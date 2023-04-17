
import { Animator, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, batch } from "react-scroll-motion"
import "./Home.css";
import imgLogo from "../../../assets/images/Backgrounds/bgLogo.png"
import { Button, Grid, Link, Spacer } from "@nextui-org/react";

import Galaxy from "../../../components/Backgrounds/backgrounGalaxy/BackgroundGalaxy";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), MoveIn(), MoveOut(), Sticky());
export const Home = () => {
    return (

        <>

            <ScrollContainer>

                <ScrollPage page={0}>
                    <Galaxy />

                    <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
                        <img src={imgLogo} style={{ width: "70vh", height: "100%" }} />
                    </Animator>
                </ScrollPage>

                <ScrollPage page={1}>
                    <Galaxy />

                    <Animator animation={ZoomInScrollOut}>
                        <span style={{ fontSize: "35px", color: "white" }}>✨Welcome✨</span>
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Galaxy />
                    <Animator animation={FadeUp}>
                        <span style={{ fontSize: "20px", color: "white" }}> Find Your True Self </span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Galaxy />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", color: "white" }} >
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
                    <Galaxy />
                    <Animator animation={batch(Fade(), Sticky())}>
                        <Grid.Container gap={5}>
                            <Grid>
                                <Link href="/signup">
                                    <Button size="lg" shadow color="secondary" auto>
                                        Join Us!
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid>
                                <Link href="/login">
                                    <Button size="lg" shadow color="primary" auto>
                                        Already have an account? Sign In!
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid.Container>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>


        </>

    )
}



