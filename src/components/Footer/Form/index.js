import React from 'react';
import { useForm } from 'react-hook-form';
import './index.css';

export const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className='form' id='form'>
      <h2 className='form__title'>Schreiben Sie uns!</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='form__main'>
        <input
          className='form__input'
          placeholder='Firma / Organisation'
          type='text'
          {...register('Firma', {
            required: 'Enter name of firma',
            minLength: {
              value: 3,
              message: 'Minimum 3 symbols',
            },
          })}
        />
        <div style={{ height: 20 }}>{errors?.Firma && <p className='error'>{errors?.Firma?.message || 'Error!'}</p>}</div>

        <div className='form__info'>
          <div className='form__email'>
            <input
              className='form__input'
              placeholder='E-mail'
              type='text'
              {...register('Email', {
                required: 'Enter your email',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter valid email!',
                },
              })}
            />
            <div style={{ height: 20 }}>{errors?.Email && <p className='error'>{errors?.Email?.message || 'Error!'}</p>}</div>
          </div>
          <div className='form__phone'>
            <input
              className='form__input'
              placeholder='Telefon'
              type='text'
              {...register('Telefon', {
                required: 'Enter your phone number',
                minLength: {
                  value: 3,
                  message: 'Minimum 3 symbols',
                },
              })}
            />
            <div style={{ height: 20 }}>{errors?.Telefon && <p className='error'>{errors?.Telefon?.message || 'Error!'}</p>}</div>
          </div>
        </div>
        <textarea
          className='form__input form__textarea'
          placeholder='Was ist Ihr Anliegen?'
          rows={6}
          {...register('Text', {
            required: 'Enter your message',
            minLength: {
              value: 6,
              message: 'Minimum 6 symbols',
            },
          })}
        />
        <div style={{ height: 20 }}>{errors?.Text && <p className='error'>{errors?.Text?.message || 'Error!'}</p>}</div>
        <input className='form__submit' type='submit' value='SENDEN' />
      </form>
    </div>
  );
};
