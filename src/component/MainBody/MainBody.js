import React from "react";
import "./MainBody.css";
import img from "./../../assets/images/svg.svg";

const MainBody = () => {
    return (
        <>
            <div className="mainbody">
                <div className="text">
                    <div className="tagline1">
                        Share your smile with the world and find friends
                    </div>
                    <div className="tagline2">
                        Thousand of new profiles delivered weekly to your inbox
                    </div>
                    <div className="button">
                        <input className="input"/>
                        <button className="getStarted">Get Started</button>
                    </div>
                </div>
                <div className="images">
                    <img src={img} alt="" width="100%" height="100%"/>
                </div>
            </div>
        </>
    );
};

export default MainBody;
