import { Link } from 'react-router-dom';
import styles from './PostersList.module.scss';
import sprite from '@/assets/icons/sprite-admin.svg';
import usePostersStore from '@/store/posterStore';
import { useConfirmDelete } from '@/store/confirmDelete';
import { useModal } from '@/store/modalStore';

import ConfirmDeleteModal from '../../ConfirmDeleteModal/ConfirmDeleteModal';

const PostersList = ({ data }) => {
  const { deletePostersById } = usePostersStore();
  const { isDeleteConfirm } = useConfirmDelete();
  const { isModalOpen, openModal, closeModal } = useModal();
  console.log('isDeleteConfirm : ', isDeleteConfirm);
  const handelDelete = async id => {
    if (isDeleteConfirm) {
      try {г
        await deletePostersById(id);
      } catch (error) {
        console.log(error);
      }
    } else {
      closeModal();
    }
  };

  return (
    <div className={styles.contentWrap}>
      <div className={styles.tableHeader}>
        {/* <li className={styles.cellSlideyHeader}>Новини</li> */}
        <p className={styles.cellHeadingHeader}>Заголовок</p>
        <div className={styles.cellActionWrapper}>
          <p className={styles.cellPhotoHeader}>Фото</p>
          <p className={styles.cellActionHeader}>Дія</p>
        </div>
      </div>
      {data.map((item, index) => (
        <div className={styles.tableRow} key={index}>
          <div className={styles.cellTextWrapper}>
            <div className={styles.cellSliderRow}>{index + 1}</div>
            <div className={styles.cellHeadingRow}>{item.title}</div>

            {/* <div className={styles.cellTextRow}>{subString(item.text)}</div> */}
          </div>

          <div className={styles.cellPosterWrapper}>
            <div className={styles.cellPhotoRow}>
              <img
                src={item.photo}
                alt="Фото"
                className={styles.contentElementImg}
              />
            </div>
            <div className={styles.cellActionRow}></div>

            <div className={styles.cellActionContainer}>
              <Link to={`edit/${item.id}`}>
                <svg className={styles.iconEdit}>
                  <use href={`${sprite}#icon-edit`} width="20" height="20" />
                </svg>
              </Link>
            </div>
            <div className={styles.cellActionContainer} onClick={openModal}>
              <svg className={styles.iconTrash}>
                <use href={`${sprite}#icon-trash`} width="20" height="20" />
              </svg>
            </div>
          </div>
        </div>
      ))}

      {isModalOpen && <ConfirmDeleteModal handelDelete={handelDelete} />}
    </div>
  );
};
export default PostersList;
