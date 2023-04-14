import { NextUIProvider, Card, Grid, Text, Link, Button, Col, Row } from '@nextui-org/react'
import { AppBack } from '../../../components/BackgroundSigns/Background'

const AstroFeed = () => {
    return (

        <NextUIProvider>
            <Card css={{ p: "$6", mw: "400px", h: "400px" }}>
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

                {/*

                <Card.Body css={{ py: "$2" }}>
                    <Text>
                        <h1> Social Feed 1 </h1>
                    </Text>
                </Card.Body>
    */}
                <Card.Footer isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}>


                    <Button
                        icon
                        color="dark"
                        target="_blank"

                    >
                        Get your Sign Today
                    </Button>

                </Card.Footer>
            </Card>

            <Card css={{ p: "$6", mw: "400px", h: "400px" }}>
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

                {/*

                <Card.Body css={{ py: "$2" }}>
                    <Text>
                        <h1> Social Feed 1 </h1>
                    </Text>
                </Card.Body>
    */}
                <Card.Footer isBlurred
                    css={{
                        position: "absolute",
                        bgBlur: "#ffffff66",
                        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                        bottom: 0,
                        zIndex: 1,
                    }}>


                    <Button
                        icon
                        color="dark"
                        target="_blank"

                    >
                        Get your Tarot Today
                    </Button>

                </Card.Footer>
            </Card>

        </NextUIProvider >



    )
}
export default AstroFeed