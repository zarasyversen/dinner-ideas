type Recipe = {
  name: string;
  url: string;
  ingredients: string[];
};

const RecipeCard = (props: Recipe) => {
  const { name, url, ingredients } = props;

  console.log(ingredients);

  return (
    <div className="card spacing">
      <h2>{name}</h2>
      <p>{url}</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
