import React from "react";
import { useSpring } from "react-spring";
import { Link } from "react-router-dom";

import { linkService } from "../../services/link.service.js";
export function ImagesContainer() {
    const { ColorButtonHome, boxesData } = linkService;
    return (
        <div className="images-container full">
            <div className="cover">
                <div className="content">
                    {boxesData.map((box, index) => (
                        <div
                            key={index}
                            className="box"
                            style={{
                                backgroundImage: `url(${box.backgroundImage})`,
                            }}
                        >
                            <h2>{box.title}</h2>
                            <p>{box.description}</p>
                            <Link to={box.link}>
                                <ColorButtonHome variant="contained">
                                    {box.buttonText}
                                </ColorButtonHome>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
