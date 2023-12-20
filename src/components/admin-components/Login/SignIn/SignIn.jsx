import { Formik, Form, Field } from 'formik';
import useAuthStore from '@/store/authStore';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';
import PasswordInput from '../../formik/PasswordInput/PasswordInput';
import TextInput from '../../formik/TextInput/TextInput';
import styles from './SignIn.module.scss';
import { Link } from 'react-router-dom';
import { loginValidation } from './validationSchema';

const initialValues = {
  password: '',
  email: '',
};

const SignIn = () => {
  const { login } = useAuthStore();

  const onSubmit = async values => {
    const formData = new FormData();
    formData.append('password', values.password);
    formData.append('username', values.email);
    await login(formData);
  };

  return (
    <>
      <Heading title="Увійти в акаунт" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={loginValidation}
      >
        {formik => {
          return (
            <Form>
              <div className={styles.layout}>
                <Field
                  name="email"
                  id="email"
                  component={TextInput}
                  showCharacterCount={false}
                  label="Електронна пошта*"
                  placeholder="name@mail.com"
                />
                <Field
                  name="password"
                  id="password"
                  component={PasswordInput}
                  showCharacterCount={false}
                  label="Пароль*"
                  placeholder="Введіть 6 символів і більше"
                />

                <div className={styles.button}>
                  <ButtonSubmit
                    handlerSubmitButton={onSubmit}
                    nameButton="Увійти"
                    isActive={
                      formik.isValid && Object.keys(formik.touched).length
                    }
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
      <Link to="/login/password-recovery" className={styles.link}>
        Забули пароль?
      </Link>
    </>
  );
};
export default SignIn;
