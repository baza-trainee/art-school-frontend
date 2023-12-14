import React from 'react';
import { useForm } from 'react-hook-form';
import BasicContainerLogin from '../BasicContainerLogin/BasicContainerLogin';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
        <div>
          <label>Електронна пошта*</label>
          <input
            name="email"
            type="text"
            // ref={register}
            placeholder="name@company.com"
            className={styles.emailStyle}
            {...register('email', {
              required: 'Поле не може бути пустим',
              pattern: {
                value:
                  /^ [a - zA - Z0 - 9] + @(?: [a - zA - Z0 - 9] +\.)+[A-Za-z]+$/,
                message: 'Введіть email user@mail.com',
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}
        </div>
        <div>
          <label>Пароль*</label>
          <input
            name="password"
            type="password"
            // ref={register}
            placeholder="Введіть 6 символів і більше"
            className={styles.passwordStyle}
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="errorMsg">Поле не може бути пустим</p>
          )}
          {/* {errors.password && errors.password.type === 'minLength' && (
            <p className="errorMsg">
              Password should be at-least 6 characters.
            </p>
          )} */}
        </div>

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
