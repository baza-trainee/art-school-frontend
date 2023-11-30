import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  concertHallImages,
  soundRecordImages,
  expoHallImages,
} from './cooperationData';
import styles from './Cooperation.module.scss';

const Cooperation = () => {
  const swiperRef = useRef();
  const isLaptop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 678 });
  const isMobile = useMediaQuery({ maxWidth: 678 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.Cooperation}>
      <div className={styles.wrapper}>
        <p>
          Уявіть, що Ваш захід проводиться в одній із найкрасивіших концертних
          зал у самому серці столиці! Як по завершенню концерту чи після
          перегляду вистави щаслива публіка йде прогулятися історичним центром
          міста - Пейзажною алеєю, Андріївським узвозом, Київським дитинцем.
          Уявили? З нами це можливо! КДШМ #2 ім. М. І. Вериківського гостинно
          запрошує скористатися концертною та виставковою залами закладу, де у
          Вас буде технічна можливість втілити будь-яку сучасну ідею! До ваших
          послуг також шкільна студія звукозапису!
        </p>
        <div className={styles.container}>
          <h2>Концертна зала</h2>
          {isLaptop && (
            <div className={styles.images}>
              {concertHallImages.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
              ))}
            </div>
          )}
          {isTablet && !isLaptop && (
            <Swiper
              className={styles.Slider}
              spaceBetween={10}
              slidesPerView={2}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {concertHallImages.map((slide, index) => (
                <SwiperSlide key={index} className={styles.Slide}>
                  <img src={slide.url} alt={slide.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isMobile && (
            <div className={styles.mobile_images}>
              {concertHallImages.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.container}>
          <h2>Студія звукозапису</h2>
          {isLaptop && (
            <div className={styles.images}>
              {soundRecordImages.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
              ))}
            </div>
          )}
          {isTablet && !isLaptop && (
            <Swiper
              className={styles.Slider}
              spaceBetween={10}
              slidesPerView={2}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {soundRecordImages.map((slide, index) => (
                <SwiperSlide key={index} className={styles.Slide}>
                  <img src={slide.url} alt={slide.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isMobile && (
            <div className={styles.mobile_images}>
              {soundRecordImages.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.container}>
          <h2>Виставкова зала</h2>
          {isLaptop && (
            <div className={styles.images}>
              {expoHallImages.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
              ))}
            </div>
          )}
          {isTablet && !isLaptop && (
            <Swiper
              className={styles.Slider}
              spaceBetween={10}
              slidesPerView={2}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              loop={true}
              onSwiper={swiper => {
                swiperRef.current = swiper;
              }}
            >
              {expoHallImages.map((slide, index) => (
                <SwiperSlide key={index} className={styles.Slide}>
                  <img src={slide.url} alt={slide.alt} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          {isMobile && (
            <div className={styles.mobile_images}>
              {expoHallImages.map((image, index) => (
                <img key={index} src={image.url} alt={image.alt} />
              ))}
            </div>
          )}
        </div>
        <div className={styles.container}>
          <h2>За детальною інформацією звертайтесь:</h2>
          <ul className={styles.contacts}>
            <li>вул. Бульварно-Кудрявська, 2.</li>
            <li>
              <a href="tel:+380442720030">044 272 00 30</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
