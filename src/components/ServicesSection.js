import React from 'react'
import clock from '../img/clock.svg'
import home2 from '../img/home2.jpeg'


const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt=""/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                </div>
            </div>

            <div className="image">
                <img src={home2} alt=""/>
            </div>
        </div>
    )
}

export default ServicesSection;