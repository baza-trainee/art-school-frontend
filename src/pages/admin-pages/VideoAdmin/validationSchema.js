import * as Yup from 'yup';

export const videoValidation = Yup.object().shape({
  media: Yup.string()
    .max(300)
    .matches(
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
      'Введіть коректне посилання на відео з YouTube'
    )
    .required('Посилання не додано'),
});
