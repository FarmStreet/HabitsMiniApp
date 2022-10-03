import { useState } from 'react';

import {category_list, panel} from "./constants";

const useCalendarState = () => {
  const [calendarActiveHabit, setCalendarActiveHabit] = useState({category_id: 0, habit_id: 0});
  const [calendarActiveMonth, setCalendarActiveMonth] = useState(0);

  return { calendarActiveHabit, setCalendarActiveHabit, calendarActiveMonth, setCalendarActiveMonth }
};

const useCategoryHabitState = () => {
  const [categoryHabitList, setCategoryHabitList] = useState(category_list);

  const addToCategoryHabitList = (habit_name, category_id) => {
    let new_state = categoryHabitList;
    new_state[category_id].habitList.push(habit_name);
    return setCategoryHabitList(new_state);
  };

  return { categoryHabitList, addToCategoryHabitList }
};

const useDailyTaskState = () => {
  const [dailyHabitList, setDailyHabitList] = useState([]);
  const [dailyTaskList, setDailyTaskList] = useState([]);
  const [habitActiveCategoryList, setHabitActiveCategoryList] = useState([]);

  const addToDailyTaskList = (category_id, habit_id, date) => setDailyTaskList([...dailyTaskList, category_id + '-' + habit_id + '-' + date]);
  const addToDailyHabitList = (habit) => setDailyHabitList([...dailyHabitList, habit]);
  const addToHabitActiveCategoryList = (category_id) => setHabitActiveCategoryList([...habitActiveCategoryList, category_id]);
  const removeFromHabitActiveCategoryList = (category_id) => setHabitActiveCategoryList(habitActiveCategoryList.filter((item) =>  (item !== category_id)));
  const getHabbitIdList = (category_id) => {
    let result = [];
    for (let i in dailyHabitList) {
      if (dailyHabitList[i].category_id === category_id) result.push(dailyHabitList[i].habit_id);
    }
    return result;
  };

  return { dailyHabitList, addToDailyHabitList, getHabbitIdList, addToDailyTaskList, dailyTaskList, habitActiveCategoryList, addToHabitActiveCategoryList, removeFromHabitActiveCategoryList }
};

const useCreateHabitState = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeHabit, setActiveHabit] = useState(null);

  return { activeCategory, setActiveCategory, activeHabit, setActiveHabit }
};

const useNavState = () => {
  const [activePanel, setActivePanel] = useState(panel.home);

  const goToSetCategory = () => setActivePanel(panel.setCategory);
  const goToSetHabit = () => setActivePanel(panel.setHabit);
  const goToHome = () => setActivePanel(panel.home);
  const goToHabitInfo = () => setActivePanel(panel.habitInfo);

  return { activePanel, goToSetCategory, goToHome, goToSetHabit, goToHabitInfo };
};

export const useAppState = () => {
  const navState = useNavState();
  const createHabitState = useCreateHabitState();
  const habitListState = useDailyTaskState();
  const categoryHabitState = useCategoryHabitState();
  const calendarState = useCalendarState();

  return {
    ...navState,
    ...createHabitState,
    ...habitListState,
    ...categoryHabitState,
    ...calendarState,
  };
};