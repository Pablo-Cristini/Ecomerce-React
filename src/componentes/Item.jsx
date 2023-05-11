const Item = ({ producto, actualizarTotalSuma }) => {
  const handleClick = () => {
    actualizarTotalSuma(producto);
  };

  return (
    <div className="producto">
      <div>
        <img
          className="product-img"
          id={producto.id}
          src={producto.image}
          alt={producto.description}
        ></img>
        <h3 className="product-title" id={producto.id}>{producto.title}</h3>
        <p className="product-price">${producto.price}</p>
        <button className="product-button" onClick={handleClick}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Item;