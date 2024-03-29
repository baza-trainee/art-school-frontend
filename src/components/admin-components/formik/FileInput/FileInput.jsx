import { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { AiOutlinePlus } from 'react-icons/ai';
import styles from './FileInput.module.scss';

const FileInput = ({
  label,
  field,
  photo,
  form: { errors, setFieldValue },// touched
  ...props
}) => {
  const name = field.name;
  //const isFieldTouched = touched;
  const [imagePreview, setImagePreview] = useState('');
  const fieldValue = field.value;
  //додав оновлення даних після завантаження
  useEffect(() => {
    if (field.value) {
      setFieldValue(`${name}`, field.value);
     // console.log(field.value);
    }
    //eslint-disable-next-line
  }, [field.value]);



  useEffect(() => {
    if (!photo) return;
    setFieldValue(`${name}`, [new File([], photo, { type: 'for-url' })]);
  }, [photo, setFieldValue, name]);

  useEffect(() => {
    setImagePreview(fieldValue?.[0]?.name);
  }, [fieldValue]);

  const setFileToBase64 = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const onDrop = async files => {
    setFieldValue('image', files);
    const file = files[0];
    setFileToBase64(file);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="dropzone" className={styles.inputLabel}>
        {label}
      </label>
      <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={8000000000}
        id="dropzone"
        {...field}
        {...props}
      >
        {({ getRootProps, getInputProps }) => (
          <section className={styles.section}>
            <div className={styles.dropzone} {...getRootProps()}>
              <input {...getInputProps()} />
              {imagePreview ? (
                <div className={styles.imagePreview}>
                  <img src={imagePreview} className={styles.preview} />
                </div>
              ) : null}
              {!imagePreview && (
                <div className={styles.innerWrapper}>
                  <AiOutlinePlus className={styles.icon} />
                  <p>Перетягніть або натисніть тут, щоб завантажити файл</p>
                </div>
              )}
            </div>
          </section>
        )}
      </Dropzone>
      <div className={styles.errorWrap}>
        {errors?.[field.name] &&  (
          <p className={styles.errorMessage}>{errors?.[field.name]}</p>
        )}
      </div>
    </div>
  );
};

export default FileInput;

