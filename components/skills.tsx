import React, { useEffect, useRef, useState } from "react"
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
import anime from "animejs";

var Status = {
  javascript: "0%",
  python: "0%",
  html: "0%",
  vue: "0%",
  react: "0%",
  express: "0%",
  django: "0%",
  postgres: "0%",
  mongo: "0%",
  linux: "0%"
}

const barAnimationsStart = () => {
  anime({
    targets: "#js",
    width: "50%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#python",
    width: "45%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#html",
    width: "75%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#vue",
    width: "25%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#react",
    width: "20%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#express",
    width: "45%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#django",
    width: "30%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#postgres",
    width: "35%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#mongo",
    width: "30%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#linux",
    width: "40%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
}

const barAnimationsEnd = () => {
  anime({
    targets: "#js",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#python",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#html",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#vue",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#react",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#express",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#django",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#postgres",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#mongo",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
  anime({
    targets: "#linux",
    width: "0%",
    easing: "linear",
    direction: "alternative",
    loop: false,
  });
}




const Skills: React.FC = () => {
  const [statusJs, setStatusJs] = useState<any>();
  const [statusPython, setStatusPython] = useState<any>();
  const [statusHtml, setStatusHtml] = useState<any>();
  const [statusVue, setStatusVue] = useState<any>();
  const [statusReact, setStatusReact] = useState<any>();
  const [statusExpress, setStatusExpress] = useState<any>();
  const [statusDjango, setStatusDjango] = useState<any>();
  const [statusPostgres, setStatusPostgres] = useState<any>();
  const [statusMongo, setStatusMongo] = useState<any>();
  const [statusLinux, setStatusLinux] = useState<any>();

  // refs
  const skillRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const main: any = skillRef.current;
      let { y } = main.getBoundingClientRect();

      if (y <= 300) {
        anime({
          targets: Status,
          javascript: "50%",
          python: "45%",
          html: "75%",
          vue: "25%",
          react: "20%",
          express: "45%",
          django: "30%",
          postgres: "35%",
          mongo: "30%",
          linux: "40%",
          duration: 1000,
          round: 1,
          easing: "linear",
          update: () => {
            setStatusJs(Status.javascript);
            setStatusPython(Status.python);
            setStatusHtml(Status.html);
            setStatusVue(Status.vue);
            setStatusReact(Status.react);
            setStatusExpress(Status.express);
            setStatusDjango(Status.django);
            setStatusPostgres(Status.postgres);
            setStatusMongo(Status.mongo);
            setStatusLinux(Status.linux);
          }
        })
        barAnimationsStart();
      } else {
        anime({
          targets: Status,
          javascript: "0%",
          python: "0%",
          html: "0%",
          vue: "0%",
          react: "0%",
          express: "0%",
          django: "0%",
          postgres: "0%",
          mongo: "0%",
          linux: "0%",
          duration: 1000,
          round: 1,
          easing: "linear",
          update: () => {
            setStatusJs(Status.javascript);
            setStatusPython(Status.python);
            setStatusHtml(Status.html);
            setStatusVue(Status.vue);
            setStatusReact(Status.react);
            setStatusExpress(Status.express);
            setStatusDjango(Status.django);
            setStatusPostgres(Status.postgres);
            setStatusMongo(Status.mongo);
            setStatusLinux(Status.linux);
          }
        })
        barAnimationsEnd()
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  })


  return (
    <div ref={skillRef} className={styles.skill}>
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
                <div id="js" className={styles.progress_javascript}></div>
              </div>
              <span>{statusJs}</span>
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
                <div id="python" className={styles.progress_python}></div>
              </div>
              <span>{statusPython}</span>
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
                <div id="html" className={styles.progress_html}></div>
              </div>
              <span>{statusHtml}</span>
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
                <div id="vue" className={styles.progress_vue}></div>
              </div>
              <span>{statusVue}</span>
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
                <div id="react" className={styles.progress_react}></div>
              </div>
              <span>{statusReact}</span>
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
                <div id="express" className={styles.progress_express}></div>
              </div>
              <span>{statusExpress}</span>
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
                <div id="django" className={styles.progress_django}></div>
              </div>
              <span>{statusDjango}</span>
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
                <div id="postgres" className={styles.progress_sql}></div>
              </div>
              <span>{statusPostgres}</span>
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
                <div id="mongo" className={styles.progress_nosql}></div>
              </div>
              <span>{statusMongo}</span>
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
                <div id="linux" className={styles.progress_linux}></div>
              </div>
              <span>{statusLinux}</span>
            </div>
          </div>

        </li>
      </ul>
    </div>
  )
}

export default Skills;
