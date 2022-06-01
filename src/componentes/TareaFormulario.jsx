import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {
  const [input, setInput] = useState(''); //Inicialmente va a ser una cadena de caracteres
                                          // vacias, ya que el usuario no ingresó ningun valor
                                          // Cuando el usuario escriba, hay que actualizar el valor del input,
                                          // que sería el texto de la tarea
  
const manejarCambio = e => {
  setInput(e.target.value); // Extrae el valor del campo de texto que ingreso el usuario. 
                            // Permite obtener el ultimo valor actualizado que ingresó el usuario como texto  
  console.log(e.target.value);
}
  // Sirve para agregar una tarea. Manejar envio va a ser la función que se va a llamar
  // cuando se trate de enviar el formulario, cuando se haga click en el boton agregar tarea.
  // Hay que asignar un event listener al formulario

  const manejarEnvio = e => {
    e.preventDefault(); //Va a permitir que no se cargue toda la aplicacion cuando enviemos el formulario

    // cuando enviamos el formulario, tenemos que crear el objeto que va a representar
    // a la tarea nueva, en este caso la tarea va a tener un id y un texto en especifico
    // Para generar un identificador unico (id), vamos a utilizar un paquete llamado uuid
   
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva); //
  };

  // onSubmit es para el evento envio de formulario
  // onChange es para el evento de cambio en el input

  return (
    <form 
      className = 'tarea-formulario'
      onSubmit = { manejarEnvio }> 
      <input 
      className = 'tarea-input'
      type = 'text'
      placeholder = 'Escribe una Tarea'
      name = 'texto'
      onChange = { manejarCambio } // Cuando haya un cambio en el valor del input, se va a llamar a la funcion manejar cambio
      />
      <button className = 'tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;