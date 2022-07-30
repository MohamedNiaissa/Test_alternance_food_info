// import React from "react";

// class Produit extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         brands: []
//       };
//     }
  
//     componentDidMount() {
//       fetch("https://world.openfoodfacts.org?json=true")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               items: result.items
//             });
//           },
//           // Remarque : il est important de traiter les erreurs ici
//           // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
//           // des exceptions provenant de réels bugs du composant.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, items } = this.state;
//       if (error) {
//         return <div>Erreur : {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Chargement…</div>;
//       } else {
//         return (
//           <ul>
//             {brands.map(item => (
//               <li key={item.name}>
//                 {item.name} {item.price}
//               </li>
//             ))}
//           </ul>
//         );
//       }
//     }
//   }

//   export default Produit;
  