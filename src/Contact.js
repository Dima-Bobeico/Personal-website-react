import React from 'react'
import Navbar from "./components/navbar"

function Contact() {
  return(
    <div>
      <Navbar />
      <div class="container">
        <label for="mailname"><i className="email-logo" class="fas fa-globe-americas"></i> STAY UP TO DATE:</label><br />
        <input type="text" placeholder="Email Address" /><br />
        <input type="submit" value="Sign Up" />
     </div>
    </div>
  )
}

export default Contact
