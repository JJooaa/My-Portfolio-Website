import React, { useState } from "react";
import "./App.css";
import reactimg from "./images/react-50.png";
import jsimg from "./images/javascript-50.png";
import htmlimg from "./images/html-50.png";
import cssimg from "./images/css-50.png";
import { useInView } from "react-intersection-observer";

const App = () => {
    const [aboutme, inView1] = useInView({
        triggerOnce: true,
        rootMargin: "-350px 0px",
    });

    const [skills, inView2] = useInView({
        triggerOnce: true,
        rootMargin: "-450px 0px",
    });

    const [otherTech, inView3] = useInView({
        triggerOnce: true,
        rootMargin: "-300px 0px",
    });

    return (
        <div className="App">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="loader delay0">Joa Leitola</h1>
                    <p className="loader delay1">Front End Web Developer.</p>
                    <p className="loader delay2">
                        Currently on React.
                    </p>
                </div>
            </div>

            <section className="flexboy">
                <div
                    ref={aboutme}
                    style={{ opacity: inView1 ? 1 : 0 }}
                    className="aboutme-container item1 fade-in"
                >
                    <div className="aboutme-content">
                        <p className="aboutme-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                        <br />
                        <p className="aboutme-p">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div
                    ref={skills}
                    style={{ opacity: inView2 ? 1 : 0 }}
                    className="skills-container fade-in-2"
                >
                    <div className="skills-flex">
                        <div className="skill-item">
                            <img className="item-img" src={reactimg} />
                            <p className="item-name">React</p>
                            <p className="item-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="skill-item">
                            <img className="item-img" src={jsimg} />
                            <p className="item-name">Javascript (ES6)</p>
                            <p className="item-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="skill-item">
                            <img className="item-img" src={htmlimg} />
                            <p className="item-name">HTML</p>
                            <p className="item-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="skill-item">
                            <img className="item-img" src={cssimg} />
                            <p className="item-name">CSS</p>
                            <p className="item-p">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div
                    ref={otherTech}
                    style={{ opacity: inView3 ? 1 : 0 }}
                    className="fade-in-3"
                >
                    <p className="more-header">Other Noteworthy Technologies & Working Environments</p>
                    <div className="moreskills fade-in">
                        <div>
                            <p className="moretech-p">- Git</p>
                            <p className="moretech-p">- Node.js</p>
                            <p className="moretech-p">- Express.js</p>
                            <p className="moretech-p">- MongoDB</p>
                            <p className="moretech-p">- AdobeXD</p>
                            <p className="moretech-p">- Scrum</p>
                        </div>
                    </div>
                </div>
            <br />
            <h1 className="projects-header">Projects</h1>
            <section className="projects">
                <div className="project"></div>
            </section>
        </div>
    );
};

export default App;
