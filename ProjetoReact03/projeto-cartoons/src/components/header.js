import React from 'react'

export default function Header(){
    return(
        <nav>
            <div className="logo"></div>
            <ul>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="">Cartoons</a></li>
                <li><a href="https://www.linkedin.com/in/vinicius-florencio-069856138/" target="_blank">About Me</a></li>
            </ul>
        </nav>
    )
}