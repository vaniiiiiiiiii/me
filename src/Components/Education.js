function Education() {
    return(
        <div>
            <section className="colorlib-education" data-section="education">
                <div className="colorlib-narrow-content">
                    <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">Education</span>
                        <h2 className="colorlib-heading animate-box">Education</h2>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div className="fancy-collapse-panel">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree in Computer Engineering
                                </a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul>
                                            <li>Working scholar from 2007 - 2014 assigned at Building Maintenance - Office</li>
                                            <li>President of University of Cebu - Banilad Association of Non-academic Scholars, 2010-2011</li>
                                            <li>Chairman of University of Cebu - Council of Working Scholars, 2010-2011</li>
                                            <li>Scholar at Fransican Sisters Pro Infante et Familia, 2012-2014</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingTwo">
                                <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">High School Secondary Education
                                </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div className="panel-body">
                                    <div className="com-md-12">
                                        <p>With honors/awards from 1st-4th year High School.</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="panel panel-default">
                            <div className="panel-heading" role="tab" id="headingThree">
                                <h4 className="panel-title">
                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Elementary Primary Education
                                </a>
                                </h4>
                            </div>
                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div className="panel-body">
                                    <div className="com-md-12">
                                        <p>With honors/awards from Grade 1 - 6</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Education;