import "./App.css";

const App = () => {
    return (
        <div className="App">
            <div className="hero-container">
                <h1>Joa Leitola</h1>
                <p>Front End Web Developer.</p>
                <p>Focused on React.</p>
            </div>

            <section className="aboutme">
                <div className="aboutme-container">
                    <h2>01. About Me</h2>
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
            </section>

            <section className="skills">
                <div className="skills-container">
                    <h2>02. Skills</h2>
                    <div className="skills-flex">
                        <div className="skill-item">
                            <div className="item-img"></div>
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
						<div className="item-img"></div>
                            <p className="item-name">Javascript</p>
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
						<div className="item-img"></div>
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
						<div className="item-img"></div>
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

			<section className="projects">
				<div className="project">
					
				</div>
			</section>
        </div>
    );
};

export default App;
