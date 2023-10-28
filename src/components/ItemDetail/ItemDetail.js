import './ItemDetail.css';
import ItemCount from '../ItemCount/itemCount';

const ItemDetail = ({ id, name, category, description, price, stock, img }) => {
  return (
    <article className="CardItem">
      <header className='Header'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="Itemimg" />
      </picture>
      <section>
        <p className="Info">
          Categoría: {category}
        </p>
        <p className="Info">
          Descripción: {description}
        </p>
        <p className="Info">
          Precio: ${price}
        </p>
      </section>
      <footer className='ItemFooter'>
      <ItemCount initial={1} stock ={stock} onAdd ={(quantity) => console.log ("Cantidad agregada",quantity)}/>
      </footer>
    </article>
  );
}

export default ItemDetail;
