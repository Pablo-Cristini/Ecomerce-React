export function pedirDatos() {
    return fetch('https://fakestoreapi.com/products/')
      .then(response => response.json())
      .then(data => {
        const productData = data;
        console.log(productData)
        return productData;

      })
      .catch(error => console.error(error));
  }

  export function detalleProducto(id){
      return new Promise((resolve, reject) => {
        pedirDatos()
          .then((productData) => {
            const item = productData.find((element) => element.id === id);
            if(item) {
              resolve(item)
            } else {
              reject({
                error: "El producto no existe"
          });
        }
      })
       .catch((error) => reject(error)) 
        
          
      }) 
  }