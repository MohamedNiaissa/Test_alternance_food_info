import { render } from "@testing-library/react"
import React from "react";
import '../css/header_style.css'


class Header extends React.Component{

render(){
    return(
        <>
        <header className="header">
            <img src="https://picsum.photos/id/237/200/300"></img>

            <ul className="nav">
                <li>Accueil</li>
                <li>...</li>
                <li>...</li>
            </ul>
            
        </header>
        </>

    );
}
}

export default Header