import home_page_styles from "../../assets/styles/pages/homePage.module.scss"
import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"


import MainViewCard from "../cards/MainViewCard";

// import backgroundImageDesktop from "../../assets/images/main_background.jpg"
import backgroundImageDesktop from "../../assets/images/main_background_edited.png"
import backgroundImageMobile from "../../assets/images/coffee_making_edited.png"

import thirdBackgroundImageAsset from "../../assets/images/coffee_done_2.jpg"

import { useState } from "react";
import IntroCard from "../contentCards/IntroCard";
import ExperienceCard from "../contentCards/ExperienceCard";
import MenuCard from "../contentCards/MenuCard";

const setViewport = () => {
    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
}
const updateBackgroundImageGlob = (width, firstImg, secondImg) => {
    return width < 425 ? firstImg  : secondImg
}

const Home = () => {
    let viewPort = setViewport()

    const [firstBackgroundImage, setFirstBackgroundImage] = useState(updateBackgroundImageGlob(viewPort.width, backgroundImageMobile, backgroundImageDesktop))
    const [thirdBackgroundImage, setThirdBackgroundImage] = useState(updateBackgroundImageGlob(viewPort.width, thirdBackgroundImageAsset, thirdBackgroundImageAsset))

    // let backgroundImage = setBackgroundImage(viewPort.width)// viewPort.width < 636 ? backgroundImageMobile : backgroundImageDesktop

    window.addEventListener("resize", () => {
        viewPort = setViewport()
        setFirstBackgroundImage(viewPort.width < 425 ? backgroundImageMobile : backgroundImageDesktop)
        setThirdBackgroundImage(viewPort.width < 425 ? thirdBackgroundImageAsset : thirdBackgroundImageAsset)
        /* backgroundImage = setBackgroundImage(viewPort.width) */
    })

    return (
        <div className={home_page_styles.home_page}>
            <MainViewCard
                dark
                alignCenter
                justifyCenter
                backgroundImage={firstBackgroundImage}
                isMobile={viewPort.width < 425}
            >
                <div className={main_view_card_styles.first_card}>
                    <div className={main_view_card_styles.first_card__animation}>
                        <h2>
                            The Power of
                        </h2>
                        <h1>
                            COFFEE
                        </h1>
                        <h2>
                            * SINCE 2000 *
                        </h2>
                    </div>
                </div>
            </MainViewCard>
            <MainViewCard
                light
                className={main_view_card_styles.main_view_card__padding}
            >
                <IntroCard />
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
                backgroundImage={thirdBackgroundImage}
                className={main_view_card_styles.main_view_card__padding}
            >
                <div className={main_view_card_styles.third_card}>
                    <div className={main_view_card_styles.third_card__animation}>
                        <h2>
                            Story of
                        </h2>
                        <h1>
                            CRAFT COFFEE
                        </h1>
                    </div>
                </div>
            </MainViewCard>
            <MainViewCard
                light
                className={main_view_card_styles.main_view_card__padding}
            >
                <ExperienceCard />
            </MainViewCard>
            <MainViewCard
                light
                className={main_view_card_styles.main_view_card__padding}
            >
                <MenuCard />
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
                className={main_view_card_styles.main_view_card__padding}
            >
                ahoj
            </MainViewCard>
        </div>
    );
}

export default Home;

