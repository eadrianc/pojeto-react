import './index';
import React, { useEffect, useState } from "react";

function Item ({item}){
    const{ id, nome, email, telefone } = item;

    return<>
    <tr key={id}>
               <td>{id}</td>
               <td>{nome}</td>
               <td>{email}</td>
               <td>{telefone}</td>
               <td>
                <button className='red'>Apagar</button>
               </td>
               </tr>
               <tr>
                <td colSpan='3'>

                </td>
               </tr>
    </>
}

function Registers({ list = [] }){

    const [order, setOrder] = useState(1)
    const [colunmOrder, setColunmOrder] = useState('nome')
    const [filter, setFilter] = useState ('')

    const handleOrder = fieldName => {
        setOrder(-order)
        setColunmOrder(fieldName)
    }

    list = list.sort( (a, b) => {
        return a[colunmOrder] < b[colunmOrder] ? -order : order ;
    })

    if(filter){
        const exp = eval(`/${filter.replace(/[^\d\w]+/,'.*')}/i`)
        list=list.filter(item=> exp.test(item.nome))
        }
    
        const handleFilter = e => {
             setFilter( e.target.value)
        }


    return <div>
        <input placeholder='PESQUISAR' onChange={handleFilter} />
     <table>
        <thead>
            <tr>
                <th onClick={ e => handleOrder('id') }>Id</th>
                <th onClick={ e => handleOrder('nome') }>Nome</th>
                <th onClick={ e => handleOrder('email') }>Email</th>
                <th onClick={ e => handleOrder('telefone') }>Telefone</th>
            </tr>

        </thead>
        <tbody>

          {
          list.map( item => <Item item={item} />)

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
