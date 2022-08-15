import React from "react";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import twitterClone from "../public/img/twitter-clone.png";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div>
      <h1 className={styles.title_projects}>Projects</h1>
      <ul className={styles.project_list}>
        <li className={styles.project_item}>
          <div>
            <Image src={twitterClone} width={450} height={300}></Image>
          </div>
          <div className={styles.projects_body}>
            <div>
              <h3>Twitter Clone</h3>
            </div>
            <div className={styles.projects_description}>
              <p>
                This is a clone of tiwtter using Typescript to write the server using Expres and socket.io to make the chat and created a API to handle messages,
                in the frontend use the VueJs, for the database use PostgreSql to save information of Users in the server
                with typescript using a typeorm and in the other server use mongodb to save messages.
              </p>
              <Link  href="https://github.com/luisvalverd/twitter-clone" passHref>
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
