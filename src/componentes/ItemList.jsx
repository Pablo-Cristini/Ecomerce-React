import Item from "./Item";

const ItemList = ({ productos, actualizarTotalSuma }) => {
  if (!Array.isArray(productos)) {
    return <div>No se encontraron productos.</div>;
  }
  return (
    <div className="productos">
      {productos.map((prod) => (
        <div key={prod.id}>
          <Item
            producto={prod}
            actualizarTotalSuma={actualizarTotalSuma}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;