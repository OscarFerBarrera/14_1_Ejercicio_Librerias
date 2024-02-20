import './RegisterForm.scss';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);
  return (
    <div className='register__form'>
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register__form-fieldset'>
          <input
            placeholder='First Name'
            type='text'
            {...register('firstName', { required: true })}
          />
          {errors?.firstName && <p className='register__form-error'> Este campo es obligatorio </p>}
        </fieldset>
        <fieldset className='register__form-fieldset'>
          <input
            placeholder='LastName'
            type='text'
            {...register('lastName', { required: true, minLength: 3 })}
          />
          {errors?.lastName && <p className='register__form-error'> Este campo es obligatorio y debe almenos tener 3 caracteres</p>}
        </fieldset>

        <button className='register__form-button'>Aceptar</button>
      </form>

      <h2>Datos del Formulario</h2>
      <p>Nombre: {formData?.firstName}</p>
      <p>Apellido: {formData?.lastName}</p>
    </div>
  );
};

export default RegisterForm;
