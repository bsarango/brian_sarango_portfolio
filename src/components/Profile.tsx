function Profile(){
    return(
        <section>
            <div className="section__pic-container">
                <img src="" alt="Brian Sarango"/>
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Brian Sarango</h1>
                <p className="section__text__p2">Software Engineer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2">Download Resume</button> {/*add onClick to button to download resume */}
                    <button className="btn btn-color-1">    {/*add onClick for button to move to Contact section*/}
                        Contact Info
                    </button> 
                </div>
                <div className="socials-container">
                    <img src="" alt="My Linkedin Profile" className="icon"/>    {/* add onClick to change location to send to linkedin profile + add Linkedin icon pic */}
                    <img src="" alt="My Github Profile" className="icon"/>    {/* add onClick to change location to send to github profile + add Github icon pic*/}
                </div>
            </div>
        </section>
    )
}

export default Profile;