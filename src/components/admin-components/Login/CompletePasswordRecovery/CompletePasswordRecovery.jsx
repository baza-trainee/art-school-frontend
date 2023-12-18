import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { completeRecoveryValidation } from './validationSchema';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';
import PasswordInput from '@/components/admin-components/formik/PasswordInput/PasswordInput';
import styles from './CompletePasswordRecovery.module.scss';

const initialValues = {
  password: '',
  confirm_password: '',
};

const CompletePasswordRecovery = () => {
  const onSubmit = () => {
    console.log('Увійти');
  };

  return (
    <>
      <Heading title="Завершення відновлення паролю" />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={completeRecoveryValidation}
      >
        {formik => {
          return (
            <Form>
              <div className={styles.layout}>
                <Field
                  name="password"
                  id="password"
                  component={PasswordInput}
                  showCharacterCount={false}
                  label="Новий пароль*"
                  placeholder="Введіть 6 символів і більше"
                />
                <Field
                  name="confirm_password"
                  id="confirm_password"
                  component={PasswordInput}
                  showCharacterCount={false}
                  label="Повторити новий пароль*"
                  placeholder="Повторіть свій пароль"
                />
                <div className={styles.button}>
                  <ButtonSubmit
                    handlerSubmitButton={onSubmit}
                    nameButton="Змінити пароль"
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
      <Link to="/login" className={styles.link}>
        Я згадав пароль!
      </Link>
    </>
  );
};
export default CompletePasswordRecovery;
