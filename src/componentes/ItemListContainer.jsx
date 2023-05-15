import { pedirDatos } from '../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import ItemDetailContainer from './ItemDetailContainer';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [totalSuma, setTotalSuma] = useState(0);

  useEffect(() => {
    pedirDatos().then((productData) => {
      setProductos(productData);
    });
  }, []);

  const reiniciarCarrito = () => {
    setTotalSuma(0)
  }

  const actualizarTotalSuma = (producto) => {
    setTotalSuma(totalSuma + producto.price);
  };

  return (
    <div>
      <ItemDetailContainer itemId={2}/>
      <div className='carrito'>
        <span>${totalSuma}</span>
        <button className='botonReiniciar' onClick={reiniciarCarrito}></button>
      </div>
      <ItemList
        productos={productos}
        actualizarTotalSuma={actualizarTotalSuma}
      />
    </div>
  );
};

export default ItemListContainer;