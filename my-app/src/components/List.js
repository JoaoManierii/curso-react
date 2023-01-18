import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
               <Item marca="Ferrari" ano_lancamento={1985}/>
               <Item marca="Fiat" ano_lancamento={1964}/>
               <Item marca="Renault" ano_lancamento={2002}/>
               <Item marca="Chevrolet" ano_lancamento={1974}/>
               <Item marca="Jeep" ano_lancamento={2022}/>
               <Item /> 
            </ul>
        </>
    ) 
}

export default List