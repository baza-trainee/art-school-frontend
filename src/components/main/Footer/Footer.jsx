import React from 'react';
import { Link } from 'react-router-dom'; 
import Logo from '../../Logo/Logo';
import LocationIcon from '@/components/Icons/LocationIcon';
import PhoneIcon from '@/components/Icons/PhoneIcon';
import EmailIcon from '@/components/Icons/EmailIcon';
import FacebookIcon from '@/components/Icons/FacebookIcon';
import YoutubeIcon from '@/components/Icons/YoutubeIcon';
import DownloadButton from '../../ui/Buttons/DownloadButton';
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrap}>
          <div className={styles.footerContentWrap}>
        
            <div className={styles.footerContent}>
              <div className={styles.footerLogo}>
                <Logo />
              </div>
              <ul className={styles.social}>
                <li>
                  <a className={styles.socialLink} href="#">
                    <FacebookIcon width="32" height="32" />
                  </a>
                </li>
                <li>
                  <a className={styles.socialLink} href="#">
                    <YoutubeIcon width="40" height="32" />
                  </a>
                </li>
              </ul>
              <div className={styles.footerLinksRules}>
                <a href="#" target="_blank">Офіційна інформація</a>
                <a href="#" target="_blank">Політика конфіденційності</a>
                <a href="#" target="_blank">Правила користування сайтом</a>
              </div>
              <DownloadButton
                  link="#" 
                  text="Завантажити заяву"
              />
            </div>
            <div className={styles.footerLinksSection}>
              <div className={styles.footerLinksColumn}>
                <Link to="/">Головна</Link>
                <Link to="/about">Про нас</Link>
                <Link to="/events">Наші події</Link>
                <Link to="/schedule">Афіша</Link>
                <Link to="/gallery">Галерея</Link>
                <Link to="/partners">Співпраця</Link>
              </div>
              <div className={styles.footerLinksColumn}>
                <Link to="/music-department">Музичне відділення</Link>
                <Link to="/vocal-choral-department">Вокально-хорове відділення</Link>
                <Link to="/choreographic-department">Хореографічне відділення</Link>
                <Link to="/visual-arts-department">Образотворче відділення</Link>
                <Link to="/theater-department">Театральне відділення</Link>
          </div>
              <ul className={styles.contactsList}>
                <li className={styles.contactsListItem}>
                  <LocationIcon />
                  <a
                    href="https://www.google.com.ua/maps/place/Kiev+Art+School/@50.4685751,30.3658169,12z/data=!4m10!1m2!2m1!1z0YXRg9C00L7QttC90Y8g0YjQutC-0LTQsCDQstC10YDQvdC40LrRltCy0YHRjNC60L7Qs9C-"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    вул. Бульварно-Кудрявська, 2.
                  </a>
                </li>
                <li className={styles.contactsListItem}>
                  <PhoneIcon />
                  <div className={styles.contactsListItem_PhoneWrapper}>
                    <a href="tel:+380972907940">+38(097)290-79-40</a>
                    <a href="tel:+380934560838">+38(093)456 08 38</a>
                  </div>
                </li>
                <li className={styles.contactsListItem}>
                  <EmailIcon />
                  <a href="mailto:Shkola_2@ukr.net">Shkola_2@ukr.net</a>
                </li>
              </ul>
         </div>        
      </div>      
      <div className={styles.footerSecurity}>
        © Розробка <a href="https://baza-trainee.tech/" target="_blank">Baza Trainee Ukraine, </a>2023
      </div>

      </div>


    </div>
  );
};
export default Footer;

