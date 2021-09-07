import React from 'react';
import {TodoProvider} from '../TodoContext'
import { AppUI } from './AppUI';

/* 
const defaultTodos= [
  {text:'cortar cebolla', completed:false},
  {text:'curso react', completed:false},
  {text:'llorar', completed:true},
  {text:'Redux te follare', completed:true},
] */
function App(){
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>  
  );
}

export default App;
