const ItemDetail = ( {item} ) => {

    return (
        <div className="producto">
                <h3 className="producto-title-item">${item.title}</h3>
                <img className="product-img" id={item.id} src={item.image} alt={item.description}></img>
            <span className="description-div">
                <p className="item-description">{item.description}</p>
            </span>
        </div>
    )
}
export default ItemDetail;