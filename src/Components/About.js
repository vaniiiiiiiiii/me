function About() {
    return (
        <div>
          <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                <div className="col-md-12">
                    <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                    <div className="col-md-12">
                        <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                        <p><strong>I'm Jovanie Limbagan</strong> - a Computer Engineering graduate in University of Cebu - Banilad and currently a Software Engineer in Cebu City.</p>
                        <p>I've been doing programming since 2014 and have worked with variety of technologies. Being curious of how the things where made up using software technologies makes me love exploring them.
                            I love watching DIYs in youtube as well!</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                    <span className="icon2"><i className="icon-globe-outline" /></span>
                    <h3>Web Development</h3>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                    <span className="icon2"><i className="icon-bulb" /></span>
                    <h3>Desktop Application Development</h3>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                    <span className="icon2"><i className="icon-data" /></span>
                    <h3>Research and Development</h3>
                    </div>
                </div>
            </div>
          </section>
        </div>
    );
}

export default About;