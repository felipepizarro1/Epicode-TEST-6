const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4NDdmNDI2NzYxNDAwMTgzYzJkY2IiLCJpYXQiOjE3MDIzODE1NTYsImV4cCI6MTcwMzU5MTE1Nn0.0E_a3RKSjxpdgKYoZeOfo-7beSfq0XVaJ05JYwjnOYY";


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

newProduct("prova","this is a test","hola","www.test.com",200);