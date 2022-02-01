import React from 'react'
import { Link } from 'react-router-dom'

const Navbar =(props)=>{
        
        return (
            <div >
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsBubble</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            <Link className="nav-link" aria-current="page" to="/business">Business</Link>
                            <Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link>
                            <Link className="nav-link" aria-current="page" to="/general">General</Link>
                            <Link className="nav-link" aria-current="page" to="/health">Health</Link>
                            <Link className="nav-link" aria-current="page" to="/science">Science</Link>
                            <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
                            <Link className="nav-link" aria-current="page" to="/technology">Technology</Link>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    
}

export default Navbar
