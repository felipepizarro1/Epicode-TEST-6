const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDdmNDI2NzYxNDAwMTgzYzJkY2IiLCJpYXQiOjE3MDIzODE1NTYsImV4cCI6MTcwMzU5MTE1Nn0.0E_a3RKSjxpdgKYoZeOfo-7beSfq0XVaJ05JYwjnOYY";

//POST 
function newProduct(name,description,brand,imageUrl,price){
    let productObject = {
        name: name,
        description: description,
        brand: brand,
        imageUrl: imageUrl,
        price: price
    };
        fetch('https://striveschool-api.herokuapp.com/api/product/', {method:'POST',
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productObject)
    })
    .then(response => {
        if (response.ok) {
            return response.json();    
    } else {
        console.error('Error en la respuesta:', response);
        throw new Error('Bad request');
    }
})   
    .then(data =>{
        console.log(data);
    })
    .catch(error => console.log("Error " + error))
}

function userInput(){
    let nameInput = document.getElementById('idName');
    let descriptionInput = document.getElementById('idDescription');
    let brandInput = document.getElementById('idBrand');
    let imageUrlInput = document.getElementById('idImg');
    let priceInput = document.getElementById('idPrice');

    console.log(nameInput.value, descriptionInput.value, brandInput.value, imageUrlInput.value, priceInput.value);
    newProduct(nameInput.value, descriptionInput.value, brandInput.value, imageUrlInput.value, priceInput.value);


}

let btnUserInput = document.getElementById('idButton');
btnUserInput.addEventListener('click',(e)=>{
    e.preventDefault();
    userInput();
})

//GET

function getProducts(){
    fetch('https://striveschool-api.herokuapp.com/api/product/', {method:'GET',
            headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json'
            }
            
    })
    .then(response => {
        if (response.ok) {
            return response.json();    
    } else {
        console.error('Error en la respuesta:', response);
        throw new Error('Bad request');
    }
})   
    .then(data =>{
        console.log(data); //inserire cards
        cards(data);
    })
    .catch(error => console.log("Error " + error))
}
    
getProducts();

function cards(data){
    let container = document.getElementById('divContainer')
    container.innerHTML = '';
    data.forEach(d =>{
        let product = 
    `<div class="row justify-content-center mb-3">
        <div class="col-md-12 col-xl-10">
          <div class="card shadow-0 border rounded-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                  <div class="bg-image hover-zoom ripple rounded ripple-surface">
                    <img src=${d.imageUrl}
                      class="w-100" />
                    <a href="#!">
                      <div class="hover-overlay">
                        <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-6">
                  <h5>${d.name}</h5>
                  <div class="d-flex flex-row">
                    <div class="text-danger mb-1 me-2">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <span>${d.brand}</span>
                  </div>
                  <div class="mt-1 mb-0 text-muted small">
                    <span>${d.description}</span>
                    
                  </div>
                  
                  <p class="text-truncate mb-4 mb-md-0">
                  
                  </p>
                </div>
                <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                  <div class="d-flex flex-row align-items-center mb-1">
                    <h4 class="mb-1 me-1">$${d.price}</h4>
                   
                  </div>
                 
                  <div class="d-flex flex-column mt-4">
                    <button class="btn btn-primary btn-sm" type="button">Details</button>
                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      container.innerHTML += product;

        
    })
}

//PUT

