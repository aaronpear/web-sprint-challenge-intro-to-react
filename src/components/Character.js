import React, { useState } from "react";

// Write your Character component here

const Character = (props) => {
    const { name } = props;

    return (
        <p>
        {name}
        </p>
    );
}

export default Character;