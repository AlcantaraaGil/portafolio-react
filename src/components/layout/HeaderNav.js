import React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <span>G</span>
            <h3>Gilberto Alcántara</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to='/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/portafolio'>portafolio</NavLink>
                </li>
                <li>
                    <NavLink to='/servicios'>servicios</NavLink>
                </li>
                <li>
                    <NavLink to='/curriculum'>curriculum</NavLink>
                </li>
                <li>
                    <NavLink to='/contacto'>contacto</NavLink>
                </li>

            </ul>
        </nav>
    </header>
  )
}
