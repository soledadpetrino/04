import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

/*<></> Esto son fragmentos, en caso de no querer utilizar <div></div>*/


function ListaDeTareas() {
   
  const [tareas, setTareas] = useState([]); 
  const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas); 

      // setTareas es la funcion del hook, que va a actualizar
      // el estado de tareas, le pasamos el nuevo estado que será tareasActualizadas, nos va 
      // a permitir tomar las tareas anteriores y agregar la tarea nueva al estado
      // Uso el operador spread, para convertir de un arreglo a objetos individuales del arreglo
      // va a contener la tarea nueva y las anteriores, quiero agregar la tarea al principio del array
    }
  };
  // trim() es un método que nos permite quitar los espacios del principio o del final de una cadena de caracteres
  //Dentro de useState, efinimos inicialmente a tareas como un array vacio, 
  //que luego se va a ir llenando con objetos, cada objeto va a definir las caracteristicas de 
  //cada una de las tareas

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea=> {
      if(tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario 
        onSubmit = { agregarTarea } 
      /> 
      <div className = 'tareas-lista-contenedor'>
        {
         tareas.map((tarea) =>
         <Tarea
          key = { tarea.id }
          id = { tarea.id }
          texto = { tarea.texto }
          completada = { tarea.completada } 
          completarTarea = { completarTarea }
          eliminarTarea = { eliminarTarea }
          />
          //Se creara por cada tarea, un componente de React, va a tener una propiedad texto
          // y otra propiedad llamada completada que va a ser verdadera o falsa

         ) 
        }
      </div>
    </>
  ); 
}

export default ListaDeTareas;