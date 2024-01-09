"use client"

import { useState } from "react";

export function Rating(props) {
    const [currentRating, setCurrentRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const rating = hoveredRating ? hoveredRating : currentRating;
    const handleMouseLeave = (e) => setHoveredRating(0);
    return (
        <div>
            <label className={`block mb-2 ${props.custom ? props.custom : 'font-medium'}`}>{props.label}</label>
            <p className='mb-3 text-sm'>{props.description}</p>
            <ul className="inline-flex gap-6 text-3xl md:text-5xl mb-10"
                onClick={(e) => {
                    setCurrentRating(e.target.dataset.rating);
                }}
            >
                <li>
                    <i
                        data-rating="1"
                        className={`${rating > 0 ? "fas" : "far"} fa-star text-yellow`}
                    />
                </li>
                <li
                    onMouseEnter={(e) => setHoveredRating(2)}
                    onMouseLeave={(e) => handleMouseLeave()}
                >
                    <i
                        data-rating="2"
                        className={`${rating > 1 ? "fas" : "far"} fa-star text-yellow`}
                    />
                </li>
                <li
                    onMouseEnter={(e) => setHoveredRating(3)}
                    onMouseLeave={(e) => handleMouseLeave()}
                >
                    <i
                        data-rating="3"
                        className={`${rating > 2 ? "fas" : "far"} fa-star text-yellow`}
                    />
                </li>
                <li
                    onMouseEnter={(e) => setHoveredRating(4)}
                    onMouseLeave={(e) => handleMouseLeave()}
                >
                    <i
                        data-rating="4"
                        className={`${rating > 3 ? "fas" : "far"} fa-star text-yellow`}
                    />
                </li>
                <li
                    onMouseEnter={(e) => setHoveredRating(5)}
                    onMouseLeave={(e) => handleMouseLeave()}
                >
                    <i
                        data-rating="5"
                        className={`${rating > 4 ? "fas" : "far"} fa-star text-yellow`}
                    />
                </li>
            </ul>
        </div>
    )
}