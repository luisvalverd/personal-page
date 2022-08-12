import React from "react"
import styles from "../styles/Skills.module.css";

const Skills: React.FC = () => {
  return (
    <div>
    <div className={styles.skill_title}>
    <h1>Skills</h1>
    </div>
      <ul className={styles.skill_list}>
        <li>
          <div>
            <h2>Javascript</h2>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_javascript}></div>50%
              </div>
              <span>50%</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h2>Python</h2>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_python}></div>
              </div>
              <span>45%</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h2>Html/Css</h2>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_html}></div>
              </div>
              <span>75%</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h2>ReactJs</h2>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_react}></div>
              </div>
              <span>25%</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h2>ExpressJs</h2>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_express}></div>
              </div>
              <span>45%</span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <h2>Django</h2>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_django}></div>
              </div>
              <span>30%</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Skills;
