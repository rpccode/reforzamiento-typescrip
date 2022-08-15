import  {useState} from 'react'
import {useCounter} from '../hooks/useCounter'

const ContadorconHook = () => {
    const {valor,acumular,reducir} = useCounter(100);
  return (
    <>
        
        <h3>
            Contador con Hook <span>{valor}</span>
        </h3>   
        <button
            className='btn'
            onClick={()=>acumular(1)}
        >
            +1
        </button>
        <br/>
        &nbsp; 
        <button
            onClick={()=>reducir(1)}
        >
            -1
        </button>
        
        
        
    </>
  )
}

export default ContadorconHook