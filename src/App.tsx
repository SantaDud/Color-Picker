import { useState, useEffect } from 'react';
import './App.css';
import  ColorBlock  from "./ColorBlock";
import Options from './Options';

interface Color{
  color: string;
  options: string[];
}


function App() {
  const [color, setColor] = useState<Color>({color:"", options:[]});
  
  const setup = () => {
    const opts:string[] = [];

    for (let i = 0; i < 3; i++)
      opts.push(getHex(6));
    
    const obj: Color = {
      color: opts[getRandomInt(0, 2)],
      options: opts
    };

    setColor(obj);
  }
  
  const getHex = (size: number) : string => {
    let hexAlphas: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let hex:string = "#";

    for (let i = 0; i < size; i++)
      hex += hexAlphas[getRandomInt(0, hexAlphas.length - 1)];
    
    return hex;
  }

  const getRandomInt = (min: number, max: number) : number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    setup();
  }, []);


  return (
    <div className="app">
      <ColorBlock color={ color.color } />
      <Options color={ color.color } options={ color.options } setup = {setup} />
    </div>
  )
}

export default App;
