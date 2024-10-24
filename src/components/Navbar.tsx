
function Navbar(){

    return(
        <>
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
            <nav id="hamburger-nav">
                <div className="logo">Brian Sarango</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={togglemenu()}>
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
        </>
    )
}

export default Navbar