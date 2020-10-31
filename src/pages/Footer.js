import React from 'react'

import './css/footer.css'

import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="copyright-container">
                <Link className="links" to='/'>
                    <div className='logo sub-title'>
                        Firstclass Brain
                    </div>
                </Link>
                <div className='copyright'>Copyright &copy; 2020, All rights reserved</div>
            </div>
        </div>
    )
}

export default Footer
