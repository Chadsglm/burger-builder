import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array( props.ingredients[ingKey] )].map((_, index) => {
        return <BurgerIngredient key={ingKey + index} type={ingKey}/>;
      });
    })
    .reduce((arr, elem) => {
      return arr.concat(elem)
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  };
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div> 
  );
};

export default burger;