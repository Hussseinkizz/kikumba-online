import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
});

const TCs = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))} className='w-full px-8 grid place-items-center space-y-3'>
      <input name="name" Ref={register} className='input' placeholder='your name'/>
      <input name="age" type="number" Ref={register} className='input' placeholder='your age'/>
      <input type="submit" className='btn-plain px-2' />
    </form>
  );
};

export default TCs;