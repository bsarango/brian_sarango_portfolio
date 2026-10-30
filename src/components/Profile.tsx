import linkedin_icon from '../assets/linkedin.png';
import github_icon from '../assets/github.png';
import resume from '../assets/Brian Sarango — Resume.pdf'

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
                    <button className="btn btn-color-2" onClick={()=>window.open(resume)}>Download Resume</button> {/*add onClick to button to download resume */}
                    <button className="btn btn-color-1">    {/*add onClick for button to move to Contact section*/}
                        Contact Info
                    </button> 
                </div>
                <div className="socials-container">
                    <a href="http://linkedin.com/in/brian-sarango">
                        <img src={linkedin_icon} alt="My Linkedin Profile" className="icon"/>
                    </a>
                    <a href='https://github.com/bsarango'>
                        <img src={github_icon} alt="My Github Profile" className="icon"/> 
                    </a>   
                </div>
            </div>
        </section>
    )
}

export default Profile;