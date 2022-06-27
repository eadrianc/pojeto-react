import './index';
import React, { useEffect, useState } from "react";



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

        return <tr key={id}>
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

function App() {


    var [ list, setList ] = useState( [] )

        useEffect( () => {

            fetch('http://localhost:3000/contatos')
            .then (async result => {
                setList(await result.json() )
            })

        }, [] )

    return <div>
        <Registers list={list} />
    </div>

}

export default App;
