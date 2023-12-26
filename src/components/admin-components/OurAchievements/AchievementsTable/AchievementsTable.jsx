import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useServicesStore from '@/store/serviseStore';
import { useModal } from '@/store/modalStore';
import { useConfirmDelete } from '@/store/confirmDelete';
import ConfirmDeleteModal from '@/components/ui/ConfirmDeleteModal/ConfirmDeleteModal';
import s from './AchievementsTable.module.scss';

const AchievementsTable = ({ data, typeOfAchievements, url, changePage, page }) => {
  const { deleteAchievement } = useServicesStore();
  const { isDeleteConfirm } = useConfirmDelete();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentId, setCurrentId] = useState('');
  const observer = useRef();
  const [localData, setLocalData] = useState([]);
  useEffect(()=>{
    console.log(data);
    console.log(localData);
    setLocalData((prevData) => [...prevData, ...data]);
  },[ page])

  const lastAchievementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log(`fetch page:${page}`)
          changePage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [changePage] // Dependencies for useCallback
  );

  const removePost = async () => {
    if (isDeleteConfirm) {
      try {
        await deleteAchievement(url, currentId);
      } catch (error) {
        console.log(error);
      }
    } else {
      closeModal();
    }
  };

  return (
    <div className={s.table}>
      <div className={`${s.row} ${s.thead}`}>
        {typeOfAchievements === 'mainAchievements' && (
          <div className={s.num}>Слайди</div>
        )}
        <div className={s.description}>Опис</div>
        <div className={s.photo}>Фото</div>
        <div className={s.action}>Дія</div>
      </div>
      <div className={s.tbody}>
        {localData?.length > 0 &&
          localData.map((item, index) => {
            if (localData.length === index + 1) {
              return (
                <div
                  className={s.row}
                  key={index}
                  ref={lastAchievementRef}
                >
                  {typeOfAchievements === 'mainAchievements' && (
                    <div className={s.num}>{index + 1}</div>
                  )}
                  <div className={s.description}>{item.description}</div>
                  <div className={s.photo}>
                    <div>
                      <img src={item.media} alt="Фото" />
                    </div>
                  </div>
                  <div className={s.action}>
                    <Link to={`edit/${item.id}`}>
                      <button className={s.edit}>
                        <img src="/icons/edit.svg" alt="edit icon" />
                      </button>
                    </Link>
                    <button
                      className={s.delete}
                      onClick={() => {
                        setCurrentId(item.id);
                        openModal();
                      }}
                    >
                      <img src="/icons/delete.svg" alt="delete icon" />
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div className={s.row} key={index}>
                  {typeOfAchievements === 'mainAchievements' && (
                    <div className={s.num}>{index + 1}</div>
                  )}
                  <div className={s.description}>{item.description}</div>
                  <div className={s.photo}>
                    <div>
                      <img src={item.media} alt="Фото" />
                    </div>
                  </div>
                  <div className={s.action}>
                    <Link to={`edit/${item.id}`}>
                      <button className={s.edit}>
                        <img src="/icons/edit.svg" alt="edit icon" />
                      </button>
                    </Link>
                    <button
                      className={s.delete}
                      onClick={() => {
                        setCurrentId(item.id);
                        openModal();
                      }}
                    >
                      <img src="/icons/delete.svg" alt="delete icon" />
                    </button>
                  </div>
                </div>
              );
            }
          })}
      </div>
      {isModalOpen && <ConfirmDeleteModal handleDelete={removePost} />}
    </div>
  );
};

export default AchievementsTable;

/*
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useServicesStore from '@/store/serviseStore';
import { useModal } from '@/store/modalStore';
import { useConfirmDelete } from '@/store/confirmDelete';
import ConfirmDeleteModal from '@/components/ui/ConfirmDeleteModal/ConfirmDeleteModal';
import s from './AchievementsTable.module.scss';

const AchievementsTable = ({ data, typeOfAchievements, url }) => {
  const { deleteAchievement } = useServicesStore();
  const { isDeleteConfirm } = useConfirmDelete();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentId, setCurrentId] = useState('');
  
  const removePost = async () => {
    if (isDeleteConfirm) {
      try {
        await deleteAchievement(url, currentId);
      } catch (error) {
        console.log(error);
      }
    } else {
      closeModal();
    }
  };

  return (
    <div className={s.table}>
      <div className={`${s.row} ${s.thead}`}>
        {typeOfAchievements === 'mainAchievements' && (
          <div className={s.num}>Слайди</div>
        )}
        <div className={s.description}>Опис</div>
        <div className={s.photo}>Фото</div>
        <div className={s.action}>Дія</div>
      </div>
      <div className={s.tbody}>
        {data?.length > 0 &&
          data.map((item, index) => (
            <div className={s.row} key={index}>
              {typeOfAchievements === 'mainAchievements' && (
                <div className={s.num}>{index + 1}</div>
              )}
              <div className={s.description}>{item.description}</div>
              <div className={s.photo}>
                <div>
                  <img src={item.media} alt="Фото" />
                </div>
              </div>
              <div className={s.action}>
                <Link to={`edit/${item.id}`}>
                  <button className={s.edit}>
                    <img src="/icons/edit.svg" alt="edit icon" />
                  </button>
                </Link>
                <button
                  className={s.delete}
                  onClick={() => {
                    setCurrentId(item.id);
                    openModal();
                  }}
                >
                  <img src="/icons/delete.svg" alt="delete icon" />
                </button>
              </div>
            </div>
          ))}
      </div>
      {isModalOpen && <ConfirmDeleteModal handleDelete={removePost} />}
    </div>
  );
};

export default AchievementsTable;
*/