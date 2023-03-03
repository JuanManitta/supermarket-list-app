
import { useState } from 'react';

export const useForm = () => {

    const [formState, setFormState] = useState({
        product: '',
        quantity: 0,
        price: '',
    });


    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    const resetForm = () => {
        setFormState({
            product: '',
            quantity: 0,
            price: '',
        });
    }


  return {
    ...formState,
    handleInputChange,
    resetForm    
  }
}
