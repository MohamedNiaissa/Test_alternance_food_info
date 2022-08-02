import React, { useState, useEffect } from 'react';

const App = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://world.openfoodfacts.org?json=true')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

return (
console.log("*****************"));
};

export default App;