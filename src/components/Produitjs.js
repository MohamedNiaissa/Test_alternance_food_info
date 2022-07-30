
const url = "https://world.openfoodfacts.org?json=true"
let headers = {};

let r = document.querySelector('.root');
fetch(url, {
    method : "GET",
    mode: 'cors',
    headers: headers
}).then((response) => {
    return response.json().then((data) => {
        console.log(data);
        alert(data);
        let p = document.createElement('p');
        p.innerHTML = "data = " + data.products[0].brands;

        document.body.appendChild(p);


        
    })
})
