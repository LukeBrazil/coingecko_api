import React from 'react'

import './styles.css'

export default function NavBar() {
    return (
<div>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="/">
        <img className='pepe' src='https://c.files.bbci.co.uk/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg' alt="Pepe the Frog" />
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>
    </nav>
</div>
    )
}
