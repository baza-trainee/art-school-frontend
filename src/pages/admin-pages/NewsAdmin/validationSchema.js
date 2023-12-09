import * as Yup from 'yup';
import { formatBytes } from '@/utils/formatBytes';

const sizeLimit = 1024 * 1024 * 3;

const fileTypes = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp',
  'for-url',
];

function isValidFileType(fileType) {
  return fileTypes.includes(fileType);
}

export const newsValidation = Yup.object().shape({
  title: Yup.string()
    .required('Введіть назву новини')
    .min(2)
    .max(120)
    .matches(
      /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s\d'’.,:;"()!?-]+$/,
      'Введіть коректну назву'
    ),
  text: Yup.string()
    .required('Введіть текст новини')
    .min(2)
    .max(2000)
    .matches(
      /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s\d'’.,:;"()!-]+$/,
      'Введіть коректний текст'
    ),
  image: Yup.mixed()
    .required('Required')
    .test(
      'is-valid-type',
      'Зображення має бути в форматі .jpg, .png або .webp',
      value => isValidFileType(value && value[0].type)
    )
    .test(
      'is-valid-size',
      `Максимальний розмір зображення ${formatBytes(sizeLimit)}`,
      value => value && value[0].size <= sizeLimit
    ),
});
