import React from "react";
import me from '../assets/images/me.jpg'

function Header() {
  return (
    <div>
      <header className="header">
      <div className="text-center mb-6">
        <img src={me} alt="pic" className="rounded-circle profile-img"
        />
      </div>
      <br/>
      <br/>
        <h1>OULED MOUSSA Hatim</h1>
        <h2>Étudiant ingénieur en 4ème année IIR ( MIAGE )</h2>
      </header>
      
    </div>
    
  );
}

export default Header;
