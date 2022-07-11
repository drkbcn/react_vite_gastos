import { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  setIsValidPresupuesto
}) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje('El presupuesto debe ser un número positivo');
      return
    }

    setMensaje('');
    setIsValidPresupuesto(true);
  }

  return (
      <div onSubmit={handlePresupuesto} className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
          <div className='campo'>
            <label htmlFor='presupuesto'>Definir Presupuesto</label>
            <input 
              className='nuevo-presupuesto' 
              type='number' 
              id='presupuesto' 
              name='presupuesto' 
              placeholder='Ingresa tu presupuesto' 
              value={presupuesto}
              onChange={e => setPresupuesto(e.target.value)}
            />
          </div>
          <input className='boton' type='submit' value='Añadir' />
          { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje> }
        </form>
      </div>
  )
}

export default NuevoPresupuesto