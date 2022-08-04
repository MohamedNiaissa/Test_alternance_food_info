
import { render } from "@testing-library/react"
import React from "react";
import '../css/main_style.css'

// import './Produitjs'
class Main extends React.Component{

render(){
    return(
        <>
            <div className="mainPart">

               <div className="sidebar">
                  <h5>Trouver par: </h5>
                  <ul>
                     <li className="prodFrance">
                        Produits vendu en France
                     </li>
                     <li className="prodUSA">
                        Produits vendu aux États-Unis
                     </li>
              
                     <li className="reset">
                        Réinitialiser
                     </li>
                  </ul>
               </div>
               <div className="rechercheEtProduits">
                  <div className="barreRecherche">
                     <input type= "text" className= "chercheProduit"/>
                     <a href="#">CHERCHER</a>
                  </div>

                  <div className="Produits"></div>
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
