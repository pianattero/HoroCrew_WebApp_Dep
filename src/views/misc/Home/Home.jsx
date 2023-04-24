import {
  Animator,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import "./Home.css";
import imgLogo from "../../../assets/images/Backgrounds/bgLogo.png";
import { Button, Grid, Link } from "@nextui-org/react";

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
            <img src={imgLogo} style={{ width: "60vh", height: "100%" }} />
            <div class="scroll-down"></div>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <Galaxy />

          <Animator animation={ZoomInScrollOut}>
            <span
              style={{
                fontSize: "40px",
                color: "white",
              }}
            >
              ✨Welcome✨
            </span>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Galaxy />
          <Animator animation={FadeUp}>
            <span
              style={{
                textAlign: "center",
                fontSize: "40px",
                color: "white",
              }}
            >
              {" "}
              Find Your True Self{" "}
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Galaxy />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              color: "white",
            }}
          >
            <span style={{ fontSize: "30px" }}>
              <Animator animation={MoveIn(-1000, 0)}>
                Connect with friends
              </Animator>
              <Animator animation={MoveIn(-1000, 0)}>·</Animator>

              <Animator animation={MoveIn(1000, 0)}>
                Get your daily fortune
              </Animator>

              <Animator animation={MoveIn(-1000, 0)}>·</Animator>

              <Animator animation={MoveIn(-1000, 0)}>
                Know your compatibilities
              </Animator>

              <Animator animation={MoveIn(-1000, 0)}>·</Animator>

              <Animator animation={MoveIn(1000, 0)}>And much more!</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Galaxy />
          <Animator animation={batch(Fade(), Sticky())}>
            <Grid.Container gap={2}>
              <Grid>
                <Link href="/signup">
                  <Button size="lg" color="success" auto ghost>
                    Don't have an account? Join Us!
                  </Button>
                </Link>
              </Grid>

              <Grid>
                <Link href="/login">
                  <Button size="lg" shadow auto>
                    Already have an account? Sign In!
                  </Button>
                </Link>
              </Grid>
            </Grid.Container>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};
