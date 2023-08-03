import React from 'react';
import { useSelector } from 'react-redux';
import { SVGComponent } from './Pizzasvg';
import { Ing } from './ExIngr';
import background from "../../img/bb.svg";

import {
  selectIngr,
  exIngrArr,
  price,
} from './pizzaSlice';

export function Pizza() {
  let ingr = useSelector(selectIngr);
  const exArr = useSelector(exIngrArr);
  const pric = useSelector(price);
  let ingNames = ''
  ingr.map((ins) => {return ingNames+=ins.name+' '})

  return (
    <div>
      <div id="pizzaZone" className='pizzaBG' style={{ backgroundImage: `url(${background})` }}>
      <div className='ingList'>
        <h2>Pizza price: {pric}$</h2>
        {ingr.length>0 &&<h2>Additional ingredients:</h2>}
        {ingr.map((ins, i) => {
        return (
            <p key={i}>{ins.name} +{ins.price}$</p>
          )
        })}
      </div>
     
        <div className={`pizzaCont ${ingNames}`} >
            <SVGComponent />
        </div>
    
        {exArr.map((ins, i) => {
        return (
          <Ing key={i} isActive='true' price={ins.price} name={ins.name}/>
          )
        })}
       
      </div>
    </div>
  );

}
