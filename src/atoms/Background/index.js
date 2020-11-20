import React from "react";
import { BackgroundFilter, BackgroundImage } from "./styled";
import backgroundImage from "../../assets/images/backgroundImage.png";

const Background = ({ children }) => {
    return (
        <BackgroundImage backgroundURL={backgroundImage}>
            <BackgroundFilter>
                {children}
            </BackgroundFilter>
        </BackgroundImage>
    )
};

export default Background;