import React from "react";
import Image from "next/image";
import develop from "../public/img/developer.jpg";

const PersonalInformation: React.FC = () => {
  return (
    <div>
      <h1>Personal Information</h1>
      <div>
        <Image src={develop} alt="Developer" width={350} height={300}></Image>
        <p>Hello my name is Luis Valverde, I am 21 years old, I am from Ecuador, I am a backend developer and i have some knowledge of frontend with ReactJs and VueJs</p>
      </div>
    </div>
  )
}

export default PersonalInformation;
