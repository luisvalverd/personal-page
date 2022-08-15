import React from "react";
import styles from "../../styles/Icons.module.css";
import { IoChevronDownSharp} from "react-icons/io5"

const Arrow_Down: React.FC = () => {
  return (
    <div>
     <IoChevronDownSharp className={styles.arrow_down}></IoChevronDownSharp>
    </div>
  )
}

export default Arrow_Down;
