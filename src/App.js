import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import RecipeCard from "./Components/RecipeCard";
import axios from "axios";
import "./Components/RecipeCard.css";
import logoImg from "./images/icons8-burger-100.png";
import burgerGif from "./images/burger gif.gif";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [updateTimeOut, setUpdateTimeOut] = useState();

  const api_key = "008cf8e5caf973342e3171de94aeb5f2	";
  const api_id = "698ae4b0";

  const fetApi = async (searchString) => {
    const response = await axios
      .get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${api_id}&app_key=${api_key}`
      )
      .then((res) => {
        console.log(res.data.hits);
        setRecipeList(res.data.hits);
      });
  };

  const textChange = (e) => {
    clearTimeout(updateTimeOut);
    const timeOut = setTimeout(() => {
      fetApi(e.target.value);
    }, 500);
    setUpdateTimeOut(timeOut);
  };

  return (
    <div className="App">
      <Header fetchApi={fetApi} textChange={textChange} />
      <div className="cards">
        {recipeList.length ? (
          recipeList.map((recipeObj, index) => (
            <RecipeCard key={index} recipeObj={recipeObj} />
          ))
        ) : (
          <img className="bgImage" src={burgerGif} alt="img"   autoplay loop />
        )}
      </div>
    </div>
  );
}

export default App;
