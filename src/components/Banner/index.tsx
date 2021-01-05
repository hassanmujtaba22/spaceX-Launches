import React from 'react'
import astronaut from "../../images/astronaut.png"
function Banner() {
    return (
        <section className="hero">
            <div className="left-section">
                <h2>Space Exploration Technologies Corp. Trading as SpaceX is a private American aerospace
                        manufacturer headquater Californio.</h2>
                <button>Explore Space</button>
                <div className="socialIcons">
                    <div>
                        <a href="https://github.com/hassanmujtaba22"><i className="fa fa-github"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-facebook"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <img src={astronaut} alt="astronaut" />
            </div>
        </section>
    )
}

export default Banner
