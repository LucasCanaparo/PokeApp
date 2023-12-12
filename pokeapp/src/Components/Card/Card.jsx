import React from "react";
import s from "./Card.module.css"

export default function Card({
    name,
    experience, 
    height, 
    weight,
    habilities
}) {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{experience}</h4>
            <h4>{height}</h4>
            <h4>{weight}</h4>
            <h3>{habilities}</h3>
        </div>
    )
}