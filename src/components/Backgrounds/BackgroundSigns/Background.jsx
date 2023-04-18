import React from "react";


import { IconContext } from "react-icons";
import { TbZodiacAquarius as Aquarius } from "react-icons/tb";
import { TbZodiacAries as Aries } from "react-icons/tb";
import { TbZodiacCancer as Cancer } from "react-icons/tb";
import { TbZodiacCapricorn as Capricorn } from "react-icons/tb";
import { TbZodiacGemini as Gemini } from "react-icons/tb";
import { TbZodiacLeo as Leo } from "react-icons/tb";
import { TbZodiacLibra as Libra } from "react-icons/tb";
import { TbZodiacPisces as Pisces } from "react-icons/tb";
import { TbZodiacScorpio as Scorpio } from "react-icons/tb";
import { TbZodiacTaurus as Taurus } from "react-icons/tb";
import { TbZodiacVirgo as Virgo } from "react-icons/tb";
import { TbZodiacSagittarius as Sagittarius } from "react-icons/tb";
import { BiPlanet as Planet } from "react-icons/bi";
import { BsSun as Sun } from "react-icons/bs";
import { TbSunrise as Sunrise } from "react-icons/tb";
import { TbSunset as Sunset } from "react-icons/tb";
import { BsMoon as Moon } from "react-icons/bs";
import { GiEarthAmerica as Earth } from "react-icons/gi";
import { FaVenusDouble as GirlLove } from "react-icons/fa";
import { FaVenusMars as Love } from "react-icons/fa";
import { FaMarsDouble as MenLove } from "react-icons/fa";
import { BsFillChatSquareHeartFill as Like } from "react-icons/bs";
import { BsChatHeart as Chat } from "react-icons/bs";


// Pisces from "../../assets/images/SignsBack/pisces.png";

//import Aries from "../../assets/images/SignsBack/aries.png";
/*import Capricorn from "../../assets/images/SignsBack/capricorn.png";
import Gemini from "../../assets/images/SignsBack/gemini.png";
import Sagittarius from "../../assets/images/SignsBack/sagittarius.png";
import Scorpio from "../../assets/images/SignsBack/scorpio.png";
import Taurus from "../../assets/images/SignsBack/taurus.png";
import Virgo from "../../assets/images/SignsBack/virgo.png";*/

import "./Background.css";

const logos = [
    { id: 1, logo: <Cancer /> },
    { id: 2, logo: <Aquarius /> },
    { id: 3, logo: <Aries /> },
    { id: 4, logo: <Capricorn /> },
    { id: 5, logo: <Gemini /> },
    { id: 6, logo: <Leo /> },
    { id: 7, logo: <Libra /> },
    { id: 8, logo: <Pisces /> },
    { id: 9, logo: <Scorpio /> },
    { id: 10, logo: <Taurus /> },
    { id: 11, logo: <Virgo /> },
    { id: 12, logo: <Sagittarius /> },
    { id: 13, logo: <Planet /> },
    { id: 14, logo: <Sun /> },
    { id: 15, logo: <Sunrise /> },
    { id: 16, logo: <Moon /> },
    { id: 17, logo: <Sunset /> },
    { id: 18, logo: <Earth /> },
    { id: 19, logo: <GirlLove /> },
    { id: 20, logo: <Like /> },
    { id: 21, logo: <Love /> },
    { id: 22, logo: <Chat /> },
    { id: 23, logo: <MenLove /> },
    { id: 24, logo: <Sagittarius /> },
    { id: 25, logo: <Planet /> },
    { id: 26, logo: <Sun /> },
    { id: 27, logo: <Sunrise /> },
    { id: 28, logo: <Moon /> },
    { id: 29, logo: <Sunset /> },
    { id: 30, logo: <Earth /> },
    { id: 31, logo: <GirlLove /> },
    { id: 32, logo: <Like /> },
    { id: 33, logo: <Love /> },
    { id: 34, logo: <Chat /> },
    { id: 35, logo: <MenLove /> },
    { id: 36, logo: <Cancer /> },
    { id: 37, logo: <Aquarius /> },
    { id: 38, logo: <Aries /> },
    { id: 39, logo: <Capricorn /> },
    { id: 40, logo: <Gemini /> },
    { id: 41, logo: <Leo /> },
    { id: 42, logo: <Libra /> },
    { id: 43, logo: <Pisces /> },
    { id: 44, logo: <Scorpio /> },
    { id: 45, logo: <Taurus /> },
    { id: 46, logo: <Virgo /> },
];

const repeat = Array.from({ length: 1 });
const rows = Array.from({ length: 46 });

export const AppBack = () => {
    return (
        <IconContext.Provider value={{ className: "logos" }}>
            <section>
                {rows.map((a, ind) => (
                    <div className="row" key={ind}>
                        {repeat.map((b, i) => (
                            <div key={i} className="div">
                                {logos.map((item, index) => {
                                    const { id, logo } = item;
                                    return <React.Fragment key={id}>{logo}</React.Fragment>;
                                })}
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </IconContext.Provider>
    );
};


