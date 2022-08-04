
let url = "https://world.openfoodfacts.org?json=true"
let headers = {};


async function displayItems(url){

    try {
        let prods = document.querySelector(".Produits");
        prods.innerHTML = " ";

    } catch (error) {
        console.log(error)
    }
    
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
                        // alert("ici")
                        // localStorage.clear();
                        window.localStorage.clear();
    
                        localStorage.setItem("nom",data.products[i].brands);
                        localStorage.setItem("img",data.products[i].image_front_small_url);
                        localStorage.setItem("categories",data.products[i].categories);
                        localStorage.setItem("Ancien packaging", data.products[i].packaging_old)

                        let mainPart = document.querySelector(".mainPart");
                        let slideContainer = document.querySelector(".slide-container");
                        mainPart.remove();
                        slideContainer.remove();
                        console.log('icinjii')
                        detailsItem();
                    })
    

                }
    
    
            })
    })
}

displayItems(url);
// let prodUSA = document.querySelector(".prodUSA");



async function produitFrance() {
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let prodFrance = document.querySelector(".prodFrance");
          prodFrance.addEventListener('click',function(){
              url = "https://fr.openfoodfacts.org?json=true"
              displayItems(url)
          })

      }, 1000)
    });
  
  
  }
  
  async function produitUSA() {
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let prodUSA = document.querySelector(".prodUSA");
            prodUSA.addEventListener('click',function(){
              url = "https://us.openfoodfacts.org?json=true"
              displayItems(url)
          })

      }, 1000)
    });
  
  
  }

 async function reset(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let reset = document.querySelector(".reset");
            reset.addEventListener('click',function(){
              url = "https://world.openfoodfacts.org?json=true"
              displayItems(url)
          })

      }, 1000)
    });

 }

 async function Desc(){
    new Promise((resolve, reject) => {
        setTimeout(() => {
            let allESP = document.querySelectorAll(".ESP");
            for(let i = 0; i < allESP.length ; i++){
                allESP[i].addEventListener('click',function(){
                    console.log('im here')
                    let mainPart = document.querySelector('.mainPart');
                    mainPart.remove();
                })

            }
           
      }, 1000)
    });

 }

function detailsItem(){
    try {
       //let prods = document.querySelector(".Produits");
       // prods.innerHTML = " ";
    } catch (error) {
        console.log(error)
    }

    let divGeneralItem = document.createElement('div');
    divGeneralItem.className = "general";
    
    let titreItem = document.createElement("h2");
    titreItem.innerHTML = localStorage.getItem("nom");
    titreItem.className = "titreItem";


    let divSecondItem = document.createElement('div');
    divSecondItem.className = "second";

    let imgItem = document.createElement('img');
    imgItem.setAttribute("src",localStorage.getItem("img"))

    let divDesc = document.createElement('div');
    divDesc.className = "divDesc";

    let categorie = document.createElement('p');
    categorie.innerHTML = "Catégories : " + localStorage.getItem("categories");

    let oldPackaging = document.createElement('p');
    oldPackaging.innerHTML = "Ancien Packaging : " + localStorage.getItem("Ancien packaging");

    let lorem = document.createElement("p");
    lorem.innerHTML = "Lorem ipsum dolor sit amet. Est similique odit aut voluptatem eveniet sit sint voluptatum et corporis voluptates. Et quia labore eum cumque consequatur est voluptas dignissimos qui dicta iste.     Et corporis quod At dolorem asperiores et beatae facere eos quas quisquam? Eum quos quam error dicta ea Quis rerum sit debitis dolore ex delectus unde. Est deleniti quia id soluta exercitationem qui assumenda nihil.     Qui vero molestias aut illo inventore quo omnis similique est eveniet numquam vel inventore voluptatem et nostrum galisum hic voluptas quia. Aut nostrum minima et galisum dolorum aut quasi facere ut illo excepturi et obcaecati nihil.";
    


    document.body.appendChild(divGeneralItem);
    divGeneralItem.appendChild(titreItem);
    divGeneralItem.appendChild(divSecondItem);
    divSecondItem.appendChild(imgItem);
    divSecondItem.appendChild(divDesc);
    divDesc.appendChild(categorie);
    divDesc.appendChild(oldPackaging);
    divGeneralItem.appendChild(lorem);

    divSecondItem.style.display = "flex";
    divSecondItem.style.justifyContent = "space-around";
    divSecondItem.style.marginBottom = "100px";
    titreItem.style.textAlign = "center";
    titreItem.style.marginBottom = "200px";
    divDesc.style.display = "flex";
    divDesc.style.flexDirection = "column";
    divDesc.style.width = "500px";
    lorem.style.textAlign = "center";
    lorem.style.padding = "40px";

    divGeneralItem.style.background = "url('vegetables.jpg')";
    divGeneralItem.style.backgroundSize = "cover";
    divGeneralItem.style.color = "white";
    divGeneralItem.style.height = "100vh";
    divGeneralItem.style.backdropFilter = "grayscale(60%)";

}
 

  produitFrance();
  produitUSA();
  reset();

// Desc();