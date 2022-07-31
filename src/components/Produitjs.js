
const url = "https://world.openfoodfacts.org?json=true"
let headers = {};

fetch(url, {
    method : "GET",
    mode: 'cors',
    headers: headers
}).then((response) => {
    return response.json().then((data) => {
        console.log(data);
        // alert(data);
        
        let generalDiv = document.createElement('div');

        generalDiv.style.display = "flex";
        generalDiv.style.flexWrap = "wrap";
        generalDiv.className = "generalDiv";
        generalDiv.style.justifyContent = "flex-end";
        document.body.appendChild(generalDiv);

        for(let i = 0; i < data.products.length; i++){
            let div = document.createElement('div');
            div.className = "div"+i;
            generalDiv.appendChild(div);
    
            let p = document.createElement('p');
            document.querySelector(".div"+i).appendChild(p);
            p.innerHTML += data.products[i].brands_tags[0];
        
            let image = document.createElement("img");
            image.className = "img"+i;
            image.setAttribute("src",data.products[i].image_front_small_url);
            image.style.width = "100px";
            image.style.height = "100px";

            document.querySelector(".div"+i).appendChild(image);


            div.style.border = "13px solid #0000";
            div.style.borderRadius = "3px";
            div.style.boxShadow = "2px 3px 2px 2px";
            div.style.width = "200px";
            div.style.height = "200px";
            div.style.margin = "10px";
            div.style.display = "flex";
            div.style.flexDirection = "column";
            div.style.alignItems = "center";
            div.style.justifyContent = "center";
            div.style.flex = "0 1 300px";
        }

        

        
    })
})
