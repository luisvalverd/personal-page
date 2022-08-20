import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import twitterClone from "../public/img/twitter-clone.png";
import typingApp from "../public/img/typing-app.png";
import agendaContactos from "../public/img/agenda-contactos.png";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h1 className={styles.title_projects}>Projects</h1>
      <ul className={styles.project_list}>
        <li className={styles.project_item}>

          <div className={styles.projects_image}>
            <Image src={twitterClone} alt="twitter clone" width={450} height={300}></Image>
          </div>
          <div className={styles.projects_body}>

            <div className={styles.title}>
              <h3>Twitter Clone</h3>
            </div>
            <div className={styles.projects_description}>
              <p>
                This is a clone of tiwtter using Typescript to write the server using Expres and socket.io to make the chat and created a API to handle messages,
                in the frontend use the VueJs and for the styles i used tailwindcss, for the database use PostgreSql to save information of Users in the server
                with typescript using a typeorm and in the other server use mongodb to save messages.
              </p>
              <Link href="https://github.com/luisvalverd/twitter-clone" passHref>
                <a className={styles.project_link} target="_blank">Github project</a>
              </Link>
            </div>

          </div>

        </li>
        <li className={styles.project_item}>

          <div className={styles.projects_image}>
            <Image src={typingApp} alt="typing app" width={450} height={300}></Image>
          </div>
          <div className={styles.projects_body}>

            <div className={styles.title}>
              <h3>Typing App</h3>
            </div>
            <div className={styles.projects_description}>
              <p >
                This is a project game of typing, when start the game this show a text where we will write the text,
                this application i used vanilla javascript to make this simple page
              </p>
              <Link href="https://github.com/luisvalverd/typing-game" passHref>
                <a className={styles.project_link} target="_blank">Github project</a>
              </Link>
            </div>

          </div>

        </li>
        <li className={styles.project_item}>

          <div className={styles.projects_image}>
            <Image src={agendaContactos} alt="agenda contactos" width={450} height={300}></Image>
          </div>
          <div className={styles.projects_body}>

            <div className={styles.title}>
              <h3>Agenda de Contactos</h3>
            </div>
            <div className={styles.projects_description}>
              <p>
                This is my first aplication that I made to learn backend technologys, this is a simple aplication to handle contacts,
                this apllication is created using NodeJs with Express and Database Postgres, in the styles i use Boostrap.
              </p>
              <Link href="https://github.com/luisvalverd/AgendaContactos" passHref>
                <a className={styles.project_link} target="_blank">Github project</a>
              </Link>
            </div>
          </div>

        </li>
      </ul>
    </div>
  )
}

export default Projects;
