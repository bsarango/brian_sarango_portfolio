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
                            <img src="" alt="Experience icon" className="icon"/>
                            <h3>Experience</h3>
                            <p>Frontent Developer <br></br> Backend Developer</p>
                        </div>
                        <div className="details-container">
                            <img src="" alt="Education icon" className="icon"/>
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
        </section>
    // <div className="about__text-container">
    //     <p className = "about-p">
    //         I'm a Software Engineer with FullStack development experience. <br></br>
    //         I previously have experience in the healthcare field working with a range of other professionals.<br></br>
    //         I'm experienced in created front ends with React and JavaScript and Backends with Flask with Python. 
    //         I have experience working with databases as well using SQLite, SQLAlchemy, and PostreSQL.<br></br>
    //         I'm also an a musician who loves learning abot Jazz and am active working in both music and with young people in my local church.<br></br>

    //     </p>
    // </div>
    )
}

export default About