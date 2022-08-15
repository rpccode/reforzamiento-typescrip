import React, {useState} from 'react'

const Contador = () => {
    const [valor, setvalor] = useState<number>(10);

    const acumular =( numero: number) =>{
            setvalor( valor + numero);
    }
    const reducir =( numero: number) =>{
        setvalor( valor - numero);
}

  return (
    <>
        
        <h3>
            Contador <span>{valor}</span>
        </h3>   
        <button
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

export default Contador