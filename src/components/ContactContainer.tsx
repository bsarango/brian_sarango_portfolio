import email_icon from '../assets/email.png'
import linkedin_icon from '../assets/linkedin.png'

function ContactContainer(){
    return(
        <section id="contact">
            <p className="section__text__p1">Get in touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src={email_icon} alt="Email icon" className="icon contact-icon"/>
                    <p><a href="mailto:brian@pypes.dev">brian@pypes.dev</a></p>
                </div>
                <div className="contact-info-container">
                    <img src={linkedin_icon} alt="LinkedIn icon" className="icon contact-icon"/>
                    <p><a href="http://linkedin.com/in/brian-sarango">LinkedIn</a></p> {/* Use Link library to make link work */}
                </div>
            </div>
        </section>
    )
};

export default ContactContainer;