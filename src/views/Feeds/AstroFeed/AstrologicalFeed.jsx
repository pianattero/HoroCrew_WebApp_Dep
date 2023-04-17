import {
  NextUIProvider,
  Card,
  Grid,
  Text,
  Link,
  Button,
  Col,
  Row,
  Modal,
  useModal,
} from "@nextui-org/react";
import { AppBack } from "../../../components/BackgroundSigns/Background";
import "./AstroFeed.css";
import { horoscopeAstroInfo as horoscopeAstroInfoService } from "../../../services/Apis/HoroscopeAstro";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { AboutSunSign } from "../../../components/AboutSunSign/AboutSunSign";

const AstroFeed = () => {
  const { currentUser } = useContext(AuthContext);
  const [horoscopeAstroInfo, setHoroscopeAstroInfo] = useState(null);
  const [showHoroscopeAstroInfo, setShowHoroscopeAstroInfo] = useState(false);
  useEffect(() => {
    if (!currentUser) return;
    horoscopeAstroInfoService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        setHoroscopeAstroInfo(response.data);
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
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Text h3 color="black">
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
                  setShowHoroscopeAstroInfo(true);
                }}
              >
                Get your horoscope today
              </Button>
            </Card.Footer>
          </Card>
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
              <Text h3 color="black">
                Daily Tarot
              </Text>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src="https://thumbs.dreamstime.com/b/mystical-banner-astrology-tarot-boho-design-universe-art-golden-crescent-sun-black-background-clouds-esoteric-200267643.jpg"
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
              <Button icon color="dark" target="_blank">
                Get your Tarot Today
              </Button>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default AstroFeed;

{
  /* <div>
              {showHoroscopeAstroInfo ? (
                <AboutSunSign signData={horoscopeAstroInfo} />
              ) : null}
            </div> */
}
