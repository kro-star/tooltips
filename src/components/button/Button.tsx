import React, { useEffect, useRef } from "react";
import { Tooltips } from '../tooltips/Tooltips';

function Button () {
    const buttonRef = useRef<HTMLInputElement>(null);
    const buttonRef1 = useRef<HTMLInputElement>(null);
    const buttonRef2 = useRef<HTMLInputElement>(null);
    const buttonRef3 = useRef<HTMLInputElement>(null);



  return (<>
      <input ref = {buttonRef}  placeholder="text"/>  
      <Tooltips text='hi, world' findRef = {buttonRef} />
      <input ref = {buttonRef1}  placeholder="text"/>  
      <Tooltips text='hi, css' findRef = {buttonRef1} variant= 'black'/>
      <input ref = {buttonRef2}  placeholder="text"/>  
      <Tooltips text='hi, react' findRef = {buttonRef2} variant= 'light'/>
      <input ref = {buttonRef3}  placeholder="text"/>  
      <Tooltips text='hi, style' findRef = {buttonRef3} variant= 'light'/>
      </>
  );
};


export  { Button };