import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className='contenido-presupuesto'>
            <span>Contenido presupuesto:</span> {presupuesto}
        </div>
    </div>
  )
}

export default ControlPresupuesto