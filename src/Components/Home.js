function Home() {
	return (
		<div>
			<section id="colorlib-hero" className="js-fullheight" data-section="home">
				<div className="flexslider js-fullheight">
					<ul className="slides">
						<li>
							<div className="overlay" />
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
										<div className="slider-text-inner js-fullheight">
											<div className="desc">
												<h1>Hi! <br />I'm Jovanie</h1>
												<p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1CNg8aMGK-_H6HGA-10c18Kxol3Qu5uhc/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="overlay" />
							<div className="container-fluid">
								<div className="row">
									<div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
										<div className="slider-text-inner">
											<div className="desc">
												<h1>I love <i className="icon-heart"></i> <br /> Programming</h1>
												<p><a className="btn btn-primary btn-learn" href="https://github.com/iamuch" target="_blank" rel="noopener noreferrer">View Github <i className="icon-briefcase3" /></a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</div>
	)
}

export default Home;