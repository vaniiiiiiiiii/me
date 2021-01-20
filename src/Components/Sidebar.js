function Sidebar() {
    return (
        <div>
          <div>
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside" className="border js-fullheight">
              <div className="text-center">
                <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                <h1 id="colorlib-logo"><a href="index.html">Jovanie Limbagan</a></h1>
                <span className="email"><i className="icon-mail"></i> vanilimbagan18@gmail.com</span>
              </div>
              <nav id="colorlib-main-menu" role="navigation" className="navbar" style={{marginTop: '20px'}}>
                <div id="navbar" className="collapse">
                  <ul>
                    <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                    <li><a href="#about" data-nav-section="about">About</a></li>
                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                    <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                    <li><a href="#education" data-nav-section="education">Education</a></li>
                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                  </ul>
                </div>
              </nav>
              <nav id="colorlib-main-menu">
                <ul>
                  <li><a href="https://www.instagram.com/vanilimbagan/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                  <li><a href="https://www.linkedin.com/in/iambanban/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                  <li><a href="https://github.com/iamuch" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                </ul>
              </nav>
              <div className="colorlib-footer">
                <p><small>
                    Made with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <i className="icon-coffee" aria-hidden="true"></i>coffee<br></br>
                    Template courtesy of <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                </small></p>
              </div>
            </aside>
          </div>
        </div>
    )
}

export default Sidebar;