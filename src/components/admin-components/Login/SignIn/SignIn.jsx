import React from 'react';
import { useForm } from 'react-hook-form';
import BasicContainerLogin from '../BasicContainerLogin/BasicContainerLogin';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  // const handleClick = () => {
  //   console.log('Увійти');
  // };

  return (
    <BasicContainerLogin>
      <Heading title="Увійти в акаунт" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          ref={register}
          placeholder="name@company.com"
          className={styles.emailStyle}
        />
        <input
          name="password"
          ref={register}
          placeholder="Введіть 6 символів і більше"
          className={styles.passwordStyle}
        />
        <ButtonSubmit
          // handlerSubmitButton={handleClick}
          nameButton="Увійти"
          isActive={true}
        />
      </form>
    </BasicContainerLogin>
  );
};
export default SignIn;
