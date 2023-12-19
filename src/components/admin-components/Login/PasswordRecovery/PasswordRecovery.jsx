import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { recoveryValidation } from './validationSchema';
import Heading from '../Heading/Heading';
import ButtonSubmit from '../../Buttons/SubmitButton/ButtonSubmit.jsx';
import TextInput from '@/components/admin-components/formik/TextInput/TextInput';
import styles from './PasswordRecovery.module.scss';

const initialValues = {
  email: '',
};

const PasswordRecovery = () => {
  // const onSubmit = () => {
  //   console.log('Увійти');
  // };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate API call
      await yourApiCall(values.email);

      setMessage(
        'Лист для підтвердження реєстрації відправлено на ' + values.email + '.'
      );

      setFormSubmitted(true);
    } catch (error) {
      setMessage('Помилка під час відправлення листа.');
      console.error('Error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Heading title="Відновлення паролю" />
      <p className={styles.message}>
        {formSubmitted
          ? message
          : 'Введіть email, пов’язаний з вашим акаунтом. Якщо у вас є акаунт, вам на email буде надіслано посилання для відновлення паролю'}
      </p>
      {/* <p className={styles.message}>
        Введіть email, пов’язаний з вашим акаунтом Якщо у вас є акаунт, вам на
        email буде надіслано посилання для відновлення паролю{' '}
      </p> */}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={recoveryValidation}
      >
        {formik => {
          return (
            <Form>
              <div className={styles.layout}>
                {!formSubmitted && (
                  <Field
                    name="email"
                    id="email"
                    component={TextInput}
                    showCharacterCount={false}
                    label="Електронна пошта*"
                    placeholder="name@mail.com"
                  />
                )}
                {/* <Field
                  name="email"
                  id="email"
                  component={TextInput}
                  showCharacterCount={false}
                  label="Електронна пошта*"
                  placeholder="name@mail.com"
                /> */}
                <div className={styles.button}>
                  <ButtonSubmit
                    handlerSubmitButton={onSubmit}
                    nameButton="Надіслати"
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
      {formSubmitted && (
        <div
          className={styles.modalStyle}
          onClick={() => setFormSubmitted(false)}
        >
          <p className={styles.headingStyle}>Відновлення паролю</p>
          <div className={styles.popUpStyle}>
            <img src="/icons/icon-success.svg" alt="" width="60" />
            <p className={styles.textStyle}>
              Якщо введена вами адреса знаходиться у базі зареєстрованих
              користувачів, ми надішлемо на цю адресу повідомлення. Воно буде
              містити посилання для скидання пароля.
            </p>
          </div>
        </div>
      )}
      <Link to="/login" className={styles.link}>
        Я згадав пароль!
      </Link>
    </>
  );
};

const yourApiCall = async email => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  // Replace the above line with your actual API call logic
};

export default PasswordRecovery;
