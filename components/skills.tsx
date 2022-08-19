import React from "react"
import styles from "../styles/Skills.module.css";
import Image from "next/image";
import js_logo from "../public/img/JavaScript.png";
import python_logo from "../public/img/Python.png";
import html_css_logo from "../public/img/html-css.png";
import vue_logo from "../public/img/Vuejs.png";
import react_logo from "../public/img/ReactJs.png";
import express_logo from "../public/img/Express.png";
import django_logo from "../public/img/django.png";
import postgres_logo from "../public/img/postgresql.png";
import mongo_logo from "../public/img/mongodb.png";
import linux_logo from "../public/img/ubuntu.png";

const Skills: React.FC = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skill_title}>
        <h1>Skills</h1>
      </div>
      <ul className={styles.skill_list}>

        <li>

          <div>
            <div className={styles.item_title}>
              <h2>Javascript</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={js_logo} alt="Javascript" width={25} height={25}></Image>
              </div>
            </div>
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
            <div className={styles.item_title}>
              <h2>Python</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={python_logo} alt="Python" width={25} height={25}></Image>
              </div>
            </div>
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
            <div className={styles.item_title}>
              <h2>Html/Css</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={html_css_logo} alt="Html/Css" width={50} height={50}></Image>
              </div>
            </div>
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
            <div className={styles.item_title}>
              <h2>VueJs</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={vue_logo} alt="VueJs" width={25} height={25}></Image>
              </div>
            </div>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_vue}></div>
              </div>
              <span>25%</span>
            </div>
          </div>

        </li>
        <li>

          <div>
            <div className={styles.item_title}>
              <h2>ReactJs</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={react_logo} alt="ReactJs" width={25} height={25}></Image>
              </div>
            </div>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_react}></div>
              </div>
              <span>20%</span>
            </div>
          </div>

        </li>
        <li>

          <div>
            <div className={styles.item_title}>
              <h2>Express</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={express_logo} alt="ExpresJs" width={25} height={25}></Image>
              </div>
            </div>
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
            <div className={styles.item_title}>
              <h2>Django</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={django_logo} alt="ExpresJs" width={35} height={35}></Image>
              </div>
            </div>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_django}></div>
              </div>
              <span>30%</span>
            </div>
          </div>

        </li>
        <li>

          <div>
            <div className={styles.item_title}>
              <h2>PostgreSQL</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={postgres_logo} alt="ExpresJs" width={45} height={45}></Image>
              </div>
            </div>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_sql}></div>
              </div>
              <span>35%</span>
            </div>
          </div>

        </li>
        <li>

          <div>
            <div className={styles.item_title}>
              <h2>MongoDB</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} className={styles.img_mongo} src={mongo_logo} alt="ExpresJs" width={35} height={35}></Image>
              </div>
            </div>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_nosql}></div>
              </div>
              <span>30%</span>
            </div>
          </div>

        </li>
        <li>

          <div>
            <div className={styles.item_title}>
              <h2>Linux</h2>
              <div className={styles.img}>
                <Image className={styles.skill_img} src={linux_logo} alt="ExpresJs" width={32} height={32}></Image>
              </div>
            </div>
            <div className={styles.skill_item}>
              <div className={styles.progress_bar}>
                <div className={styles.progress_linux}></div>
              </div>
              <span>40%</span>
            </div>
          </div>

        </li>
      </ul>
    </div>
  )
}

export default Skills;
