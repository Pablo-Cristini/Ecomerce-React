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