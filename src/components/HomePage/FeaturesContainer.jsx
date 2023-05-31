import React from 'react'
import { linkService } from '../../services/link.service';

export function FeaturesContainer() {
    const { featuresLinks } = linkService;
    return (
        <div className="designed-nav full flex">
            {featuresLinks.map((box, index) => (
                <div className="box" key={index}>
                    <img src={box.src} alt={box.alt} />
                    <h6>{box.text}</h6>
                </div>
            ))}
        </div>)
}
