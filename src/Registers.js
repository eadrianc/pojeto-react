import React from 'react';
import './Registers.css';



function Registers({ list = [] }){


    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>

        </thead>
        <tbody>

          {
          list.map( ({ id, nome, email, telefone }) => {

        return <tr>
               <td>{id}</td>
               <td>{nome}</td>
               <td>{email}</td>
               <td>{telefone}</td>
               </tr>

            } )

           }
        </tbody>
       </table>

}


export default Registers;