import React from 'react'
import { Link } from 'react-router-dom'
import astronaut from "../../images/astronaut.png"
function Banner() {
    return (
        <section className="hero">
            <div className="left-section">
                <h2>Space Exploration Technologies Corp. Trading as SpaceX is a private American aerospace
                        manufacturer headquater Californio.</h2>
                <Link to="/launches" className="bannerBTN">Explore Space</Link>
                <div className="socialIcons">
                    <div>
                        <a href="https://github.com/hassanmujtaba22"><i className="fa fa-github"></i></a>
                    </div>
                    <div>
                        <a href="https://www.facebook.com/profile.php?id=100010486655448&_rdc=1&_rdr"><i className="fa fa-facebook"></i></a>
                    </div>
                    <div>
                        <a href="http://hassanmujtaba.surge.sh/"><i className="fa fa-instagram"></i></a>
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
