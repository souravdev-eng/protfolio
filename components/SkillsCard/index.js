import Image from 'next/image';
import React from 'react';
import styles from './skills-card.module.css';

const SkillsCard = (props) => {
  const { name, image } = props;
  return (
    <div className={styles.container}>
      <Image src={`/static/icons/${image}.png`} width={50} height={50} />
      <p className={styles.title}>{name}</p>
    </div>
  );
};

export default SkillsCard;
