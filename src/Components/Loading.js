import React from "react";
import Lottie from "react-lottie";
import animationData from "./Assets/lotties/33657-loading.json";

const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div>
            <Lottie options={defaultOptions}
                width={200} />
        </div >
    );
}

export default Loading;