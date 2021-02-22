import React from 'react'

function Navbar() {
    return(
        <div>
            <ul>
                <li className="active"><a href="#">Dima Bobeico</a></li>
                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="far fa-envelope"></i></a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Hello</a></li>
            </ul>
        </div>
    )
}

export default Navbar
