import React from "react";
import "../assets/styles/Header.css";

export default function Header() {
    return (
        <header>
            <div className="header-logo">
                <img src="/images/Troll_Face.svg" alt="Troll face" />
                <h2>Meme Generator</h2>
            </div>
            <h5>React Course - Project 3</h5>

        </header>
    )
}