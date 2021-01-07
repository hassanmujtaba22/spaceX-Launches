import React from 'react'
import { Link } from 'react-router-dom'
import astronaut from "../../images/astronaut.png"
function Banner() {
    return (
        <section className="hero" data-test="container">
            <div className="left-section" data-test="sections">
                <h2>Space Exploration Technologies Corp. Trading as SpaceX is a private American aerospace
                        manufacturer headquater Californio.</h2>
                <Link to="/launches" className="bannerBTN">Explore Space</Link>
                <div className="socialIcons">
                    <div>
                        <a data-test="socialLinks" href="https://github.com/hassanmujtaba22"><i className="fa fa-github"></i></a>
                    </div>
                    <div>
                        <a data-test="socialLinks" href="https://www.facebook.com/profile.php?id=100010486655448&_rdc=1&_rdr"><i className="fa fa-facebook"></i></a>
                    </div>
                    <div>
                        <a data-test="socialLinks" href="http://hassanmujtaba.surge.sh/"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="right-section" data-test="sections">
                <img data-test="astronaut" src={astronaut} alt="astronaut" />
            </div>
        </section>
    )
}

export default Banner
