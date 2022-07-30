// import { render } from "@testing-library/react"
// import React from "react";
// import '../css/main_style.css'


// class Main extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//           error: null,
//           isLoaded: false,
//           page: []
//         };
//     }
//     componentDidMount() {
//         fetch("https://world.openfoodfacts.org?json=true")
//           .then(res => res.json())
//           .then(
//             (result) => {
//               this.setState({
//                 isLoaded: true,
//                 items: result.items
//               });
//             },
//             // Remarque : il est important de traiter les erreurs ici
//             // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
//             // des exceptions provenant de réels bugs du composant.
//             (error) => {
//               this.setState({
//                 isLoaded: true,
//                 error
//               });
//             }
//           )
//       }
// render(){
//     return(
//         <>
//           <div className="main">
//           <ul>
//           {page.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>


//           </div>
//         </>

//     );
// }
// }

// export default Main