import React from "react";

function Header () {
    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <a href="#"><h1>YuGwon Portfolio</h1></a>
                    </div>
                    <ul>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header