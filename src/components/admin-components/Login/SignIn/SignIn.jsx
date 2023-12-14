import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import BasicContainerLogin from '../BasicContainerLogin/BasicContainerLogin';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';
import styles from './SignIn.module.scss';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    reset();
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
              // minLength: 6,
              validate: {
                checkLength: value => value.length >= 6,
                // matchPattern: value =>
                //   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                //     value
                //   ),
              },
            })}
          />
          {errors.password?.type === 'required' && (
            <p className="errorMsg">Поле не може бути пустим</p>
          )}
          {errors.password?.type === 'checkLength' && (
            <p className="errorMsg">
              Пароль повинен містити мінімум 6 символів
            </p>
          )}
          {/* {errors.password?.type === 'matchPattern' && (
            <p className="errorMsg">
              Пароль повинен містити принаймні одну велику літеру, малу літеру,
              цифру та спеціальний символ
            </p>
          )} */}
        </div>

        <ButtonSubmit
          // handlerSubmitButton={handleClick}
          type="submit"
          nameButton="Увійти"
          isActive={true}
        />
      </form>
      <Link to="/login/send-email">Забули пароль?</Link>
    </BasicContainerLogin>
  );
};
export default SignIn;
