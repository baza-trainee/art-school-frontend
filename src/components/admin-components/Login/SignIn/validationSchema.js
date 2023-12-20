import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  password: Yup.string()
    .required('Поле не може бути пустим')
    .min(6, 'Пароль має бути мінімум 6 символів')
    .max(20, 'Пароль має бути максимум 20 символів'),
  email: Yup.string()
    .required('Поле не може бути пустим')
    .min(6, 'Електронна адреса має бути мінімум 6 символів')
    .max(30, 'Електронна адреса має бути максимум 30 символів')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Введіть коректну електронну адресу'
    ),
});
