import React from 'react'
import UsuarioIndividual from './UsuarioIndividual'

//primer componente
function ListaUsuarios(){
    return(
        <div>
            <h2>Lista de usuarios</h2>
            <UsuarioIndividual/>
        </div>
    )
}

export default ListaUsuarios