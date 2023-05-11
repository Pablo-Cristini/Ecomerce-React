import { pedirDatos } from '../helpers/pedirDatos';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [totalSuma, setTotalSuma] = useState(0);

  useEffect(() => {
    pedirDatos().then((productData) => {
      setProductos(productData);
    });
  }, []);

  const actualizarTotalSuma = (producto) => {
    setTotalSuma(totalSuma + producto.price);
  };

  return (
    <div>
      <div className='carrito'><span>${totalSuma}</span></div>
      <ItemList
        productos={productos}
        actualizarTotalSuma={actualizarTotalSuma}
      />
    </div>
  );
};

export default ItemListContainer;