import React from "react";
import styles from "./index.module.scss";
import animalImage from "../../assets/funny-klev-club-vh6c-p-samie-smeshnie-obezyani-v-kartinkakh-4.jpg";

const AnimalList = () => {
  return (
    <div className={styles.animalList}>
      {Array(50)
        .fill(null)
        .map((_, index) => (
          <div className={styles.amimalCard}>
            <img src={animalImage} alt="" />
            <p>Name</p>
            <p>Тут какое то описание животного</p>
          </div>
        ))}
    </div>
  );
};

export default AnimalList;
