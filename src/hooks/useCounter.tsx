import React, {useState} from 'react'

export const useCounter = (inicial :number = 10) => {
    const [valor, setvalor] = useState<number>(inicial);

    const acumular =( numero: number) =>{
            setvalor( valor + numero);
    }
    const reducir =( numero: number) =>{
        setvalor( valor - numero);
}

    return {
        valor,
        acumular,
        reducir
    }

}
