import { UsuariosComponent } from "../componentes/Usuarioscomponent"
import { CalculosPesados } from "../componentes/CalculosPesados";
import { ContadorConponent } from "../componentes/ContadorConponent"
import { FormularioComponent } from "../componentes/FormularioComponent"

export const HooksApp = () => {
  return (
    <>
        <h1>Aplicación de Hooks</h1>
        <hr />
        <ContadorConponent></ContadorConponent>
        <FormularioComponent></FormularioComponent> 
        <UsuariosComponent></UsuariosComponent>
        <CalculosPesados></CalculosPesados>

    </>
  )
}

