import education_icon from '../assets/education.png'
import experience_icon from '../assets/experience.png'
import arrow_icon from '../assets/arrow.png'

function About(){

    return(
        <section id = "about">
            <p className="section__text__p1">
                Get to know more
            </p>
            <h1 className="title">
                About me
            </h1>
            <div className="section-container">
                <div className="section__pic_container">
                    <img src="" alt="Profile Picture" className="about-pic"/>
                </div>
                <div className="about-details-containers">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src={experience_icon} alt="Experience icon" className="icon"/>
                            <h3>Experience</h3>
                            <p>Frontent Developer <br></br> Backend Developer</p>
                        </div>
                        <div className="details-container">
                            <img src={education_icon} alt="Education icon" className="icon"/>
                            <h3>Education</h3>
                            <p>BA Biological Sciencs <br></br>Flatiron School SE Bootcamp</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            I'm a Software Engineer with experience building Full Stack Applications. 
                            I have experience working with JS, ReactJS and Vite, Python, Java, Flask, HTML, CSS, SQLite, and SQL Aclhemy. 
                            I focus on building healthcare - tech based apps that focus on effective data querying, authentication and validation, and being user friendly.
                            Additionally, I have a background in healthcare and education where I've gained and honed skills in customer service, educating and training, team building, teamwork, and leadership. 
                            When not coding or working, I'm heavily involved in my local church, learning, playing, and directing music, cooking, excercising, and spending time with my feline pets. 
                        </p>
                    </div>
                </div>
            </div>
            <img src={arrow_icon} alt="Arrow icon" className="icon arrow"/>
        </section>
    )
}

export default About