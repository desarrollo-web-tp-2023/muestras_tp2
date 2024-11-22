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

const remarcarPrecios = (porcentaje) => {
  const nuevosProductos = productsDB.map(
    prod => {
      prod.price = prod.price + (prod.price * (porcentaje / 100));
      return prod;
      });
  return nuevosProductos;
  };
    
  const descuentoPrecios = (porcentaje) => {
    const nuevosProductos = productsDB.map(
      prod => {
        prod.price = prod.price - (prod.price * (porcentaje / 100));
        return prod;
        });
    return nuevosProductos;
    };

    const agregarTextoNuevo = (texto) => {
      const nuevosProductos = productsDB.map(
        prod => {
          prod.name = texto + prod.name;
          return prod;
          });
      return nuevosProductos;
      };
  
    const aumentoPrecios = (cantidadPesos) => {
      const nuevosProductos = productsDB.map(
        prod => {
          prod.price = prod.price + parseInt(cantidadPesos);
          return prod;
          });
      return nuevosProductos;
      };
const getProductos = () =>{
    return productsDB;
}

module.exports = {
    getProductos,
    remarcarPrecios,
    aumentoPrecios,
    descuentoPrecios,
    agregarTextoNuevo
  };