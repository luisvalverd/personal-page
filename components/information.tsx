import React from "react";
import Image from "next/image";
import profile from "../public/img/Profile.jpg";
import styles from "../styles/Photos.module.css";

const PersonalInformation: React.FC = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile_title}>
        <h1>Personal Information</h1>
      </div>
      <div className={styles.profile_information}>
        <div className={styles.profile_image}>
          <Image objectFit="cover" src={profile} alt="Developer" width={300} height={300}></Image>
        </div>
        <ul>
          <li>
            <b>Name: </b>
            <span className={styles.name}>Luis Valverde</span>
          </li>
          <li>
            <b>Age: </b>
            <span className={styles.age}>21 years</span>
          </li>
          <li>
            <b>Phone: </b>
            <span className={styles.phone}>+593 099 015 9128</span>
          </li>
          <li>
            <b>Email: </b>
            <span className={styles.email}>luis.valverde120@gmail.com</span>
          </li>
          <li className={styles.about_me}>
            <b>About Me: </b>
            <p>
              I am from Ecuador,
              I am a backend developer and i have some knowledge of frontend with ReactJs and VueJs.
              I am a self taught person, who is passionate about technology and learn how it works.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PersonalInformation;
