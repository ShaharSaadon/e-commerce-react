import React from "react";
import { linkService } from "../../services/link.service";

export function TeaserContainer() {
    const { teaserContainerData } = linkService;
    return (
        <div className="teaser-container full">
            {teaserContainerData.map((section, index) => (
                <div key={index} className={section.className}>
                    {section.title && <h2>{section.title}</h2>}
                    {section.description && <p>{section.description}</p>}
                    {section.imgSrc && (
                        <img src={section.imgSrc} alt={section.alt || ""} />
                    )}
                </div>
            ))}
        </div>
    );
}
