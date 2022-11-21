import './Card.css';


function Card({cocktail}) {
  console.log("ceci est le log de cocktail en pros du component",cocktail);
  return (
    <div className="card">
      <div className="columns">
        <img src={cocktail.strDrinkThumb} height="150" alt="" />
        <div className="book-content">
          <h2>{cocktail.strDrink}</h2>
          <p>
            <b>
              {cocktail.strCategory} - {cocktail.strAlcoholic}
            </b>
          </p>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Card