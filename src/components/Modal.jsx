import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {

  const ocultarModal = () => {
    setModal(false);
  }

  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img
                onClick={ocultarModal} 
                src={CerrarBtn} alt="Cerrar" 
            />
        </div>    
    </div>
  )
}

export default Modal