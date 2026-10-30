import arrow_icon from '../assets/arrow.png'

function ProjectsContainer(){
    return(
        <section id = "projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="" alt="Project 1" className="project-img"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Project One</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={()=>{window.location.href = "https://github.com/bsarango/my-medical-system"}}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={()=>{window.location.href = "https://youtu.be/xt4MfsCPTBA"}}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                    <div className="details-container color-container">
                        <div className="article-container">
                            <img src="" alt="Project 2" className="project-img"/>
                        </div>
                        <h2 className="experience-sub-title project-title">Project Two</h2>
                        <div className="btn-container">
                            <button className="btn btn-color-2 project-btn" onClick={()=>{window.location.href = "https://github.com/bsarango/mama-medical-appointment-maker"}}>
                                Github
                            </button>
                            <button className="btn btn-color-2 project-btn" onClick={()=>{window.location.href = "https://youtu.be/btNkyA6QKt8"}}>
                                Live Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <img src={arrow_icon} alt="Arrow icon" className="icon arrow" onClick={()=>{}}/>
        </section>
    )
};

export default ProjectsContainer;