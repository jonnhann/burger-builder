import React from 'react';

import styles from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <Ingredients key={igKey + i} type={igKey} />;
    });
  })
  .reduce((arr, el)=>{
    return arr.concat(el)
  }, []);
  if (transformedIngredients.length===0){
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  console.log(transformedIngredients)
  return (
    <div className={styles.Burger}>
      <Ingredients type='bread-top' />
      {transformedIngredients}
      <Ingredients type='bread-bottom' />
    </div>
  );
};

export default Burger;
