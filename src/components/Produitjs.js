
const url = "https://world.openfoodfacts.org?json=true"
let headers = {};

fetch(url, {
    method : "GET",
    mode: 'cors',
    headers: headers
}).then((response) => {
    return response.json().then((data) => {
       
            console.group("Données : ");
            console.log(data.products)
            
        })
})



//            image.setAttribute("src",data.products[i].image_front_small_url);


/*
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
*/