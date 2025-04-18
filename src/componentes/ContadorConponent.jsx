import { useCounter } from '../hooks/03-useCounter'

export const ContadorConponent = () => {

    const { contador, incrementar, decrementar, resetear } = useCounter()

  return (
    
      <>
      <h1>Contador: {contador}</h1>
      <button className="btn btn-primary" onClick={ () => incrementar(1)}>+1</button>
      <button className="btn btn-danger" onClick={ () => resetear()}>Reset</button>
      <button className="btn btn-primary" onClick={ () => decrementar()}>-1</button>
      </>

  )
}


