import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import {
    addIngredients,
    addPrice,
  } from './pizzaSlice';
  import Draggable from 'react-draggable';

export function Ing({price, name }) {
    const [isActive, setActive] = useState(true);
    const elementRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
   let cl = 's'+name

    useEffect(() => {
        function handleResize() {
          const x = elementRef.current.getBoundingClientRect().x;
          const y = elementRef.current.getBoundingClientRect().y;
          setPosition({ x, y });
        }
        handleResize();
      }, [elementRef]);

    const trackPos = () => {
        let x = elementRef.current.getBoundingClientRect().x;
        let y = elementRef.current.getBoundingClientRect().y;
        setPosition({ x, y })
     };
    const dispatch = useDispatch();

    function handleStop() {
        let p = document.getElementById("pizza"),
        px = p.getBoundingClientRect().x,
        py = p.getBoundingClientRect().y;
      
        if(position.y>py) {
            dispatch(addIngredients(
                {   name: `${name}`,
                    price: `${price}`,
                }
                ))
                dispatch(addPrice(price)) 

            setActive(!isActive);
        }
      }
    return (
       <div className={cl}>
            {isActive &&<Draggable onStop={handleStop} onDrag={(data) => trackPos(data)}><div id={name} ref={elementRef}></div></Draggable>}
       </div>

    );
}
