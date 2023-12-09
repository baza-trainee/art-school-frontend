import { useState } from 'react';
import { capitalizeString } from '@/utils/capitalizeString';
import styles from './TextInput.module.scss';

const TextInput = ({
  id,
  field,
  form: { errors },
  maxLength,
  showCharacterCount,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getBorderColor = () => {
    if (field.value?.length > maxLength) {
      return styles.redBorder;
    } else if (isFocused) {
      return styles.blueBorder;
    } else if (field.value?.length > 0 && !isFocused) {
      return styles.greenBorder;
    } else {
      return styles.grayBorder;
    }
  };

  const getInputState = () => {
    if (field.value?.length > maxLength) {
      return styles.error;
    } else if (field.value?.length > 0 && !isFocused) {
      return styles.entered;
    } else {
      return '';
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.inputLabel}>
        {capitalizeString(field.name)}
      </label>
      <input
        id={id}
        type="text"
        className={`${styles.input} ${getBorderColor()} ${getInputState()}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...field}
      />
      {showCharacterCount && (
        <div className={styles.commentsWrapper}>
          <div className={styles.errorWrap}>
            {errors?.[field.name] && (
              <p className={styles.errorMessage}>{errors?.[field.name]}</p>
            )}
          </div>
          <p
            className={`${styles.counterMessage} ${
              field.value?.length > maxLength ? styles.redText : ''
            }`}
          >
            {`${field.value?.length}/${maxLength}`}
          </p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
