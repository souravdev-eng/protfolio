import React from 'react';
import SkillsCard from '../SkillsCard';
import styles from './skills.module.css';
import skillsData from '../../data/skills.json';

const Skills = () => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Tools</h2>
        <h3 className={styles.sub_title}>For those who know what they’re looking for..</h3>
        <div className={styles.skill_container}>
          {skillsData.map((el) => (
            <SkillsCard name={el.name} image={el.image} ke={el.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
