import React, { useEffect, useState } from "react";
import "./SavedRecipes.css";

export default function SavedRecipes() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://67592ea060576a194d13712b.mockapi.io/reactjs-college")
      const data = await response.json()
      console.log(data)
      setRecipes(data)
    }
    fetchData()
  }, [])

  return (
    <div className="saved-recipes-container">
      {/* Header */}
      <div className="saved-recipes-header">
        <span className="active">Saved Recipes</span>
        <span>Folders</span>
        <span>Recipes by Genevieve</span>
      </div>

      {/* Recipes Grid */}
      <div className="recipes-grid">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.image_link} alt={recipe.name} className="recipe-image" />
            <div className="recipe-content">
              <span className="recipe-title">{recipe.name}</span>
              <div className="recipe-footer">
                <span>{recipe.created_at}</span>
                <span className="bookmark-icon">
                  <img src="/tag.png" alt="" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
