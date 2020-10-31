import React from 'react'
import {Link} from 'react-router-dom'

// css
import './css/App.scss'
import './css/header.css'
import './css/general.css'

const Header = (props) => {
    return (
        <section className="header-section"
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundSize:`cover`,
                backgroundPosition:`center`
            }}
        >
            <div className="filter"></div>
            <div className="content">
                <div className="title">{props.title}</div>

                <div className="header-nav">
                    <Link className='link' to='/'>Home</Link> &nbsp; / &nbsp; {props.nav}
                </div>
            </div>
        
        </section>
    )
}

export default Header
