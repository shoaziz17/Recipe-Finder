import React, { useState } from "react";
import "./RecipeCard.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function RecipeCard({ recipeObj }) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Dialog open={show}>
        <DialogTitle>Ingredients</DialogTitle>
        <DialogContent>
          <table>
            <thead>
              <tr>
                <th>Ingredients</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              {recipeObj.recipe.ingredients.map((rec, index) => {
                return (
                  <tr key={index}>
                    <td>{rec.text}</td>
                    <td>{Math.trunc(rec.weight)} gr</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <div className="cards">
        <div className="recipe-card">
          <div className="recipe-card-container">
            <div className="recipe-card-img">
              <img src={recipeObj.recipe.image} alt={recipeObj.recipe.label} />
            </div>
            <h3>{recipeObj.recipe.label}</h3>
            <div className="recipe-card-btns">
              <button
                onClick={() => {
                  setShow(true);
                }}
              >
                Ingredients
              </button>
              <button
                onClick={() => {
                  window.open(recipeObj.recipe.url);
                }}
              >
                See Full Recipe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
