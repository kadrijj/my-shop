import React from "react";
import Lottie from "react-lottie";
import animationData from "./Assets/lotties/frenchie.json";

const ContactFrenchie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        renderer: "svg",
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div>
            <Lottie options={defaultOptions}
                width={100}
                height={100} />
        </div >
    );
}

export default ContactFrenchie;