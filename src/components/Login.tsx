import React, {useEffect, useReducer} from 'react'

interface authState {
      validando : boolean;
      token : string | null;
      userName : string;
      nombre : string;
}

const initialState: authState = {
    validando : true,
    token : null,
    userName:'',
    nombre:''
}

type AuthAction ={
  type: 'logout',
  
}

const authReducer =( state: authState , action : AuthAction): authState =>{
    switch (action.type) {
      case 'logout':
        
        return {
          validando: false,
          token: null,
          nombre:'',
          userName:''
        }
    
      default:
        return state;
        
    }
}

const Login = () => {
  

  const [{validando}, dispatch] = useReducer(authReducer,initialState)

    useEffect(() => {
        setTimeout(() => {
          dispatch({type: 'logout'})  
        }, 1500);
    }, []);
    
    if(validando){
     return (
        <>
              
        <h3>Login</h3>

          <div className='alert alert-info'>
          validando......
          </div>    
        
        
        
        </>
     ) 
    }

  return (
    <>
    
        <h3>Login</h3>

     
        <div className='alert alert-danger'>
          No Autenticado......
        </div>    

        <div className='alert alert-success'>
          Autenticado
        </div>    

        <button className='btn btn-primary'>
          Login
        </button>
        <button className='btn btn-danger'>
          Logout
        </button>
    
    </>
  )
}

export default Login


