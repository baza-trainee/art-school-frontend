import { Markup } from 'interweave';
import arrowIcon from '@/assets/icons/bottom-arrow.svg';
import s from './DropDown.module.scss';

const DropDown = ({ subDep, isOpen, onDropDownClick }) => {
  return (
    <div className={s.dropdown}>
      <div className={s.dropdownHead} onClick={onDropDownClick}>
        <h3 className={s.dropdownName}>{subDep.sub_department_name}</h3>
        <button className={isOpen ? s.rotateIcon : s.icon}>
          <img src={arrowIcon} alt="Arrow Icon" />
        </button>
      </div>
      {isOpen && (
        <div className={s.dropdownContent}>
          <Markup content={subDep.description} />
        </div>
      )}
    </div>
  );
};

export default DropDown;
