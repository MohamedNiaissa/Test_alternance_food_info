
import { render } from "@testing-library/react"
import React from "react";
import '../css/main_style.css'

// import './Produitjs'
class Main extends React.Component{

render(){
    return(
        <>
        cxfghjklmùlkjhgfd
            <div className="mainPart">

               <div className="sidebar">
                  <h5>Trouver par: </h5>
                  <ul>
                     <li>
                        lorem 
                     </li>
                     <li>
                        lorem
                     </li>
                     <li>
                        lorem
                     </li>
                     <li>
                        lorem
                     </li>
                  </ul>
               </div>

               <div className="barreRecherche">
                  <input type={Text} className= "chercheProduit"/>
                  <a href="#">CHERCHER</a>
               </div>

            </div>

            
        </>

    );
}
}

export default Main



// import React, { useState, useEffect } from 'react';

// const App = () => {
//    const [posts, setPosts] = useState([]);
//    useEffect(() => {
//       fetch('https://world.openfoodfacts.org?json=true')
//          .then((response) => response.json())
//          .then((data) => {
//             console.log(data);
//             setPosts(data);
//          })
//          .catch((err) => {
//             console.log(err.message);
//          });
//    }, []);

// return (
// console.log("*****************"));
// };

// export default App;
