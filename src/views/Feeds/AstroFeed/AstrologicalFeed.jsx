import { NextUIProvider, Card, Button } from "@nextui-org/react";
import { AppBack } from "../../../components/BackgroundSigns/Background";
import "./AstroFeed.css";
import tarotImg from "../../../assets/images/CardApis/tarot.jpg";
import {
  horoscopeAstroInfo as horoscopeAstroInfoService,
  horoscopeAstroTarot as horoscopeAstroTarotService,
  horoscopeAstroDaily as horoscopeAstroDailyService,
} from "../../../services/Apis/HoroscopeAstro";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { AboutSunSign } from "../../../components/AboutSunSign/AboutSunSign";
import { TarotInfo } from "../../../components/TarotInfo/TarotInfo";

const AstroFeed = () => {
  const { currentUser } = useContext(AuthContext);

  const [horoscopeAstroDaily, setHoroscopeAstroDaily] = useState(null);
  const [showHoroscopeAstroDaily, setShowHoroscopeAstroDaily] = useState(false);

  const [horoscopeAstroInfo, setHoroscopeAstroInfo] = useState(null);
  const [showHoroscopeAstroInfo, setShowHoroscopeAstroInfo] = useState(false);

  const [horoscopeAstroTarot, setHoroscopeAstroTarot] = useState(null);
  const [showHoroscopeAstroTarot, setShowHoroscopeAstroTarot] = useState(false);

  useEffect(() => {
    if (!currentUser) return;

    horoscopeAstroDailyService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        console.log(response.data);
        setHoroscopeAstroDaily(response.data);
      })
      .catch((err) => console.error(err));

    horoscopeAstroInfoService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        setHoroscopeAstroInfo(response.data);
      })
      .catch((err) => console.error(err));

    horoscopeAstroTarotService()
      .then((response) => {
        console.log(response.data.res);
        setHoroscopeAstroTarot(response.data.res);
      })
      .catch((err) => console.error(err));
  }, [currentUser]);

  return (
    <NextUIProvider>
      <div className="background-wrapper">
        <AppBack />
      </div>
      <div
        style={{ textAlign: "center" }}
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
                  setShowHoroscopeAstroDaily(!showHoroscopeAstroDaily);
                }}
              >
                <a className="text-dark" href="#daily">
                  Get your horoscope today
                  {showHoroscopeAstroDaily ? (
                    <i className="bi bi-caret-up-fill ms-2"></i>
                  ) : (
                    <i className="bi bi-caret-down-fill ms-2"></i>
                  )}
                </a>
              </Button>
            </Card.Footer>
          </Card>
        </div>

        <div id="daily">{showHoroscopeAstroDaily ? null : null}</div>

        <div>
          <Card
            css={{
              p: "$6",
              mw: "400px",
              h: "400px",
              backgroundColor: "transparent",
            }}
          >
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://thumbs.dreamstime.com/b/mystical-banner-astrology-tarot-boho-design-universe-art-golden-crescent-sun-black-background-clouds-esoteric-200267643.jpg"
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
                }}
              >
                <a className="text-dark" href="#sunInfo">
                  Want to know more about you Sun Sign?
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
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={tarotImg}
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
                onPress={() =>
                  setShowHoroscopeAstroTarot(!showHoroscopeAstroTarot)
                }
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
          {showHoroscopeAstroTarot
            ? horoscopeAstroTarot.map((tarotCard) => (
                <TarotInfo tarot={tarotCard} key={tarotCard.sequence} />
              ))
            : null}
        </div>
      </div>
    </NextUIProvider>
  );
};

export default AstroFeed;
