import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/SocialMediaIcons.module.css';

const SocialMediaIcons = () => {
  return (
    <div className={styles.iconContainer}>
      <a href="https://twitter.com/MdSagorMunshi" target="_blank" rel="noopener noreferrer">
        <FaTwitter className={styles.icon} />
      </a>
      <a href="https://linkedin.com/in/ryanX7" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com/MdSagorMunshi" target="_blank" rel="noopener noreferrer">
        <FaGithub className={styles.icon} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
