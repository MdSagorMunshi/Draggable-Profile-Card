import React from 'react';
import Draggable from 'react-draggable';
import styles from '../styles/ProfileCard.module.css';
import SocialMediaIcons from './SocialMediaIcons';

const ProfileCard = () => {
  return (
    <Draggable>
      <div className={styles.card}>
        <img src="/profile-picture.jpg" alt="Profile" className={styles.profilePic} />
        <div className={styles.details}>
          <h2>RYAN SHELBY</h2>
          <h4>Web Developer</h4>
          <p>Passionate about building user-friendly applications and exploring new technologies.</p>
        
        </div>
        <SocialMediaIcons />
      </div>
    </Draggable>
  );
};

export default ProfileCard;
