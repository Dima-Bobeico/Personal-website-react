import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return(
        <div>
            <ul>
                <Link to="/">
                    <li className="active"><a href="#">Dima Bobeico</a></li>
                </Link>
                <Link>
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                </Link>
                <Link>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </Link>
                <Link>
                    <li><a href="#"><i class="far fa-envelope"></i></a></li>
                </Link>
                <Link to="/contact">
                    <li><a href="#">Contact</a></li>
                </Link>
                <Link to="/about">
                    <li><a href="#">About</a></li>
               </Link>
            </ul>
        </div>
    )
}

export default Navbar
