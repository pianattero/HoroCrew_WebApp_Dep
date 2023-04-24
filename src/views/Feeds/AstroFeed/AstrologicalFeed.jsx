import { NextUIProvider, Card, Text, Button, Grid } from "@nextui-org/react";
import { AppBack } from "../../../components/Backgrounds/BackgroundSigns/Background";
import "./AstroFeed.css";

import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import {
  horoscopeAstroInfo as horoscopeAstroInfoService,
  horoscopeAstroTarot as horoscopeAstroTarotService,
} from "../../../services/Apis/HoroscopeAstro";

import { dailyHoro as dailyHoroService } from "../../../services/Apis/Horostory";
import { AboutSunSign } from "../../../components/AboutSunSign/AboutSunSign";
import { ScrollContainer } from "react-scroll-motion";
import { TarotInfo } from "../../../components/TarotInfo/TarotInfo";
import { DailyHoro } from "../../../components/DailyHoro/DailyHoro";

const AstroFeed = () => {
  const { currentUser } = useContext(AuthContext);

  const [dailyHoro, setdailyHoro] = useState(null);
  const [showdailyHoro, setShowdailyHoro] = useState(false);

  const [horoscopeAstroInfo, setHoroscopeAstroInfo] = useState(null);
  const [showHoroscopeAstroInfo, setShowHoroscopeAstroInfo] = useState(false);

  const [horoscopeAstroTarot, setHoroscopeAstroTarot] = useState(null);
  const [showHoroscopeAstroTarot, setShowHoroscopeAstroTarot] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    horoscopeAstroInfoService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        setHoroscopeAstroInfo(response.data);
      })
      .catch((err) => console.error(err));

    horoscopeAstroTarotService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        setHoroscopeAstroTarot(response.data.res);
      })
      .catch((err) => console.error(err));

    dailyHoroService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        console.log(response.data);
        setdailyHoro(response.data);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);

  return (
    <NextUIProvider>
      <div className="app-back-wrapper">
        <AppBack />
      </div>
      <ScrollContainer>
        <div
          className="background-wrapper"
          style={{ backgroundColor: "transparent" }}
        >
          <AppBack />
        </div>
        <div
          style={{ textAlign: "center", backgroundColor: "transparent" }}
          className="min-vh-100 min-vw-100 d-flex flex-wrap justify-content-center"
        >
          <div>
            <Card
              css={{
                p: "$6",
                mw: "400px",
                h: "400px",
                backgroundColor: "transparent",
              }}
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Text h3 color="white">
                  Sun Sign Info
                </Text>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="https://nypost.com/wp-content/uploads/sites/2/2021/11/astrology-sun-moon-rising-signs-1-copy.jpg?quality=75&strip=all"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Sun sign info"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Button
                  icon
                  color="dark"
                  target="_blank"
                  onPress={() => {
                    setShowHoroscopeAstroInfo(!showHoroscopeAstroInfo);
                    setShowHoroscopeAstroTarot(false);
                    setShowdailyHoro(false);
                  }}
                >
                  <a className="text-dark" href="#sunInfo">
                    Want to know more about your Sun Sign?
                    {showHoroscopeAstroInfo ? (
                      <i className="bi bi-caret-up-fill ms-2"></i>
                    ) : (
                      <i className="bi bi-caret-down-fill ms-2"></i>
                    )}
                  </a>
                </Button>
              </Card.Footer>
            </Card>
          </div>

          <div id="sunInfo">
            {showHoroscopeAstroInfo ? (
              <AboutSunSign signData={horoscopeAstroInfo} />
            ) : null}
          </div>

          <div>
            <Card
              css={{
                p: "$6",
                mw: "400px",
                h: "400px",
                backgroundColor: "transparent",
              }}
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Text h3 color="white">
                  Daily Horoscope
                </Text>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="https://phantom-marca.unidadeditorial.es/80fca989dae1f5722a4edf9c7ff6075c/crop/0x0/1320x743/resize/1320/f/jpg/assets/multimedia/imagenes/2022/04/19/16503614614344.jpg"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card horoscope daily"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Button
                  icon
                  color="dark"
                  target="_blank"
                  onPress={() => {
                    setShowdailyHoro(!showdailyHoro);
                    setShowHoroscopeAstroInfo(false);
                    setShowHoroscopeAstroTarot(false);
                  }}
                >
                  <a className="text-dark" href="#daily">
                    Get your horoscope today
                    {showdailyHoro ? (
                      <i className="bi bi-caret-up-fill ms-2"></i>
                    ) : (
                      <i className="bi bi-caret-down-fill ms-2"></i>
                    )}
                  </a>
                </Button>
              </Card.Footer>
            </Card>
          </div>

          <div id="daily">
            {showdailyHoro ? <DailyHoro horoscope={dailyHoro} /> : null}
          </div>

          <div>
            <Card
              css={{
                p: "$6",
                mw: "400px",
                h: "400px",
                backgroundColor: "transparent",
              }}
            >
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Text h3 color="white">
                  Tarot Draw
                </Text>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2020_10/3256166/200304-tarot-cards-2x1-al-1425.jpg"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card Tarot daily"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Button
                  icon
                  color="dark"
                  target="_blank"
                  onPress={() => {
                    setShowHoroscopeAstroTarot(!showHoroscopeAstroTarot);
                    setShowdailyHoro(false);
                    setShowHoroscopeAstroInfo(false);
                  }}
                >
                  <a className="text-dark" href="#tarot">
                    Get some Tarot Luck
                    {showHoroscopeAstroTarot ? (
                      <i className="bi bi-caret-up-fill ms-2"></i>
                    ) : (
                      <i className="bi bi-caret-down-fill ms-2"></i>
                    )}
                  </a>
                </Button>
              </Card.Footer>
            </Card>
          </div>

          <div id="tarot">
            <Grid.Container justify="center">
              {showHoroscopeAstroTarot
                ? horoscopeAstroTarot.map((tarotCard) => (
                    <Grid xs={12} sm={4} md={4} lg={4}>
                      <TarotInfo
                        className=""
                        tarot={tarotCard}
                        key={tarotCard.sequence}
                      />
                    </Grid>
                  ))
                : null}
            </Grid.Container>
          </div>
        </div>
      </ScrollContainer>
    </NextUIProvider>
  );
};
export default AstroFeed;
