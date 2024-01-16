import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Contacto</h1>
      <form className='contact' action='mailto:galcantara67@gmail.com'>
        <input type='text' placeholder='Nombre' name='nombre' />
        <input type='text' placeholder='Apellidos' name='apellidos' />
        <input type='text' placeholder='Email' name='email' />

        <textarea placeholder='Motivo de contacto' />
        <input type='submit' value='Enviar' />
      </form>

    </div>
  )
}
