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
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <BasicContainerLogin>
      <Heading title="Увійти в акаунт" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={styles.labelStyle}>Електронна пошта*</label>
          <input
            name="email"
            type="text"
            placeholder="name@company.com"
            className={`${styles.formStyle} ${
              errors.email ? styles.invalid : styles.valid
            }`}
            {...register('email', {
              required: 'Поле не може бути пустим',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Введіть email user@mail.com',
              },
            })}
          />
          {errors.email && (
            <p className={styles.errorMsg}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className={styles.labelStyle}>Пароль*</label>
          <input
            name="password"
            type="password"
            placeholder="Введіть 6 символів і більше"
            className={`${styles.formStyle} ${
              errors.password ? styles.invalid : styles.valid
            }`}
            {...register('password', {
              required: 'Поле не може бути пустим',
              validate: {
                checkLength: value => value.length >= 6,
              },
            })}
          />
          {errors.password && (
            <p className={styles.errorMsg}>
              {errors.password.message ||
                'Невірно введений пароль або електронна пошта'}
            </p>
          )}
        </div>
        <ButtonSubmit
          type="submit"
          nameButton="Увійти"
          isActive={isDirty && isValid}
          className={styles.btnSubmit}
        />
      </form>
      <Link to="/login/send-email">Забули пароль?</Link>
    </BasicContainerLogin>
  );
};
export default SignIn;
