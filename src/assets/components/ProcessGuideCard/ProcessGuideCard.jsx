import React from 'react';
import styles from "@/assets/components/ProcessGuideCard/ProcessGuideCard.module.scss";
import InfoCard from "@/assets/components/InfoCard/InfoCard.jsx";
import training from "@/assets/image/InfoCard/training.png";
import parametrs from "@/assets/image/InfoCard/parametrs.png";
import food from "@/assets/image/InfoCard/food.png";

const ProcessGuideCard = () => {
  return (
    <div className={styles.ProcessGuideCard}>
      <h2 className={styles.ProcessGuideCard__title}>Как это работает?</h2>
      <div className={styles.ProcessGuideCard__cardsContainer}> 
        <InfoCard 
          title="Укажите ваши параметры" 
          description="Для точного расчета рекомендаций укажите следующие данные: рост, вес, пол и уровень физической активности."
 
          image={parametrs}
        />
        <InfoCard 
          title="Персональный план тренировок" 
          description="Наш алгоритм создаст для вас план тренировок и питания с расчетом КБЖУ, чтобы вы эффективно достигли своих целей."

          image={food}
        />
        <InfoCard 
          title="Отслеживайте прогресс" 
          description="Следите за прогрессом, оставайтесь мотивированными и достигайте целей с нашей поддержкой!"

          image={training}
        />
      </div>
      <button className={styles.ProcessGuideCard__btn}>Узнать больше</button>
    </div>
  );
};

export default ProcessGuideCard