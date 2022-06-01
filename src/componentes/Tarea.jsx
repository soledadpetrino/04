import React from "react";
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { createPortal } from "react-dom";

/*el props completada puede tomar dos valores, verdadero o falso, en caso de ser true, 
se va a asignar la className tarea-contenedor y completada(en este caso son dos clases, que van
a estar separadas por un espacio, en caso de ser falso, el className va a tomar el valor de
'tarea-contenedor'*/
/*completarTarea y eliminar tarea van a ser funciones que se van a llamar en caso de que suceda un evento*/
/*En este caso, el componente tarea, va a tener cinco props*/

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return(
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
      className='tarea-texto'
      onClick = { () => completarTarea(id) }>
      { texto }
    </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick = { () => eliminarTarea(id) }>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );
}

export default Tarea;