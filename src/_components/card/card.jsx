
import React from "react";

import './card.css'


const TextColor = ({text, color, backgroundColor}) => {
    const textStyle = {
        backgroundColor: backgroundColor,
        color: color,
        textTransform:'uppercase',
    };

    return (
        <p style={textStyle}>{text}</p>
    );
};

export default TextColor;
