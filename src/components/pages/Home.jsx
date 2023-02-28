import home_page_styles from "../../assets/styles/pages/homePage.module.scss"
import main_view_card_styles from "../../assets/styles/components/mainViewCard.module.scss"


import MainViewCard from "../cards/MainViewCard";

// import backgroundImageDesktop from "../../assets/images/main_background.jpg"
import backgroundImageDesktop from "../../assets/images/main_background_edited.png"
import backgroundImageMobile from "../../assets/images/coffee_making_edited.png"
import cardTwoImage from "../../assets/images/coffee_making_content.jpg"
import { useState } from "react";

const setViewport = () => {
    return {
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
        height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    }
}
const updateBackgroundImageGlob = (width) => {
    return width < 425 ? backgroundImageMobile : backgroundImageDesktop
}

const Home = () => {
    let viewPort = setViewport()

    const [backgroundImage, setBackgroundImage] = useState(updateBackgroundImageGlob(viewPort.width))

    // let backgroundImage = setBackgroundImage(viewPort.width)// viewPort.width < 636 ? backgroundImageMobile : backgroundImageDesktop

    window.addEventListener("resize", () => {
        viewPort = setViewport()
        setBackgroundImage(viewPort.width < 425 ? backgroundImageMobile : backgroundImageDesktop)
        /* backgroundImage = setBackgroundImage(viewPort.width) */
    })

    return (
        <div className={home_page_styles.home_page}>
            <MainViewCard
                dark
                alignCenter
                justifyCenter
                backgroundImage={backgroundImage}
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
            >
                <div className={main_view_card_styles.second_card}>
                    <div className={main_view_card_styles.second_card__row_one}>
                        <img src={cardTwoImage} alt="" />
                        <h1>
                            A CUP OF GOURMET COFFEE SHARED WITH A FRIEND IS HAPPINESS TASTED AND TIME WELL SPENT.
                        </h1>
                    </div>

                </div>
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
            >
                ahoj
            </MainViewCard>
            <MainViewCard
                light
            >
                ahoj2
            </MainViewCard>
            <MainViewCard
                includeBrush
                dark
            >
                ahoj
            </MainViewCard>
        </div>
    );
}

export default Home;

