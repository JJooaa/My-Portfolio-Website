import React, { useState } from "react";
import "./App.css";
import reactimg from "./images/react-50.png";
import jsimg from "./images/javascript-50.png";
import htmlimg from "./images/html-50.png";
import cssimg from "./images/css-50.png";
import ajanvarausimg from "./images/ajanvaraus.png";
import windowsishimg from "./images/windowsish.png";
import { useInView } from "react-intersection-observer";
import github from "./images/Github.png";
import linkedin from "./images/linkedin.png";
import cv from "./images/cv.png";
import cvFile from "./CV/JoaCV.pdf";

const App = () => {
    // ABOUT ME CONTAINER
    const [aboutme, inView1] = useInView({
        triggerOnce: true,
        rootMargin: "-400px 0px",
    });

    // SKILLS CONTAINER
    const [skills, inView2] = useInView({
        triggerOnce: true,
        rootMargin: "-345px 0px",
    });

    // OTHER TECH CONTAINER
    const [otherTech, inView3] = useInView({
        triggerOnce: true,
        rootMargin: "-170px 0px",
    });

    // PROJECTS HEADER TEXT
    const [projectsh, inView4] = useInView({
        triggerOnce: true,
        rootMargin: "-175px 0px",
    });

    // PROJECT 1
    const [projects1, inView5] = useInView({
        triggerOnce: true,
        rootMargin: "-275px 0px",
    });

    //PROJECT 2
    const [projects2, inView6] = useInView({
        triggerOnce: true,
        rootMargin: "-125px 0px",
    });

    // SKILLS SECTION TEXT
    const [skillshead, inView7] = useInView({
        triggerOnce: true,
        rootMargin: "-200px 0px",
    });

    const [aboutmeheader, inView10] = useInView({
        triggerOnce: true,
        rootMargin: "-200px 0px",
    });

    return (
        <div className="App">
            {/* Hero */}
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="loader delay0">Joa Leitola</h1>
                    <p className="loader delay1 hp">Front End Web Developer.</p>
                    <p className="loader delay2 hp">Currently on React.</p>
                </div>
            </div>

            {/*  ABOUT ME   */}
            <h2
                className="ah2 fade-in"
                ref={aboutmeheader}
                style={{ opacity: inView10 ? 1 : 0 }}
            >
                01. About Me
            </h2>
            <section
                id="aboutme"
                className="aboutmesection fade-in"
                ref={aboutme}
                style={{ opacity: inView1 ? 1 : 0 }}
            >
                <div className="holder">
                    <div className="aboutmeheader">
                        <p className="ap">You can find me on</p>
                        <div className="socials">
                            <div className="scont">
                                <img className="smallimg" src={github} />
                                <a
                                    className="sp"
                                    href="https://github.com/JJooaa"
                                    target="_blank"
                                >
                                    Github
                                </a>
                            </div>
                            <div className="scont">
                                <img className="smallimg" src={linkedin} />
                                <a
                                    className="sp"
                                    href="https://www.linkedin.com/in/joa-leitola-478515212/"
                                    target="_blank"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="scont">
                                <img className="smallimg" src={cv} />
                                <a className="sp" href={cvFile} target="_blank">
                                    CV
                                </a>
                            </div>
                        </div>
                        <p className="email">leitola.joa@gmail.com</p>
                    </div>
                    <div className="aboutme-container">
                        <div className="aboutme-content">
                            <p className="aboutme-p">
                                Self taught Web Developer who is in love with
                                React. In the last year I have taught myself how
                                the web works. I have practiced my skills by
                                doing research and creating projects.
                            </p>
                            <br />
                            <p className="aboutme-p">
                                My goal is to become really good at React so
                                that I can create quality web experiences for
                                everyone. Fast forward a few years I see myself{" "}
                                <br /> as a professional Full Stack Web
                                Developer.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ITEM CONTAINER */}
            <h1
                className="skills-header fade-in"
                ref={skillshead}
                style={{ opacity: inView7 ? 1 : 0 }}
            >
                02. Skills
            </h1>
            <section
                id="skills"
                className="fade-in"
                ref={skills}
                style={{ opacity: inView2 ? 1 : 0 }}
            >
                <div className="skillsflexboy">
                    <div className="skills-container">
                        <div className="skills-flex">
                            <div className="skill-item">
                                <img className="item-img" src={reactimg} />
                                <p className="item-name">React</p>
                                <p className="item-p">
                                    I have a solid understanding of the main
                                    and advanced concepts in React.
                                    This knowledge allows me to learn new technologies and libraries with more ease helping me create more diverse websites.
                                    
                                </p>
                            </div>
                            <div className="skill-item">
                                <img className="item-img" src={jsimg} />
                                <p className="item-name">Javascript (ES6)</p>
                                <p className="item-p">
                                    I know the syntax of JavaScript. Also ES6 allows me to write cleaner code. 
                                </p>
                            </div>
                            <div className="skill-item">
                                <img className="item-img" src={htmlimg} />
                                <p className="item-name">HTML</p>
                                <p className="item-p">
                                    Creating and structuring HTML is essential for writing good code. Thats why I put alot of thought into it. 
                                </p>
                            </div>
                            <div className="skill-item">
                                <img className="item-img" src={cssimg} />
                                <p className="item-name">CSS</p>
                                <p className="item-p">
                                    I feel comfortable with CSS to the point that it gives me the ability to form websites more efficiently.
                                    Paying attention to page details and making it flow smoothly. 
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* OTHER TECH */}
                    <div
                        ref={otherTech}
                        style={{ opacity: inView3 ? 1 : 0 }}
                        className="fade-in"
                    >
                        <p className="more-header">
                            Other Noteworthy Technologies & Working Environments
                        </p>
                        <div className="moreskills fade-in">
                            <p className="moretech-p">Git</p>
                            <p className="moretech-p">Node.js</p>
                            <p className="moretech-p">Express.js</p>
                            <p className="moretech-p">MongoDB</p>
                            <p className="moretech-p">AdobeXD</p>
                            <p className="moretech-p">Scrum</p>
                            <p className="moretech-p">Netlify</p>
                            <p className="moretech-p">Heroku</p>
                            <p className="moretech-p">React-Query</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <h1
                className="projects-header fade-in"
                ref={projectsh}
                style={{ opacity: inView4 ? 1 : 0 }}
            >
                03. Projects
            </h1>
            <section id="projects" className="projects">
                <div className="projects-holder">
                    {/* PROJECT 1 */}
                    <div
                        className="project fade-in"
                        ref={projects1}
                        style={{ opacity: inView5 ? 1 : 0 }}
                    >
                        <div className="project-content">
                            <p className="project-p">
                                Project <span>Digitalents Ajanvaraus</span> for
                                making reservations.
                            </p>
                            <p className="project-subtext">
                                Application that flows you through steps for
                                making a reservation. Choosing the person you
                                want to meet, and then the appropriate time.
                                <br /> Mobile friendly. Simple. Easy.
                            </p>
                            <p className="project-subtext smaller">
                                React, Backend Api Communication, Netlify
                            </p>
                            <div className="project-links">
                                <a
                                    className="project-a"
                                    target="_blank"
                                    href="https://github.com/JJooaa/digitalents-ajanvaraus"
                                >
                                    Source Code
                                </a>
                                <a
                                    className="project-a"
                                    target="_blank"
                                    href="https://agitated-jepsen-62689e.netlify.app/"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                        <div className="project1-image"></div>
                    </div>
                    {/* PROJECT 2 */}
                    <div
                        className="project reverse fade-in"
                        ref={projects2}
                        style={{ opacity: inView6 ? 1 : 0 }}
                    >
                        <div className="project-content">
                            <p className="project-p">
                                Project <span>Full-Stack Exercise Tracker</span>{" "}
                                for fun.
                            </p>
                            <p className="project-subtext">
                                Application that mocks the windows desktop. You
                                can open folders, terminal and includes an
                                exercise tracker connected to a backend.
                                <br /> Not mobile friendly. Simple.
                            </p>
                            <p className="project-subtext smaller">
                                React, React-Query, Backend Api Communication,
                                MongoDB, Express, Node.js, Netlify, Heroku
                            </p>
                            <div className="project-links">
                                <a
                                    className="project-a"
                                    target="_blank"
                                    href="https://github.com/JJooaa/digitalents-ajanvaraus"
                                >
                                    Source Code
                                </a>
                                <a
                                    className="project-a"
                                    target="_blank"
                                    href="https://www.w3schools.com/tags/tag_a.asp"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                        <div className="project2-image"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
