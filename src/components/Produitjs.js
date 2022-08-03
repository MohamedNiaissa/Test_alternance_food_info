
const url = "https://world.openfoodfacts.org?json=true"
let headers = {};

fetch(url, {
    method : "GET",
    mode: 'cors',
    headers: headers
}).then((response) => {
    

    return response.json().then((data) => {
            let prods = document.querySelector(".Produits");
            console.log(data)
    
            for(let i = 0; i<data.products.length; i++){
                let divProd = document.createElement('div');
                divProd.className = "divProd";

                let imgProd = document.createElement("img");
                imgProd.className = "imgProd";
                imgProd.setAttribute("src",data.products[i].image_front_small_url);
                
                let nomProd = document.createElement('p');
                nomProd.className = "nomProd";
                nomProd.innerHTML = data.products[i].brands;

                let btnESP = document.createElement('a');
                btnESP.className = "ESP";
                btnESP.innerHTML = "Plus d'informations";

                prods.appendChild(divProd);
                divProd.appendChild(imgProd);
                divProd.appendChild(nomProd)
                divProd.appendChild(btnESP);


                btnESP.addEventListener("click",function(){
                    alert("ici")
                    localStorage.clear();window.localStorage.clear();

                    localStorage.setItem("nom",data.products[i].brands);
                    localStorage.setItem("img",data.products[i].image_front_small_url);
                    localStorage.setItem("categories",data.products[i].categories);
                    localStorage.setItem("Ancien packaging", data.products[i].packaging_old)
                    console.log('icinjii')
                })

                

            }




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