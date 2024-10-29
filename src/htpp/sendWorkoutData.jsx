import axios from "axios";

export const sendWorkoutData = async (data) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/get_workout_plan", {
      params: {
        gender: data.gender,
        weight: Number(data.weight),  
        height: Number(data.height),  
        age: Number(data.age),        
        goal: data.goal,
        days: data.days,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Ошибка: ${response.status}`);
    }
  } catch (error) {
    console.error("Ошибка при получении плана тренировок:", error);
    throw error;
  }
};
