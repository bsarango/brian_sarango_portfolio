import {useEffect, useState} from 'react'

function Navbar(){

    interface WindowSize{
        width: number;
        height: number;
    }

    useEffect(()=>{
        window.addEventListener
    })

    const [windowSize, setWindowSize] = useState<WindowSize>({width:window.innerWidth, height:window.innerHeight})

    if (true) {
        return(
        <nav id="desktop-nav">
                <div className="logo">Brian Sarango</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </div>
            </nav>
        )
    } 
    
            
    else{
        return(
            <nav id="hamburger-nav">
                <div className="logo">Brian Sarango</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar