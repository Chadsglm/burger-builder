import React from 'react';

import classes from './Order.css';

const order = ( props ) => {
  const ingredients = [];

  for ( let ingredientName in props.ingredients ) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      }
    );
    // console.log(props.ingredients);
  }

  const ingredientOutput = ingredients.map(ing => {
    return <span 
        className={classes.ingredientOutput}
        key={ing.name}>{ing.name} ({ing.amount})
      </span>;
  });
  // console.log(ingredientOutput);
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
    </div>
  );
};

export default order;