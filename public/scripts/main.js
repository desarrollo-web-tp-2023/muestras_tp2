// public/scripts/main.js

document.addEventListener('DOMContentLoaded', () => {
    // Obtener la lista de productos desde el array `productsDB`
    const products = getProductos();

    // Referencia al contenedor donde se renderizarán los productos
    const productList = document.getElementById('product-list');

    if (!productList) {
        console.error("No se encontró un elemento con id='product-list' en el DOM.");
        return;
    }

    // Renderizar los productos
    products.forEach(product => {
        const listItem = document.createElement('div');
        listItem.classList.add('col-lg-3', 'col-sm-6', 'my-3');
        listItem.innerHTML = `
            <div class='col-12 bg-white text-center h-100 product-item'>
                <div class='row h-100'>
                    <div class='col-12 p-0 mb-3'>
                        <a href="#">
                            <img src="${product.urlImg}" alt="${product.name}" class="img-fluid">
                        </a>
                    </div>
                    <div class="col-12 mb-3">
                        <a href="#" class="product-name">${product.name}</a>
                    </div>
                    <div class="col-12 mb-3">
                        <span class="product-price-old">$${product.oldPrice}</span>
                        <br>
                        <span class="product-price">$${product.price}</span>
                    </div>
                </div>
            </div>
        `;
        productList.appendChild(listItem);
    });
});

// Base de datos simulada
const productsDB = [
    { 
      id: 1, 
      name: 'Pantalon Montecarlo Lino', 
      oldPrice: 13000, 
      price: 10000, 
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/260362-1200-auto?width=1200&height=auto&aspect=true'
    },
    {
      id: 2, 
      name: 'Remera Ferrara',  
      oldPrice: 6500, 
      price: 6100, 
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/265099-800-auto?width=800&height=auto&aspect=true'
    },
    { 
      id: 3, 
      name: 'Vestido Irregular Tape',  
      oldPrice: 9500, 
      price: 9000,  
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/263096-1200-auto?width=1200&height=auto&aspect=true'
    },
    { 
      id: 4, 
      name: 'Remera Pima Print Horses',  
      oldPrice: 5000, 
      price: 4000,  
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/265636-800-auto?width=800&height=auto&aspect=true'
    },
    { 
      id: 5, 
      name: 'Top Corset Connie',  
      oldPrice: 7000, 
      price: 6000, 
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/262562-800-auto?width=800&height=auto&aspect=true' 
    },
    { 
      id: 6, 
      name: 'Jean Relaxed',  
      oldPrice: 14000, 
      price: 12000,  
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/263017-800-auto?width=800&height=auto&aspect=true'
    },
    { 
      id: 7, 
      name: 'Remera Shine',  
      oldPrice: 5000, 
      price: 4500,  
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/261580-800-auto?width=800&height=auto&aspect=true'
    },
    { 
      id: 8, 
      name: 'Camisa Maldivas',  
      oldPrice: 10000, 
      price: 8000,  
      urlImg: 'https://desiderata.vtexassets.com/arquivos/ids/261747-800-auto?width=800&height=auto&aspect=true'
    },
  
  ];
  

// Función para obtener los productos
const getProductos = () => productsDB;
