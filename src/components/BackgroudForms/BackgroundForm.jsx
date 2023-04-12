import React, { useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring
} from "framer-motion";
import { STARS_COORDS } from "./constants";

export const FormBg = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const { scrollY } = useScroll();
    const outputRange = [
        `
    M 0 0 v 64 c 86 27 107 102 171 160 s 148 62 223 93 c 130 54 183 216 330 216 s 202 -162 332 -216 c 75 -31 159 -35 223 -93 s 85 -134 171 -160 V 0 H 0 z
    `,
        `
    M 0 0 v 992 c 63 1 133 -1 189 0 s 104 4 215 6 c 124 -1 215 4 322 6 s 183 2 325 -1 c 111 2 173 -2 233 -3 s 96 1 233 5 V 0 H 0 z
    `
    ];
    const clip_path_variants = {
        open: {
            d: outputRange[0]
        },
        closed: {
            d: outputRange[1]
        }
    };
    scrollY.onChange((value) => {
        if (value > 100) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    });
    return (
        <svg
            id="home__svg"
            style={{ left: 0, top: "-10px" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1450 960"
        >
            <defs>
                <motion.path
                    className="stars_clip"
                    id="a"
                    d="M 0 0 
                      v 64
                      c 86 27 107 102 171 160
                      s 148 62 223 93
                      c 130 54 183 216 330 216
                      s 202 -162 332 -216 
                      c 75 -31 159 -35 223 -93
                      s 85 -134 171 -160
                      V 0
                      H 0
                      z"
                    variants={clip_path_variants}
                    animate={hasScrolled ? "closed" : "open"}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.9
                    }}
                />
            </defs>
            <use fill="#1c2e4a" overflow="visible" href="#a" />
            <clipPath id="b">
                <use overflow="visible" href="#a" />
            </clipPath>
            <g clipPath="url(#b)">
                <Stars hasScrolled={hasScrolled} />
            </g>
        </svg>
    );
};

const Stars = React.memo(() => {

    const stars_color = ["#89bbc8", "#89bbc8", "#edaf5b", "#dc633c", "#f1f4f4"];
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [5, 140], [1, 0]);
    return STARS_COORDS.map((item, i) => {
        const x = useTransform(
            scrollY,
            [30, 140],
            [0, (Math.random() > 0.3 ? 1 : -1) * (Math.random() * 20)]
        );
        const y = useSpring(
            useTransform(scrollY, [20, 140], [0, 100 + Math.random() * 100]),
            { stiffness: 140, damping: 100 }
        );
        return (
            <motion.path
                key={item}
                fill={stars_color[Math.round(Math.random() * (stars_color.length - 1))]}
                d={item}
                style={{ x, y, opacity }}
            />
        );
    });
});


