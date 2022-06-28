import './index';
import React, { useEffect, useState } from "react";



function Registers({ list = [] }){

    const [order, setOrder] = useState(1)
    const [colunmOrder, setColunmOrder] = useState('nome')
    const [filter, setfilter] = useState ('')

    const handleOrder = fieldName => {
        setOrder(-order)
        setColunmOrder(fieldName)
    }

    list = list.sort((a, b) => {
        return a[colunmOrder] < b[colunmOrder] ? -order : order ;
    })

    if(filter)
    list = list.filter( item =>
        item.nome.tolowerCase().indexOf(filter.tolowerCase())
        )

        const handleFilter = e => {
             setfilter( e.target.value)
        }


    return <div>
        <input placeholder='Pesquisar' onChange={handleFilter} />
     <table>
        <thead>
            <tr>
                <th onClick={e => handleOrder('id')}>Id</th>
                <th onClick={e => handleOrder('nome')}>Nome</th>
                <th onClick={e => handleOrder('email')}>Email</th>
                <th onClick={e => handleOrder('telefone')}>Telefone</th>
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
       </div>


}

function App() {


    var [ list, setList ] = useState( [] )

        useEffect( () => {

            
            fetch('http://localhost:3001/contatos')
            .then(async result => {
            setList( await result.json() )

            })
            

        }, [] )

    return <div>
        <Registers list={list} />
    </div>

}

export default App;
