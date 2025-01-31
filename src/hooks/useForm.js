import { useState } from "react";

export const useForm = (inicialForm = {}) => {
    const [formState, setFormState] = useState(inicialForm)
      
  
      const onInputchange = ({target}) => {
        const {name, value} = target
        setFormState({
          ...formState,
          /*sepone en [] para que se modifique el name */
          [name]: value
        })
      }
      
  return {
    ...formState,
    formState,
    onInputchange
  }
}


