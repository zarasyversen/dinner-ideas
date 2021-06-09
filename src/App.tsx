import { recipes } from "./recipes";
import RecipeCard from "./RecipeCard";

const App = () => {
  const recipeList = recipes;

  return (
    <>
      {recipeList.map((item) => (
        <RecipeCard
          key={item.id}
          name={item.name}
          url={item.url}
          ingredients={item.ingredients}
        />
      ))}
    </>
  );
};

export default App;
